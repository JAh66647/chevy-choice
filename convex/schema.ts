import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  bookings: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    serviceType: v.string(),
    message: v.optional(v.string()),
    status: v.string(), // "pending", "confirmed", etc.
  }),
});
