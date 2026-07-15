import { NextResponse } from "next/server";

const PROJECTS = [
  { name: "Ceylon Wild Escapes", tech: "Next.js, Tailwind CSS", category: "Tourism" },
  { name: "Shey Collective", tech: "Next.js, Sanity CMS, Tailwind", category: "Fashion E-Commerce" },
  { name: "GOAT Cult", tech: "MERN Stack, Stripe", category: "Streetwear E-Commerce" },
  { name: "Rubion Agency Website", tech: "Next.js, Framer Motion, Tailwind", category: "Creative Agency" },
  { name: "CommuteIQ", tech: "Next.js, Supabase, Recharts", category: "Analytics Dashboard" }
];

export async function POST(request) {
  try {
    const body = await request.json();
    const { method, params, id } = body;

    if (method === "tools/list") {
      return NextResponse.json({
        jsonrpc: "2.0",
        id,
        result: {
          tools: [
            {
              name: "list_projects",
              description: "List all portfolio projects built by Binuk Hewage.",
              inputSchema: {
                type: "object",
                properties: {}
              }
            },
            {
              name: "submit_contact",
              description: "Send an inquiry or message to Binuk Hewage.",
              inputSchema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  email: { type: "string" },
                  message: { type: "string" }
                },
                required: ["name", "email", "message"]
              }
            }
          ]
        }
      });
    }

    if (method === "tools/call") {
      const { name: toolName, arguments: args } = params || {};
      if (toolName === "list_projects") {
        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          result: {
            content: [
              {
                type: "text",
                text: JSON.stringify(PROJECTS, null, 2)
              }
            ]
          }
        });
      }

      if (toolName === "submit_contact") {
        const { name, email, message } = args || {};
        if (!name || !email || !message) {
          return NextResponse.json({
            jsonrpc: "2.0",
            id,
            error: {
              code: -32602,
              message: "Missing name, email, or message parameters."
            }
          });
        }
        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          result: {
            content: [
              {
                type: "text",
                text: `Success! Message from ${name} (${email}) has been submitted.`
              }
            ]
          }
        });
      }

      return NextResponse.json({
        jsonrpc: "2.0",
        id,
        error: {
          code: -32601,
          message: `Tool ${toolName} not found.`
        }
      });
    }

    return NextResponse.json({
      jsonrpc: "2.0",
      id,
      error: {
        code: -32601,
        message: `Method ${method} not supported.`
      }
    });

  } catch (err) {
    return NextResponse.json({
      jsonrpc: "2.0",
      error: {
        code: -32700,
        message: "Parse error"
      }
    });
  }
}
