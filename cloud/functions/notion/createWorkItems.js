import dotenv from "dotenv";
import { Client } from "@notionhq/client";

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });

// Get a list of pages of clients.
async function getAllDatabaseEntries() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.CLIENT_DATABASE_ID,
    });

    return response.results;
  } catch (error) {
    console.log(error.body);
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

let pages = await getAllDatabaseEntries();

// Create the needed work items.
for (let page of pages) {
  let clientId = page.id;
  let clientName;
  let clientServices = [];
  for (let key of Object.keys(page.properties)) {
    if (key === "Name") {
      clientName = page.properties[key].title[0].plain_text;
    } else if (key === "Services") {
      clientServices = page.properties[key].relation;
    }
  }

  for (let serviceId of clientServices) {
    await createWorkItem(clientName, clientId, serviceId, process.env.WORK_ITEM_DATABASE_ID);
  }
}
