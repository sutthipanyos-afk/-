import React, { useState, useMemo } from 'react';
import { NEWS_DATA, NewsItem } from '../data/edtechData';
import { Newspaper, Search, ArrowRight, Calendar, Camera, MapPin, Sparkles } from 'lucide-react';

interface NewsSectionProps {
  onSelectNews: (news: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onSelectNews }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'Admissions', label: 'รับสมัครนักศึกษา (TCAS)' },
    { id: 'Achievement', label: 'รางวัลและความสำเร็จ' },
    { id: 'Events', label: 'กิจกรรมและนิทรรศการ' },
    { id: 'Academic', label: 'อบรมและสัมมนา' },
  ];

  const filteredNews = useMemo(() => {
    return NEWS_DATA.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        !searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="news" className="py-24 relative bg-gradient-to-b from-[#040E19] via-[#081B30] to-[#040D17] text-white transition-colors duration-300 overflow-hidden">
      
      {/* Decorative dot matrix overlay */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20 pointer-events-none" />

      {/* Soft Ambient Light */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-amber-500/10 via-amber-600/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-cyan-500" />
              <span>ข่าวสารและประชาสัมพันธ์ (News & Announcements)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06121E] dark:text-white tracking-tight font-display leading-[1.2]">
              <span className="gradient-accent-text">ข่าวสารและความเคลื่อนไหวล่าสุด</span> <br />
              ภาควิชาเทคโนโลยีการศึกษา ศิลปากร
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed font-light">
              ติดตามกำหนดการรับสมัคร TCAS ข่าวรางวัลทางวิชาการ กิจกรรมนิทรรศการ และการอบรมเชิงปฏิบัติการ
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono-numbers bg-slate-50 dark:bg-white/[0.03] px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-white/5 backdrop-blur-sm">
            อัปเดตสม่ำเสมอจากภาควิชาฯ
          </div>
        </div>

        {/* Filter and Search Bar with Glassmorphism */}
        <div className="bg-[#F8FAFC]/85 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-white/10 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === c.id
                    ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-cyan-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาหัวข้อข่าว..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0A1E33] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* News Grid with Slender Glassmorphism */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectNews(item)}
                className="group p-6 rounded-2xl bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 glow-card-hover shadow-sm hover:shadow-[0_16px_36px_rgba(6,182,212,0.12)] cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-3.5">
                  {/* Photo Preview Banner (if available) */}
                  {item.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-200/60 dark:border-white/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      {item.gallery && item.gallery.length > 0 && (
                        <div className="absolute bottom-2.5 right-2.5 text-[11px] font-mono font-medium text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 flex items-center gap-1.5 shadow-sm">
                          <Camera className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.gallery.length} ภาพถ่าย</span>
                        </div>
                      )}

                      {item.featured && (
                        <div className="absolute top-2.5 left-2.5 text-[10px] font-bold text-white bg-gradient-to-r from-amber-500 to-rose-500 px-2.5 py-1 rounded-lg shadow-sm">
                          ★ ข่าวกิจกรรมเด่น
                        </div>
                      )}
                    </div>
                  )}

                  {/* Unboxed metadata line */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono">
                      <span className="font-semibold text-[#2563EB] dark:text-cyan-400">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.date}</span>
                      </span>
                    </div>

                    {!item.image && item.featured && (
                      <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        ★ ข่าวเด่น
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#06121E] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {item.location && (
                    <div className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-light">
                      <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item.location}</span>
                    </div>
                  )}

                  <p className="text-xs text-slate-600 dark:text-slate-300/90 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium truncate max-w-[55%]">
                    {item.organizer || 'ภาควิชาเทคโนโลยีการศึกษา'}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                    <span>{item.gallery ? 'ดูภาพและเนื้อหาข่าว' : 'อ่านรายละเอียด'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/80 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-12 text-center border border-slate-200 dark:border-white/10 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 mx-auto flex items-center justify-center">
              <Newspaper className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#06121E] dark:text-white">
                ไม่พบข่าวสารที่ค้นหา
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
              แสดงข่าวสารทั้งหมด
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
