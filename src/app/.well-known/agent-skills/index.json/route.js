import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
    skills: [
      {
        name: "contact-agent",
        type: "skill-md",
        description: "Submit a message or inquiry to Binuk Hewage.",
        url: "https://binukhewage.dev/.well-known/agent-skills/contact-agent/SKILL.md",
        digest: "sha256:755137230d2019eb25051efca93077d4ed71cdca5069f03d5af343553595450c"
      }
    ]
  };

  return NextResponse.json(data);
}
