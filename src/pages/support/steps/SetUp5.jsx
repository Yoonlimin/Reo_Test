// src/pages/support/steps/SetUp5.jsx
import React from "react";

// OPTION A: import images via Vite (recommended)
// Put these files at: src/assets/support/
import Pic1 from "../../../assets/support/SetUp11.png"; // preview modal (phone + front/back)
import Pic2 from "../../../assets/support/SetUp12.png"; // created card on Home

// OPTION B: if you prefer /public, delete the imports above and use:
// const Pic1 = "/support/SetUp11.png";
// const Pic2 = "/support/SetUp12.png";

export default function SetUp5({ onPrev, onNext }) {
  return (
    <div className="rounded-2xl bg-white/90 border border-[#d6e6fb] shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#e7f1ff]">
        <h2 className="text-xl md:text-2xl font-semibold text-[#0b2447]">
          Step 5 — Preview & finish
        </h2>
        <p className="text-sm md:text-[15px] text-slate-600 mt-1">
          Review your card, see what the phone view looks like, and then finish up.
        </p>
      </div>

      {/* Scrollable content */}
      <div
        className="px-5 md:px-6 py-5 max-h-[70vh] overflow-y-auto no-scrollbar"
        style={{ scrollbarWidth: "none" }} /* Firefox: hide track */
      >
        {/* Section 1 */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            1) Preview your card & phone view
          </h3>

          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img
              src={Pic1}
              alt="Preview modal showing phone view and front/back of the card"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>

          <div className="text-sm md:text-[15px] text-slate-600 mt-3 space-y-2">
            <p>
              This preview shows everything you’ll get after selecting a template:
              the <span className="font-semibold">phone view</span> on the right,
              and your card’s <span className="font-semibold">front</span> and{" "}
              <span className="font-semibold">back</span> on the left.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-semibold">Phone preview:</span> this is what
                people see when they scan your QR. They can tap to{" "}
                <span className="font-semibold">call</span>,{" "}
                <span className="font-semibold">email</span>,{" "}
                <span className="font-semibold">save your contact</span>,{" "}
                <span className="font-semibold">save the business card image</span>, or{" "}
                <span className="font-semibold">save your card to Reo</span>.
              </li>
              <li>
                <span className="font-semibold">Card front:</span> Your name, Job title,
                Company, and Contact Details styled by the template and colors you chose.
              </li>
              <li>
                <span className="font-semibold">Card back:</span> typically shows your{" "}
                <span className="font-semibold">QR code</span> so others can scan and
                open your profile instantly.
              </li>
            </ul>

            <p className="mt-2">
              If something doesn’t look right, you can go back and tweak your logo,
              colors, or template before finishing.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            2) Done! Your card on the Home page
          </h3>

          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img
              src={Pic2}
              alt="Created card shown on the Home page"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>

          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            After you confirm the preview, you’ll see your newly created card on your{" "}
            <span className="font-semibold">Home</span> page. From here you can edit it
            anytime, share it, or open the public link to show others.
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