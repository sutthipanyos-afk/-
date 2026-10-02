import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, BookOpen, Users, GraduationCap, Lightbulb, Newspaper, ArrowRight, Laptop } from 'lucide-react';
import {
  COURSES_DATA,
  FACULTY_DATA,
  STUDENT_WORKS_DATA,
  RESEARCH_DATA,
  NEWS_DATA,
  LEARNING_LESSONS,
  EQUIPMENT_DATA,
  Course,
  FacultyMember,
  StudentWork,
  NewsItem,
  LearningLesson,
} from '../data/edtechData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
  onSelectFaculty: (faculty: FacultyMember) => void;
  onSelectWork: (work: StudentWork) => void;
  onSelectNews: (news: NewsItem) => void;
  onSelectLesson: (lesson: LearningLesson) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCourse,
  onSelectFaculty,
  onSelectWork,
  onSelectNews,
  onSelectLesson,
}) => {
  const [query, setQuery] = useState('');

  // Keyboard escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matchedCourses = COURSES_DATA.filter(
      (c) =>
        c.code.toLowerCase().includes(q) ||
        c.nameTh.toLowerCase().includes(q) ||
        c.nameEn.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );

    const matchedFaculty = FACULTY_DATA.filter(
      (f) =>
        f.nameTh.toLowerCase().includes(q) ||
        f.nameEn.toLowerCase().includes(q) ||
        f.role.toLowerCase().includes(q) ||
        f.expertise.some((e) => e.toLowerCase().includes(q))
    );

    const matchedWorks = STUDENT_WORKS_DATA.filter(
      (w) =>
        w.titleTh.toLowerCase().includes(q) ||
        w.titleEn.toLowerCase().includes(q) ||
        w.creators.some((c) => c.toLowerCase().includes(q)) ||
        w.technologies.some((t) => t.toLowerCase().includes(q))
    );

    const matchedNews = NEWS_DATA.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q)
    );

    const matchedLessons = LEARNING_LESSONS.filter(
      (l) =>
        l.titleTh.toLowerCase().includes(q) ||
        l.titleEn.toLowerCase().includes(q) ||
        l.module.toLowerCase().includes(q) ||
        l.summary.toLowerCase().includes(q)
    );

    const matchedEquipment = EQUIPMENT_DATA.filter(
      (eq) =>
        eq.nameTh.toLowerCase().includes(q) ||
        eq.nameEn.toLowerCase().includes(q) ||
        eq.code.toLowerCase().includes(q) ||
        eq.categoryLabel.toLowerCase().includes(q) ||
        eq.specs.some((s) => s.toLowerCase().includes(q))
    );

    const totalCount =
      matchedCourses.length +
      matchedFaculty.length +
      matchedWorks.length +
      matchedNews.length +
      matchedLessons.length +
      matchedEquipment.length;

    return {
      courses: matchedCourses,
      faculty: matchedFaculty,
      works: matchedWorks,
      news: matchedNews,
      lessons: matchedLessons,
      equipment: matchedEquipment,
      totalCount,
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#0B1F33] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#00A99D] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ค้นหาอาจารย์, รายวิชา, ผลงานนักศึกษา, บทเรียน, ข่าวสาร..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white px-2 py-1 rounded bg-slate-100 dark:bg-white/5"
            >
              ล้าง
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 space-y-6">
          {!query.trim() ? (
            <div className="py-10 text-center space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                คำค้นยอดนิยม
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['รศ.ดร.อนิรุทธ์', 'สื่อการศึกษาเบื้องต้น', 'VR กายวิภาค', 'TCAS', 'ADDIE', 'ศิวนิต', 'Thai MOOC'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1 text-xs rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-[#00A99D] hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results && results.totalCount > 0 ? (
            <div className="space-y-6 text-xs">
              
              {/* Courses Matches */}
              {results.courses.length > 0 && (
                <div className="space-y-2">
                  <div className="font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>รายวิชาในหลักสูตร ({results.courses.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.courses.map((course) => (
                      <div
                        key={course.code}
                        onClick={() => {
                          onSelectCourse(course);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-bold text-slate-800 dark:text-white group-hover:text-[#2563EB]">
                            {course.code} {course.nameTh}
                          </div>
                          <div className="text-[11px] text-slate-500 italic">
                            {course.nameEn} · {course.credits}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty Matches */}
              {results.faculty.length > 0 && (
                <div className="space-y-2">
                  <div className="font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#00A99D]" />
                    <span>คณาจารย์ ({results.faculty.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.faculty.map((f) => (
                      <div
                        key={f.id}
                        onClick={() => {
                          onSelectFaculty(f);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-bold text-slate-800 dark:text-white group-hover:text-[#00A99D]">
                            {f.nameTh}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {f.role} · {f.academicRank}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A99D] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Student Works Matches */}
              {results.works.length > 0 && (
                <div className="space-y-2">
                  <div className="font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>ผลงานนักศึกษา ({results.works.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.works.map((work) => (
                      <div
                        key={work.id}
                        onClick={() => {
                          onSelectWork(work);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-bold text-slate-800 dark:text-white group-hover:text-amber-500">
                            {work.titleTh}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            หมวด {work.category} · ผู้จัดทำ: {work.creators.join(', ')}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Lessons Matches */}
              {results.lessons.length > 0 && (
                <div className="space-y-2">
                  <div className="font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-500" />
                    <span>Learning Hub ({results.lessons.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        onClick={() => {
                          onSelectLesson(lesson);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-bold text-slate-800 dark:text-white group-hover:text-purple-500">
                            {lesson.titleTh}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {lesson.module} · {lesson.duration}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News Matches */}
              {results.news.length > 0 && (
                <div className="space-y-2">
                  <div className="font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5 text-rose-500" />
                    <span>ข่าวสาร ({results.news.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.news.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          onSelectNews(item);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-bold text-slate-800 dark:text-white group-hover:text-rose-500">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {item.category} · {item.date}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Equipment Matches */}
              {results.equipment && results.equipment.length > 0 && (
                <div className="space-y-2">
                  <div className="font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-cyan-500" />
                    <span>อุปกรณ์ที่เปิดให้ยืม ({results.equipment.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.equipment.map((eq) => (
                      <div
                        key={eq.id}
                        onClick={() => {
                          onClose();
                          const el = document.getElementById('student-services');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-bold text-slate-800 dark:text-white group-hover:text-cyan-500 flex items-center gap-2">
                            <span>{eq.nameTh}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                              {eq.code}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500">
                            หมวด {eq.categoryLabel} · สิทธิ์ยืมสูงสุด: {eq.maxDays} วัน · สถานะ: {eq.availableQuantity > 0 ? `พร้อมให้ยืม (${eq.availableQuantity} ชิ้น)` : 'ถูกยืมหมด'}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div className="py-12 text-center space-y-2">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                ไม่พบผลการค้นหาสำหรับ "{query}"
              </p>
              <p className="text-xs text-slate-400">
                ลองตรวจสอบตัวสะกด หรือใช้คำค้นหาทั่วไป เช่น "อาจารย์", "วิทยานิพนธ์", "สื่อ"
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 dark:bg-black/30 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-400 px-4">
          <span>กด Esc เพื่อปิด</span>
          <span>ระบบค้นหาครอบคลุมทุกหมวดหมู่ข้อมูล</span>
        </div>
      </div>
    </div>
  );
};
