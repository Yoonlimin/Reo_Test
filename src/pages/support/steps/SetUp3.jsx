// src/pages/support/steps/SetUp3.jsx
import React from "react";

import Pic4 from "../../../assets/support/SetUp4.png";
import Pic5 from "../../../assets/support/SetUp5.png";
import Pic6 from "../../../assets/support/SetUp6.png";
import Pic7 from "../../../assets/support/SetUp7.png";
export default function SetUp3({ onNext, onPrev, mode }) {
  const shots = [
    {
      src: Pic4,
      title: "Fill in your information",
      body:
        "After choosing Personal, you’ll land on Step 1. Enter your full name, organization, job title, phone number, email, and company address.",
    },
    {
      src: Pic5,
      title: "Example of a completed form",
      body:
        "Here’s a sample with all fields filled. Double-check names, phone number, and email—they’ll appear on your card.",
    },
    {
      src: Pic6,
      title: "Add your company logo",
      body:
        "Next, you’ll be asked to upload your organization’s logo. Click the plus icon to pick a PNG/JPG.",
    },
    {
      src: Pic7,
      title: "Example: logo uploaded",
      body:
        "After selecting a file, you’ll see a preview of your logo. If it’s not right, you can replace it before continuing.",
    },
  ];

  return (
    <div className="relative">
      {/* header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#0b2447]">
          Step 3 — Fill Your Details & Upload Logo
        </h1>
        <p className="text-sm text-slate-600">
          {mode === "team"
            ? "You’re viewing the personal flow preview while in Teams mode."
            : "You’re in the Personal card setup."}
        </p>
      </div>

      {/* scrollable content card */}
      <div className="rounded-2xl bg-white/80 border border-white/80 shadow-sm p-4 md:p-6 h-[70vh] overflow-y-auto no-scrollbar" >
        <ol className="space-y-8">
          {shots.map((s, i) => (
            <li
              key={s.src}
              className="rounded-xl border border-[#d6e6fb] bg-[#f7fbff] p-4 md:p-5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
                {/* text */}
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#d4eafd] text-[#0b2447] font-semibold">
                      {i + 1}
                    </span>
                    <h2 className="text-lg font-semibold text-[#0b2447]">
                      {s.title}
                    </h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{s.body}</p>
                </div>

                {/* image */}
                <figure className="order-1 lg:order-2">
                  <div className="rounded-lg overflow-hidden border border-[#e6f0fb] bg-white">
                    <img
                      src={s.src}
                      alt={s.title}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                  
                </figure>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* footer nav */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={onPrev}
          className="px-4 py-2 rounded-lg bg-white border border-[#c7def3] text-[#0b2447] hover:bg-[#f2f7fd] font-medium"
        >
          ← Previous
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 rounded-lg bg-[#3b82f6] text-white font-semibold hover:bg-[#2f76ee]"
        >
          Next →
        </button>
      </div>
    </div>
  );
}