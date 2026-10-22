import React, { useState, useMemo } from 'react';
import { COURSES_DATA, Course } from '../data/edtechData';
import {
  GraduationCap,
  Search,
  ArrowRight,
  BookOpen,
  Award,
  Layers,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronRight,
  X,
  SlidersHorizontal,
  FolderOpen,
  Briefcase,
  Clock,
  FileText,
} from 'lucide-react';

interface ProgramExplorerProps {
  onSelectCourse: (course: Course) => void;
}

export interface DegreeProgramInfo {
  level: 'undergraduate' | 'master' | 'doctoral';
  degreeTh: string;
  degreeEn: string;
  nameTh: string;
  nameEn: string;
  duration: string;
  credits: string;
  courseCount: number;
  badge: string;
  badgeColor: string;
  accentGradient: string;
  description: string;
  highlights: string[];
  careers: string[];
}

export const DEGREE_PROGRAMS: DegreeProgramInfo[] = [
  {
    level: 'undergraduate',
    degreeTh: 'ศศ.บ. / ศษ.บ. (4 ปี)',
    degreeEn: 'B.A. / B.Ed. (4 Years)',
    nameTh: 'หลักสูตรศิลปศาสตรบัณฑิต / ศึกษาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีการศึกษา',
    nameEn: 'Bachelor of Arts / Bachelor of Education in Educational Technology',
    duration: '4 ปี (8 ภาคการศึกษา)',
    credits: 'ไม่น้อยกว่า 136 หน่วยกิต',
    courseCount: COURSES_DATA.filter((c) => c.level === 'undergraduate').length,
    badge: 'ปริญญาตรี (Undergraduate)',
    badgeColor: 'border-cyan-500/30 text-cyan-500 dark:text-cyan-400 bg-cyan-500/10',
    accentGradient: 'from-blue-600 via-cyan-500 to-emerald-400',
    description:
      'หลักสูตรที่มุ่งผลิตบัณฑิตนักปฏิบัติการผู้มีความเชี่ยวชาญด้านการออกแบบระบบการสอน (ISD) การผลิตสื่อดิจิทัลเพื่อการเรียนรู้ ปัญญาประดิษฐ์ (AI) เทคโนโลยีเสมือนจริง (VR/AR) และการพัฒนานวัตกรรมการศึกษาที่สอดคล้องกับมาตรฐานระดับสากล',
    highlights: [
      'การออกแบบระบบการสอนเชิงปฏิสัมพันธ์ (Instructional Systems Design: ADDIE Model)',
      'การพัฒนาสื่อความจริงเสมือนและความจริงเสริม (VR/AR & Immersive Learning)',
      'ปัญญาประดิษฐ์และการประยุกต์ใช้ในการศึกษายุคใหม่ (AI in Education)',
      'การผลิตสื่อภาพยนตร์ สตูดิโอ และโมชันกราฟิกเพื่อการศึกษา (Edutainment)',
      'การฝึกประสบการณ์วิชาชีพตรงกับองค์กรนวัตกรรมและหน่วยงานชั้นนำ',
    ],
    careers: [
      'นักออกแบบการสอนและการเรียนรู้ (Instructional Designer: ID)',
      'นักพัฒนาสื่อนวัตกรรมการศึกษาดิจิทัล (Educational Media Developer)',
      'ผู้เชี่ยวชาญเทคโนโลยีการศึกษาและระบบ LMS (EdTech Specialist)',
      'ครูและอาจารย์ผู้สอนสาขาเทคโนโลยีสารสนเทศและการศึกษา',
      'นักออกแบบประสบการณ์ผู้ใช้เพื่อการเรียนรู้ (Learning Experience Designer: LXD)',
    ],
  },
  {
    level: 'master',
    degreeTh: 'ศษ.ม. (2 ปี)',
    degreeEn: 'M.Ed. (2 Years)',
    nameTh: 'หลักสูตรศึกษาศาสตรมหาบัณฑิต สาขาวิชาเทคโนโลยีการศึกษา (หลักสูตรปรับปรุง พ.ศ. 2566)',
    nameEn: 'Master of Education in Educational Technology',
    duration: '2 ปี (4 ภาคการศึกษา)',
    credits: 'ไม่น้อยกว่า 36 หน่วยกิต (แผน ก และ แผน ข)',
    courseCount: COURSES_DATA.filter((c) => c.level === 'master').length,
    badge: 'ปริญญาโท (Master Degree)',
    badgeColor: 'border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10',
    accentGradient: 'from-amber-500 via-orange-500 to-cyan-500',
    description:
      'มุ่งเน้นการพัฒนานักวิชาการและผู้นำการบริหารเทคโนโลยีการศึกษาขั้นสูง เชี่ยวชาญการวิจัยและพัฒนาสื่อการเรียนรู้ดิจิทัล การประเมินสภาพแวดล้อมการเรียนรู้เสมือนจริง และการพัฒนาระบบคลาวด์เพื่อการศึกษาขนาดใหญ่',
    highlights: [
      'การจัดการนวัตกรรมและเทคโนโลยีสารสนเทศทางการศึกษาขั้นสูง',
      'การวิจัยและประเมินผลระบบการเรียนรู้ดิจิทัลและสภาพแวดล้อมเสมือน',
      'วิทยาการปัญญาประดิษฐ์และคลาวด์คอมพิวติ้งเพื่อการจัดการศึกษา',
      'การออกแบบสถาปัตยกรรมระบบ LMS และ Interactive Gamified Learning',
      'แผนการศึกษาเลือกได้: แผน ก (ทำวิทยานิพนธ์) หรือ แผน ข (การค้นคว้าอิสระ)',
    ],
    careers: [
      'ผู้บริหารฝ่ายนวัตกรรมและเทคโนโลยีการเรียนรู้ (Chief Learning Officer / EdTech Manager)',
      'นักวิชาการโสตทัศนศึกษาและเทคโนโลยีการศึกษาชำนาญการ',
      'ที่ปรึกษาการออกแบบหลักสูตรและการเรียนรู้ดิจิทัลสำหรับองค์กร',
      'นักวิจัยและพัฒนานวัตกรรมการเรียนรู้ดิจิทัล',
    ],
  },
  {
    level: 'doctoral',
    degreeTh: 'ปร.ด. (3 ปี)',
    degreeEn: 'Ph.D. (3 Years)',
    nameTh: 'หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาเทคโนโลยีการศึกษา',
    nameEn: 'Doctor of Philosophy in Educational Technology',
    duration: '3 ปี (6 ภาคการศึกษา)',
    credits: 'ไม่น้อยกว่า 48 หน่วยกิต',
    courseCount: COURSES_DATA.filter((c) => c.level === 'doctoral').length,
    badge: 'ปริญญาเอก (Doctoral Degree)',
    badgeColor: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
    accentGradient: 'from-emerald-500 via-teal-500 to-blue-600',
    description:
      'หลักสูตรระดับสูงสุดที่บ่มเพาะนักวิจัยและปราชญ์ทางเทคโนโลยีการศึกษา มุ่งเน้นการสร้างองค์ความรู้ใหม่ระดับแนวหน้า (Frontier Research) การตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ (Scopus / Web of Science) และการขับเคลื่อนนโยบายการศึกษาดิจิทัล',
    highlights: [
      'สัมมนาการวิจัยชั้นสูงและพรมแดนความรู้ใหม่ด้านเทคโนโลยีการศึกษา',
      'การวิจัยดุษฎีนิพนธ์เพื่อสร้างทฤษฎีและโมเดลการเรียนรู้ระดับสากล',
      'การตีพิมพ์เผยแพร่ในวารสารวิชาการระดับนานาชาติฐานข้อมูลสากล',
      'อาจารย์ที่ปรึกษาระดับศาสตราจารย์และรองศาสตราจารย์ผู้ทรงคุณวุฒิระดับประเทศ',
    ],
    careers: [
      'อาจารย์ประจำมหาวิทยาลัยและสถาบันอุดมศึกษา',
      'นักวิจัยอาวุโสด้านเทคโนโลยีการศึกษาและวิทยาการปัญญาประดิษฐ์',
      'ผู้อำนวยการสถาบันวิจัยและนวัตกรรมการศึกษาระดับชาติและนานาชาติ',
    ],
  },
];

export const ProgramExplorer: React.FC<ProgramExplorerProps> = ({ onSelectCourse }) => {
  // Modal Directory State ("พวกรายวิชากดเข้าไปถึงจะอ่านได้ไม่เอามาอยู่ให้รกหน้าเว็บ")
  const [isDirectoryOpen, setIsDirectoryOpen] = useState<boolean>(false);
  const [selectedLevel, setSelectedLevel] = useState<'undergraduate' | 'master' | 'doctoral'>('undergraduate');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Optional Inline Quick-View Drawer (collapsed by default to prevent clutter)
  const [showInlineCourses, setShowInlineCourses] = useState<boolean>(false);

  // Filtered courses for Directory Modal & Inline Viewer
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchLevel = course.level === selectedLevel;
      const matchYear =
        selectedLevel !== 'undergraduate' || selectedYear === 'all' || course.year === selectedYear;
      const matchType = selectedType === 'all' || course.type === selectedType;
      const matchSearch =
        !searchQuery.trim() ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.nameTh.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchLevel && matchYear && matchType && matchSearch;
    });
  }, [selectedLevel, selectedYear, selectedType, searchQuery]);

  // Quick Open Modal for a specific degree program
  const handleOpenProgramCourses = (level: 'undergraduate' | 'master' | 'doctoral') => {
    setSelectedLevel(level);
    setSelectedYear('all');
    setSelectedType('all');
    setSearchQuery('');
    setIsDirectoryOpen(true);
  };

  return (
    <section id="programs" className="py-24 relative bg-gradient-to-b from-[#F0F5FA] via-[#E6EDF5] to-[#F1F6FB] dark:from-[#040E1A] dark:via-[#081B30] dark:to-[#05111D] transition-colors duration-300 overflow-hidden">
      
      {/* Decorative dot matrix overlay */}
      <div className="absolute inset-0 bg-pattern-dots opacity-25 pointer-events-none" />

      {/* Harmonious Ambient Glows - Silpakorn Gold & Royal Navy & EdTech Cyan */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-l from-cyan-500/8 via-blue-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-gradient-to-r from-amber-500/8 via-emerald-500/5 to-transparent rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Structured, Orderly & Elegant */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-slate-200/80 dark:border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <GraduationCap className="w-4 h-4 text-cyan-500" />
              <span>หลักสูตรและสาขาวิชา (Academic Programs & Curriculum)</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06121E] dark:text-white tracking-tight font-display leading-[1.2]">
              โครงสร้างหลักสูตร 3 ระดับ <br />
              <span className="gradient-accent-text">
                ภาควิชาเทคโนโลยีการศึกษา ศิลปากร
              </span>
            </h2>
            
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              จัดระบบระเบียบโครงสร้างการศึกษาอย่างชัดเจน ออกแบบตามกรอบมาตรฐานคุณวุฒิระดับอุดมศึกษาแห่งชาติ (TQF/อว.) 
              และมาตรฐานสากล เพื่อสร้างนักปฏิบัติการและผู้นำการเปลี่ยนแปลงแห่งยุคดิจิทัล
            </p>
          </div>

          {/* Quick Action: Open Full Course Directory Modal */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-end">
            <button
              onClick={() => {
                setSelectedLevel('undergraduate');
                setIsDirectoryOpen(true);
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-blue-600 hover:to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.35)] transition-all transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>เปิดสารบบค้นหารายวิชาทั้งหมด ({COURSES_DATA.length} วิชา)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* -------------------------------------------------------------
            3 STRUCTURED PROGRAM CARDS (Clean, High-End, Orderly & No Clutter)
            ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-10">
          {DEGREE_PROGRAMS.map((program) => {
            return (
              <div
                key={program.level}
                className="group rounded-3xl bg-white/90 dark:bg-[#071626]/85 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-[0_20px_45px_rgba(6,182,212,0.12)] glow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Card Top Banner with Subtle Gradient Accent */}
                <div className="p-7 space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full border ${program.badgeColor}`}
                    >
                      {program.badge}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{program.duration.split(' ')[0]} {program.duration.split(' ')[1]}</span>
                    </span>
                  </div>

                  {/* Title & Credential */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 font-mono tracking-wide">
                      {program.degreeTh}
                    </div>
                    <h3 className="text-xl font-bold text-[#06121E] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                      {program.nameTh}
                    </h3>
                    <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                      {program.nameEn}
                    </div>
                  </div>

                  {/* Credits & Program Metrics Pill */}
                  <div className="p-3 rounded-2xl bg-slate-50/90 dark:bg-[#0A1E33]/60 border border-slate-200/70 dark:border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">จำนวนหน่วยกิตรวม</span>
                      <span className="font-bold text-slate-800 dark:text-slate-100 font-mono">
                        {program.credits}
                      </span>
                    </div>
                    <div className="text-right border-l border-slate-200 dark:border-white/10 pl-3">
                      <span className="text-slate-400 block text-[10px]">รายวิชาในระบบ</span>
                      <span className="font-bold text-cyan-600 dark:text-cyan-400 font-mono">
                        {program.courseCount} รายวิชา
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {program.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>จุดเด่นของหลักสูตร</span>
                    </div>
                    <ul className="space-y-1.5">
                      {program.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Careers */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-cyan-500" />
                      <span>เส้นทางอาชีพและโอกาส</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {program.careers.slice(0, 3).map((career, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded-md text-[11px] bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-white/5"
                        >
                          {career.split('(')[0].trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Action: Click to Open Course Directory Modal ("กดเข้าไปถึงจะอ่านได้") */}
                <div className="p-5 bg-slate-50/80 dark:bg-[#0A1E33]/40 border-t border-slate-100 dark:border-white/5">
                  <button
                    onClick={() => handleOpenProgramCourses(program.level)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white dark:bg-white/10 hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#06B6D4] text-slate-800 dark:text-white hover:text-white font-semibold text-xs border border-slate-200 dark:border-white/10 hover:border-transparent shadow-sm hover:shadow-md transition-all group-hover:border-cyan-400/30"
                  >
                    <BookOpen className="w-4 h-4 text-cyan-500 group-hover:text-white transition-colors" />
                    <span>กดเปิดดูรายวิชาของหลักสูตรนี้ ({program.courseCount} วิชา)</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* -------------------------------------------------------------
            BOTTOM UTILITY BAR: Organized & Clean
            ------------------------------------------------------------- */}
        <div className="p-5 rounded-2xl bg-white/80 dark:bg-[#071626]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs shadow-sm">
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 flex items-center justify-center shrink-0">
              <FolderOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">
                สารบบรายวิชาและคำอธิบายรายวิชา (Full Course Directory)
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                รายวิชาทั้งหมดถูกจัดเก็บเป็นสัดส่วนอย่างมีระเบียบ กดปุ่มเพื่อเปิดอ่านคำอธิบายรายวิชา
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowInlineCourses(!showInlineCourses)}
              className="px-3.5 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 font-medium transition-colors"
            >
              {showInlineCourses ? 'ซ่อนรายวิชาบนหน้านี้' : 'ดูสรุปรายวิชาแบบย่อบนหน้านี้'}
            </button>
            <button
              onClick={() => {
                setSelectedLevel('undergraduate');
                setIsDirectoryOpen(true);
              }}
              className="px-4 py-2 rounded-xl bg-[#06121E] dark:bg-[#2563EB] text-white font-semibold hover:opacity-90 shadow-sm flex items-center gap-1.5 transition-opacity"
            >
              <Search className="w-3.5 h-3.5" />
              <span>ค้นหารายวิชา</span>
            </button>
          </div>
        </div>

        {/* -------------------------------------------------------------
            OPTIONAL INLINE COURSE VIEWER (Collapsible, neat, compact)
            ------------------------------------------------------------- */}
        {showInlineCourses && (
          <div className="mt-8 p-6 rounded-3xl bg-white/95 dark:bg-[#071626]/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg animate-in fade-in duration-200 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  รายวิชาฉบับย่อบนหน้าเว็บ (Quick Overview)
                </h3>
              </div>

              {/* Level switcher */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-[#0A1E33] rounded-xl border border-slate-200/80 dark:border-white/10">
                {(['undergraduate', 'master', 'doctoral'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => {
                      setSelectedLevel(lvl);
                      setSelectedYear('all');
                    }}
                    className={`px-3 py-1.5 text-xs rounded-lg font-semibold transition-all ${
                      selectedLevel === lvl
                        ? 'bg-[#2563EB] text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {lvl === 'undergraduate' ? 'ป.ตรี' : lvl === 'master' ? 'ป.โท' : 'ป.เอก'}
                  </button>
                ))}
              </div>
            </div>

            {/* Compact course cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCourses.map((course) => (
                <div
                  key={course.code}
                  onClick={() => onSelectCourse(course)}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0A1E33]/60 border border-slate-200/80 dark:border-white/10 hover:border-cyan-400/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-blue-600 dark:text-cyan-400">{course.code}</span>
                      <span className="text-slate-500">{course.credits}</span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {course.nameTh}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {course.type === 'major_required' ? 'วิชาเอกบังคับ' : 'วิชาเอกเลือก'}
                    </span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>อ่านรายละเอียด</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------
            COURSE DIRECTORY MODAL ("กดเข้าไปถึงจะอ่านได้ ไม่เอามาอยู่ให้รกหน้าเว็บ")
            ------------------------------------------------------------- */}
        {isDirectoryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
            <div
              className="w-full max-w-4xl bg-white dark:bg-[#08182B] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#05111D] flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    <span>สารบบรายวิชาและคำอธิบายรายวิชา (Curriculum Directory)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#06121E] dark:text-white font-display">
                    รายวิชาสาขาเทคโนโลยีการศึกษา ศิลปากร
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    คลิกที่รายวิชาใดก็ได้เพื่อเปิดอ่านคำอธิบายรายวิชา วัตถุประสงค์ และหัวข้อสาระการเรียนรู้เต็ม
                  </p>
                </div>
                <button
                  onClick={() => setIsDirectoryOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-white/10 transition-colors"
                  aria-label="ปิดหน้าต่างรายวิชา"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Filters Toolbar */}
              <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A1E33]/70 space-y-3">
                {/* Degree Switcher Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-[#05111D] rounded-2xl border border-slate-200 dark:border-white/10">
                    <button
                      onClick={() => {
                        setSelectedLevel('undergraduate');
                        setSelectedYear('all');
                      }}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                        selectedLevel === 'undergraduate'
                          ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      ปริญญาตรี (13 วิชา)
                    </button>
                    <button
                      onClick={() => {
                        setSelectedLevel('master');
                        setSelectedYear('all');
                      }}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                        selectedLevel === 'master'
                          ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      ปริญญาโท (5 วิชา)
                    </button>
                    <button
                      onClick={() => {
                        setSelectedLevel('doctoral');
                        setSelectedYear('all');
                      }}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                        selectedLevel === 'doctoral'
                          ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      ปริญญาเอก (2 วิชา)
                    </button>
                  </div>

                  {/* Search input */}
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 text-cyan-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="พิมพ์รหัสวิชา หรือชื่อวิชา..."
                      className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#05111D] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Sub-filters (Year tabs for Undergrad) */}
                {selectedLevel === 'undergraduate' && (
                  <div className="flex items-center gap-1.5 overflow-x-auto pt-1 pb-1">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-2 shrink-0">
                      แยกตามชั้นปี:
                    </span>
                    <button
                      onClick={() => setSelectedYear('all')}
                      className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                        selectedYear === 'all'
                          ? 'bg-blue-600 text-white font-semibold shadow-sm'
                          : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                      }`}
                    >
                      ทั้งหมด ({COURSES_DATA.filter((c) => c.level === 'undergraduate').length})
                    </button>
                    {[1, 2, 3, 4].map((yr) => {
                      const count = COURSES_DATA.filter(
                        (c) => c.level === 'undergraduate' && c.year === yr
                      ).length;
                      return (
                        <button
                          key={yr}
                          onClick={() => setSelectedYear(yr)}
                          className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                            selectedYear === yr
                              ? 'bg-blue-600 text-white font-semibold shadow-sm'
                              : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                          }`}
                        >
                          ชั้นปีที่ {yr} ({count} วิชา)
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Modal Courses List / Scrollable Body */}
              <div className="p-6 overflow-y-auto space-y-3.5 flex-1 bg-slate-50/50 dark:bg-[#071626]/50">
                {filteredCourses.length > 0 ? (
                  <div className="space-y-3">
                    {filteredCourses.map((course) => (
                      <div
                        key={course.code}
                        onClick={() => {
                          onSelectCourse(course);
                        }}
                        className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A1E33] border border-slate-200/90 dark:border-white/10 hover:border-cyan-400/60 dark:hover:border-cyan-400/60 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2 text-xs font-mono">
                            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold border border-blue-200 dark:border-blue-500/20">
                              {course.code}
                            </span>
                            <span className="text-slate-400 font-medium">หน่วยกิต: {course.credits}</span>
                            {course.year && (
                              <span className="text-slate-400 font-medium hidden sm:inline">
                                · ปีที่ {course.year} เทอม {course.semester || 1}
                              </span>
                            )}
                            <span className="px-2 py-0.5 rounded text-[11px] font-sans font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">
                              {course.type === 'major_required'
                                ? 'วิชาเอกบังคับ'
                                : course.type === 'core'
                                ? 'วิชาบังคับพื้นฐาน'
                                : course.type === 'practicum'
                                ? 'ฝึกปฏิบัติการ'
                                : 'วิชาเอกเลือก'}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                            {course.nameTh}
                          </h4>

                          <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                            {course.nameEn}
                          </div>

                          <p className="text-xs text-slate-600 dark:text-slate-300/90 line-clamp-2 leading-relaxed pt-1">
                            {course.description}
                          </p>
                        </div>

                        {/* Action CTA */}
                        <div className="shrink-0 sm:border-l sm:border-slate-100 dark:sm:border-white/5 sm:pl-4 flex sm:flex-col items-center justify-between sm:justify-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-semibold group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-sm">
                            <span>อ่านคำอธิบายวิชา</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Empty state */
                  <div className="py-16 text-center space-y-3">
                    <Search className="w-10 h-10 text-slate-400 mx-auto" />
                    <div className="text-base font-bold text-slate-800 dark:text-white">
                      ไม่พบรายวิชาที่ค้นหา
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      กรุณาลองเปลี่ยนคำค้นหา หรือเลือกตัวกรองระดับการศึกษาและชั้นปีอื่น
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedYear('all');
                      }}
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
                    >
                      ล้างการค้นหา
                    </button>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#05111D] flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">
                  แสดง {filteredCourses.length} รายวิชาจากทั้งหมด {COURSES_DATA.length} รายวิชา
                </span>
                <button
                  onClick={() => setIsDirectoryOpen(false)}
                  className="px-5 py-2 rounded-xl bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 text-white font-medium transition-colors"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
