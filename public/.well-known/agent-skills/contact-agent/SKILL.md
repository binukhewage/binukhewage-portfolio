# Contact Agent Skill

This skill allows agents to automatically send contact messages and inquiries to Binuk Hewage.

## Requirements

- Send a POST request to `https://binukhewage.dev/api/contact` with the following JSON payload:
  ```json
  {
    "name": "Agent Name",
    "email": "agent@example.com",
    "message": "Message content from agent"
  }
  ```
- Receive a successful JSON response with a confirmation message.
