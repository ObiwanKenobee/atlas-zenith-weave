import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const signupSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z
    .string()
    .trim()
    .max(500, "Message must be 500 characters or fewer")
    .optional()
    .or(z.literal("").transform(() => undefined)),
  source: z.string().trim().max(50).optional(),
});

export const submitSignup = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => signupSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("signups").insert({
      name: data.name,
      email: data.email,
      message: data.message ?? null,
      source: data.source ?? "footer",
    });

    if (error) {
      console.error("submitSignup insert failed:", error);
      throw new Error("We couldn't save your signup. Please try again.");
    }

    return { ok: true as const };
  });
