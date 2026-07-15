import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    linkset: [
      {
        anchor: "https://binukhewage.dev/api",
        "service-desc": [
          {
            href: "https://binukhewage.dev/api/openapi.json",
            type: "application/openapi+json;version=3.0"
          }
        ],
        "service-doc": [
          {
            href: "https://binukhewage.dev/docs/api",
            type: "text/html"
          }
        ],
        status: [
          {
            href: "https://binukhewage.dev/api/status",
            type: "application/json"
          }
        ]
      }
    ]
  };

  return new NextResponse(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
    },
  });
}
