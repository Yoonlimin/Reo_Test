// src/pages/Support.jsx
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// Steps
import SetUp1 from "./support/steps/SetUp1";
import SetUp2 from "./support/steps/SetUp2";
import SetUp3 from "./support/steps/SetUp3";
import SetUp4 from "./support/steps/SetUp4";
import SetUp5 from "./support/steps/SetUp5";
import SetUp6 from "./support/steps/SetUp6";
import SetUp7 from "./support/steps/SetUp7";
import SetUp8 from "./support/steps/SetUp8";
import SetUp9 from "./support/steps/SetUp9";
import SetUp10 from "./support/steps/SetUp10";

export default function Support() {
  const navigate = useNavigate();                // ✅ needed for Finish → Home
  const [searchParams, setSearchParams] = useSearchParams();

  // URL -> state
  const initialMode = useMemo(() => {
    const m = (searchParams.get("mode") || "").toLowerCase();
    return m === "personal" || m === "teams" ? m : null;
  }, [searchParams]);

  const [mode, setMode] = useState(initialMode); // "personal" | "teams" | null
  const [step, setStep] = useState(1);           // 1..n

  // Keep URL in sync with selection
  useEffect(() => {
    const current = searchParams.get("mode");
    const target = mode ?? "";
    if ((current || "") !== target) {
      const sp = new URLSearchParams(searchParams);
      if (mode) sp.set("mode", mode);
      else sp.delete("mode");
      setSearchParams(sp, { replace: true });
    }
  }, [mode, searchParams, setSearchParams]);

  // ✅ total steps per track
  const totalSteps = mode === "personal" ? 10 : 12; // adjust teams later if needed

  const next = () => setStep((s) => Math.min(totalSteps, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  // Header (desktop)
  const Header = () => (
    <div className="mb-4 flex items-center justify-between">
      <div className="text-[#0b2447]">
        <h1 className="text-xl font-semibold">Support & Guides</h1>
        <p className="text-sm opacity-70">
          {mode ? (
            <>
              <span className="font-medium capitalize">{mode}</span> guide — Step {step} of {totalSteps}
            </>
          ) : (
            <>Choose <span className="font-medium">Personal</span> or <span className="font-medium">Teams</span> to begin</>
          )}
        </p>
      </div>

      <div className="hidden sm:flex items-center gap-2">
        <button
          onClick={prev}
          disabled={step === 1}
          className="px-3 py-1.5 rounded-lg border bg-white hover:bg-[#f2f7fd] disabled:opacity-50"
        >
          Previous
        </button>

        {/* ✅ Show Next until last step; then show Finish → Home */}
        {step < totalSteps ? (
          <button
            onClick={next}
            disabled={!mode && step === 1}
            className="px-3 py-1.5 rounded-lg bg-[#0b2447] text-white hover:opacity-90 disabled:opacity-50"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => navigate("/home")}
            className="px-3 py-1.5 rounded-lg bg-[#3178f6] text-white hover:bg-[#2068ea]"
          >
            Finish →
          </button>
        )}
      </div>
    </div>
  );

  // Footer nav (mobile)
  const FooterNav = () => (
    <div className="mt-6 flex sm:hidden items-center justify-between">
      <button
        onClick={prev}
        disabled={step === 1}
        className="px-3 py-2 rounded-lg border bg-white hover:bg-[#f2f7fd] disabled:opacity-50"
      >
        Previous
      </button>

      {step < totalSteps ? (
        <button
          onClick={next}
          disabled={!mode && step === 1}
          className="px-3 py-2 rounded-lg bg-[#0b2447] text-white hover:opacity-90 disabled:opacity-50"
        >
          Next
        </button>
      ) : (
        <button
          onClick={() => navigate("/home")}
          className="px-3 py-2 rounded-lg bg-[#3178f6] text-white hover:bg-[#2068ea]"
        >
          Finish →
        </button>
      )}
    </div>
  );

  const NeedModeCard = () => (
    <div className="rounded-xl border bg-white/70 p-6 text-center">
      <p className="text-[#0b2447]">
        Please choose <span className="font-semibold">Personal</span> or{" "}
        <span className="font-semibold">Teams</span> in Step 1 first.
      </p>
      <button
        onClick={() => setStep(1)}
        className="mt-4 px-4 py-2 rounded-lg bg-[#0b2447] text-white hover:opacity-90"
      >
        Go to Step 1
      </button>
    </div>
  );

  return (
    <div className="min-h-screen font-inter bg-gradient-to-b from-[#F3F9FE] to-[#C5DBEC]">
      <Navbar />
      <div className="flex pt-24">
        <Sidebar />

        <div className="flex-1 px-6 pt-4">
          <div className="max-w-5xl mx-auto rounded-2xl bg-white/80 border border-white/80 shadow-sm p-6">
            <Header />

            {/* Steps */}
            {step === 1 && (
              <SetUp1
                value={mode}
                onChoose={(m) => {
                  setMode(m);
                  setStep(2); // auto-advance
                }}
              />
            )}
            {step === 2 && <SetUp2 onPrev={() => setStep(1)} onNext={() => setStep(3)} />}
            {step === 3 && <SetUp3 mode={mode} onPrev={prev} onNext={next} />}
            {step === 4 && <SetUp4 mode={mode} onPrev={prev} onNext={next} />}
            {step === 5 && <SetUp5 mode={mode} onPrev={prev} onNext={next} />}
            {step === 6 && <SetUp6 mode={mode} onPrev={prev} onNext={next} />}
            {step === 7 && <SetUp7 mode={mode} onPrev={prev} onNext={next} />}
            {step === 8 && <SetUp8 mode={mode} onPrev={prev} onNext={next} />}
            {step === 9 && <SetUp9 mode={mode} onPrev={prev} onNext={next} />}

            {/* Last step (Personal) */}
            {step === 10 && (
              <SetUp10
                onPrev={prev}
                onNext={() => navigate("/home")}   // ✅ now works
              />
            )}

            {step > 1 && !mode && <NeedModeCard />}

            <FooterNav />
          </div>
        </div>
      </div>
    </div>
  );
}