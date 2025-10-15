
// src/pages/support/steps/SetUp6.jsx
import React from "react";

// OPTION A (recommended): keep images in src/assets/support/
import Pic1 from "../../../assets/support/SetUp13.png";
import Pic2 from "../../../assets/support/SetUp14.png";
import Pic3 from "../../../assets/support/SetUp15.png";

/*
// OPTION B: if you prefer /public, remove the imports above and use:
// const Pic1 = "/support/SetUp13.png";
// const Pic2 = "/support/SetUp14.png";
// const Pic3 = "/support/SetUp15.png";
*/

export default function SetUp6({ onPrev, onNext }) {
  return (
    <div className="rounded-2xl bg-white/90 border border-[#d6e6fb] shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#e7f1ff]">
        <h2 className="text-xl md:text-2xl font-semibold text-[#0b2447]">
          Step 6 — Editing your card & quick actions
        </h2>
        <p className="text-sm md:text-[15px] text-slate-600 mt-1">
          Learn the three quick actions on each card, how to jump into editing,
          and where to add your profile photo for the phone preview.
        </p>
      </div>

      {/* Scrollable content */}
      <div className="px-5 md:px-6 py-5 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#cfe3fb] scrollbar-track-transparent no-scrollbar">
        {/* Section 1 */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            1) Card quick actions: <span className="font-medium">Edit</span>,{" "}
            <span className="font-medium">Share</span>,{" "}
            <span className="font-medium">Delete</span>
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img
              src={Pic1}
              alt="Card quick actions: edit, share, delete"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            Hover over (or tap) your card to reveal the three action buttons:
            <span className="font-semibold"> Edit</span> to update details,
            <span className="font-semibold"> Share</span> to copy your card link,
            and <span className="font-semibold"> Delete</span> to remove the card.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            2) Edit view — Virtual Card (card & phone preview)
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img
              src={Pic2}
              alt="Virtual Card editor with card and phone preview"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            Clicking <span className="font-semibold">Edit</span> opens the
            <span className="font-semibold"> Virtual Card</span> page. Here you
            can update your info while seeing a live{" "}
            <span className="font-semibold">card preview</span> and a{" "}
            <span className="font-semibold">phone preview</span> so you know
            exactly how your card appears when people scan your QR code.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            3) Add a profile picture
          </h3>
          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img
              src={Pic3}
              alt="Adding profile picture reflected in phone preview"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <p className="text-sm md:text-[15px] text-slate-600 mt-3">
            You can upload a <span className="font-semibold">profile photo</span>{" "}
            from the editor. It instantly appears in the{" "}
            <span className="font-semibold">phone preview</span> header, making
            your digital card more recognizable and personal.
          </p>
        </section>
      </div>

      {/* Footer nav (sticky inside the card) */}
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