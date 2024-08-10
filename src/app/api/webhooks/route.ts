import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import User from "../../model/UserSchema";
import { connect } from "../../lib/connect";

export async function POST(req: Request) {
  // Present in the Clerk Dashboard -> webhook -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add the webhook secret from Clerk Dashboard");
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // Check for missing headers
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no Svix header found", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret code
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  // Verify the payload with the header
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-signature": svix_signature,
      "svix-timestamp": svix_timestamp,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook: ", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  // Handle the event type and payload
  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { email_addresses } = evt.data;

    if (email_addresses && email_addresses.length > 0) {
      const newUser = {
        clerkUserId: id,
        emailAddress: email_addresses[0].email_address,
      };

      try {
        await connect();
        await User.create(newUser);
        return new Response("User created successfully", { status: 201 });
      } catch (err) {
        console.error("Error saving user: ", err);
        return new Response("Error saving user", { status: 500 });
      }
    } else {
      return new Response("No email address found", { status: 400 });
    }
  }

  return new Response("Event not handled", { status: 200 });
}
