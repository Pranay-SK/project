import { serve } from "inngest/next";
import { inngest } from "@/inngest/client"; // Use one consistent path for the client

// Import all the functions you intend to use
import { 
  syncUserCreation, 
  syncUserUpdation, 
  syncUserDeletion 
} from "@/inngest/functions";

// Create an API that serves all your functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ],
});