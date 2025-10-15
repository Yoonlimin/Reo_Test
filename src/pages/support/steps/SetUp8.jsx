// src/pages/support/steps/SetUp8.jsx
import React from "react";

/** OPTION A (recommended): keep screenshots in src/assets/support/ */
import Pic1 from "../../../assets/support/SetUp18.png"; // Contact Side overview
import Pic2 from "../../../assets/support/SetUp19.png"; // Example: removed images
import Pic3 from "../../../assets/support/SetUp20.png"; // Change primary text color
import Pic4 from "../../../assets/support/SetUp21.png"; // Change background color
import Pic5 from "../../../assets/support/SetUp22.png"; // Change font styles

/** OPTION B (public/): if you prefer to place files in /public/support/,
 *  delete the imports above and uncomment the lines below:
 *
 * const Pic1 = "/support/SetUp18.png";
 * const Pic2 = "/support/SetUp19.png";
 * const Pic3 = "/support/SetUp20.png";
 * const Pic4 = "/support/SetUp21.png";
 * const Pic5 = "/support/SetUp22.png";
 */

export default function SetUp8({ onPrev, onNext }) {
  return (
    <div className="rounded-2xl bg-white/90 border border-[#d6e6fb] shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#e7f1ff]">
        <h2 className="text-xl md:text-2xl font-semibold text-[#0b2447]">
          Step 8 — Customize the <span className="whitespace-nowrap">Card Contact Side</span>
        </h2>
        <p className="text-sm md:text-[15px] text-slate-600 mt-1">
          Here you can control the visuals that appear on the back/contact side of your card:
          photos, colors, and typography. These settings help your card stay on-brand and readable.
        </p>
      </div>

      {/* Scrollable content */}
      <div className="px-5 md:px-6 py-5 max-h-[70vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none]">
        {/* Hide scrollbar (WebKit) without breaking scroll */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {/* 1) Overview */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            1) Contact Side overview
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img src={Pic1} alt="Contact Side overview" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            Go to <span className="font-semibold">My Cards → Card Contact Side</span>. Here you can
            add or remove the <span className="font-semibold">Profile Photo</span> and{" "}
            <span className="font-semibold">Company Logo</span>, pick your{" "}
            <span className="font-semibold">Primary Text Color</span> and{" "}
            <span className="font-semibold">Background Color</span>, and choose a{" "}
            <span className="font-semibold">Font Style</span>. The preview on the right updates live.
          </p>
        </section>

        {/* 2) Add/Remove images */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            2) Add or remove photos
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img src={Pic2} alt="Example removing images" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            Use the <span className="font-semibold">+</span> button to upload a new{" "}
            <span className="font-semibold">Profile Photo</span> or{" "}
            <span className="font-semibold">Company Logo</span>. If you want to clear one, click{" "}
            <span className="font-semibold">Remove Profile Photo</span> or{" "}
            <span className="font-semibold">Remove Logo</span>. The card preview will reflect your
            changes immediately.
          </p>
        </section>

        {/* 3) Primary text color */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            3) Change the Primary Text Color
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img src={Pic3} alt="Choosing primary text color" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            Click the color box next to <span className="font-semibold">Primary Color</span> to open
            the color picker. Pick a hue that contrasts well with your background and works with your
            brand. This color drives the <span className="font-semibold">text and accent</span> tones
            on the contact side.
          </p>
        </section>

        {/* 4) Background color */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            4) Change the Background Color
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img src={Pic4} alt="Choosing background color" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            Next to <span className="font-semibold">Background Color</span>, use the picker to set a
            soft, readable canvas for your card. Keep accessibility in mind—ensure your Primary color
            stays readable against this background. Use the preview’s{" "}
            <span className="font-semibold">Primary / Background</span> legend to see which swatch you
            are editing.
          </p>
        </section>

        {/* 5) Font style */}
        <section>
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            5) Choose a Font Style
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img src={Pic5} alt="Changing font styles" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            Open the <span className="font-semibold">Font Style</span> dropdown and pick a typeface that
            fits your personality or brand. The preview on the right shows your choice in real time.
            When you’re happy with everything, click <span className="font-semibold">Save</span>.
          </p>
        </section>
      </div>

      {/* Footer nav (sticky inside card) */}
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