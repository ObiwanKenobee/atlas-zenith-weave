import { useState } from "react";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { submitSignup } from "@/lib/signups.functions";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255, "Email is too long"),
  message: z
    .string()
    .trim()
    .max(500, "Message must be 500 characters or fewer")
    .optional(),
});

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function SignupForm({ source = "footer" }: { source?: string }) {
  const submit = useServerFn(submitSignup);
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});

  const validateField = (name: keyof FieldErrors, value: string) => {
    const fieldSchema = (schema.shape as Record<string, z.ZodTypeAny>)[name];
    const result = fieldSchema.safeParse(value);
    setErrors((prev) => ({
      ...prev,
      [name]: result.success ? undefined : result.error.issues[0]?.message,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors | undefined;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setFormError(null);
      setStatus("error");
      return;
    }

    setErrors({});
    setFormError(null);
    setStatus("submitting");

    try {
      await submit({ data: { ...parsed.data, source } });
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const fieldClass = (hasError?: string) =>
    `rounded-xl bg-white/5 border px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none ${
      hasError
        ? "border-red-400/60 focus:border-red-300"
        : "border-white/10 focus:border-emerald-300/50"
    }`;

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-md space-y-3">
      <h4 className="text-lg font-semibold text-white">Join the early network</h4>
      <p className="text-sm text-zinc-400">
        Get updates on Atlas Sanctum infrastructure, mesh deployments, and research.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <input
            name="name"
            required
            maxLength={100}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "signup-name-error" : undefined}
            onBlur={(e) => validateField("name", e.currentTarget.value)}
            className={fieldClass(errors.name)}
          />
          {errors.name && (
            <p id="signup-name-error" className="text-xs text-red-300">
              {errors.name}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <input
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="Email address"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "signup-email-error" : undefined}
            onBlur={(e) => validateField("email", e.currentTarget.value)}
            className={fieldClass(errors.email)}
          />
          {errors.email && (
            <p id="signup-email-error" className="text-xs text-red-300">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <textarea
          name="message"
          maxLength={500}
          rows={2}
          placeholder="What draws you to Atlas Sanctum? (optional)"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "signup-message-error" : undefined}
          onBlur={(e) => validateField("message", e.currentTarget.value)}
          className={`w-full ${fieldClass(errors.message)}`}
        />
        {errors.message && (
          <p id="signup-message-error" className="text-xs text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-5 py-3 rounded-xl bg-emerald-400 text-black font-semibold text-sm hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending…" : "Request Updates"}
      </button>

      {status === "ok" && (
        <p className="text-sm text-emerald-300" role="status">
          Thanks — you're on the list. We'll be in touch.
        </p>
      )}
      {status === "error" && formError && (
        <p className="text-sm text-red-300" role="alert">
          {formError}
        </p>
      )}
    </form>
  );
}
