import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().max(500).optional(),
});

export function SignupForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid input");
      setStatus("error");
      return;
    }
    setError(null);
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md space-y-3">
      <h4 className="text-lg font-semibold text-white">Join the early network</h4>
      <p className="text-sm text-zinc-400">
        Get updates on Atlas Sanctum infrastructure, mesh deployments, and research.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          name="name"
          required
          maxLength={100}
          placeholder="Your name"
          className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-300/50"
        />
        <input
          name="email"
          type="email"
          required
          maxLength={255}
          placeholder="Email address"
          className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-300/50"
        />
      </div>
      <textarea
        name="message"
        maxLength={500}
        rows={2}
        placeholder="What draws you to Atlas Sanctum? (optional)"
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-300/50"
      />
      <button
        type="submit"
        className="px-5 py-3 rounded-xl bg-emerald-400 text-black font-semibold text-sm hover:scale-[1.02] transition-transform"
      >
        Request Updates
      </button>
      {status === "ok" && (
        <p className="text-sm text-emerald-300">
          Thanks — you're on the list. We'll be in touch.
        </p>
      )}
      {status === "error" && error && (
        <p className="text-sm text-red-300">{error}</p>
      )}
    </form>
  );
}
