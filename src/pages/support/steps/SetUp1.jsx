import { User, Users, Info } from "lucide-react";

/**
 * SetUp1 — pick guideline mode (personal | team)
 *
 * Props:
 *  - value?: "personal" | "team"   // current selection (optional)
 *  - onChoose: (mode: "personal" | "team") => void
 *  - onNext?: () => void           // optional: advance to next step after choosing
 */
export default function SetUp1({ value, onChoose, onNext }) {
  const choose = (mode) => {
    onChoose?.(mode);
    onNext?.(); // if you want to auto-advance, pass onNext; otherwise omit it
  };

  return (
    <div className="w-full">
      {/* header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#0b2447]">
          Who is this guide for?
        </h1>
        <p className="text-slate-600 mt-1">
          Pick a path to see step-by-step instructions.
        </p>
      </div>

      {/* choices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {/* Personal */}
        <button
          type="button"
          onClick={() => choose("personal")}
          className={[
            "group relative w-full rounded-2xl border p-5 text-left transition shadow-sm",
            value === "personal"
              ? "border-[#1F2937] ring-2 ring-[#1F2937]/60 bg-white"
              : "border-slate-200 hover:border-slate-300 bg-white/90 hover:bg-white",
          ].join(" ")}
        >
          <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-xl w-11 h-11 flex items-center justify-center bg-[#1F2937] text-white">
              <User className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-[#0b2447]">
                Personal
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Create your own digital business card and start sharing instantly.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-500 inline-flex items-center gap-1">
              <Info className="w-4 h-4" /> You can customize templates later.
            </span>
            <span className="text-sm font-medium text-[#1F2937] opacity-90 group-hover:opacity-100">
              Choose →
            </span>
          </div>
        </button>

        {/* Team */}
        <button
          type="button"
          onClick={() => choose("team")}
          className={[
            "group relative w-full rounded-2xl border p-5 text-left transition shadow-sm",
            value === "team"
              ? "border-[#1F2937] ring-2 ring-[#1F2937]/60 bg-white"
              : "border-slate-200 hover:border-slate-300 bg-white/90 hover:bg-white",
          ].join(" ")}
        >
          <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-xl w-11 h-11 flex items-center justify-center bg-[#1F2937] text-white">
              <Users className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-[#0b2447]">
                My Team
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Set up a network of cards for your team with shared branding.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-500 inline-flex items-center gap-1">
              <Info className="w-4 h-4" /> Members can personalize later.
            </span>
            <span className="text-sm font-medium text-[#1F2937] opacity-90 group-hover:opacity-100">
              Choose →
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}