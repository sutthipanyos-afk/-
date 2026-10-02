import React, { useState, useMemo } from 'react';
import { RESEARCH_DATA, ResearchItem } from '../data/edtechData';
import { BookOpen, Search, ExternalLink, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const areas = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'Instructional Design', label: 'การออกแบบระบบการสอน (ISD)' },
    { id: 'Virtual & Immersive Media', label: 'สภาพแวดล้อมเสมือนจริง (VR/AR)' },
    { id: 'AI & Learning Analytics', label: 'ปัญญาประดิษฐ์ทางการศึกษา (AI)' },
    { id: 'MOOC & Digital Learning', label: 'Thai MOOC & อีเลิร์นนิง' },
    { id: 'Pedagogical Innovation', label: 'นวัตกรรมหลักสูตรและการสอน' },
  ];

  const filteredResearch = useMemo(() => {
    return RESEARCH_DATA.filter((item) => {
      const matchArea = selectedArea === 'all' || item.area === selectedArea;
      const matchSearch =
        !searchQuery.trim() ||
        item.titleTh.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.journal.toLowerCase().includes(searchQuery.toLowerCase());

      return matchArea && matchSearch;
    });
  }, [selectedArea, searchQuery]);

  const copyCitation = (item: ResearchItem) => {
    const citation = `${item.authors.join(', ')}. (${item.year}). ${item.titleTh}. ${item.journal}.`;
    navigator.clipboard.writeText(citation);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="research" className="py-20 relative bg-[#F8FAFC] dark:bg-[#040D17] transition-colors duration-200 overflow-hidden">
      
      {/* Soft Ambient Light */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-l from-blue-500/5 via-cyan-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-500" />
              <span>คลังงานวิจัยและองค์ความรู้ (Research & Publications)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06121E] dark:text-white tracking-tight font-display leading-[1.2]">
              <span className="gradient-accent-text">งานวิจัยและนวัตกรรมวิชาการ</span> <br />
              ภาควิชาเทคโนโลยีการศึกษา ศิลปากร
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed font-light">
              ผลงานวิจัยตีพิมพ์ในวารสารระดับชาติและนานาชาติ ขับเคลื่อนองค์ความรู้การศึกษายุคดิจิทัลเพื่อการพัฒนาอย่างยั่งยืน
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono-numbers bg-white/80 dark:bg-white/[0.03] px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-white/5 backdrop-blur-sm">
            เผยแพร่แล้ว {RESEARCH_DATA.length}+ บทความสำคัญ
          </div>
        </div>

        {/* Filter and Search Bar with Glassmorphism */}
        <div className="bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-white/10 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {areas.map((a) => (
              <button
                key={a.id}
                onClick={() => setSelectedArea(a.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                  selectedArea === a.id
                    ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-cyan-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาชื่อเรื่อง ผู้วิจัย หรือวารสาร..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Research List with Glassmorphic Depth */}
        {filteredResearch.length > 0 ? (
          <div className="space-y-4">
            {filteredResearch.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 glow-card-hover shadow-sm hover:shadow-[0_16px_36px_rgba(6,182,212,0.12)] transition-all"
                >
                  <div className="space-y-3">
                    {/* Unboxed metadata line */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono">
                        <span className="font-bold text-[#2563EB] dark:text-cyan-400">{item.year}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.area}</span>
                        {item.doi && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>DOI: {item.doi}</span>
                          </>
                        )}
                      </div>

                      <button
                        onClick={() => copyCitation(item)}
                        className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                        title="คัดลอกการอ้างอิงบรรณานุกรม"
                      >
                        {copiedId === item.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-500 font-semibold">คัดลอกแล้ว</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>คัดลอกอ้างอิง</span>
                          </>
                        )}
                      </button>
                    </div>

                    <h3 className="text-lg font-bold text-[#06121E] dark:text-white leading-snug">
                      {item.titleTh}
                    </h3>

                    <div className="text-xs text-slate-500 dark:text-slate-400 italic font-light">
                      {item.titleEn}
                    </div>

                    <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      คณะผู้วิจัย: <span className="font-semibold text-slate-800 dark:text-slate-200">{item.authors.join(', ')}</span>
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      ตีพิมพ์ใน: <span className="italic">{item.journal}</span>
                    </div>

                    {/* Expandable abstract with layered backdrop */}
                    {isExpanded && (
                      <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 space-y-2 animate-in fade-in duration-200">
                        <div className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                          บทคัดย่อ (Abstract):
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50/80 dark:bg-[#06121E]/80 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 dark:border-white/5">
                          {item.abstract}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="inline-flex items-center gap-1.5 font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                    >
                      <span>{isExpanded ? 'ย่อบทคัดย่อ' : 'อ่านบทคัดย่อฉบับเต็ม'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <a
                      href="https://tci-thaijo.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                    >
                      <span>ฐานข้อมูล TCI / ThaiJO</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
                ไม่พบงานวิจัยที่ค้นหา
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ลองตรวจสอบคำสะกด หรือเลือกกลุ่มความเชี่ยวชาญอื่น
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedArea('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#06121E] dark:bg-[#2563EB] rounded-xl"
            >
              แสดงงานวิจัยทั้งหมด
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
