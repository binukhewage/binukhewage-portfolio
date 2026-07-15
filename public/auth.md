# auth.md

Welcome! This is the authentication and agent registration discovery page for Binuk Hewage's Portfolio APIs.

## Agent Registration Flow

To interact with protected API endpoints, agents can register programmatically using our OAuth Authorization Server:

- **Registration Endpoint**: `https://binukhewage.dev/api/agent/register`
- **Claim Endpoint**: `https://binukhewage.dev/api/agent/claim`

### Supported Registration Methods

1. **Anonymous Registration**
   - Identity Type: `anonymous`
   - Credential Type: `api_key`

2. **Verified Email**
   - Identity Type: `identity_assertion`
   - Assertion Type: `verified_email`

## Contact & Information

For more details on the portfolio, please visit [binukhewage.dev](https://binukhewage.dev).
