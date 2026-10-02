import React, { useState, useMemo } from 'react';
import { STUDENT_WORKS_DATA, StudentWork } from '../data/edtechData';
import { Lightbulb, Search, ArrowRight, Award, User } from 'lucide-react';

interface StudentWorksSectionProps {
  onSelectWork: (work: StudentWork) => void;
}

export const StudentWorksSection: React.FC<StudentWorksSectionProps> = ({ onSelectWork }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'ผลงานทั้งหมด' },
    { id: 'Interactive & VR/AR', label: 'VR/AR ปฏิสัมพันธ์' },
    { id: 'Web & App', label: 'เว็บและแอปพลิเคชัน' },
    { id: 'Edutainment & Motion', label: 'โมชันและแอนิเมชัน' },
    { id: 'Game-based Learning', label: 'เกมเพื่อการเรียนรู้' },
  ];

  const filteredWorks = useMemo(() => {
    return STUDENT_WORKS_DATA.filter((work) => {
      const matchCategory = selectedCategory === 'all' || work.category === selectedCategory;
      const matchSearch =
        !searchQuery.trim() ||
        work.titleTh.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.creators.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        work.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        work.summary.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="student-works" className="py-20 relative bg-white dark:bg-[#06121E] transition-colors duration-200 overflow-hidden">
      
      {/* Soft Ambient Light */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/5 via-blue-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-cyan-500" />
              <span>แกลเลอรีผลงานนวัตกรรม (Student Innovation Showcase)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06121E] dark:text-white tracking-tight font-display leading-[1.2]">
              <span className="gradient-accent-text">ผลงานสร้างสรรค์ของนักศึกษา</span> <br />
              ภาควิชาเทคโนโลยีการศึกษา ศิลปากร
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed font-light">
              ผลงาน Senior Project นวัตกรรมดิจิทัล และสื่อสร้างสรรค์ที่ได้รับรางวัลการันตีในเวทีระดับประเทศและนานาชาติ
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono-numbers bg-slate-50 dark:bg-white/[0.03] px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-white/5 backdrop-blur-sm">
            แสดง {filteredWorks.length} จากทั้งหมด {STUDENT_WORKS_DATA.length} โครงงาน
          </div>
        </div>

        {/* Filter and Search Bar with Glassmorphism */}
        <div className="bg-[#F8FAFC]/85 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-white/10 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-cyan-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาโครงงาน เทคโนโลยี หรือผู้จัดทำ..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0A1E33] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Student Works Grid with Glassmorphic Depth */}
        {filteredWorks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                onClick={() => onSelectWork(work)}
                className="group rounded-2xl bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 glow-card-hover shadow-sm hover:shadow-[0_16px_36px_rgba(6,182,212,0.14)] cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail with sleek scrim */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={work.image || '/src/assets/images/student_work_interactive_vr_1790939657670.jpg'}
                      alt={work.titleTh}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-[#06121E]/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3 text-[11px] font-mono font-semibold text-white/95 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                      {work.category}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90 truncate font-mono">
                      ปีการศึกษา {work.year} · อ.ที่ปรึกษา: {work.advisor}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    {work.awards && (
                      <div className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-300 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{work.awards}</span>
                      </div>
                    )}

                    <h3 className="text-base font-bold text-[#06121E] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2">
                      {work.titleTh}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300/90 leading-relaxed line-clamp-2">
                      {work.summary}
                    </p>

                    {/* Tech stack items unboxed */}
                    <div className="text-[11px] text-slate-400 flex flex-wrap gap-x-2 gap-y-1 pt-1 font-mono">
                      {work.technologies.slice(0, 3).map((tech, tIdx) => (
                        <span key={tIdx} className="text-cyan-600 dark:text-cyan-400">#{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 truncate max-w-[60%]">
                    <User className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                    <span className="truncate">{work.creators.join(', ')}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                    <span>เปิดดูรายละเอียด</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/80 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-12 text-center border border-slate-200 dark:border-white/10 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 mx-auto flex items-center justify-center">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#06121E] dark:text-white">
                ไม่พบผลงานที่ตรงกับเงื่อนไข
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ลองตรวจสอบคำค้นหา หรือเลือกหมวดหมู่อื่น
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#06121E] dark:bg-[#2563EB] rounded-xl"
            >
              แสดงผลงานทั้งหมด
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
