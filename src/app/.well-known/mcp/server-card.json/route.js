import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    serverInfo: {
      name: "binukhewage-portfolio-mcp",
      version: "1.0.0"
    },
    endpoint: "/api/mcp",
    capabilities: {
      tools: {
        list_projects: {
          description: "List the projects in Binuk Hewage's portfolio"
        },
        submit_contact: {
          description: "Submit a contact message to Binuk Hewage"
        }
      },
      resources: {},
      prompts: {}
    }
  };

  return NextResponse.json(data);
}
