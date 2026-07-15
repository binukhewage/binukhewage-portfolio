import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    resource: "https://binukhewage.dev/api",
    authorization_servers: ["https://binukhewage.dev"],
    scopes_supported: ["read:projects", "write:contact"],
    bearer_methods_supported: ["header"]
  };

  return NextResponse.json(data);
}
