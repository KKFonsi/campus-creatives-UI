import React, { useState } from "react";
import { ArrowLeft, Calendar, CheckCircle2, Clock, FilePlus2, Trophy } from "lucide-react";
import { MobileHeader } from "./_shared/MobileHeader";
import { MobileBottomNav } from "./_shared/MobileBottomNav";
import { PUP_LIKHA_ALLOWED_CATEGORY_LABELS } from "../../../app/data/creativeCategories";
import "./_group.css";

interface EventEntryPageMobileProps {
  onBack?: () => void;
  onCreateSubmission?: () => void;
}

export function EventEntryPageMobile({ onBack, onCreateSubmission }: EventEntryPageMobileProps = {}) {
  const [sourceMode, setSourceMode] = useState<"approved" | "new">("approved");
  const [selectedWork, setSelectedWork] = useState("digital-sinta");
  const [showConfirm, setShowConfirm] = useState(false);
  const acceptedCategories = PUP_LIKHA_ALLOWED_CATEGORY_LABELS as readonly string[];
  const approvedWorks = [
    ["digital-sinta", "Digital Sinta", "Digital Art", "/__mockup/images/thumbnail_3.jpg"],
    ["pasig-dusk", "Pasig at Dusk", "Photography", "/__mockup/images/thumbnail_2.jpg"],
    ["thread-memory", "Thread Memory", "Crafts", "/__mockup/images/thumbnail_1.jpg"],
  ].map(([id, title, category, image]) => ({
    id,
    title,
    category,
    image,
    eligible: acceptedCategories.includes(category),
  }));

  return (
    <div className="w-[390px] min-h-screen bg-main-bg font-inter overflow-x-hidden overflow-y-auto pb-[92px]">
      <MobileHeader />
      <header className="bg-dark-surface px-4 py-5 text-white">
        <button onClick={onBack} className="mb-4 flex items-center gap-2 text-xs font-black text-pup-gold">
          <ArrowLeft size={16} /> Event Detail
        </button>
        <p className="text-[10px] font-black uppercase tracking-widest text-pup-gold">Open Call for Entries</p>
        <h1 className="mt-1 text-xl font-black leading-tight break-words">PUP Likha 2026: Student Creative Showcase</h1>
        <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-white/75">
          <span className="flex items-center gap-2"><Clock size={14} /> Deadline: June 30, 2026</span>
          <span className="flex items-center gap-2"><Trophy size={14} /> All enrolled PUP students</span>
        </div>
      </header>
      <main className="p-4 space-y-4">
        <section className="rounded-2xl border border-border bg-card-bg p-3">
          <p className="px-1 text-[11px] font-black uppercase tracking-wide text-secondary-text">Entry source</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setSourceMode("approved")}
              className={`rounded-xl border p-3 text-left ${
                sourceMode === "approved" ? "border-pup-maroon bg-soft-maroon text-pup-maroon" : "border-border bg-white"
              }`}
            >
              <CheckCircle2 size={18} />
              <span className="mt-2 block text-xs font-black">Select from Approved Works</span>
            </button>
            <button
              type="button"
              onClick={() => setSourceMode("new")}
              className={`rounded-xl border p-3 text-left ${
                sourceMode === "new" ? "border-pup-maroon bg-soft-maroon text-pup-maroon" : "border-border bg-white"
              }`}
            >
              <FilePlus2 size={18} />
              <span className="mt-2 block text-xs font-black">Create New Submission</span>
            </button>
          </div>
        </section>
        {sourceMode === "new" && (
          <section className="rounded-2xl border border-pup-maroon/20 bg-soft-maroon p-4">
            <h2 className="text-sm font-black text-pup-maroon">Create a fresh PUP Likha entry</h2>
            <p className="mt-2 text-xs leading-relaxed text-secondary-text">
              Start the Submit Work flow with this event selected as context. Accepted categories will match the event rules.
            </p>
            <button
              type="button"
              onClick={onCreateSubmission}
              className="mt-4 w-full rounded-xl bg-pup-maroon py-3 text-sm font-black text-white"
            >
              Continue to Submit Work
            </button>
          </section>
        )}
        {sourceMode === "approved" && (
          <>
            <section className="rounded-2xl border border-border bg-card-bg p-4">
              <h2 className="text-sm font-black uppercase tracking-wide text-secondary-text">Select approved work</h2>
              <div className="mt-3 grid grid-cols-1 gap-3">
                {approvedWorks.map(({ id, title, category, image, eligible }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => eligible && setSelectedWork(id)}
                    disabled={!eligible}
                    className={`flex gap-3 rounded-2xl border p-3 text-left ${
                      !eligible
                        ? "border-border bg-secondary-surface opacity-60"
                        : selectedWork === id
                        ? "border-pup-maroon bg-soft-maroon"
                        : "border-border bg-white"
                    }`}
                  >
                    <img src={image} alt={title} className="h-16 w-16 shrink-0 rounded-xl object-cover" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-black break-words">{title}</span>
                      <span className="mt-1 block text-xs text-secondary-text">{category}</span>
                      <span className={`mt-2 inline-flex items-center gap-1 text-[11px] font-black ${eligible ? "text-status-approved" : "text-status-rejected"}`}>
                        <CheckCircle2 size={12} /> {eligible ? "Eligible" : "Category not accepted"}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </section>
            <section className="rounded-2xl border border-border bg-card-bg p-4 space-y-4">
              <label className="block">
                <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Entry title</span>
                <input className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface p-3 text-sm" defaultValue="Digital Sinta - PUP Likha 2026 Entry" />
              </label>
              <label className="block">
                <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Event category</span>
                <select className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface p-3 text-sm">
                  {PUP_LIKHA_ALLOWED_CATEGORY_LABELS.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Entry statement</span>
                <textarea className="w-full min-w-0 rounded-xl border border-border bg-secondary-surface p-3 text-sm" rows={4} defaultValue="An exploration of student identity and commuter culture through digital poster design." />
              </label>
            </section>
            <section className="rounded-2xl border border-pup-maroon/20 bg-soft-maroon p-4">
              <h2 className="font-black text-pup-maroon">Review Entry Summary</h2>
              <div className="mt-3 space-y-2 text-sm">
                {[
                  ["Selected work", "Digital Sinta"],
                  ["Event", "PUP Likha 2026"],
                  ["Category", "Digital Art"],
                  ["Eligibility", "Confirmed"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-3 border-b border-pup-maroon/10 pb-2 last:border-0">
                    <span className="text-secondary-text">{label}</span>
                    <span className="min-w-0 text-right font-black break-words">{value}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-2xl border border-border bg-card-bg p-3 space-y-2">
              <button onClick={onBack} className="w-full rounded-xl border border-border py-3 text-sm font-black">Cancel Entry</button>
              <button className="w-full rounded-xl border border-border py-3 text-sm font-black">Save as Draft</button>
              <button onClick={() => setShowConfirm(true)} className="w-full rounded-xl bg-pup-maroon py-4 text-sm font-black text-white">
                Submit Entry to Event
              </button>
            </section>
          </>
        )}
      </main>
      <MobileBottomNav />
      {showConfirm && (
        <div className="fixed inset-0 z-[80] flex items-end bg-black/40">
          <div className="w-[390px] rounded-t-3xl bg-card-bg p-6">
            <Calendar className="text-pup-maroon" size={32} />
            <h2 className="mt-3 text-xl font-black">Submit entry?</h2>
            <p className="mt-2 text-sm text-secondary-text">This mock entry will be submitted for event review.</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button onClick={() => setShowConfirm(false)} className="rounded-xl border border-border py-3 font-bold">Cancel</button>
              <button onClick={() => setShowConfirm(false)} className="rounded-xl bg-pup-maroon py-3 font-bold text-white">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
