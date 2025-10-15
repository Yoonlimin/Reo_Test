"use client"
import { useLocation, useNavigate } from "react-router-dom"

import Template1 from "./templates/Template1"
import Template2 from "./templates/Template2"
import Template3 from "./templates/Template3"
import Template4 from "./templates/Template4"
import Template5 from "./templates/Template5"
import Template6 from "./templates/Template6"
import TemplateVmes from "./templates/TemplateVmes"

import PhonePreview from "../components/PhonePreview" // ⬅️ you already have this component

const templateMap = {
  template1: Template1,
  template2: Template2,
  template3: Template3,
  template4: Template4,
  template5: Template5,
  template6: Template6,
  templatevmes: TemplateVmes,
}

// unify fields (camelCase & snake_case) and pass EVERYTHING needed to templates
const buildTemplateProps = (raw = {}) => {
  const props = {
    id: raw.id,
    // names
    fullName: raw.fullName ?? raw.fullname ?? "Your Name",
    jobTitle: raw.jobTitle ?? raw.job_title ?? "Your Title",
    email: raw.email ?? "email@example.com",
    phoneNumber: raw.phoneNumber ?? raw.phone_number ?? "00000000",
    companyName: raw.companyName ?? raw.company_name ?? "Company",
    companyAddress: raw.companyAddress ?? raw.company_address ?? "",
    // colors
    primaryColor: raw.primaryColor ?? raw.primary_color ?? "#e2e8f0",
    secondaryColor: raw.secondaryColor ?? raw.secondary_color ?? "#94a3b8",
    // logo
    logo: raw.logo ?? raw.logoUrl ?? "https://via.placeholder.com/96",
    logoUrl: raw.logoUrl ?? raw.logo ?? "https://via.placeholder.com/96",
    // carry QR image/url (data URL or http URL)
    qr: raw.qr ?? null,
    // keep everything else just in case templates read extra props
    ...raw,
  }
  return props
}

export default function PreviewModal() {
  const navigate = useNavigate()
  const { state } = useLocation() || {}

  // everything passed forward from previous steps:
  const {
    cardType,
    cardId,
    teamId,
    primaryColor,
    secondaryColor,
    croppedLogo,
    templateKey = "template1",
    card = {},
  } = state || {}

  const effectiveCardId =
    cardId ??
    (() => {
      const s = localStorage.getItem("personal_card_id")
      return s && s !== "null" && s !== "undefined" ? Number(s) : null
    })()

  const effectiveTeamId =
    teamId ??
    (() => {
      const s = localStorage.getItem("team_id")
      return s && s !== "null" && s !== "undefined" ? Number(s) : null
    })()

  const T = templateMap[templateKey] || Template1
  const p = buildTemplateProps({
    ...card,
    primaryColor,
    secondaryColor,
    logoUrl: card.logoUrl ?? croppedLogo ?? card.logo,
  });

  const handleBack = () => {
    // go back to Template Selection (Step 5), preserve state
    navigate("/create/template-selection", {
      state: {
        cardType,
        cardId: effectiveCardId,
        teamId: effectiveTeamId,
        primaryColor,
        secondaryColor,
        croppedLogo,
        templateKey,
        card,
      },
    })
  }

  const handleDone = () => {
    // finish the flow → back to Home
    navigate("/home")
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={handleDone} />

      {/* modal container */}
      <div className="relative z-[1000] w-[min(1100px,95vw)] h-[85vh] rounded-2xl bg-white shadow-2xl flex flex-col">
        {/* header */}
        <div className="grid grid-cols-3 items-center border-b px-4 py-2 h-[11vh]" >
          <div />
          <div className="text-center">
            <h2 className="text-base font-semibold text-[#0b2447]">Preview your card & phone view</h2>
            <p className="text-xs text-slate-500">Ready to get your virtual business card and share with others?</p>
          </div>
          <div className="flex justify-end">
            <button className="rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-100" onClick={handleDone}>
              ✕
            </button>
          </div>
        </div>

        {/* body */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_370px] gap-2 p-3 overflow-hidden">
          {/* LEFT: template preview (Front + Back) */}
          <div className="bg-[#f6f9ff] rounded-xl p-4 shadow-sm flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 items-center">
              {/* FRONT */}
              <div className="w-full flex flex-col items-center justify-center">
                <div className="text-sm text-center tracking-wide text-slate-500 mb-2">
                  Card Front View
                </div>
                {/* FIXED CANVAS + CLIP (prevents any overflow outside the rounded border) */}
                <div className="w-[320px] h-[200px] rounded-xl overflow-hidden shadow bg-white">
                  <T
                    {...p}
                    side="front"
                    // nothing absolute here; template fills the canvas and gets clipped by this frame
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* BACK */}
              <div className="w-full flex flex-col items-center justify-center">
                <div className="text-sm text-center tracking-wide text-slate-500 mb-2">
                  Card Back View
                </div>
                <div className="w-[320px] h-[200px] rounded-xl overflow-hidden shadow bg-white">
                  <T
                    {...p}
                    side="back"
                    qr={p.qr}
                    backShow={{ logo: false, qr: true, companyName: true }}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-500 mt-4 text-center">
              You can always customize or modify your chosen template later in your card's settings.
            </p>
          </div>

          {/* RIGHT: phone preview (uses your existing component) */}
          <div className="bg-gradient-to-b from-[#F1F7FE] to-[#DDEBFA] rounded-xl p-3 shadow-sm flex flex-col font-sans">
            <p className="text-slate-600 text-sm mb-2 text-center">
              This is what people will see when they scan your card.
            </p>

            <div className="flex-1 flex items-center justify-center">
              <PhonePreview
                name={p.fullName}
                title={p.jobTitle}
                company={p.companyName}
                phone={p.phoneNumber}
                email={p.email}
                website={p.website || p.web || ""}
                github={p.github || ""}
                linkedin={p.linkedin || ""}
                profile_photo={p.profile_photo || p.avatar || ""}
                logo={p.logoUrl || p.logo}
              />
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="flex-shrink-0 flex items-center justify-between gap-3 border-t px-6 py-4">
          <button
            onClick={handleBack}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            ← Back
          </button>
          <button
            onClick={handleDone}
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
