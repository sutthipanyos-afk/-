import React, { useState } from 'react';
import {
  X,
  GraduationCap,
  BookOpen,
  Award,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Share2,
  Calendar,
  Sparkles,
  ArrowRight,
  Download,
  Copy,
  Check,
  Camera,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Course, FacultyMember, StudentWork, NewsItem, LearningLesson } from '../data/edtechData';

// -------------------------------------------------------------
// 1. Course Modal
// -------------------------------------------------------------
interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const [copied, setCopied] = useState(false);
  if (!course) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`${course.code} ${course.nameTh} (${course.credits})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#0B1F33] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex items-start justify-between bg-slate-50 dark:bg-black/20">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="font-bold text-[#2563EB] dark:text-blue-400 text-sm">
                {course.code}
              </span>
              <span aria-hidden="true">·</span>
              <span>{course.credits}</span>
              {course.year && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>ชั้นปีที่ {course.year}</span>
                </>
              )}
            </div>
            <h3 className="text-xl font-bold text-[#0B1F33] dark:text-white">
              {course.nameTh}
            </h3>
            <div className="text-xs text-slate-500 dark:text-slate-400 italic">
              {course.nameEn}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {/* Description */}
          <div className="space-y-2">
            <div className="font-bold text-xs text-[#00A99D] uppercase tracking-wider">
              คำอธิบายรายวิชา (Course Description)
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-[#F5F7FA] dark:bg-[#071320] p-4 rounded-xl border border-slate-200/60 dark:border-white/5">
              {course.description}
            </p>
          </div>

          {/* Topics */}
          {course.topics && course.topics.length > 0 && (
            <div className="space-y-2">
              <div className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                หัวข้อสาระการเรียนรู้หลัก (Key Topics)
              </div>
              <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                {course.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#00A99D] font-mono font-bold">0{idx + 1}.</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Learning Outcomes */}
          {course.learningOutcomes && course.learningOutcomes.length > 0 && (
            <div className="space-y-2">
              <div className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                ผลลัพธ์การเรียนรู้ที่คาดหวัง (Course Learning Outcomes)
              </div>
              <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                {course.learningOutcomes.map((clo, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{clo}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex items-center justify-between text-xs">
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-[#00A99D] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'คัดลอกข้อมูลแล้ว' : 'คัดลอกชื่อรายวิชา'}</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#0B1F33] dark:bg-[#2563EB] text-white font-medium hover:opacity-90"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Faculty Profile Modal
// -------------------------------------------------------------
interface FacultyModalProps {
  faculty: FacultyMember | null;
  onClose: () => void;
}

export const FacultyModal: React.FC<FacultyModalProps> = ({ faculty, onClose }) => {
  if (!faculty) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#0B1F33] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex items-start justify-between bg-[#0B1F33] text-white relative">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-800 border-2 border-white/20 shadow-lg shrink-0">
              <img
                src={faculty.imageUrl}
                alt={faculty.nameTh}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (faculty.fallbackImageUrl && e.currentTarget.src !== faculty.fallbackImageUrl) {
                    e.currentTarget.src = faculty.fallbackImageUrl;
                  } else {
                    e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%230F2942"/><circle cx="100" cy="75" r="38" fill="%2306B6D4" opacity="0.4"/><text x="100" y="85" font-family="sans-serif" font-size="24" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">${encodeURIComponent(faculty.nameTh.slice(0, 3))}</text><text x="100" y="160" font-family="sans-serif" font-size="12" fill="%2394A3B8" text-anchor="middle">อาจารย์ประจำภาควิชา</text></svg>`;
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-[#00A99D] font-bold">
                {faculty.academicRank}
              </div>
              <h3 className="text-xl font-bold text-white">
                {faculty.nameTh}
              </h3>
              <div className="text-xs text-slate-300 font-light">
                {faculty.nameEn}
              </div>
              <div className="text-xs text-blue-300 pt-0.5 font-medium">
                {faculty.role}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {faculty.highlight && (
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 text-[#2563EB] dark:text-blue-300 font-medium text-xs flex items-center gap-2">
              <Award className="w-4 h-4 shrink-0" />
              <span>{faculty.highlight}</span>
            </div>
          )}

          {/* Education */}
          <div className="space-y-2">
            <div className="font-bold text-xs text-[#00A99D] uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>ประวัติการศึกษา (Education)</span>
            </div>
            <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
              {faculty.education.map((edu, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-400 font-mono">·</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="space-y-2">
            <div className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>ความเชี่ยวชาญเฉพาะทาง (Areas of Expertise)</span>
            </div>
            <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
              {faculty.expertise.map((exp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#00A99D]">✓</span>
                  <span>{exp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Office */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
            <div className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              การติดต่อและสถานที่ทำงาน (Office & Contact)
            </div>
            <div className="space-y-1.5 text-slate-600 dark:text-slate-300 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                <span>{faculty.office}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a
                  href={`mailto:${faculty.email}`}
                  className="text-[#2563EB] dark:text-blue-400 hover:underline font-mono"
                >
                  {faculty.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-mono-numbers">
            {faculty.publicationsCount}+ งานวิจัยตีพิมพ์
          </span>
          <div className="flex items-center gap-2">
            {faculty.profileLink && (
              <a
                href={faculty.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5"
              >
                <span>เอกสารประวัติ</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={`mailto:${faculty.email}`}
              className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white hover:bg-blue-600 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>ส่งอีเมล</span>
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Student Work Modal
// -------------------------------------------------------------
interface WorkModalProps {
  work: StudentWork | null;
  onClose: () => void;
}

export const WorkModal: React.FC<WorkModalProps> = ({ work, onClose }) => {
  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#0B1F33] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner image */}
        <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
          <img
            src={work.image || '/src/assets/images/student_work_interactive_vr_1790939657670.jpg'}
            alt={work.titleTh}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#00A99D]">
              {work.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold leading-tight">
              {work.titleTh}
            </h3>
            <div className="text-xs text-slate-300 italic">
              {work.titleEn}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {work.awards && (
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 text-amber-700 dark:text-amber-300 font-medium text-xs flex items-center gap-2">
              <Award className="w-4 h-4 shrink-0" />
              <span>{work.awards}</span>
            </div>
          )}

          <div className="space-y-2">
            <div className="font-bold text-xs text-[#00A99D] uppercase tracking-wider">
              เกี่ยวกับโครงงานและนวัตกรรม
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {work.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#071320] border border-slate-200/60 dark:border-white/5">
            <div>
              <div className="text-[11px] text-slate-400 font-medium">คณะผู้จัดทำ (Creators):</div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white mt-1">
                {work.creators.join(', ')}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">อาจารย์ที่ปรึกษาโครงงาน (Advisor):</div>
              <div className="flex items-center gap-2.5 mt-1.5">
                {work.advisorImageUrl && (
                  <img
                    src={work.advisorImageUrl}
                    alt={work.advisor}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan-400/60 shadow-sm shrink-0"
                  />
                )}
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                    {work.advisor}
                  </div>
                  {work.advisorRole && (
                    <div className="text-[11px] text-cyan-600 dark:text-cyan-400 font-light">
                      {work.advisorRole}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              เทคโนโลยีและเครื่องมือที่ใช้ (Tech Stack)
            </div>
            <div className="flex flex-wrap gap-2">
              {work.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex items-center justify-between text-xs">
          <span className="text-slate-400 font-mono">
            ปีการศึกษา {work.year} · คณะศึกษาศาสตร์ ม.ศิลปากร
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#0B1F33] dark:bg-[#2563EB] text-white font-medium hover:opacity-90"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. News Modal
// -------------------------------------------------------------
interface NewsModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ news, onClose }) => {
  const [shared, setShared] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  if (!news) return null;

  const galleryImages = news.gallery && news.gallery.length > 0 ? news.gallery : (news.image ? [news.image] : []);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="w-full max-w-3xl bg-white dark:bg-[#071626] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex items-start justify-between bg-gradient-to-r from-[#06121E] to-[#0A1E33] text-white">
          <div className="space-y-2 max-w-[85%]">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300">
              <span className="font-semibold px-2 py-0.5 rounded bg-white/10">{news.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{news.date}</span>
              </span>
              {news.organizer && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300 truncate">{news.organizer}</span>
                </>
              )}
            </div>
            <h3 className="text-xl font-bold text-white leading-snug">
              {news.title}
            </h3>
            {news.location && (
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-light">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{news.location}</span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          
          {/* Photo Gallery Viewer if available, otherwise Official Event Header */}
          {galleryImages.length > 0 ? (
            <div className="space-y-3">
              {/* Main Active Photo */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/80 dark:border-white/10 shadow-md group">
                <img
                  src={galleryImages[activePhotoIndex]}
                  alt={`${news.title} (${activePhotoIndex + 1})`}
                  className="w-full h-full object-contain bg-black/90"
                />

                {/* Left/Right Navigation Arrows */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevPhoto}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-md focus:outline-none"
                      title="ภาพก่อนหน้า"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextPhoto}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-md focus:outline-none"
                      title="ภาพถัดไป"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Photo Counter Badge */}
                <div className="absolute bottom-3 right-3 text-xs font-mono font-medium text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15 flex items-center gap-1.5 shadow-md">
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ภาพที่ {activePhotoIndex + 1} จาก {galleryImages.length} ภาพ</span>
                </div>
              </div>

              {/* Thumbnails Strip / Grid */}
              {galleryImages.length > 1 && (
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wide flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-cyan-500" />
                    <span>แกลเลอรีภาพถ่ายกิจกรรมทั้งหมด ({galleryImages.length} ภาพ):</span>
                  </div>
                  <div className="grid grid-cols-6 sm:grid-cols-9 gap-1.5 p-2 bg-slate-100/70 dark:bg-[#06121E]/60 rounded-2xl border border-slate-200/80 dark:border-white/5 overflow-hidden">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                          activePhotoIndex === idx
                            ? 'border-cyan-400 ring-2 ring-cyan-400/40 scale-105 z-10'
                            : 'border-transparent opacity-70 hover:opacity-100 hover:border-slate-300'
                        }`}
                        title={`เลือกดูภาพที่ ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900/10 via-cyan-900/10 to-teal-900/10 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="font-bold text-[#06121E] dark:text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>กิจกรรมทางการ ภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร</span>
                </div>
                <div className="text-slate-500 dark:text-slate-400">
                  {news.date} · {news.location || 'มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์'}
                </div>
              </div>
              {news.sourceUrl && (
                <a
                  href={news.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold shadow-sm hover:opacity-95 shrink-0"
                >
                  <span>ดูอัลบั้มภาพถ่ายต้นฉบับบน Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}

          {/* News Summary Banner */}
          <div className="p-4 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200/60 dark:border-cyan-800/40 text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            {news.summary}
          </div>

          {/* News Content Paragraphs */}
          <div className="space-y-3.5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
            {news.content.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Source Attribution & Official Link */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div>
              <span>แหล่งที่มา: </span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {news.organizer || 'ภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร'}
              </span>
            </div>

            {news.sourceUrl && (
              <a
                href={news.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
              >
                <span>{news.sourceUrl.includes('facebook') ? 'ดูโพสต์ต้นฉบับบน Facebook ภาควิชาฯ' : 'ดูข่าวต้นฉบับ (educ.su.ac.th)'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex items-center justify-between text-xs">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-200 dark:hover:bg-white/5 transition-all"
          >
            <Share2 className="w-4 h-4 text-cyan-500" />
            <span>{shared ? 'คัดลอกลิงก์แล้ว' : 'แชร์ข่าวสารนี้'}</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold hover:opacity-90 shadow-sm transition-all"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 5. Interactive Lesson & Quiz Modal with Certificate Generator
// -------------------------------------------------------------
interface LessonModalProps {
  lesson: LearningLesson | null;
  onClose: () => void;
  isCompleted: boolean;
  onCompleteLesson: (lessonId: string) => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  onClose,
  isCompleted,
  onCompleteLesson,
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'quiz' | 'certificate'>('content');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [showCert, setShowCert] = useState(false);
  const [studentName, setStudentName] = useState('ผู้เข้ารับการอบรม');

  if (!lesson) return null;

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === lesson.quiz.correctIndex) {
      onCompleteLesson(lesson.id);
    }
  };

  const isCorrect = selectedOption === lesson.quiz.correctIndex;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-3xl bg-white dark:bg-[#0B1F33] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Tab Navigation */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {lesson.module} · {lesson.duration} · {lesson.level}
            </div>
            <h3 className="text-xl font-bold text-[#0B1F33] dark:text-white leading-snug">
              {lesson.titleTh}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex p-1 bg-slate-200 dark:bg-white/10 rounded-xl text-xs">
              <button
                onClick={() => setActiveTab('content')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'content'
                    ? 'bg-white dark:bg-[#0B1F33] text-[#0B1F33] dark:text-white font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                เนื้อหาบทเรียน
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'quiz'
                    ? 'bg-white dark:bg-[#0B1F33] text-[#0B1F33] dark:text-white font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                แบบทดสอบ (Quiz)
              </button>
              {isCompleted && (
                <button
                  onClick={() => setActiveTab('certificate')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === 'certificate'
                      ? 'bg-[#00A99D] text-white font-bold shadow-sm'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  ใบรับรอง
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Content Sections */}
        {activeTab === 'content' && (
          <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#F5F7FA] dark:bg-[#071320] border border-slate-200/60 dark:border-white/5 space-y-2">
              <div className="text-xs font-bold text-[#00A99D] uppercase tracking-wider">
                วัตถุประสงค์การเรียนรู้ (Learning Objectives)
              </div>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                {lesson.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#00A99D]">✓</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              {lesson.contentSections.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-bold text-[#0B1F33] dark:text-white">
                    {sec.heading}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                ศึกษาเนื้อหาครบแล้ว ไปทำแบบทดสอบเพื่อบันทึกผล
              </span>
              <button
                onClick={() => setActiveTab('quiz')}
                className="px-4 py-2 rounded-lg bg-[#2563EB] text-white text-xs font-semibold hover:bg-blue-600 flex items-center gap-1"
              >
                <span>ไปทำแบบทดสอบ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Quiz */}
        {activeTab === 'quiz' && (
          <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#00A99D]">
                Knowledge Checkpoint · คำถามวัดความเข้าใจ
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#0B1F33] dark:text-white leading-snug">
                {lesson.quiz.question}
              </h4>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {lesson.quiz.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                let optionStyle =
                  'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200';

                if (isAnswerSubmitted) {
                  if (idx === lesson.quiz.correctIndex) {
                    optionStyle =
                      'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-semibold';
                  } else if (isSelected && idx !== lesson.quiz.correctIndex) {
                    optionStyle =
                      'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-200';
                  }
                } else if (isSelected) {
                  optionStyle =
                    'bg-blue-50 dark:bg-blue-950/40 border-[#2563EB] text-[#2563EB] dark:text-blue-300 font-semibold';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => setSelectedOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full border flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback */}
            {isAnswerSubmitted && (
              <div
                className={`p-4 rounded-xl border space-y-2 animate-in fade-in duration-200 ${
                  isCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 text-emerald-900 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 text-rose-900 dark:text-rose-200'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <span>คำตอบถูกต้อง! ยินดีด้วยคุณผ่านบทเรียนนี้แล้ว</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                      <span>คำตอบยังไม่ถูกต้อง ลองศึกษาคำอธิบายด้านล่าง</span>
                    </>
                  )}
                </div>
                <p className="text-xs leading-relaxed">
                  {lesson.quiz.explanation}
                </p>

                {isCorrect && (
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveTab('certificate')}
                      className="px-4 py-2 rounded-lg bg-[#00A99D] text-white text-xs font-semibold hover:bg-teal-600 transition-colors flex items-center gap-1.5"
                    >
                      <Award className="w-4 h-4" />
                      <span>ดูใบประกาศนียบัตรดิจิทัล</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              {isAnswerSubmitted && !isCorrect ? (
                <button
                  onClick={() => {
                    setIsAnswerSubmitted(false);
                    setSelectedOption(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white text-xs font-semibold"
                >
                  ลองทำใหม่อีกครั้ง
                </button>
              ) : !isAnswerSubmitted ? (
                <button
                  disabled={selectedOption === null}
                  onClick={handleSubmitAnswer}
                  className="px-5 py-2.5 rounded-lg bg-[#2563EB] disabled:opacity-40 text-white text-xs font-semibold hover:bg-blue-600 transition-colors"
                >
                  ส่งคำตอบ
                </button>
              ) : null}
            </div>
          </div>
        )}

        {/* Tab 3: Digital Certificate View */}
        {activeTab === 'certificate' && (
          <div className="p-6 overflow-y-auto space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#00A99D] uppercase tracking-wider">
                ใบประกาศนียบัตรการผ่านการเรียนรู้ดิจิทัล (Digital Credential)
              </div>
              <p className="text-xs text-slate-500">
                สามารถเปลี่ยนชื่อผู้รับและบันทึกภาพเพื่อใช้เป็นหลักฐานการอบรม
              </p>
              <div className="flex items-center gap-2 max-w-sm pt-1">
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="กรอกชื่อ-นามสกุล ของท่าน"
                  className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#071320] text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Certificate Frame */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0B1F33] to-[#071320] text-white border-4 border-[#00A99D]/40 text-center relative overflow-hidden shadow-2xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#00A99D]/20 text-[#00A99D] mx-auto flex items-center justify-center font-bold text-lg border border-[#00A99D]/40">
                SU
              </div>
              <div className="space-y-1">
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#00A99D]">
                  DEPARTMENT OF EDUCATIONAL TECHNOLOGY · SILPAKORN UNIVERSITY
                </div>
                <h2 className="text-2xl font-extrabold font-display">
                  CERTIFICATE OF COMPLETION
                </h2>
                <div className="text-xs text-slate-300 font-light">
                  ใบประกาศนียบัตรนี้รับรองว่า
                </div>
              </div>

              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-teal-200 to-emerald-300 font-display py-2">
                {studentName || 'ผู้เข้ารับการอบรม'}
              </div>

              <div className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                ได้ผ่านการศึกษาและประเมินผลสัมฤทธิ์ในหลักสูตรไมโครเลิร์นนิง <br />
                <span className="font-bold text-white">“{lesson.titleTh}”</span> <br />
                ตามเกณฑ์มาตรฐานของภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <div>รหัสการรับรอง: EDTECH-SU-{lesson.id.toUpperCase()}</div>
                <div>ออกให้เมื่อ: {new Date().toLocaleDateString('th-TH')}</div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-lg bg-[#2563EB] text-white text-xs font-semibold hover:bg-blue-600 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>พิมพ์ / บันทึก PDF</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex items-center justify-between text-xs">
          <span className="text-slate-400 font-mono">
            {isCompleted ? '✓ บันทึกผลลงในระบบแล้ว' : 'ยังไม่ผ่านแบบทดสอบ'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#0B1F33] dark:bg-[#2563EB] text-white font-medium hover:opacity-90"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};
