import dotenv from "dotenv";
import { Client } from "@notionhq/client";

dotenv.config();

/*
 * TODO: Ask if work items start on Mondays. If they do, instead of using
 *    created time, use the Monday. This makes it so services for clients added
 *    in the middle of week will refresh with all the others as well.
 * TODO: Instead of using created date, add hidden property on the work items
 *    table which is a date which is set to the same date for all work items
 *    being created for the same category.
 * TODO: Skip any services which are custom.
 */

const notion = new Client({ auth: process.env.NOTION_KEY });

function generateFrequencyDate(frequency) {
  let previous_date = new Date(2022, 0, 13);
  console.log(previous_date.toISOString().split("T")[0]);
  switch (frequency) {
    case "Weekly":
      // Handle case where last week is in December.
      if (previous_date.getDate() - 7 < 0 && previous_date.getMonth() - 1 < 0) {
        previous_date.setDate(previous_date.getDate() - 7);
        previous_date.setMonth(11);
      } else {
        previous_date.setDate(previous_date.getDate() - 7);
      }
      break;

    case "Bi-Weekly":
      if (previous_date.getDate() - 14 < 0 && previous_date.getMonth() - 1 < 0) {
        // Handle case where previous 2 weeks is in December.
        previous_date.setDate(previous_date.getDate() - 14);
        previous_date.setMonth(11);
      } else {
        previous_date.setDate(previous_date.getDate() - 14);
      }
      break;

    case "Monthly":
      if (previous_date.getMonth() - 1 < 0) {
        // Handle case where last month is in December.
        previous_date.setFullYear(previous_date.getFullYear() - 1, 11);
      } else {
        previous_date.setMonth(previous_date.getMonth() - 1);
      }
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
            property: "Created",
            created_time: {
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
async function createWorkItem(title, clientId, serviceId, database) {
  try {
    const response = await notion.pages.create({
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
      },
    });
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
  // serviceMap[service.properties["Frequency"].select.id] = service.properties["Frequency"].select.name;
}

console.log(serviceMap);

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

  // console.log(clientServices);

  for (let serviceId of clientServices) {
    // Calculate date for frequency.
    let freq = serviceMap[serviceId.id].freq_name;
    console.log(freq);

    let previous_date = generateFrequencyDate(freq);
    console.log(previous_date);

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

    await createWorkItem(clientName, clientId, serviceId, process.env.WORK_ITEM_DATABASE_ID);
  }
}
