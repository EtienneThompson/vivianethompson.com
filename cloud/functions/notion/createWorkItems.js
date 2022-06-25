import dotenv from "dotenv";
import { Client } from "@notionhq/client";

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });

function getThisWeekMonday() {
  let monday = new Date();
  let adder = [-6, 0, -1, -2, -3, -4, -5];
  // This gives a number in the range (0 - 6) where 1 in Sunday.
  let currentDay = monday.getDay();
  // Use the current day to find out how much to offset the current date by to
  // get this week's monday.
  monday.setDate(monday.getDate() + adder[currentDay]);
  return monday.toISOString().split("T")[0];
}

function generatePreviousFrequencyDate(frequency, date) {
  let previous_date;
  if (date) {
    previous_date = new Date(date);
  } else {
    previous_date = new Date();
  }
  switch (frequency) {
    case "Weekly":
      previous_date.setDate(previous_date.getDate() - 7);
      break;

    case "Bi-Weekly":
      previous_date.setDate(previous_date.getDate() - 14);
      break;

    case "Monthly":
      previous_date.setMonth(previous_date.getMonth() - 1);
      break;

    case "Annually":
      previous_date.setFullYear(previous_date.getFullYear() - 1);
      break;

    default:
      console.log("default");
      break;
  }

  return previous_date.toISOString().split("T")[0];
}

function generateFutureFrequencyDate(frequency, date) {
  let previous_date;
  if (date) {
    previous_date = new Date(date);
  } else {
    previous_date = new Date();
  }
  switch (frequency) {
    case "Weekly":
      previous_date.setDate(previous_date.getDate() + 7);
      break;

    case "Bi-Weekly":
      previous_date.setDate(previous_date.getDate() + 14);
      break;

    case "Monthly":
      previous_date.setMonth(previous_date.getMonth() + 1);
      break;

    case "Annually":
      previous_date.setFullYear(previous_date.getFullYear() + 1);
      break;

    default:
      console.log("default");
      break;
  }

  return previous_date.toISOString().split("T")[0];
}

// Get a list of pages of clients.
async function getAllDatabaseEntries(database_id) {
  try {
    const response = await notion.databases.query({
      database_id: database_id,
    });

    return response.results;
  } catch (error) {
    console.log(error.body);
  }
}

async function getExistingWorkItem(database_id, clientId, serviceId, query_date) {
  try {
    const response = await notion.databases.query({
      database_id: database_id,
      filter: {
        and: [
          {
            property: "Period Date",
            date: {
              on_or_after: query_date,
            },
          },
          {
            property: "Client",
            relation: {
              contains: clientId,
            },
          },
          {
            property: "Service",
            relation: {
              contains: serviceId,
            },
          },
        ],
      },
    });
    return response.results;
  } catch (error) {
    console.log(error.body);
    return [];
  }
}

// Create a work item with a title and two relation properties set.
async function createWorkItem(title, monday, clientId, serviceId, startTime, database) {
  try {
    let requestBody = {
      parent: { database_id: database },
      properties: {
        title: {
          title: [
            {
              text: {
                content: title,
              },
            },
          ],
        },
        Client: {
          relation: [
            {
              id: clientId,
            },
          ],
        },
        Service: {
          relation: [serviceId],
        },
        "Period Date": {
          date: {
            start: monday,
          },
        },
      },
    };
    // If a time to set was specified, add it to the request.
    if (startTime) {
      requestBody.properties.Date = {
        date: {
          start: startTime,
        },
      };
    }
    const response = await notion.pages.create(requestBody);
  } catch (error) {
    console.log(error.body);
  }
}

let clients = await getAllDatabaseEntries(process.env.CLIENT_DATABASE_ID);

let services = await getAllDatabaseEntries(process.env.SERVICE_DATABASE_ID);

let serviceMap = {};

for (let service of services) {
  serviceMap[service.id] = {
    service_name: service.properties["Name"].title[0].plain_text,
    freq_id: service.properties["Frequency"].select.id,
    freq_name: service.properties["Frequency"].select.name,
  };
}

// Create the needed work items.
for (let client of clients) {
  let clientId = client.id;
  let clientName;
  let clientServices = [];
  for (let key of Object.keys(client.properties)) {
    if (key === "Name") {
      clientName = client.properties[key].title[0].plain_text;
    } else if (key === "Services") {
      clientServices = client.properties[key].relation;
    }
  }

  for (let serviceId of clientServices) {
    // Calculate date for frequency.
    let freq = serviceMap[serviceId.id].freq_name;

    if (freq === "Custom") {
      console.log("Skipping custom service");
      continue;
    }

    // Instead, get the date for the current week's monday, and check if an
    // item exists within the past frequency of that monday.
    let monday = getThisWeekMonday();
    let previous_date = generatePreviousFrequencyDate(freq, monday);

    // Check if a ticket that was created within the past frequency amount of
    // time exists. If it does, skip. Otherwise, create the work item.
    // Ignore any custom services.
    let existingItems = await getExistingWorkItem(
      process.env.WORK_ITEM_DATABASE_ID,
      clientId,
      serviceId.id,
      previous_date
    );
    if (existingItems.length > 0) {
      continue;
    }

    // Get the date that was assigned to the previous tickets.
    let filter_date = generatePreviousFrequencyDate(freq, previous_date);
    let lastItem = await getExistingWorkItem(process.env.WORK_ITEM_DATABASE_ID, clientId, serviceId.id, filter_date);
    let newDate = "";
    // If there was a date assigned, then generate when the next one should be.
    if (lastItem.length > 0 && lastItem[0].properties["Date"].date) {
      let lastDate = lastItem[0].properties["Date"].date.start;
      console.log(lastDate);
      newDate = generateFutureFrequencyDate(freq, lastDate);
      console.log(newDate);
    }

    // Create the new work item.
    await createWorkItem(clientName, monday, clientId, serviceId, newDate, process.env.WORK_ITEM_DATABASE_ID);
  }
}
