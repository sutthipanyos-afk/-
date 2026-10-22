import React, { useState, useMemo } from 'react';
import { STUDENT_WORKS_DATA, StudentWork } from '../data/edtechData';
import { Lightbulb, Search, ArrowRight, Award, User, Calendar, MapPin, Sparkles, ExternalLink } from 'lucide-react';

interface StudentWorksSectionProps {
  onSelectWork: (work: StudentWork) => void;
}

export const StudentWorksSection: React.FC<StudentWorksSectionProps> = ({ onSelectWork }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'ผลงานทั้งหมด' },
    { id: 'Instructional Media', label: 'สื่อนวัตกรรมการศึกษา' },
    { id: 'Interactive & VR/AR', label: 'VR/AR ปฏิสัมพันธ์' },
    { id: 'Web & App', label: 'เว็บและแอปพลิเคชัน' },
    { id: 'Edutainment & Motion', label: 'โมชันและแอนิเมชัน' },
    { id: 'Game-based Learning', label: 'เกมเพื่อการเรียนรู้' },
  ];

  // Primary featured exhibition item (4SPB Symposium 2026)
  const featuredExhibition = useMemo(() => {
    return STUDENT_WORKS_DATA.find((w) => w.id === 'work-4spb-symposium-2026') || STUDENT_WORKS_DATA[0];
  }, []);

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
    <section id="student-works" className="py-24 relative bg-gradient-to-b from-[#F0F5FA] via-[#E6EDF5] to-[#F1F6FB] dark:from-[#040E1A] dark:via-[#081B30] dark:to-[#05111D] transition-colors duration-300 overflow-hidden">
      
      {/* Decorative dot matrix overlay */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20 pointer-events-none" />

      {/* Soft Ambient Light Glow */}
      <div className="absolute top-1/4 right-1/4 w-[520px] h-[520px] bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-gradient-to-tr from-amber-500/10 via-amber-600/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-cyan-500" />
              <span>แกลเลอรีผลงานนวัตกรรม (Student Innovation & Creative Showcase)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06121E] dark:text-white tracking-tight font-display leading-[1.2]">
              <span className="gradient-accent-text">ผลงานสร้างสรรค์ของนักศึกษา</span> <br />
              ภาควิชาเทคโนโลยีการศึกษา ศิลปากร
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed font-light">
              ผลงานจัดแสดงนิทรรศการวิชาการ นวัตกรรมสื่อดิจิทัลเพื่อการศึกษา และ Senior Project ที่ได้รับรางวัลและการยอมรับในระดับประเทศ
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono-numbers bg-slate-50 dark:bg-white/[0.03] px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-white/5 backdrop-blur-sm shrink-0">
            แสดง {filteredWorks.length} จากทั้งหมด {STUDENT_WORKS_DATA.length} ผลงาน
          </div>
        </div>

        {/* FEATURED SPOTLIGHT: 4SPB Symposium 2026 Showcase Banner */}
        {featuredExhibition && (
          <div className="mb-12 rounded-3xl overflow-hidden relative border border-cyan-500/30 dark:border-cyan-400/20 bg-gradient-to-br from-slate-900 via-[#07192C] to-[#040E1A] text-white shadow-xl shadow-cyan-950/20">
            {/* Ambient glows inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8 lg:p-10 relative z-10">
              
              {/* Text info (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-semibold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    ไฮไลต์การจัดแสดงผลงานนวัตกรรมล่าสุด
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 font-medium">
                    สื่อนวัตกรรมเพื่อการศึกษา
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  งาน 4SPB Symposium 2026 <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300">
                    “ศาสตร์ศิลป์วิชาการ สืบสาน สร้างสรรค์ สพม.สุพรรณบุรี”
                  </span>
                </h3>

                <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-slate-300/90 font-medium">
                  <span className="inline-flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    วันจันทร์ที่ 31 สิงหาคม 2569
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    ณ โรงเรียนกรรณสูตศึกษาลัย จ.สุพรรณบุรี
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  ภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร ร่วมออกบูธจัดแสดงและนำเสนอผลงานด้านเทคโนโลยีการศึกษา 
                  ภายในบูธพบกับการนำเสนอผลงานและกิจกรรมที่สะท้อนการเรียนรู้ด้าน เทคโนโลยี สื่อ นวัตกรรม และการออกแบบเพื่อการศึกษา 
                  พร้อมพูดคุยและทำความรู้จักกับการเรียนการสอนของภาควิชาเทคโนโลยีการศึกษา
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                  {featuredExhibition.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-white/10 text-cyan-200 border border-white/5">
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Advisor in banner */}
                {featuredExhibition.advisor && (
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md">
                    {featuredExhibition.advisorImageUrl && (
                      <img
                        src={featuredExhibition.advisorImageUrl}
                        alt={featuredExhibition.advisor}
                        className="w-7 h-7 rounded-full object-cover ring-2 ring-cyan-400 shrink-0"
                      />
                    )}
                    <div className="text-xs">
                      <span className="text-slate-300 font-light text-[11px]">อาจารย์ที่ปรึกษา/สังกัด:</span>{' '}
                      <span className="font-semibold text-white">{featuredExhibition.advisor}</span>
                    </div>
                  </div>
                )}

                {/* Action button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectWork(featuredExhibition)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] via-cyan-500 to-[#10B981] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>ดูรายละเอียดการออกบูธ & ผลงานที่นำเสนอ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Showcase image (5 cols) */}
              <div className="lg:col-span-5">
                <div
                  onClick={() => onSelectWork(featuredExhibition)}
                  className="group relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl cursor-pointer aspect-video lg:aspect-[4/3]"
                >
                  <img
                    src={featuredExhibition.image || '/src/assets/images/symposium_4spb_booth_1791379580681.jpg'}
                    alt="บูธจัดแสดงผลงาน 4SPB Symposium 2026"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90 flex items-center justify-between">
                    <span className="font-semibold truncate">บูธนิทรรศการเทคโนโลยีการศึกษา ศิลปากร</span>
                    <span className="shrink-0 text-cyan-300 font-mono text-[11px] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      ขยายดูภาพ <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Filter and Search Bar with Glassmorphism */}
        <div className="bg-[#F8FAFC]/85 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-white/10 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
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
              placeholder="ค้นหาผลงาน เทคโนโลยี หรือสถานที่..."
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
                      ปีการศึกษา {work.year} {work.advisor ? `· ที่ปรึกษา/สังกัด: ${work.advisor}` : ''}
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

                    {/* Advisor block with professor portrait */}
                    {work.advisor && (
                      <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100 dark:border-white/5 bg-slate-50/60 dark:bg-white/[0.02] px-2.5 py-1.5 rounded-xl">
                        {work.advisorImageUrl ? (
                          <img
                            src={work.advisorImageUrl}
                            alt={work.advisor}
                            className="w-8 h-8 rounded-full object-cover ring-2 ring-cyan-400/60 shadow-sm shrink-0"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                            อจ.
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] text-slate-400 font-light leading-tight">
                            อาจารย์ที่ปรึกษาโครงงาน
                          </div>
                          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                            {work.advisor}
                          </div>
                          {work.advisorRole && (
                            <div className="text-[10px] text-cyan-600 dark:text-cyan-400 truncate font-light">
                              {work.advisorRole}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Tech stack tags */}
                    <div className="text-[11px] text-slate-400 flex flex-wrap gap-x-2 gap-y-1 font-mono">
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
                    <span>เปิดดูผลงาน</span>
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
