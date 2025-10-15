import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";

const PhoneMock = ({ src }) => {
  return (
    <div className="relative mx-auto mt-8 sm:mt-10 md:mt-14"> {/* moves it lower */}
      {/* Phone frame */}
      <div className="relative w-[220px] sm:w-[260px] md:w-[300px] aspect-[9/19.5]
                      rounded-[34px] bg-black border border-black/80
                      overflow-hidden shadow-[0_18px_50px_rgba(2,6,23,.35)]">
        {/* Notch */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 w-20 h-[7px] bg-black/90 rounded-full z-20" />

        {/* Screen area */}
        <div className="absolute inset-[9px] rounded-[26px]
                        bg-slate-100 overflow-hidden ring-1 ring-black/5 z-10">
          <img
            src={src}
            alt="Phone Preview"
            className="block w-full h-full object-contain bg-slate-100 select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Subtle base shadow */}
      <div className="mx-auto mt-6 h-3 w-40 rounded-full bg-black/10 blur-md" />
    </div>
  );
};


const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const features = [
    ["🎨 Create Your Card", "Enter your name, title, and contact info."],
    ["🖼️ Choose Templates", "Modern, professional designs."],
    ["🔗 Share Instantly", "Link or QR — one tap to connect."],
    ["📱 Save to Contacts", "Add to phone in seconds."],
    ["📎 Download as PNG", "Use in email signatures & socials."],
    ["🛠️ Edit Anytime", "Always up to date, no reprints."],
  ];

  return (
    <div className="min-h-screen font-inter bg-gradient-to-b from-[#EAF3FB] to-[#D6E9F9] text-slate-900">
      <Navbar />

      {/* HERO (2 columns) */}
      <section className="relative w-full">
        {/* subtle decorative blob */}
        <div className="pointer-events-none absolute -top-20 -right-24 h-72 w-72 rounded-full bg-[#b7d6f5] blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: copy + CTA */}
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-slate-900">
              The Future of Business Cards —<br />
              <span className="text-reoBlue">Digital, Smart, Effortless</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              REO helps you create a beautiful virtual business card and share it
              with a link or QR code — fast, professional, and mobile-friendly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                className="bg-reoBlue text-white px-7 py-3 rounded-2xl font-semibold shadow-sm hover:opacity-90 transition"
                onClick={() => navigate("/create-account")}
              >
                Get Started
              </button>
              <a
                href="#preview"
                className="px-7 py-3 rounded-2xl font-semibold border border-reoBlue/70 text-reoBlue hover:bg-white/60 transition"
              >
                See Preview
              </a>
            </div>
            {/* quick benefits strip */}
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-white/60 px-3 py-1 ring-1 ring-white/70">
                No app required
              </span>
              <span className="rounded-full bg-white/60 px-3 py-1 ring-1 ring-white/70">
                Works on any phone
              </span>
              <span className="rounded-full bg-white/60 px-3 py-1 ring-1 ring-white/70">
                Share via QR or link
              </span>
            </div>
          </div>

          {/* Right: phone */}
          <div className="flex justify-center md:justify-end" data-aos="fade-left">
            <PhoneMock src="/sample-phone-preview.png" />
          </div>
        </div>
      </section>

      {/* PREVIEW (QR + Card) */}
      <section id="preview" className="w-full px-6 py-14 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-reoBlue mb-10">
            What your card can look like
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div
              className="bg-white rounded-2xl p-5 shadow-[0_12px_40px_rgba(2,6,23,.08)] hover:shadow-[0_16px_50px_rgba(2,6,23,.12)] transition"
              data-aos="zoom-in-up"
            >
              <img
                src="/sample-qr.png"
                alt="QR Card Sample"
                className="w-[260px] rounded-xl"
              />
              <p className="text-sm text-slate-600 mt-3 text-center">
                QR Business Card
              </p>
            </div>

            <div
              className="bg-white rounded-2xl p-5 shadow-[0_12px_40px_rgba(2,6,23,.08)] hover:shadow-[0_16px_50px_rgba(2,6,23,.12)] transition"
              data-aos="zoom-in-up"
              data-aos-delay="100"
            >
              <img
                src="/sample-card.png"
                alt="Business Card Sample"
                className="w-[300px] rounded-xl"
              />
              <p className="text-sm text-slate-600 mt-3 text-center">
                Professional Card Design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full px-6 py-16 bg-gradient-to-b from-white to-[#eef6ff]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-reoBlue mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(([title, desc], i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-white/70 backdrop-blur-sm ring-1 ring-white/60 shadow-[0_10px_30px_rgba(2,6,23,.06)] hover:shadow-[0_14px_40px_rgba(2,6,23,.10)] transition"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {title}
                </h3>
                <p className="text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-reoBlue mb-8">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ["⚛️ Frontend", "React + Tailwind CSS"],
              ["🧠 Backend", "Node.js + Express"],
              ["🗄️ Database", "PostgreSQL"],
              ["☁️ Deploy", "AWS / Render"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl p-6 bg-[#f7fbff] ring-1 ring-white shadow-sm hover:shadow-md transition"
                data-aos="fade-up"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  {title}
                </h3>
                <p className="text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-gradient-to-b from-[#d6eaff] to-[#eaf3fb] text-center">
        <h2 className="text-3xl font-bold text-reoBlue mb-3">
          Ready to create your card?
        </h2>
        <p className="text-slate-700 mb-6">
          Build your personalized digital card in minutes — no design skills required.
        </p>
        <button
          className="bg-reoBlue text-white px-8 py-3 rounded-2xl font-semibold shadow-sm hover:opacity-90 transition"
          onClick={() => navigate("/create-account")}
        >
          Start Now
        </button>
      </section>
    </div>
  );
};

export default WelcomePage;