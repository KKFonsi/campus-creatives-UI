import { useRef, useState } from 'react';
import { 
  Star, 
  Search,
  Plus,
  Calendar,
  MoreVertical,
  X,
  Edit2,
  CheckCircle2,
  Trash2,
  Info,
  Clock,
  Layout,
  StarHalf,
  Award
} from 'lucide-react';
import { InitialsAvatar } from './_shared/InitialsAvatar';
import { ModeratorDesktopSidebar } from './_shared/ModeratorDesktopSidebar';
import './_group.css';

interface ModeratorNavigationProps {
  onDashboard?: () => void;
  onPending?: () => void;
  onReports?: () => void;
  onFeatured?: () => void;
  onOfficialContent?: () => void;
  onHistory?: () => void;
  onEvents?: () => void;
}

const TopBar = ({ role = "Moderator" }) => (
  <header className="h-16 bg-card-bg border-b border-border flex items-center justify-between px-6 sticky top-0 z-10">
    <div className="relative w-96">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={18} />
      <input 
        type="text" 
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 bg-secondary-surface rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-pup-maroon/20"
      />
    </div>
    
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-sm font-semibold text-primary-text leading-tight text-right">Maria Moderator</div>
          <div className="text-[11px] font-bold text-pup-maroon uppercase tracking-wider">{role}</div>
        </div>
        <InitialsAvatar name="Maria Moderator" className="w-10 h-10 border border-pup-maroon/20" textClassName="text-xs" />
      </div>
    </div>
  </header>
);

export default function FeaturedWorksPage(props: ModeratorNavigationProps = {}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [addProcessing, setAddProcessing] = useState(false);
  const [featureModal, setFeatureModal] = useState<
    | { type: "edit"; id: number }
    | { type: "delete"; id: number }
    | { type: "discard"; id: number; next: () => void }
    | null
  >(null);
  const [editForm, setEditForm] = useState({ title: "", type: "", dates: "", recognition: "" });
  const [editErrors, setEditErrors] = useState<Record<string, string>>({});
  const [processingAction, setProcessingAction] = useState<string | null>(null);
  const featureTriggerRef = useRef<HTMLElement | null>(null);

  const [features, setFeatures] = useState([
    {
      id: 1,
      title: "Digital Sinta",
      creator: "Rafael Mendoza",
      college: "CCIS",
      type: "Work of the Week",
      badgeColor: "bg-pup-gold",
      dates: "June 12 - June 19",
      recognition: "Work of the Week — June 2026",
      image: "/__mockup/images/thumbnail_1.jpg"
    },
    {
      id: 2,
      title: "Polytechnic Dreams",
      creator: "Maria Santos",
      college: "CAL",
      type: "Creator of the Month",
      badgeColor: "bg-pup-maroon text-white",
      dates: "June 1 - June 30",
      recognition: "Creator of the Month — June",
      image: "/__mockup/images/thumbnail_2.jpg"
    },
    {
      id: 3,
      title: "Campus Frequencies",
      creator: "Bianca Reyes",
      college: "COC",
      type: "Moderator's Pick",
      badgeColor: "bg-secondary-surface text-primary-text",
      dates: "June 10 - June 17",
      recognition: "Staff Favorite June '26",
      image: "/__mockup/images/thumbnail_3.jpg"
    },
    {
      id: 4,
      title: "Pasig at Dusk",
      creator: "Ben Santos",
      college: "COC",
      type: "College Highlight",
      badgeColor: "bg-crimson-accent text-white",
      dates: "June 8 - June 15",
      recognition: "COC College Highlight",
      image: "/__mockup/images/thumbnail_4.jpg"
    }
  ]);

  const openFeatureModal = (modal: Exclude<typeof featureModal, null>) => {
    featureTriggerRef.current =
      typeof document !== "undefined" && document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    if (modal.type === "edit") {
      const item = features.find((feature) => feature.id === modal.id);
      if (item) {
        setEditForm({
          title: item.title,
          type: item.type,
          dates: item.dates,
          recognition: item.recognition,
        });
        setEditErrors({});
      }
    }
    setFeatureModal(modal);
  };

  const closeFeatureModal = () => {
    setFeatureModal(null);
    setProcessingAction(null);
    window.setTimeout(() => {
      featureTriggerRef.current?.focus();
      featureTriggerRef.current = null;
    }, 0);
  };

  const selectedFeature =
    featureModal && "id" in featureModal
      ? features.find((feature) => feature.id === featureModal.id)
      : null;

  const editDirty =
    Boolean(selectedFeature) &&
    (editForm.title !== selectedFeature?.title ||
      editForm.type !== selectedFeature?.type ||
      editForm.dates !== selectedFeature?.dates ||
      editForm.recognition !== selectedFeature?.recognition);

  const validateEditFeature = () => {
    const nextErrors: Record<string, string> = {};
    if (!editForm.title.trim()) nextErrors.title = "Title is required.";
    if (!editForm.type.trim()) nextErrors.type = "Select a content type.";
    if (!editForm.dates.trim()) nextErrors.dates = "Date range is required.";
    if (!editForm.recognition.trim()) nextErrors.recognition = "Recognition label is required.";
    setEditErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const saveEditFeature = () => {
    if (!selectedFeature || !validateEditFeature() || processingAction) return;
    setProcessingAction("feature-save");
    window.setTimeout(() => {
      setFeatures((items) =>
        items.map((item) =>
          item.id === selectedFeature.id
            ? { ...item, ...editForm }
            : item,
        ),
      );
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
      setShowAddModal(false);
      setSearchQuery("");
      setAddProcessing(false);
    }, 550);
  };

  const collegeHighlights = [
    { id: 'CAF', name: 'College of Accountancy and Finance', img: '/__mockup/images/colleges/caf-pup-main-building.jpg' },
    { id: 'CADBE', name: 'College of Architecture and the Built Environment', img: '/__mockup/images/colleges/cadbe-pup-campus-landmark.jpg' },
    { id: 'CAL', name: 'College of Arts and Letters', img: '/__mockup/images/colleges/cal-pup-campus-artwork.jpg' },
    { id: 'CBA', name: 'College of Business Administration', img: '/__mockup/images/colleges/cba-pup-campus-plaza.jpg' },
    { id: 'COC', name: 'College of Communication', img: '/__mockup/images/colleges/coc-pup-ndc-campus.jpg' },
    { id: 'CCIS', name: 'College of Computer and Information Sciences', img: '/__mockup/images/colleges/ccis-pup-main-building.jpg' },
    { id: 'COED', name: 'College of Education', img: '/__mockup/images/colleges/coed-pup-campus-learning.jpg' },
    { id: 'CE', name: 'College of Engineering', img: '/__mockup/images/colleges/ce-pup-engineering-campus.jpg' },
    { id: 'CHK', name: 'College of Human Kinetics', img: '/__mockup/images/colleges/chk-pup-campus-life.jpg' },
    { id: 'CL', name: 'College of Law', img: '/__mockup/images/colleges/cl-pup-law-campus.jpg' },
    { id: 'CPSPA', name: 'College of Political Science and Public Administration', img: '/__mockup/images/colleges/cpspa-pup-public-service.jpg' },
    { id: 'CS', name: 'College of Science', img: '/__mockup/images/colleges/cs-pup-science-campus.jpg' },
    { id: 'CSSD', name: 'College of Social Sciences and Development', img: '/__mockup/images/colleges/cssd-pup-community-campus.jpg' },
    { id: 'CTHTM', name: 'College of Tourism, Hospitality and Transportation Management', img: '/__mockup/images/colleges/cthtm-pup-hasmin-campus.jpg' },
    { id: 'ITECH', name: 'Institute of Technology', img: '/__mockup/images/colleges/itech-pup-technology-campus.jpg' },
    { id: 'GS', name: 'Graduate School', img: '/__mockup/images/colleges/gs-pup-graduate-school.jpg' },
  ];

  const candidates = [
    { id: 1, title: "Railway Sketches", creator: "Rafael Mendoza", college: "CCIS", type: "Visual Art", image: "/__mockup/images/thumbnail_2.jpg" },
    { id: 2, title: "Sta. Mesa After Rain", creator: "Bianca Reyes", college: "COC", type: "Photography", image: "/__mockup/images/thumbnail_3.jpg" },
    { id: 3, title: "Tinig ng Bayan", creator: "Maria Santos", college: "CAL", type: "Music", image: "/__mockup/images/thumbnail_4.jpg" }
  ];

  const scheduled = [
    { id: 1, name: "Polytechnic Pulse", type: "Work of the Week", start: "June 20", end: "June 27", status: "Scheduled" }
  ];

  return (
    <div className="flex min-h-screen bg-main-bg font-inter">
      <ModeratorDesktopSidebar {...props} />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-main-bg">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary-text uppercase tracking-tight">Featured Works</h1>
            <button 
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-pup-maroon text-white rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-deep-maroon transition-colors shadow-sm uppercase tracking-wide"
            >
              <Plus size={18} />
              Add Feature
            </button>
          </div>

          {/* Current Homepage Features */}
          <section>
            <h2 className="text-sm font-bold text-white bg-pup-maroon px-4 py-1.5 inline-block rounded-t-lg uppercase tracking-widest mb-0">
              Current Homepage Features
            </h2>
            <div className="p-4 bg-card-bg rounded-b-xl rounded-r-xl border border-border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((item) => (
                  <div key={item.id} className="bg-white border border-border rounded-xl overflow-hidden group relative shadow-sm">
                    <div className="aspect-[3/2] bg-secondary-surface relative overflow-hidden">
                      <img src={item.image} alt={`${item.title} preview`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                      <div className="absolute top-2 right-2 flex flex-col gap-1">
                        <button
                          type="button"
                          onClick={() => openFeatureModal({ type: "delete", id: item.id })}
                          disabled={processingAction === `delete-${item.id}`}
                          aria-label={`Remove ${item.title}`}
                          className="p-1.5 bg-white/90 backdrop-blur-sm text-red-600 rounded-full hover:bg-white shadow-sm"
                        >
                          <Trash2 size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => openFeatureModal({ type: "edit", id: item.id })}
                          aria-label={`Edit ${item.title}`}
                          className="p-1.5 bg-white/90 backdrop-blur-sm text-pup-maroon rounded-full hover:bg-white shadow-sm"
                        >
                          <Edit2 size={14} />
                        </button>
                      </div>
                      <div className={`absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${item.badgeColor}`}>
                        {item.type}
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-bold text-primary-text text-sm truncate">{item.title}</h3>
                      <p className="text-xs text-secondary-text mb-2">{item.creator} • {item.college}</p>
                      <div className="flex flex-col gap-1.5 border-t border-border pt-2">
                        <div className="flex items-center gap-1.5 text-[10px] text-muted-text uppercase font-bold tracking-tight">
                          <Calendar size={12} />
                          {item.dates}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-pup-maroon font-bold uppercase tracking-tight">
                          <Award size={12} />
                          {item.recognition}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {features.length === 0 && (
                  <div className="col-span-full rounded-2xl border border-dashed border-border bg-secondary-surface p-8 text-center">
                    <StarHalf className="mx-auto text-pup-maroon" size={34} />
                    <h3 className="mt-3 text-lg font-black text-primary-text">No featured works yet.</h3>
                    <p className="mt-1 text-sm text-secondary-text">Removed works disappear from this mock Featured Works list.</p>
                    <button
                      type="button"
                      onClick={() => setShowAddModal(true)}
                      className="cc-primary-action mt-4 rounded-xl bg-pup-maroon px-4 py-2 text-sm font-black text-white"
                    >
                      Add Feature
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* College Highlights */}
          <section>
            <h2 className="text-sm font-bold text-primary-text uppercase tracking-widest px-1 mb-4">College Highlights</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {collegeHighlights.map((item) => (
                <div key={item.id} className="bg-card-bg border border-border rounded-xl p-3 flex flex-col gap-3 hover:border-pup-maroon/40 transition-colors shadow-sm group">
                  <div className="w-full aspect-[4/3] bg-secondary-surface rounded-lg overflow-hidden relative">
                    <img src={item.img} alt={`${item.name} highlight preview`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute left-2 top-2 rounded bg-pup-gold px-2 py-0.5 text-[10px] font-black text-pup-maroon">{item.id}</div>
                  </div>
                  <div className="text-center">
                    <div className="px-2 py-0.5 bg-soft-maroon text-pup-maroon text-[9px] font-bold rounded uppercase tracking-wider mb-1">College Highlight</div>
                    <div className="text-xs font-bold text-primary-text leading-tight line-clamp-2">{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature Candidates */}
            <section className="space-y-4">
              <div>
                <h2 className="text-sm font-bold text-primary-text uppercase tracking-widest px-1">Feature Candidates</h2>
                <p className="text-xs text-muted-text italic px-1 mt-1">Candidates are works flagged by moderators during review</p>
              </div>
              <div className="space-y-3">
                {candidates.map((item) => (
                  <div key={item.id} className="bg-card-bg border border-border rounded-xl p-3 flex items-center gap-4 hover:border-pup-maroon/20 transition-colors group">
                    <div className="w-16 h-16 bg-secondary-surface rounded-lg flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={`${item.title} feature candidate`} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="text-sm font-bold text-primary-text truncate">{item.title}</h4>
                        <span className="px-1.5 py-0.5 bg-soft-gold text-warm-gold text-[9px] font-bold rounded uppercase tracking-tight flex items-center gap-0.5">
                          <Star size={8} /> Candidate
                        </span>
                      </div>
                      <p className="text-xs text-secondary-text truncate">{item.creator} • {item.college}</p>
                    </div>
                    <button className="px-3 py-1.5 bg-pup-maroon text-white text-xs font-bold rounded-lg hover:bg-deep-maroon transition-colors uppercase tracking-tight">
                      Add to Featured
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Scheduled Features */}
            <section className="space-y-4">
              <h2 className="text-sm font-bold text-primary-text uppercase tracking-widest px-1">Scheduled Features</h2>
              <div className="bg-card-bg border border-border rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary-surface/50 border-b border-border">
                    <tr>
                      <th className="px-4 py-2 font-bold text-[10px] text-muted-text uppercase tracking-widest">Work Name</th>
                      <th className="px-4 py-2 font-bold text-[10px] text-muted-text uppercase tracking-widest">Type</th>
                      <th className="px-4 py-2 font-bold text-[10px] text-muted-text uppercase tracking-widest">Date Range</th>
                      <th className="px-4 py-2 font-bold text-[10px] text-muted-text uppercase tracking-widest text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {scheduled.map((item) => (
                      <tr key={item.id} className="hover:bg-secondary-surface/20 transition-colors">
                        <td className="px-4 py-3 font-semibold text-primary-text">{item.name}</td>
                        <td className="px-4 py-3 text-xs text-secondary-text">{item.type}</td>
                        <td className="px-4 py-3 text-xs text-muted-text tracking-tight uppercase">{item.start} — {item.end}</td>
                        <td className="px-4 py-3 text-right">
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100 uppercase tracking-tighter">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>

      {featureModal && featureModal.type !== "discard" && selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="moderator-feature-modal-title"
            className="w-full max-w-lg rounded-2xl border border-border bg-card-bg p-6 shadow-2xl"
          >
            {featureModal.type === "delete" ? (
              <div className="space-y-4">
                <div className="rounded-2xl border border-status-rejected/30 bg-status-rejected/10 p-4">
                  <p className="text-xs font-black uppercase tracking-wide text-status-rejected">Delete featured work</p>
                  <h2 id="moderator-feature-modal-title" className="mt-1 text-xl font-black text-primary-text">{selectedFeature.title}</h2>
                </div>
                <p className="text-sm leading-relaxed text-secondary-text">
                  This work will be removed from the Featured Works list for this mock session. The underlying student work is not deleted.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" onClick={closeFeatureModal} disabled={processingAction === "feature-delete"} className="cc-control rounded-xl border border-border py-3 text-sm font-black">
                    Cancel
                  </button>
                  <button type="button" onClick={deleteFeature} disabled={processingAction === "feature-delete"} className="cc-danger-action rounded-xl bg-status-rejected py-3 text-sm font-black text-white">
                    {processingAction === "feature-delete" ? "Deleting..." : "Remove Feature"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 id="moderator-feature-modal-title" className="text-xl font-black text-primary-text">Edit Feature</h2>
                    <p className="text-sm text-secondary-text">Update the mock feature details for {selectedFeature.title}.</p>
                  </div>
                  <button type="button" onClick={requestCloseEdit} className="rounded-full bg-secondary-surface p-2 text-secondary-text" aria-label="Close edit feature">
                    <X size={18} />
                  </button>
                </div>
                <div className="grid gap-3">
                  {([
                    ["title", "Title", "Title is required."],
                    ["type", "Feature type", "Select a content type."],
                    ["dates", "Date range", "Date range is required."],
                    ["recognition", "Recognition label", "Recognition label is required."],
                  ] as const).map(([key, label]) => (
                    <label key={key} className="block">
                      <span className="mb-1 flex items-center gap-1 text-[11px] font-black uppercase tracking-wide text-secondary-text">
                        {label} <span aria-hidden="true" className="text-status-rejected">*</span>
                      </span>
                      <input
                        value={editForm[key]}
                        onChange={(event) => {
                          setEditForm({ ...editForm, [key]: event.target.value });
                          if (editErrors[key]) setEditErrors({ ...editErrors, [key]: "" });
                        }}
                        aria-invalid={Boolean(editErrors[key])}
                        className={`w-full rounded-xl border bg-secondary-surface px-4 py-3 text-sm outline-none focus:border-pup-maroon ${editErrors[key] ? "border-status-rejected ring-2 ring-status-rejected/20" : "border-border"}`}
                      />
                      {editErrors[key] && (
                        <p className="mt-1 flex items-center gap-1 text-xs font-bold text-status-rejected">
                          <Info size={12} /> {editErrors[key]}
                        </p>
                      )}
                    </label>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button type="button" onClick={requestCloseEdit} disabled={processingAction === "feature-save"} className="cc-control rounded-xl border border-border py-3 text-sm font-black">
                    Cancel
                  </button>
                  <button type="button" onClick={saveEditFeature} disabled={!editForm.title.trim() || !editForm.type.trim() || !editForm.dates.trim() || !editForm.recognition.trim() || processingAction === "feature-save"} className="cc-primary-action rounded-xl bg-pup-maroon py-3 text-sm font-black text-white">
                    {processingAction === "feature-save" ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {featureModal?.type === "discard" && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 p-4">
          <div role="dialog" aria-modal="true" className="w-full max-w-md rounded-2xl border border-border bg-card-bg p-6 shadow-2xl">
            <h2 className="text-xl font-black text-primary-text">Discard changes?</h2>
            <p className="mt-2 text-sm text-secondary-text">Your edited feature details have not been saved.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button type="button" onClick={() => openFeatureModal({ type: "edit", id: featureModal.id })} className="cc-control rounded-xl border border-border py-3 text-sm font-black">
                Stay Editing
              </button>
              <button type="button" onClick={featureModal.next} className="cc-danger-action rounded-xl bg-status-rejected py-3 text-sm font-black text-white">
                Discard Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Feature Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-card-bg w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-border">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-secondary-surface/30">
              <h3 className="font-bold text-primary-text uppercase tracking-tight">Add Featured Work</h3>
              <button onClick={() => setShowAddModal(false)} className="p-1 hover:bg-secondary-surface rounded-lg">
                <X size={20} className="text-muted-text" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Search Work</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text" size={16} />
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Type work title or creator..."
                      className="w-full pl-9 pr-4 py-2 bg-secondary-surface border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pup-maroon/20"
                    />
                  </div>
                  {searchQuery.toLowerCase().includes('digital') && (
                    <div className="mt-2 p-2 bg-soft-maroon border border-pup-maroon/20 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/50 rounded overflow-hidden">
                          <img src="/__mockup/images/thumbnail_1.jpg" alt="Digital Sinta search result" className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-pup-maroon">Digital Sinta</div>
                          <div className="text-[10px] text-secondary-text">Rafael Mendoza</div>
                        </div>
                      </div>
                      <CheckCircle2 size={16} className="text-pup-maroon" />
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Feature Type</label>
                  <select className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-sm focus:outline-none appearance-none font-medium">
                    <option>Work of the Week</option>
                    <option>Creator of the Month</option>
                    <option>Moderator's Pick</option>
                    <option>College Highlight</option>
                    <option>Event Finalist</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Display Location</label>
                  <select className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-sm focus:outline-none appearance-none font-medium">
                    <option>Homepage Hero</option>
                    <option>Explore Spotlight</option>
                    <option>College Showcase Header</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Start Date</label>
                    <input type="date" className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-xs" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">End Date</label>
                    <input type="date" className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-xs" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Recognition Label</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Work of the Week — June 2026"
                    className="w-full p-2 bg-secondary-surface border border-border rounded-lg text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Editorial Caption</label>
                  <textarea 
                    placeholder="Why was this work selected?"
                    className="w-full h-24 p-2 bg-secondary-surface border border-border rounded-lg text-sm resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-muted-text uppercase tracking-widest">Preview Preview</label>
                <div className="bg-secondary-surface rounded-xl p-4 border border-border space-y-4">
                  <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm max-w-[240px] mx-auto">
                    <div className="aspect-[3/2] bg-secondary-surface relative">
                      <img src="/__mockup/images/thumbnail_1.jpg" alt="Feature card preview" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-pup-gold">
                        Work of the Week
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="text-sm font-bold text-primary-text mb-0.5 uppercase tracking-tight">Digital Sinta</div>
                      <div className="text-[10px] text-secondary-text mb-2">Rafael Mendoza • CCIS</div>
                      <div className="pt-2 border-t border-border space-y-1">
                        <div className="flex items-center gap-1.5 text-[9px] text-muted-text font-bold uppercase">
                          <Calendar size={10} /> June 12 - June 19
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] text-pup-maroon font-bold uppercase">
                          <Award size={10} /> Work of the Week — June 2026
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/50 rounded-lg border border-border text-[11px] leading-relaxed text-secondary-text italic">
                    "This striking digital illustration capture's the spirit of sinta through a modern, polytechnic lens..." (Editorial Preview)
                  </div>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
                  <Info className="text-amber-600 flex-shrink-0" size={16} />
                  <div>
                    <div className="text-xs font-bold text-amber-800 uppercase tracking-tight">Feature Capacity Warning</div>
                    <p className="text-[10px] text-amber-700 mt-0.5 font-medium leading-normal italic">
                      Currently 4 of 6 active slots used for Homepage Hero. Adding this will occupy a slot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-border bg-secondary-surface/30 flex items-center justify-between">
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-sm font-bold text-secondary-text hover:underline uppercase tracking-widest"
              >
                Cancel
              </button>
              <div className="flex gap-3">
                <button className="px-4 py-2 border border-pup-maroon text-pup-maroon rounded-lg text-xs font-bold hover:bg-soft-maroon transition-colors uppercase tracking-widest">
                  Preview on Home
                </button>
                <button 
                  onClick={saveAddFeature}
                  disabled={addProcessing}
                  className="cc-primary-action px-6 py-2 bg-pup-maroon text-white rounded-lg text-xs font-bold hover:bg-deep-maroon transition-colors shadow-sm uppercase tracking-widest disabled:opacity-60"
                >
                  {addProcessing ? "Saving..." : "Save Feature"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
