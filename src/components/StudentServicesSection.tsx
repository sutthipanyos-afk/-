import React, { useState, useMemo } from 'react';
import {
  EQUIPMENT_DATA,
  STUDIO_ROOMS_DATA,
  BORROWING_RULES,
  EquipmentItem,
  StudioRoom,
  LoanRequest,
} from '../data/edtechData';
import {
  Laptop,
  Camera,
  Mic,
  Glasses,
  Palette,
  Sun,
  Search,
  CheckCircle2,
  Clock,
  Calendar,
  AlertCircle,
  FileText,
  User,
  MapPin,
  ChevronRight,
  Info,
  Trash2,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface StudentServicesSectionProps {
  onBorrowEquipment: (item: EquipmentItem) => void;
  onBookStudio: (room: StudioRoom) => void;
  loanRequests: LoanRequest[];
  onViewLoanSlip: (loan: LoanRequest) => void;
  onCancelLoan: (loanId: string) => void;
}

export const StudentServicesSection: React.FC<StudentServicesSectionProps> = ({
  onBorrowEquipment,
  onBookStudio,
  loanRequests,
  onViewLoanSlip,
  onCancelLoan,
}) => {
  const [activeTab, setActiveTab] = useState<'equipment' | 'studio' | 'myLoans' | 'rules'>('equipment');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'ทั้งหมด', icon: Laptop },
    { id: 'camera', label: 'กล้องและวิดีโอ', icon: Camera },
    { id: 'audio', label: 'เสียงและพอดแคสต์', icon: Mic },
    { id: 'vr', label: 'โลกเสมือนจริง VR/XR', icon: Glasses },
    { id: 'graphic', label: 'แท็บเล็ตและกราฟิก', icon: Palette },
    { id: 'lighting', label: 'ไฟและสตูดิโอ', icon: Sun },
  ];

  const filteredEquipment = useMemo(() => {
    return EQUIPMENT_DATA.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        !searchQuery.trim() ||
        item.nameTh.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.suitableFor.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="student-services" className="py-20 relative bg-white dark:bg-[#06121E] transition-colors duration-200 overflow-hidden">
      
      {/* Soft Ambient Light Cones for Service Depth */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[500px] bg-gradient-to-tr from-cyan-500/6 via-blue-500/4 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-gradient-to-bl from-emerald-500/5 via-teal-500/4 to-transparent rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Laptop className="w-4 h-4 text-cyan-500" />
              <span>บริการและช่วยเหลือนักศึกษา (Student Services & Equipment Hub)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06121E] dark:text-white tracking-tight font-display leading-[1.2]">
              ศูนย์บริการช่วยเหลือนักศึกษา & <br />
              <span className="gradient-accent-text">
                ระบบยืม-คืนอุปกรณ์และสตูดิโอผลิตสื่อ
              </span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed font-light">
              ระบบบริการดิจิทัลสำหรับนักศึกษาภาควิชาเทคโนโลยีการศึกษา: ยืมอุปกรณ์กล้อง 4K, ไมโครโฟนไร้สาย, แว่น VR, แท็บเล็ตกราฟิก, จองสตูดิโอ และออกใบยืนยันการยืมพร้อม QR Code ได้จริงทันที
            </p>
          </div>

          {/* Quick Counter Card */}
          <div className="flex items-center gap-4 text-xs font-mono-numbers bg-slate-50/80 dark:bg-white/[0.03] p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
            <div>
              <div className="text-xl font-bold text-[#06121E] dark:text-white">{EQUIPMENT_DATA.length} รายการ</div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px]">อุปกรณ์พร้อมให้บริการ</div>
            </div>
            <div className="border-l border-slate-200 dark:border-white/10 pl-4">
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                {loanRequests.length} รายการ
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px]">คำขอที่บันทึกไว้</div>
            </div>
          </div>
        </div>

        {/* Primary Service View Selector Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-[#F8FAFC]/90 dark:bg-[#071626]/80 backdrop-blur-xl rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('equipment')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === 'equipment'
                ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#06121E] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>อุปกรณ์สื่อดิจิทัลที่เปิดให้ยืม ({EQUIPMENT_DATA.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('studio')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === 'studio'
                ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#06121E] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>จองห้องสตูดิโอ & แล็ป ({STUDIO_ROOMS_DATA.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('myLoans')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap relative ${
              activeTab === 'myLoans'
                ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#06121E] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>รายการยืมของฉัน</span>
            {loanRequests.length > 0 && (
              <span className={`px-1.5 py-0.2 text-[10px] font-bold rounded-full ${
                activeTab === 'myLoans' ? 'bg-white text-blue-700' : 'bg-cyan-500 text-white'
              }`}>
                {loanRequests.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === 'rules'
                ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#06121E] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>ระเบียบและแนวปฏิบัติการยืม</span>
          </button>
        </div>

        {/* -------------------------------------------------------------
            TAB 1: Available Equipment
            ------------------------------------------------------------- */}
        {activeTab === 'equipment' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Filter and Search Bar */}
            <div className="bg-[#F8FAFC]/85 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                {categories.map((c) => {
                  const Icon = c.icon;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                        selectedCategory === c.id
                          ? 'bg-[#06121E] dark:bg-white/15 text-white shadow-sm'
                          : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{c.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-cyan-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ค้นหาอุปกรณ์, รหัส, สเปก..."
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0A1E33] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            {/* Equipment Grid with Thin Glassmorphism */}
            {filteredEquipment.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEquipment.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-2xl bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 glow-card-hover shadow-sm hover:shadow-[0_16px_36px_rgba(6,182,212,0.14)] overflow-hidden flex flex-col justify-between transition-all duration-300"
                  >
                    <div>
                      {/* Image container */}
                      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                        <img
                          src={item.image}
                          alt={item.nameTh}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-[#06121E]/30 to-transparent" />

                        {/* Code and Availability Tag */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                            {item.code}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3">
                          {item.availableQuantity > 0 ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span>ว่าง ({item.availableQuantity}/{item.totalQuantity})</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-300 bg-rose-950/80 backdrop-blur-md border border-rose-500/30 px-2.5 py-1 rounded-lg">
                              <span>ถูกยืมหมด</span>
                            </span>
                          )}
                        </div>

                        <div className="absolute bottom-2.5 left-3 right-3 text-[11px] text-slate-300 font-mono flex items-center justify-between">
                          <span>ยืมได้สูงสุด {item.maxDays} วัน</span>
                          <span className="text-cyan-300">{item.categoryLabel}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-3">
                        <div>
                          <h3 className="text-base font-bold text-[#06121E] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2">
                            {item.nameTh}
                          </h3>
                          <div className="text-[11px] text-slate-400 italic mt-0.5 line-clamp-1">
                            {item.nameEn}
                          </div>
                        </div>

                        {/* Specs bullet points */}
                        <div className="space-y-1 pt-1">
                          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                            จุดเด่นสำคัญ:
                          </div>
                          <ul className="text-xs text-slate-600 dark:text-slate-300/90 space-y-1">
                            {item.specs.slice(0, 2).map((s, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-1.5">
                                <span className="text-cyan-500 mt-0.5 font-bold">·</span>
                                <span className="line-clamp-1">{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Location */}
                        <div className="pt-1 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Button */}
                    <div className="p-5 pt-3 border-t border-slate-200/80 dark:border-white/5">
                      <button
                        onClick={() => onBorrowEquipment(item)}
                        disabled={item.availableQuantity === 0}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                          item.availableQuantity > 0
                            ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-blue-600 hover:to-cyan-500 text-white shadow-[0_4px_16px_rgba(6,182,212,0.25)] hover:shadow-[0_6px_22px_rgba(6,182,212,0.35)]'
                            : 'bg-slate-200 dark:bg-white/5 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        <Laptop className="w-3.5 h-3.5" />
                        <span>{item.availableQuantity > 0 ? 'ทำเรื่องขอยืมอุปกรณ์นี้' : 'อุปกรณ์ไม่พร้อมให้บริการ'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/80 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-12 text-center border border-slate-200 dark:border-white/10 max-w-lg mx-auto space-y-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 mx-auto flex items-center justify-center">
                  <Camera className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#06121E] dark:text-white">
                    ไม่พบอุปกรณ์ที่ตรงกับการค้นหา
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    ลองพิมพ์คำค้นหาอื่น หรือเลือกหมวดหมู่อุปกรณ์ทั้งหมด
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#06121E] dark:bg-[#2563EB] rounded-xl"
                >
                  แสดงอุปกรณ์ทั้งหมด
                </button>
              </div>
            )}
          </div>
        )}

        {/* -------------------------------------------------------------
            TAB 2: Studio Booking
            ------------------------------------------------------------- */}
        {activeTab === 'studio' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-200">
            {STUDIO_ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="group rounded-2xl bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 glow-card-hover shadow-sm hover:shadow-[0_16px_36px_rgba(6,182,212,0.14)] overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={room.image}
                      alt={room.nameTh}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-[#06121E]/30 to-transparent" />

                    <div className="absolute top-3 left-3 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      <span>ความจุ: {room.capacity}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-xs text-white/95 font-medium flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{room.location}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#06121E] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                        {room.nameTh}
                      </h3>
                      <div className="text-xs text-slate-400 italic mt-0.5">
                        {room.nameEn}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        สิ่งอำนวยความสะดวกและเทคโนโลยีในห้อง:
                      </div>
                      <ul className="text-xs text-slate-600 dark:text-slate-300/90 space-y-1.5">
                        {room.features.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                      <div className="text-xs font-semibold text-slate-400">รอบเวลาที่เปิดให้บริการ:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {room.timeSlots.map((ts, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                          >
                            {ts}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-3 border-t border-slate-200/80 dark:border-white/5">
                  <button
                    onClick={() => onBookStudio(room)}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-blue-600 hover:to-cyan-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>จองเวลาใช้งานห้องสตูดิโอนี้</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* -------------------------------------------------------------
            TAB 3: My Loan Requests (Real-time localStorage tracking)
            ------------------------------------------------------------- */}
        {activeTab === 'myLoans' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {loanRequests.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>ประวัติและสถานะคำขอยืมอุปกรณ์ ({loanRequests.length} รายการ)</span>
                  <span>บันทึกอัตโนมัติบนเบราว์เซอร์ของคุณ</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {loanRequests.map((loan) => (
                    <div
                      key={loan.id}
                      className="p-5 rounded-2xl bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 glow-card-hover shadow-sm flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 px-2.5 py-1 rounded-lg border border-cyan-200 dark:border-cyan-800">
                            {loan.id}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>อนุมัติแล้ว - รอรับอุปกรณ์</span>
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-[#06121E] dark:text-white leading-snug">
                            {loan.equipmentName}
                          </h4>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            ผู้ยืม: <span className="font-semibold text-slate-700 dark:text-slate-200">{loan.studentName}</span> ({loan.studentId})
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            วิชา/โครงงาน: <span className="text-slate-700 dark:text-slate-200">{loan.courseOrProject}</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#06121E]/60 border border-slate-200/60 dark:border-white/5 text-xs space-y-1 font-mono">
                          <div className="flex justify-between">
                            <span className="text-slate-400">วันนัดรับ:</span>
                            <span className="text-slate-700 dark:text-slate-200">{loan.startDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">กำหนดส่งคืน:</span>
                            <span className="text-rose-500 font-semibold">{loan.returnDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs gap-2">
                        <button
                          onClick={() => onViewLoanSlip(loan)}
                          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold flex items-center gap-1.5 shadow-sm hover:opacity-90"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>เปิดใบคอนเฟิร์ม (Digital Slip)</span>
                        </button>
                        <button
                          onClick={() => onCancelLoan(loan.id)}
                          className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors"
                          title="ยกเลิกคำขอนี้"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white/80 dark:bg-[#071626]/75 backdrop-blur-xl rounded-2xl p-12 text-center border border-slate-200 dark:border-white/10 max-w-lg mx-auto space-y-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 mx-auto flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#06121E] dark:text-white">
                    ยังไม่มีรายการขอยืมอุปกรณ์
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    เลือกดูอุปกรณ์ด้านบนและกด "ทำเรื่องขอยืมอุปกรณ์นี้" ระบบจะบันทึกและสร้างใบยืนยันการยืมทันที
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('equipment')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-xl shadow-sm"
                >
                  เลือกดูอุปกรณ์เพื่อขอยืม
                </button>
              </div>
            )}
          </div>
        )}

        {/* -------------------------------------------------------------
            TAB 4: Rules & Guidelines
            ------------------------------------------------------------- */}
        {activeTab === 'rules' && (
          <div className="space-y-6 animate-in fade-in duration-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {BORROWING_RULES.map((rule, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/85 dark:bg-[#071626]/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 space-y-2.5 shadow-sm"
                >
                  <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-mono">
                    ระเบียบข้อที่ 0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-[#06121E] dark:text-white">
                    {rule.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line font-light">
                    {rule.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Helpdesk Contacts Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#06121E] to-[#0A1E33] text-white border border-white/10 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>ช่องทางติดต่อเจ้าหน้าที่และจุดรับ-คืนอุปกรณ์</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="space-y-1">
                  <div className="font-semibold text-white">สถานที่รับอุปกรณ์:</div>
                  <div>ห้องพัสดุและสื่อดิจิทัล อาคารศึกษาศาสตร์ 2 ชั้น 3 มหาวิทยาลัยศิลปากร วิทยาเขตพระราชวังสนามจันทร์</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-white">เวลาเปิดให้บริการ:</div>
                  <div>จันทร์ – ศุกร์ 08:30 – 16:30 น. (เว้นวันหยุดราชการ)</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-white">โทรศัพท์สอบถาม:</div>
                  <div className="font-mono">034-255-794 ต่อ 26201, 26202 หรืออีเมล edtech@su.ac.th</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
