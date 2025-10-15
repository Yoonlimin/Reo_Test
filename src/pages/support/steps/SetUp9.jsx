// src/pages/support/steps/SetUp9.jsx
import React from "react";

// Put these in src/assets/support (or switch to /support/... if using public/)
import PicHomeShare from "../../../assets/support/SetUp13.png"; // Home with share button
import PicShareModal from "../../../assets/support/SetUp23.png"; // Share modal
import PicQR from "../../../assets/support/SetUp24.png"; // QR
import PicCardFrontBack from "../../../assets/support/SetUp25.png"; // Card front/back
import PicCopyLink from "../../../assets/support/SetUp26.png"; // Copy link dialog
import PicPhoneAfterScan from "../../../assets/support/SetUp27.png"; // Phone view after scanning QR

export default function SetUp9({ onPrev, onNext }) {
  return (
    <div className="rounded-2xl bg-white/90 border border-[#d6e6fb] shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#e7f1ff]">
        <h2 className="text-xl md:text-2xl font-semibold text-[#0b2447]">
          Step 9 — Share your card
        </h2>
        <p className="text-sm md:text-[15px] text-slate-600 mt-1">
          After editing, you can share your card in several ways: copy a link,
          show a QR code, or download the card image (front & back).
        </p>
      </div>

      {/* Scrollable content */}
      <div className="px-5 md:px-6 py-5 max-h-[70vh] overflow-y-auto">
        {/* 1) Go to Home and open Share */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            1) Open the share options
          </h3>

          <div className="rounded-xl overflow-hidden border border-[#d6e6fb] bg-white">
            <img
              src={PicHomeShare}
              alt="Home page with share button"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>

          <div className="text-sm md:text-[15px] text-slate-600 mt-3 space-y-2">
            <p>
              Back on the <span className="font-semibold">Home</span> page, each
              card has a toolbar. Click the
              <span className="font-semibold"> Share</span> button on the card
              you want to share.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Confirm you picked the right card (name/logo match).</li>
              <li>
                Share options: <em>Copy Link</em>, <em>Download</em> , and{" "}
                <em>QR Code</em>.
              </li>
            </ul>
          </div>
        </section>

        {/* 2) Share modal → Copy link */}
        <section className="mb-10">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            2) Share modal → Copy Link
          </h3>

          <div className="space-y-4">
            <div className="rounded-xl border border-[#d6e6fb] bg-slate-50 p-3">
              <img
                src={PicShareModal}
                alt="Share modal options"
                className="w-full mx-auto object-contain max-h-[520px]"
                loading="lazy"
              />
              <div className="text-sm md:text-[15px] text-slate-600 mt-3 space-y-2">
                <p>
                  This is the <span className="font-semibold">Share</span> modal
                  with all actions.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-semibold">Copy Link</span> — fastest
                    way to share via chat or email.
                  </li>
                  <li>
                    <span className="font-semibold">QR Code</span> — perfect for
                    in-person scanning.
                  </li>
                  <li>
                    <span className="font-semibold">Download</span> — export
                    images of your card.
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-[#d6e6fb] bg-slate-50 p-3">
              <img
                src={PicCopyLink}
                alt="Copy link confirmation"
                className="w-full mx-auto object-contain max-h-[420px]"
                loading="lazy"
              />
              <div className="text-sm md:text-[15px] text-slate-600 mt-3 space-y-2">
                <p>
                  After pressing{" "}
                  <span className="font-semibold">Copy Link</span>, you’ll see a
                  confirmation.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Paste the URL anywhere. It always shows your latest card
                    details.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3) Share modal → QR (stacked) + what the recipient sees */}
        <section className="mb-10">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            3) Share modal → QR Code
          </h3>

          <div className="space-y-4">
            <div className="rounded-xl border border-[#d6e6fb] bg-slate-50 p-3">
              <img
                src={PicShareModal}
                alt="Share modal options"
                className="w-full mx-auto object-contain max-h-[520px]"
                loading="lazy"
              />
              <p className="text-sm md:text-[15px] text-slate-600 mt-3">
                Choose the <span className="font-semibold">QR Code</span> option
                to show a scannable code.
              </p>
            </div>

            <div className="rounded-xl border border-[#d6e6fb] bg-slate-50 p-3">
              <img
                src={PicQR}
                alt="QR code to share your card"
                className="w-full mx-auto object-contain max-h-[420px] md:max-h-[460px]"
                loading="lazy"
              />
              <div className="text-sm md:text-[15px] text-slate-600 mt-3 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ask them to scan the code with their phone camera.</li>
                  <li>They’ll open your card instantly—no typing required.</li>
                </ul>
              </div>
            </div>

            {/* NEW: What the recipient sees after scanning */}
            <div className="rounded-xl border border-[#d6e6fb] bg-slate-50 p-3">
              <img
                src={PicPhoneAfterScan}
                alt="Phone view after scanning QR"
                className="w-full mx-auto object-contain max-h-[560px]"
                loading="lazy"
              />
              <div className="text-sm md:text-[15px] text-slate-600 mt-3 space-y-2">
                <p>
                  This is what the recipient sees after scanning your QR: a
                  mobile-friendly profile with quick actions.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-semibold">Call directly</span> — tap
                    to dial the phone number.
                  </li>
                  <li>
                    <span className="font-semibold">Send email</span> — opens
                    their email app with your address filled in.
                  </li>
                  <li>
                    <span className="font-semibold">Save Contact</span> — adds
                    your details to their phone contacts.
                  </li>
                  <li>
                    <span className="font-semibold">Save Business Card</span> —
                    saves an image of your card to their device.
                  </li>
                  <li>
                    <span className="font-semibold">Save Card to Reo</span> —
                    saves your card into <em>their</em> Reo account so they keep
                    your contact inside Reo and can access/share it later.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4) Share modal → Download Card (front & back) */}
        <section className="mb-8">
          <h3 className="text-base md:text-lg font-semibold text-[#0b2447] mb-3">
            4) Share modal → Download Card (front & back)
          </h3>

          <div className="space-y-4">
            <div className="rounded-xl border border-[#d6e6fb] bg-slate-50 p-3">
              <img
                src={PicShareModal}
                alt="Share modal options"
                className="w-full mx-auto object-contain max-h-[520px]"
                loading="lazy"
              />
              <p className="text-sm md:text-[15px] text-slate-600 mt-3">
                Choose <span className="font-semibold">Download</span> to export
                the card images.
              </p>
            </div>

            <div className="rounded-xl border border-[#d6e6fb] bg-slate-50 p-3">
              <img
                src={PicCardFrontBack}
                alt="Card front and back download preview"
                className="w-full mx-auto object-contain max-h-[420px] md:max-h-[460px]"
                loading="lazy"
              />
              <div className="text-sm md:text-[15px] text-slate-600 mt-3 space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    You’ll get two images:{" "}
                    <span className="font-semibold">Front</span> and{" "}
                    <span className="font-semibold">Back</span>.
                  </li>
                  <li>Great for printing, attachments, or posting online.</li>
                  <li>
                    The back typically includes your QR—easy to scan from a file
                    or printout.
                  </li>
                </ul>
              </div>
            </div>
          </div>
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