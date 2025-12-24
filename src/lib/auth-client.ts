import { createAuthClient } from "better-auth/react";
import { polarClient } from "@polar-sh/better-auth";

// All Polar plugins, etc. should be attached to BetterAuth server
export const authClient = createAuthClient({
  plugins: [polarClient()],
});
