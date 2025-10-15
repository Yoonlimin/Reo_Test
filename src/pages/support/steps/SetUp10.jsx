// src/pages/support/steps/SetUp10.jsx
import React from "react";

export default function SetUp10({ onPrev, onNext }) {
  return (
    <div className="rounded-2xl bg-white/90 border border-[#d6e6fb] shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#e7f1ff]">
        <h2 className="text-xl md:text-2xl font-semibold text-[#0b2447]">
          You’re all set with Reo 🎉
        </h2>
        <p className="text-sm md:text-[15px] text-slate-600 mt-1">
          You’ve learned how to create, customize, and share your personal Reo card.
          If you need help or want to reach us directly, use any of the contacts below.
        </p>
      </div>

      {/* Content */}
      <div className="px-5 md:px-6 py-6 max-h-[70vh] overflow-y-auto">
        <div className="rounded-2xl border border-[#e7f1ff] bg-white p-5">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447]">
            Contact Reo Support
          </h3>

          <div className="mt-4 space-y-4">
            {/* Email */}
            <a
              href="mailto:reobusinesscard@gmail.com"
              className="flex items-center justify-between rounded-xl border border-[#d6e6fb] bg-[#f7fbff] px-4 py-3 hover:bg-[#f2f7fd] transition"
            >
              <div>
                <div className="text-[13px] uppercase tracking-wide text-slate-500">Email</div>
                <div className="text-[#0b2447] font-semibold">reobusinesscard@gmail.com</div>
              </div>
              <span className="text-xs px-2 py-1 rounded-md bg-white border border-[#d6e6fb]">
                Mail us
              </span>
            </a>

            {/* Phone 1 */}
            <a
              href="tel:+66661489477"
              className="flex items-center justify-between rounded-xl border border-[#d6e6fb] bg-[#f7fbff] px-4 py-3 hover:bg-[#f2f7fd] transition"
            >
              <div>
                <div className="text-[13px] uppercase tracking-wide text-slate-500">Phone</div>
                <div className="text-[#0b2447] font-semibold">066-148-9477</div>
              </div>
              <span className="text-xs px-2 py-1 rounded-md bg-white border border-[#d6e6fb]">
                Call
              </span>
            </a>

            {/* Phone 2 */}
            <a
              href="tel:+66632246177"
              className="flex items-center justify-between rounded-xl border border-[#d6e6fb] bg-[#f7fbff] px-4 py-3 hover:bg-[#f2f7fd] transition"
            >
              <div>
                <div className="text-[13px] uppercase tracking-wide text-slate-500">Phone</div>
                <div className="text-[#0b2447] font-semibold">063-224-6177</div>
              </div>
              <span className="text-xs px-2 py-1 rounded-md bg-white border border-[#d6e6fb]">
                Call
              </span>
            </a>
          </div>

          <p className="text-sm md:text-[15px] text-slate-600 mt-5">
            Prefer messaging? Email us anytime — we usually reply quickly. 💬
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:reobusinesscard@gmail.com"
              className="text-center rounded-lg bg-[#3178f6] hover:bg-[#2068ea] text-white font-semibold px-4 py-3 shadow-sm"
            >
              Email Support
            </a>
            <a
              href="tel:+66661489477"
              className="text-center rounded-lg border border-[#cfe3fb] bg-white hover:bg-[#f2f7fd] text-[#0b2447] font-semibold px-4 py-3"
            >
              Call Support
            </a>
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="px-5 md:px-6 py-4 border-t border-[#e7f1ff] flex items-center justify-between bg-white/80 rounded-b-2xl">
        <button
          onClick={onPrev}
          className="px-4 py-2 rounded-lg border border-[#cfe3fb] bg-white hover:bg-[#f2f7fd] text-[#0b2447] font-medium"
        >
          ← Previous
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 rounded-lg bg-[#3178f6] hover:bg-[#2068ea] text-white font-semibold shadow-sm"
        >
          Finish →
        </button>
      </div>
    </div>
  );
}