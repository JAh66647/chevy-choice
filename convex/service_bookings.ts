// Triggering a fresh analysis
import { mutation, action } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const createBooking = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    serviceType: v.string(),
    message: v.optional(v.string()),
  },
  returns: v.id("bookings"),
  handler: async (ctx, args) => {
    const bookingId = await ctx.db.insert("bookings", {
      ...args,
      status: "pending",
    });

    // Schedule the email sending action
    await ctx.scheduler.runAfter(0, (internal as any).service_bookings.sendBookingEmail, {
      ...args,
    });

    return bookingId;
  },
});

export const sendBookingEmail = action({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    serviceType: v.string(),
    message: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.log("RESEND_API_KEY not set. Mocking email send.");
      console.log("To: hotytea.tt@gmail.com");
      console.log("From: website@chevyschoice.com");
      console.log("Subject: New Booking Request from " + args.name);
      console.log("Body:", args);
      return null;
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    try {
      await resend.emails.send({
        from: "Chevys Choice <onboarding@resend.dev>",
        to: ["hotytea.tt@gmail.com", "jahiemdowner347@gmail.com"],
        subject: `New Booking Request: ${args.serviceType} for ${args.name}`,
        html: `
          <h1>New Booking Request</h1>
          <p><strong>Name:</strong> ${args.name}</p>
          <p><strong>Email:</strong> ${args.email}</p>
          <p><strong>Phone:</strong> ${args.phone}</p>
          <p><strong>Service Type:</strong> ${args.serviceType}</p>
          <p><strong>Message:</strong> ${args.message || "No message provided"}</p>
        `,
      });
    } catch (error) {
      console.error("Failed to send email:", error);
    }

    return null;
  },
});
