import React, { useState, useMemo } from 'react';
import { FACULTY_DATA, FacultyMember } from '../data/edtechData';
import { Users, Search, Mail, ExternalLink, ChevronRight, Award } from 'lucide-react';

interface FacultySectionProps {
  onSelectFaculty: (faculty: FacultyMember) => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ onSelectFaculty }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRank, setSelectedRank] = useState<string>('all');

  const filteredFaculty = useMemo(() => {
    return FACULTY_DATA.filter((member) => {
      const matchRank =
        selectedRank === 'all' ||
        (selectedRank === 'assoc' && member.academicRank.includes('รองศาสตราจารย์')) ||
        (selectedRank === 'asst' && member.academicRank.includes('ผู้ช่วยศาสตราจารย์'));

      const matchSearch =
        !searchQuery.trim() ||
        member.nameTh.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.expertise.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase())) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase());

      return matchRank && matchSearch;
    });
  }, [searchQuery, selectedRank]);

  return (
    <section id="faculty" className="py-20 relative bg-white dark:bg-[#06121E] transition-colors duration-200 overflow-hidden">
      
      {/* Soft Ambient Light for section depth */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/5 via-blue-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-500" />
              <span>คณาจารย์ประจำภาควิชา (Faculty Members)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06121E] dark:text-white tracking-tight font-display leading-[1.2]">
              <span className="gradient-accent-text">
                คณาจารย์ภาควิชาเทคโนโลยีการศึกษา
              </span> <br />
              คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed font-light">
              ภาพถ่ายและข้อมูลทางการของคณาจารย์ประจำภาควิชาเทคโนโลยีการศึกษา จากฐานข้อมูลคณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร
            </p>
          </div>

          {/* Quick Stats Summary with subtle glass tile */}
          <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-mono-numbers border-l-2 border-cyan-400 pl-4 bg-slate-50/60 dark:bg-white/[0.02] p-3 rounded-r-xl backdrop-blur-sm">
            <div>
              <div className="text-xl font-bold text-[#06121E] dark:text-white">7 ท่าน</div>
              <div>คณาจารย์ประจำภาควิชา</div>
            </div>
            <div>
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">100%</div>
              <div>สำเร็จการศึกษาระดับปริญญาเอก</div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar with Glassmorphism */}
        <div className="bg-[#F8FAFC]/85 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-white/10 shadow-sm mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Segmented rank buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => setSelectedRank('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedRank === 'all'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                  : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              ทั้งหมด ({FACULTY_DATA.length})
            </button>
            <button
              onClick={() => setSelectedRank('assoc')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedRank === 'assoc'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                  : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              รองศาสตราจารย์ (5)
            </button>
            <button
              onClick={() => setSelectedRank('asst')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedRank === 'asst'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                  : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              ผู้ช่วยศาสตราจารย์ (2)
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-cyan-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาชื่ออาจารย์ อีเมล หรือตำแหน่ง..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0A1E33] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Faculty Grid - Modern Academic with authentic portraits intact */}
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFaculty.map((member) => {
              const isHead = member.role.includes('หัวหน้าภาควิชา');
              return (
                <div
                  key={member.id}
                  className={`group rounded-2xl bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl border p-6 flex flex-col justify-between text-center glow-card-hover shadow-sm hover:shadow-[0_18px_38px_rgba(6,182,212,0.15)] transition-all duration-300 ${
                    isHead
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 bg-gradient-to-b from-blue-50/40 via-white/80 to-transparent dark:from-blue-950/25 dark:via-[#071626]/80'
                      : 'border-slate-200/80 dark:border-white/10 hover:border-cyan-400/40'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Head Badge if applicable */}
                    {isHead && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-[11px] font-bold mx-auto shadow-sm">
                        <Award className="w-3.5 h-3.5" />
                        <span>หัวหน้าภาควิชาเทคโนโลยีการศึกษา</span>
                      </div>
                    )}

                    {/* Circular Portrait Image Container with Soft Ambient Rim Light */}
                    <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/30 to-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 border-4 border-white dark:border-white/15 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={member.imageUrl}
                          alt={member.nameTh}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            if (member.fallbackImageUrl && e.currentTarget.src !== member.fallbackImageUrl) {
                              e.currentTarget.src = member.fallbackImageUrl;
                            }
                          }}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>

                    {/* Name & Academic Rank */}
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#06121E] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                        {member.nameTh}
                      </h3>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {member.academicRank}
                      </div>
                      <div className="text-[11px] text-slate-400 italic font-light">
                        {member.nameEn}
                      </div>
                    </div>

                    {/* Department info */}
                    <div className="text-xs text-slate-600 dark:text-slate-300 space-y-0.5 pt-1 border-t border-slate-200/80 dark:border-white/5">
                      <div>
                        <span className="text-slate-400 font-light">ภาควิชา:</span>{' '}
                        <span className="font-medium">เทคโนโลยีการศึกษา</span>
                      </div>
                    </div>

                    {/* Email link */}
                    <div className="pt-1">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:underline hover:text-cyan-700 max-w-full truncate"
                        title={`ส่งอีเมลถึง ${member.email}`}
                      >
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </a>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-5 mt-4 border-t border-slate-200/80 dark:border-white/5 flex flex-col gap-2">
                    <button
                      onClick={() => onSelectFaculty(member)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#06121E] dark:bg-white/[0.08] hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#06B6D4] text-white text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      <span>ดูประวัติและผลงาน</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {member.profileLink && (
                      <a
                        href={member.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-slate-500 dark:text-slate-400 hover:text-cyan-500 flex items-center justify-center gap-1 transition-colors"
                      >
                        <span>เอกสารประวัติทางการ</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white/80 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-12 text-center border border-slate-200 dark:border-white/10 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 mx-auto flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#06121E] dark:text-white">
                ไม่พบคณาจารย์ที่ตรงกับคำค้นหา
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ลองตรวจสอบชื่ออาจารย์ หรือปรับเปลี่ยนตัวกรองตำแหน่งทางวิชาการ
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRank('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#06121E] dark:bg-[#2563EB] rounded-xl"
            >
              แสดงคณาจารย์ทั้งหมด
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
