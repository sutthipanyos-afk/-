import React, { useState, useMemo } from 'react';
import { LEARNING_LESSONS, LearningLesson } from '../data/edtechData';
import { BookOpen, Search, CheckCircle2, Clock, Award, PlayCircle, RotateCcw } from 'lucide-react';

interface LearningHubSectionProps {
  completedLessons: string[];
  onOpenLesson: (lesson: LearningLesson) => void;
  onResetProgress: () => void;
}

export const LearningHubSection: React.FC<LearningHubSectionProps> = ({
  completedLessons,
  onOpenLesson,
  onResetProgress,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const progressPercentage = Math.round(
    (completedLessons.length / LEARNING_LESSONS.length) * 100
  );

  const filteredLessons = useMemo(() => {
    return LEARNING_LESSONS.filter((lesson) => {
      const matchLevel = selectedLevel === 'all' || lesson.level.toLowerCase() === selectedLevel.toLowerCase();
      const matchSearch =
        !searchQuery.trim() ||
        lesson.titleTh.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.module.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.summary.toLowerCase().includes(searchQuery.toLowerCase());

      return matchLevel && matchSearch;
    });
  }, [searchQuery, selectedLevel]);

  return (
    <section id="learning-hub" className="py-20 relative bg-[#F8FAFC] dark:bg-[#040D17] transition-colors duration-200 overflow-hidden">
      
      {/* Soft Ambient Light for Hub */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-500" />
              <span>คลังความรู้ปฏิสัมพันธ์ (EdTech Interactive Hub)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06121E] dark:text-white tracking-tight font-display leading-[1.2]">
              <span className="gradient-accent-text">EdTech Learning Hub</span> <br />
              เรียนรู้มโนทัศน์สำคัญพร้อมระบบประเมินความก้าวหน้า
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed font-light">
              บทเรียนสังเคราะห์แก่นความรู้ด้านการออกแบบการสอน (ISD), ปัญญาประดิษฐ์ทางการศึกษา, และเกมมิฟิเคชัน พร้อมควิซทดสอบและบันทึกความก้าวหน้าจริง
            </p>
          </div>

          {/* Real-time Progress Bar Card with Slender Glassmorphism */}
          <div className="p-5 rounded-2xl bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-sm w-full md:w-80 shrink-0 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-500" />
                <span>ความก้าวหน้าการเรียนรู้</span>
              </span>
              <span className="font-mono-numbers font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                {completedLessons.length} / {LEARNING_LESSONS.length} บทเรียน
              </span>
            </div>

            {/* Progress track */}
            <div className="w-full h-2.5 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981] transition-all duration-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.5)]"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>สำเร็จแล้ว {progressPercentage}%</span>
              {completedLessons.length > 0 && (
                <button
                  onClick={onResetProgress}
                  className="text-slate-400 hover:text-rose-500 transition-colors flex items-center gap-1"
                  title="รีเซ็ตความก้าวหน้า"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>รีเซ็ต</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter and Search Bar with Glassmorphism */}
        <div className="bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-white/10 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => setSelectedLevel('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedLevel === 'all'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              ทุกระดับความยาก
            </button>
            <button
              onClick={() => setSelectedLevel('beginner')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedLevel === 'beginner'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              ระดับพื้นฐาน (Beginner)
            </button>
            <button
              onClick={() => setSelectedLevel('intermediate')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedLevel === 'intermediate'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              ระดับกลาง (Intermediate)
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-cyan-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาชื่อบทเรียน หรือหัวข้อ..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Lessons Grid with Slender Glassmorphism & Soft Cyan/Mint Glow */}
        {filteredLessons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLessons.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id);
              return (
                <div
                  key={lesson.id}
                  onClick={() => onOpenLesson(lesson)}
                  className={`group p-6 rounded-2xl bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl border glow-card-hover cursor-pointer flex flex-col justify-between shadow-sm ${
                    isCompleted
                      ? 'border-emerald-500/50 shadow-[0_4px_20px_rgba(16,185,129,0.1)]'
                      : 'border-slate-200/80 dark:border-white/10 hover:border-cyan-400/40 hover:shadow-[0_16px_36px_rgba(6,182,212,0.12)]'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Unboxed metadata header */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono">
                        <span className="font-semibold text-[#2563EB] dark:text-cyan-400">{lesson.module}</span>
                        <span aria-hidden="true">·</span>
                        <span>{lesson.duration}</span>
                        <span aria-hidden="true">·</span>
                        <span>{lesson.level}</span>
                      </div>

                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span>ผ่านแล้ว</span>
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 font-medium">ยังไม่เริ่ม</span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#06121E] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                        {lesson.titleTh}
                      </h3>
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400 italic mt-0.5">
                        {lesson.titleEn}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300/90 leading-relaxed line-clamp-2">
                      {lesson.summary}
                    </p>

                    <div className="space-y-1">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                        วัตถุประสงค์การเรียนรู้:
                      </div>
                      <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                        {lesson.objectives.slice(0, 2).map((obj, oIdx) => (
                          <li key={oIdx} className="flex items-start gap-1.5">
                            <span className="text-cyan-500 mt-0.5 font-bold">✓</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>มีแบบทดสอบ 1 ข้อวัดผลทันที</span>
                    </span>
                    <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#06121E] dark:bg-white/[0.08] text-white font-medium group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#06B6D4] transition-all shadow-sm">
                      <PlayCircle className="w-4 h-4 text-cyan-300" />
                      <span>{isCompleted ? 'ทบทวนบทเรียน' : 'เริ่มเรียนบทเรียน'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white/80 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-12 text-center border border-slate-200 dark:border-white/10 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 mx-auto flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#06121E] dark:text-white">
                ไม่พบบทเรียนที่ค้นหา
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ลองตรวจสอบคำสะกด หรือเปลี่ยนตัวกรองระดับความยาก
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#06121E] dark:bg-[#2563EB] rounded-xl"
            >
              แสดงบทเรียนทั้งหมด
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
