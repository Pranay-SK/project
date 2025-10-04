// In app/api/inngest/route.js

import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { 
  syncUserCreation, 
  syncUserUpdation, 
  syncUserDeletion 
} from "@/inngest/functions";

// --- ADD THIS LINE FOR DEBUGGING ---
//console.log("Signing key from Vercel env:", process.env.INNGEST_SIGNING_KEY);
// ------------------------------------

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ],
});