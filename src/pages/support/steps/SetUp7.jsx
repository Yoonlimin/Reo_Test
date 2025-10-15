// src/pages/support/steps/SetUp7.jsx
import React from "react";

// OPTION A (recommended): import via Vite bundling
// put images in: src/assets/support/
import Pic1 from "../../../assets/support/SetUp16.png";
import Pic2 from "../../../assets/support/SetUp17.png";

// OPTION B (/public):
// const Pic1 = "/support/SetUp16.png";
// const Pic2 = "/support/SetUp17.png";

export default function SetUp7({ onPrev, onNext }) {
  return (
    <div className="rounded-2xl bg-white/90 border border-[#d6e6fb] shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#e7f1ff]">
        <h2 className="text-xl md:text-2xl font-semibold text-[#0b2447]">
          Step 7 — Add links to your Virtual Card
        </h2>
        <p className="text-sm md:text-[15px] text-slate-600 mt-1">
          Use <span className="font-semibold">My Links</span> to add your website and social profiles.
          Everything you add appears as buttons in the phone preview.
        </p>
      </div>

      {/* Scrollable body */}
      <div className="px-5 md:px-6 py-5 max-h-[70vh] overflow-y-auto scrollbar-thin no-scrollbar">
        {/* Section 1 */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            1) Open <span className="font-semibold">My Links</span> from the sidebar
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img
              src={Pic1}
              alt="Navigate to My Links in the sidebar to manage links"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            In the left sidebar, click <span className="font-semibold">My Links</span>. Here you can edit
            your <span className="font-medium">email</span> and <span className="font-medium">contact number</span>,
            plus add <span className="font-medium">external links</span> like Website, GitHub, and LinkedIn.
            The live phone preview on the right updates instantly.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            2) Example — links added
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img
              src={Pic2}
              alt="Example of My Links filled with website, GitHub and LinkedIn"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            After entering your links, they appear as action buttons on your public phone page.
            Visitors can tap to open your site, view your profiles, call your number, or email you.
            Don’t forget to click <span className="font-semibold">Save</span> (top-right) when you’re done.
          </p>
        </section>
      </div>

      {/* Footer navigation */}
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