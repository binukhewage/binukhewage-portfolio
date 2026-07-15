import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    issuer: "https://binukhewage.dev",
    authorization_endpoint: "https://binukhewage.dev/oauth/authorize",
    token_endpoint: "https://binukhewage.dev/api/oauth/token",
    jwks_uri: "https://binukhewage.dev/oauth/jwks",
    response_types_supported: ["code", "token"],
    grant_types_supported: ["authorization_code", "client_credentials"],
    token_endpoint_auth_methods_supported: ["client_secret_post", "client_secret_basic"],
    agent_auth: {
      skill: "https://binukhewage.dev/.well-known/agent-skills/contact-agent/SKILL.md",
      register_uri: "https://binukhewage.dev/api/agent/register",
      identity_types_supported: ["anonymous", "identity_assertion"],
      identity_assertion: {
        assertion_types_supported: ["verified_email"]
      },
      anonymous: {
        credential_types_supported: ["api_key"]
      },
      claim_uri: "https://binukhewage.dev/api/agent/claim"
    }
  };

  return NextResponse.json(data);
}
