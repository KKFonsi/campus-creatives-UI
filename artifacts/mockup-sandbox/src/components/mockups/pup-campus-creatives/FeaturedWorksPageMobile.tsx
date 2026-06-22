import { useEffect, useRef, useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Star, 
  MoreVertical,
  Award,
  X
} from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { ModeratorMobileBottomNav } from './_shared/ModeratorMobileBottomNav';
import './_group.css';

const MobileHeader = () => (
  <header className="h-[56px] bg-dark-surface flex items-center justify-between px-4 sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <div className="text-pup-gold font-bold text-sm tracking-tight leading-tight uppercase">
        Campus<br />Creatives
      </div>
      <div className="bg-white/10 text-pup-gold text-[8px] font-bold px-1.5 py-0.5 rounded tracking-tighter uppercase">
        Moderator
      </div>
    </div>
    <div className="flex items-center gap-3">
      <InitialsAvatar name="Maria Moderator" className="w-8 h-8 border border-white/20" textClassName="text-[11px]" />
    </div>
  </header>
);

interface FeaturedWorksPageMobileProps {
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
  onEvents?: () => void;
}

export default function FeaturedWorksPageMobile(props: FeaturedWorksPageMobileProps = {}) {
  const [activeTab, setActiveTab] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [addProcessing, setAddProcessing] = useState(false);
  const [featureModal, setFeatureModal] = useState<
    | { type: "edit"; id: number }
    | { type: "delete"; id: number }
    | { type: "discard"; id: number; next: () => void }
    | null
  >(null);
  const [editForm, setEditForm] = useState({ title: "", type: "", dates: "" });
  const [editErrors, setEditErrors] = useState<Record<string, string>>({});
  const [processingAction, setProcessingAction] = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const overlayOpen = showAddModal || Boolean(featureModal);

  const tabs = [
    'All', 'Work of the Week', 'Creator of the Month', 'College Highlight', 'Moderator\'s Pick', 'Event Finalist'
  ];

  const [features, setFeatures] = useState([
    {
      id: 1,
      title: "Digital Sinta",
      creator: "Rafael Mendoza",
      type: "Work of the Week",
      dates: "June 12 - June 19",
      badgeClass: "bg-pup-gold text-pup-maroon",
      image: "/__mockup/images/thumbnail_1.jpg"
    },
    {
      id: 2,
      title: "Polytechnic Dreams",
      creator: "Maria Santos",
      type: "Creator of the Month",
      dates: "June 1 - June 30",
      badgeClass: "bg-pup-maroon text-white",
      image: "/__mockup/images/thumbnail_2.jpg"
    },
    {
      id: 3,
      title: "Campus Frequencies",
      creator: "Bianca Reyes",
      type: "Moderator's Pick",
      dates: "June 10 - June 17",
      badgeClass: "bg-secondary-surface text-primary-text border border-border",
      image: "/__mockup/images/thumbnail_3.jpg"
    }
  ]);

  const filteredFeatures = activeTab === "All" ? features : features.filter((item) => item.type === activeTab);
  const selectedFeature =
    featureModal && "id" in featureModal
      ? features.find((feature) => feature.id === featureModal.id)
      : null;
  const editDirty =
    Boolean(selectedFeature) &&
    (editForm.title !== selectedFeature?.title ||
      editForm.type !== selectedFeature?.type ||
      editForm.dates !== selectedFeature?.dates);

  const openFeatureModal = (modal: Exclude<typeof featureModal, null>) => {
    triggerRef.current =
      typeof document !== "undefined" && document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    if (modal.type === "edit") {
      const item = features.find((feature) => feature.id === modal.id);
      if (item) {
        setEditForm({ title: item.title, type: item.type, dates: item.dates });
        setEditErrors({});
      }
    }
    setFeatureModal(modal);
  };

  const closeFeatureModal = () => {
    setFeatureModal(null);
    setProcessingAction(null);
    window.setTimeout(() => {
      triggerRef.current?.focus();
      triggerRef.current = null;
    }, 0);
  };

  const openAddModal = () => {
    triggerRef.current =
      typeof document !== "undefined" && document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
    setAddProcessing(false);
    window.setTimeout(() => {
      triggerRef.current?.focus();
      triggerRef.current = null;
    }, 0);
  };

  useEffect(() => {
    if (!overlayOpen) return;
    const main = mainRef.current;
    if (!main) return;
    const previousOverflow = main.style.overflow;
    main.style.overflow = "hidden";
    return () => {
      main.style.overflow = previousOverflow;
    };
  }, [overlayOpen]);

  const validateEdit = () => {
    const nextErrors: Record<string, string> = {};
    if (!editForm.title.trim()) nextErrors.title = "Title is required.";
    if (!editForm.type.trim()) nextErrors.type = "Select a content type.";
    if (!editForm.dates.trim()) nextErrors.dates = "Date range is required.";
    setEditErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const saveEdit = () => {
    if (!selectedFeature || !validateEdit() || processingAction) return;
    setProcessingAction("feature-save");
    window.setTimeout(() => {
      setFeatures((items) => items.map((item) => item.id === selectedFeature.id ? { ...item, ...editForm } : item));
      closeFeatureModal();
    }, 550);
  };

  const deleteFeature = () => {
    if (!selectedFeature || processingAction) return;
    setProcessingAction("feature-delete");
    window.setTimeout(() => {
      setFeatures((items) => items.filter((item) => item.id !== selectedFeature.id));
      closeFeatureModal();
    }, 550);
  };

  const requestCloseEdit = () => {
    if (editDirty) {
      openFeatureModal({ type: "discard", id: selectedFeature?.id ?? 0, next: closeFeatureModal });
      return;
    }
    closeFeatureModal();
  };

  const saveAddFeature = () => {
    if (addProcessing) return;
    setAddProcessing(true);
    window.setTimeout(() => {
      closeAddModal();
    }, 550);
  };

  return (
    <div className="mobile-app-screen w-[390px] h-[844px] bg-main-bg font-inter overflow-hidden flex flex-col mx-auto border-x border-border shadow-2xl relative">
      <MobileHeader />

      <main ref={mainRef} className="flex-1 min-h-0 overflow-y-auto p-4 pb-[92px]" aria-hidden={overlayOpen ? "true" : undefined}>
        <div className="flex items-center justify-between gap-3 mb-4">
          <h1 className="text-xl font-bold text-primary-text uppercase tracking-tight">Featured Works</h1>
          <button
            onClick={openAddModal}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-pup-maroon px-3 py-2 text-xs font-black text-white shadow-sm"
          >
            <Plus size={16} /> Add Feature
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 mb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-colors uppercase tracking-tight border ${
                activeTab === tab 
                  ? 'bg-pup-maroon text-white border-pup-maroon shadow-sm' 
                  : 'bg-white text-secondary-text border-border hover:border-pup-maroon/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Featured List */}
        <div className="space-y-4">
          {filteredFeatures.map((item) => (
            <div key={item.id} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col group">
              <div className="h-[180px] w-full bg-secondary-surface relative overflow-hidden">
                <img src={item.image} alt={`${item.title} featured preview`} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-primary-text">
                    <MoreVertical size={16} />
                  </button>
                </div>
                <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${item.badgeClass}`}>
                  {item.type}
                </div>
              </div>
              <div className="p-4 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-primary-text text-base leading-tight uppercase tracking-tight mb-1">{item.title}</h3>
                    <p className="text-xs text-secondary-text font-medium">{item.creator}</p>
                  </div>
                  <Award size={20} className="text-pup-gold flex-shrink-0" />
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-[9px] text-muted-text font-bold uppercase tracking-widest">Active Dates</div>
                    <div className="text-[11px] font-bold text-primary-text tracking-tighter uppercase">{item.dates}</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => openFeatureModal({ type: "delete", id: item.id })}
                      disabled={processingAction === "feature-delete"}
                      className="px-3 py-2 border border-border text-secondary-text rounded-xl font-bold text-[10px] uppercase tracking-tighter"
                    >
                      Remove
                    </button>
                    <button
                      type="button"
                      onClick={() => openFeatureModal({ type: "edit", id: item.id })}
                      className="px-4 py-2 bg-soft-maroon text-pup-maroon rounded-xl font-bold text-[10px] uppercase tracking-tighter"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredFeatures.length === 0 && (
            <section className="rounded-2xl border border-dashed border-border bg-secondary-surface p-6 text-center">
              <Star className="mx-auto text-pup-maroon" size={30} />
              <h2 className="mt-3 text-base font-black text-primary-text">No featured works yet.</h2>
              <p className="mt-1 text-xs leading-relaxed text-secondary-text">
                {features.length === 0 ? "Removed works disappear from this mock list." : "No featured works match this filter."}
              </p>
              <button type="button" onClick={openAddModal} className="cc-primary-action mt-4 min-h-11 rounded-xl bg-pup-maroon px-4 py-2 text-xs font-black text-white">
                Add Feature
              </button>
            </section>
          )}
        </div>
      </main>

      {featureModal && featureModal.type !== "discard" && selectedFeature && (
        <div className="absolute inset-0 z-[130]">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={featureModal.type === "delete" ? closeFeatureModal : requestCloseEdit} />
          <div role="dialog" aria-modal="true" className="cc-mobile-sheet absolute left-0 right-0 flex flex-col overflow-hidden rounded-t-3xl border-t border-border bg-card-bg shadow-2xl">
            {featureModal.type === "delete" ? (
              <>
                <div className="shrink-0 p-5 pb-3">
                  <div className="rounded-2xl border border-status-rejected/30 bg-status-rejected/10 p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-status-rejected">Remove feature</p>
                  <h2 className="mt-1 text-lg font-black text-primary-text">{selectedFeature.title}</h2>
                  </div>
                </div>
                <div className="cc-mobile-sheet-body min-h-0 flex-1 overflow-y-auto px-5 pb-4">
                  <p className="text-sm leading-relaxed text-secondary-text">This work will be removed from the Featured Works list for this mock session.</p>
                </div>
                <div className="shrink-0 grid grid-cols-2 gap-2 border-t border-border bg-card-bg p-5">
                  <button type="button" onClick={closeFeatureModal} disabled={processingAction === "feature-delete"} className="cc-control min-h-11 rounded-xl border border-border py-3 text-sm font-black">Cancel</button>
                  <button type="button" onClick={deleteFeature} disabled={processingAction === "feature-delete"} className="cc-danger-action min-h-11 rounded-xl bg-status-rejected py-3 text-sm font-black text-white">
                    {processingAction === "feature-delete" ? "Deleting..." : "Remove"}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="shrink-0 flex items-start justify-between gap-3 border-b border-border p-5">
                  <div>
                    <h2 className="text-lg font-black text-primary-text">Edit Feature</h2>
                    <p className="text-xs text-secondary-text">{selectedFeature.title}</p>
                  </div>
                  <button type="button" onClick={requestCloseEdit} className="rounded-full bg-secondary-surface p-2 text-secondary-text" aria-label="Close edit feature">
                    <X size={18} />
                  </button>
                </div>
                <div className="cc-mobile-sheet-body min-h-0 flex-1 space-y-4 overflow-y-auto p-5">
                  {(["title", "type", "dates"] as const).map((key) => (
                    <label key={key} className="block">
                      <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">
                        {key === "type" ? "Feature type" : key === "dates" ? "Active dates" : "Title"} <span className="text-status-rejected">*</span>
                      </span>
                      <input
                        value={editForm[key]}
                        onChange={(event) => {
                          setEditForm({ ...editForm, [key]: event.target.value });
                          if (editErrors[key]) setEditErrors({ ...editErrors, [key]: "" });
                        }}
                        aria-invalid={Boolean(editErrors[key])}
                        className={`min-h-11 w-full rounded-xl border bg-secondary-surface px-3 py-3 text-base outline-none ${editErrors[key] ? "border-status-rejected ring-2 ring-status-rejected/20" : "border-border"}`}
                      />
                      {editErrors[key] && <p className="mt-1 text-xs font-bold text-status-rejected">{editErrors[key]}</p>}
                    </label>
                  ))}
                </div>
                <div className="shrink-0 grid grid-cols-2 gap-2 border-t border-border bg-card-bg p-5">
                  <button type="button" onClick={requestCloseEdit} disabled={processingAction === "feature-save"} className="cc-control min-h-11 rounded-xl border border-border py-3 text-sm font-black">Cancel</button>
                  <button type="button" onClick={saveEdit} disabled={!editForm.title.trim() || !editForm.type.trim() || !editForm.dates.trim() || processingAction === "feature-save"} className="cc-primary-action min-h-11 rounded-xl bg-pup-maroon py-3 text-sm font-black text-white">
                    {processingAction === "feature-save" ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {featureModal?.type === "discard" && (
        <div className="absolute inset-0 z-[140]">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => openFeatureModal({ type: "edit", id: featureModal.id })} />
          <div role="dialog" aria-modal="true" className="cc-mobile-sheet absolute left-0 right-0 flex flex-col overflow-hidden rounded-t-3xl bg-card-bg shadow-2xl">
            <div className="cc-mobile-sheet-body overflow-y-auto p-5">
              <h2 className="text-lg font-black text-primary-text">Discard changes?</h2>
              <p className="mt-2 text-sm text-secondary-text">Your edited feature details have not been saved.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 border-t border-border bg-card-bg p-5">
              <button type="button" onClick={() => openFeatureModal({ type: "edit", id: featureModal.id })} className="cc-control min-h-11 rounded-xl border border-border py-3 text-sm font-black">Stay</button>
              <button type="button" onClick={featureModal.next} className="cc-danger-action min-h-11 rounded-xl bg-status-rejected py-3 text-sm font-black text-white">Discard</button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="absolute inset-0 z-[120]">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeAddModal} />
          <div role="dialog" aria-modal="true" className="cc-mobile-sheet absolute left-0 right-0 flex flex-col overflow-hidden rounded-t-3xl border-t border-border bg-card-bg shadow-2xl">
            <div className="shrink-0 flex items-center justify-between border-b border-border p-5">
              <div>
                <h2 className="text-lg font-black text-primary-text">Add Feature</h2>
                <p className="text-xs text-secondary-text">Mobile feature setup preview</p>
              </div>
              <button onClick={closeAddModal} className="min-h-11 min-w-11 rounded-full bg-secondary-surface p-2 text-secondary-text" aria-label="Close add feature">
                <X size={18} />
              </button>
            </div>
            <div className="cc-mobile-sheet-body min-h-0 flex-1 space-y-4 overflow-y-auto p-5">
              <label className="block">
                <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Select work</span>
                <div className="flex items-center gap-3 rounded-2xl border border-pup-maroon/20 bg-soft-maroon p-3">
                  <img src="/__mockup/images/thumbnail_1.jpg" alt="Digital Sinta selection" className="h-12 w-12 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <p className="text-sm font-black text-primary-text">Digital Sinta</p>
                    <p className="text-xs text-secondary-text">Rafael Mendoza • CCIS</p>
                  </div>
                </div>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Feature type</span>
                  <select className="min-h-11 w-full rounded-xl border border-border bg-secondary-surface px-3 py-3 text-base">
                    <option>Work of the Week</option>
                    <option>Moderator's Pick</option>
                    <option>College Highlight</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Location</span>
                  <select className="min-h-11 w-full rounded-xl border border-border bg-secondary-surface px-3 py-3 text-base">
                    <option>Home</option>
                    <option>Explore</option>
                    <option>College page</option>
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="mb-1 block text-[11px] font-black uppercase tracking-wide text-secondary-text">Editorial caption</span>
                <textarea rows={3} placeholder="Add a short reason for featuring this work." className="w-full rounded-xl border border-border bg-secondary-surface px-3 py-3 text-base" />
              </label>
            </div>
            <div className="shrink-0 grid grid-cols-2 gap-2 border-t border-border bg-card-bg p-5">
              <button onClick={closeAddModal} className="min-h-11 rounded-xl border border-border py-3 text-sm font-black">Cancel</button>
              <button onClick={saveAddFeature} disabled={addProcessing} className="cc-primary-action min-h-11 rounded-xl bg-pup-maroon py-3 text-sm font-black text-white">
                {addProcessing ? "Saving..." : "Save Feature"}
              </button>
            </div>
          </div>
        </div>
      )}

      <ModeratorMobileBottomNav
        active="Featured"
        onDashboard={props.onDashboard}
        onPending={props.onPending}
        onReports={props.onReports}
        onFeatured={props.onFeatured}
        onOfficialContent={props.onOfficialContent}
        onHistory={props.onHistory}
        onEvents={props.onEvents}
      />
    </div>
  );
}
