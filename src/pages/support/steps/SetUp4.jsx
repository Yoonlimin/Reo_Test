// src/pages/support/steps/SetUp4.jsx
import React from "react";

// OPTION A (recommended): keep screenshots under src/assets/support/
import Pic1 from "../../../assets/support/SetUp8.png";   // Primary text color
import Pic2 from "../../../assets/support/SetUp9.png";   // Background color
import Pic3 from "../../../assets/support/SetUp10.png";  // Template selection



export default function SetUp4({ onPrev, onNext }) {
  return (
    <div className="rounded-2xl bg-white/90 border border-[#d6e6fb] shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#e7f1ff]">
        <h2 className="text-xl md:text-2xl font-semibold text-[#0b2447]">
          Step 4 — Colors & Template (Personal)
        </h2>
        <p className="text-sm md:text-[15px] text-slate-600 mt-1">
          Choose colors that match your brand, then pick a card template.
        </p>
      </div>

      {/* Scrollable content */}
      <div className="px-5 md:px-6 py-5 max-h-[70vh] overflow-y-auto no-scrollbar">
        {/* Section 1: Primary Text Color */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            1) Choose your <span className="font-semibold">Primary Text Color</span>
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img src={Pic1} alt="Primary text color selection" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            These color chips are <span className="font-semibold">auto-extracted from your logo</span> to keep the
            theme consistent with your brand. Click the color you like, or hit the <span className="font-semibold">plus (+)</span>{" "}
            to add a custom color.
          </p>
        </section>

        {/* Section 2: Background Color */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            2) Pick a <span className="font-semibold">Background Color</span>
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img src={Pic2} alt="Background color selection" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            Just like the primary text color, choose a background that pairs nicely with your logo.
            You can also add a new color via the <span className="font-semibold">plus (+)</span> button.
          </p>
        </section>

        {/* Section 3: Template Selection */}
        <section>
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            3) Select a <span className="font-semibold">Template</span>
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img src={Pic3} alt="Template selection" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            Browse the available designs and pick the one that fits your preference. You can fine-tune details later,
            so choose the layout you like best to continue.
          </p>
        </section>
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
          Next →
        </button>
      </div>
    </div>
  );
}