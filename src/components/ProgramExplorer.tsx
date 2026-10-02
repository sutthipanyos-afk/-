import React, { useState, useMemo } from 'react';
import { COURSES_DATA, Course } from '../data/edtechData';
import { GraduationCap, Search, ArrowRight, BookOpen, Layers, Award } from 'lucide-react';

interface ProgramExplorerProps {
  onSelectCourse: (course: Course) => void;
}

export const ProgramExplorer: React.FC<ProgramExplorerProps> = ({ onSelectCourse }) => {
  const [selectedLevel, setSelectedLevel] = useState<'undergraduate' | 'master' | 'doctoral'>('undergraduate');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchLevel = course.level === selectedLevel;
      const matchYear =
        selectedLevel !== 'undergraduate' || selectedYear === 'all' || course.year === selectedYear;
      const matchSearch =
        !searchQuery.trim() ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.nameTh.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchLevel && matchYear && matchSearch;
    });
  }, [selectedLevel, selectedYear, searchQuery]);

  return (
    <section id="programs" className="py-20 relative bg-[#F8FAFC] dark:bg-[#040D17] transition-colors duration-200 overflow-hidden">
      
      {/* Soft ambient lighting for visual depth */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-500/5 via-cyan-500/5 to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-500" />
              <span>หลักสูตรและการศึกษา (Curriculum Explorer)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06121E] dark:text-white tracking-tight font-display leading-[1.2]">
              สำรวจหลักสูตรและรายวิชา <br />
              <span className="gradient-accent-text">
                ภาควิชาเทคโนโลยีการศึกษา ศิลปากร
              </span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed font-light">
              หลักสูตรปรับปรุงตามมาตรฐานสากลและกรอบกระทรวง อว. มุ่งเน้นการลงมือปฏิบัติจริง (Hands-on Practicum) และการวิจัยนวัตกรรม
            </p>
          </div>

          {/* Level Switcher (Segmented glass buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-white/90 dark:bg-[#0A1E33]/80 backdrop-blur-md rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-sm self-start">
            <button
              onClick={() => {
                setSelectedLevel('undergraduate');
                setSelectedYear('all');
              }}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedLevel === 'undergraduate'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#06121E] dark:hover:text-white'
              }`}
            >
              ปริญญาตรี (ศศ.บ. / ศษ.บ.)
            </button>
            <button
              onClick={() => {
                setSelectedLevel('master');
                setSelectedYear('all');
              }}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedLevel === 'master'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#06121E] dark:hover:text-white'
              }`}
            >
              ปริญญาโท (ศษ.ม.)
            </button>
            <button
              onClick={() => {
                setSelectedLevel('doctoral');
                setSelectedYear('all');
              }}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedLevel === 'doctoral'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#06121E] dark:hover:text-white'
              }`}
            >
              ปริญญาเอก (ปร.ด.)
            </button>
          </div>
        </div>

        {/* Filters and Search Bar with Glassmorphism */}
        <div className="bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-5 border border-slate-200/80 dark:border-white/10 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Year Sub-tabs for Undergraduate */}
            {selectedLevel === 'undergraduate' ? (
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-2 shrink-0">
                  แยกตามชั้นปี:
                </span>
                <button
                  onClick={() => setSelectedYear('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    selectedYear === 'all'
                      ? 'bg-[#2563EB] text-white font-semibold shadow-sm'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  ทั้งหมด
                </button>
                {[1, 2, 3, 4].map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      selectedYear === year
                        ? 'bg-[#2563EB] text-white font-semibold shadow-sm'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                    }`}
                  >
                    ปีที่ {year}
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-xs text-slate-500 dark:text-slate-400 font-light">
                {selectedLevel === 'master'
                  ? 'หลักสูตรศึกษาศาสตรมหาบัณฑิต (แผน ก แบบ ก 2 และแผน ข) รวมไม่น้อยกว่า 36 หน่วยกิต'
                  : 'หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาเทคโนโลยีการศึกษา มุ่งเน้นการวิจัยระดับก้าวหน้า'}
              </div>
            )}

            {/* In-curriculum Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-cyan-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหารหัสวิชา หรือชื่อวิชา..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>
        </div>

        {/* Degree Program Summary Banner with Glassmorphism */}
        <div className="mb-8 p-5 rounded-2xl bg-white/80 dark:bg-[#071626]/75 backdrop-blur-xl border-l-4 border-cyan-400 border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              {selectedLevel === 'undergraduate'
                ? 'Bachelor of Arts / Bachelor of Education'
                : selectedLevel === 'master'
                ? 'Master of Education (M.Ed.)'
                : 'Doctor of Philosophy (Ph.D.)'}
            </div>
            <div className="text-base font-bold text-[#06121E] dark:text-white">
              {selectedLevel === 'undergraduate'
                ? 'หลักสูตรศิลปศาสตรบัณฑิต / ศึกษาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีการศึกษา'
                : selectedLevel === 'master'
                ? 'หลักสูตรศึกษาศาสตรมหาบัณฑิต สาขาวิชาเทคโนโลยีการศึกษา (หลักสูตรปรับปรุง พ.ศ. 2566)'
                : 'หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาเทคโนโลยีการศึกษา'}
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-300 font-mono-numbers shrink-0">
            <div>
              <span className="text-slate-400 block text-[10px]">ระยะเวลาศึกษา</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {selectedLevel === 'undergraduate' ? '4 ปี (8 ภาคการศึกษา)' : selectedLevel === 'master' ? '2 ปี' : '3 ปี'}
              </span>
            </div>
            <div className="border-l border-slate-200 dark:border-white/10 pl-4">
              <span className="text-slate-400 block text-[10px]">จำนวนหน่วยกิตสะสม</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {selectedLevel === 'undergraduate' ? 'ไม่น้อยกว่า 136 หน่วยกิต' : selectedLevel === 'master' ? 'ไม่น้อยกว่า 36 หน่วยกิต' : 'ไม่น้อยกว่า 48 หน่วยกิต'}
              </span>
            </div>
          </div>
        </div>

        {/* Course Cards Grid with Thin Glassmorphism & Soft Hover Rim Glow */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.code}
                onClick={() => onSelectCourse(course)}
                className="group p-6 rounded-2xl bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 glow-card-hover shadow-sm hover:shadow-[0_16px_36px_rgba(6,182,212,0.12)] cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-[#2563EB] dark:text-cyan-400">{course.code}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.credits}</span>
                    {course.year && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>ปี {course.year}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#06121E] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                    {course.nameTh}
                  </h3>

                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 italic">
                    {course.nameEn}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300/90 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    {course.type === 'major_required'
                      ? 'วิชาเอกบังคับ'
                      : course.type === 'core'
                      ? 'วิชาบังคับพื้นฐาน'
                      : course.type === 'practicum'
                      ? 'ฝึกประสบการณ์วิชาชีพ'
                      : course.type === 'thesis'
                      ? 'วิทยานิพนธ์/ดุษฎีนิพนธ์'
                      : 'วิชาเอกเลือก'}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                    <span>ดูคำอธิบายรายวิชา</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white/80 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-12 text-center border border-slate-200 dark:border-white/10 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#06121E] dark:text-white">
                ไม่พบรายวิชาที่ตรงกับเงื่อนไขการค้นหา
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ลองตรวจสอบคำสะกด หรือเปลี่ยนตัวกรองชั้นปีและระดับการศึกษา
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedYear('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#06121E] dark:bg-[#2563EB] rounded-xl hover:opacity-90 transition-opacity"
            >
              ล้างตัวกรองทั้งหมด
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
