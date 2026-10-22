import React, { useState } from 'react';
import { DEPARTMENT_ABOUT } from '../data/edtechData';
import {
  Compass,
  Eye,
  Target,
  MapPin,
  Building,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Camera,
  Maximize2,
  X,
  Award,
  BookOpen,
  Layers,
  GraduationCap,
} from 'lucide-react';

export interface CampusPhoto {
  id: string;
  title: string;
  category: string;
  src: string;
  desc: string;
  location: string;
  tag: string;
}

export const CAMPUS_HD_PHOTOS: CampusPhoto[] = [
  {
    id: 'sanam-chandra-lake',
    title: 'พระราชวังสนามจันทร์ & สะพานสระแก้ว ม.ศิลปากร',
    category: 'สถานที่จริง (Official Campus Landmark)',
    src: '/src/assets/images/silpakorn_campus_hd_1791887871176.jpg',
    desc: 'ทัศนียภาพพระที่นั่งพิมานปฐม พระที่นั่งวัชรีรมยา สระบัวหลวง และบรรยากาศร่มรื่นของวิทยาเขตพระราชวังสนามจันทร์ จ.นครปฐม ที่ผสานประวัติศาสตร์เข้ากับการศึกษา',
    location: 'พระราชวังสนามจันทร์ มหาวิทยาลัยศิลปากร นครปฐม',
    tag: '1080p Full HD · สถานที่จริง',
  },
  {
    id: 'edtech-studio-building',
    title: 'อาคารคณะศึกษาศาสตร์ & สตูดิโอเทคโนโลยีการศึกษา',
    category: 'อาคารเรียนและห้องปฏิบัติการ',
    src: '/src/assets/images/silpakorn_edtech_building_1791887900456.jpg',
    desc: 'ศูนย์สร้างสรรค์สื่อดิจิทัลและนวัตกรรมการเรียนรู้ คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร พร้อมอุปกรณ์โปรดักชันและสตูดิโอถ่ายทำระดับมืออาชีพ',
    location: 'คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร',
    tag: 'บรรยากาศจริง · นักศึกษา EdTech',
  },
  {
    id: 'wai-kru-ceremony',
    title: 'พิธีไหว้ครู ภาควิชาเทคโนโลยีการศึกษา ณ อาคารโสมสวลี',
    category: 'ประเพณีและกิจกรรมภาควิชาฯ',
    src: '/src/assets/images/wai_kru_su/photo_01.jpg',
    desc: 'พิธีไหว้ครูประจำปี แสดงความกตัญญุตาต่อคณาจารย์ผู้ประสิทธิ์ประสาทวิชา สานสัมพันธ์เหนียวแน่นระหว่างรุ่นพี่-รุ่นน้อง EdTech ศิลปากร',
    location: 'อาคารโสมสวลี พระราชวังสนามจันทร์',
    tag: 'ภาพจริงจากเพจสาขาวิชาฯ',
  },
  {
    id: 'flower-and-feeling',
    title: 'นิทรรศการนวัตกรรมสื่อและศิลปะปฏิสัมพันธ์',
    category: 'นิทรรศการผลงานนักศึกษา',
    src: '/src/assets/images/flower_and_feeling/cover.jpg',
    desc: 'การจัดแสดงผลงานมีเดียอาร์ต แสง สี เสียง และเทคโนโลยีการเรียนรู้แบบมีส่วนร่วม จัดโดยนักศึกษาภาควิชาเทคโนโลยีการศึกษา',
    location: 'ลานนิทรรศการศิลปกรรมและสื่อการศึกษา',
    tag: 'ผลงานจริง · Media Exhibition',
  },
  {
    id: 'sanam-chandra-bridge',
    title: 'สระแก้วและสะพานประวัติศาสตร์ พระราชวังสนามจันทร์',
    category: 'ทัศนียภาพรอบมหาวิทยาลัย',
    src: '/src/assets/images/sanam_chandra_campus_1791887374983.jpg',
    desc: 'มุมมองทางสถาปัตยกรรมอันงดงามของพระราชวังสนามจันทร์ ศูนย์กลางแห่งศิลปะ วัฒนธรรม และปัญญาของมหาวิทยาลัยศิลปากร',
    location: 'พระราชวังสนามจันทร์ นครปฐม',
    tag: 'สัญลักษณ์มหาวิทยาลัยศิลปากร',
  },
  {
    id: 'symposium-booth',
    title: 'การจัดแสดงนวัตกรรมวิชาการระดับชาติ 4SPB Symposium',
    category: 'วิชาการและวิจัย',
    src: '/src/assets/images/symposium_4spb_booth_1791379580681.jpg',
    desc: 'บูธนำเสนอโครงการวิจัย สื่อเทคโนโลยีความจริงเสมือน (VR) และนวัตกรรมการสอนของคณาจารย์และนักศึกษาภาควิชาเทคโนโลยีการศึกษา',
    location: 'ศูนย์การประชุมและสัมมนาทางวิชาการ',
    tag: 'วิจัยและนวัตกรรมระดับสากล',
  },
];

export const AboutSection: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<number>(0);
  const [selectedPhoto, setSelectedPhoto] = useState<CampusPhoto | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPhotos = selectedCategory === 'all'
    ? CAMPUS_HD_PHOTOS
    : CAMPUS_HD_PHOTOS.filter((p) => p.category.includes(selectedCategory));

  return (
    <section
      id="about"
      className="py-24 relative bg-gradient-to-b from-[#05111D] via-[#091E33] to-[#040E19] text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative vertical top-to-bottom subtle lighting glow layers */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-cyan-500/10 via-blue-500/8 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[550px] h-[550px] bg-gradient-to-t from-amber-500/10 via-amber-600/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative academic dot pattern overlay */}
      <div className="absolute inset-0 bg-pattern-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Rich, Prestigious & Well-Decorated */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-white/10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-cyan-400/30 backdrop-blur-md text-xs font-semibold text-cyan-300 shadow-md">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>เกี่ยวกับสาขาวิชาและอัตลักษณ์ศิลปากร (About Department & Campus Identity)</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.2] drop-shadow-md">
              ศูนย์กลางนวัตกรรมการเรียนรู้ <br />
              <span className="bg-gradient-to-r from-amber-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                แห่งมหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์
              </span>
            </h2>
            
            <p className="text-base text-slate-200 leading-relaxed font-light drop-shadow-sm">
              {DEPARTMENT_ABOUT.foundedTh} สถาปนาบนผืนแผ่นดินอันทรงคุณค่าทางประวัติศาสตร์ของวิทยาเขตพระราชวังสนามจันทร์ จังหวัดนครปฐม 
              มุ่งมั่นผสานสุนทรียศาสตร์แห่งศิลปะเข้ากับเทคโนโลยีดิจิทัลขั้นสูง เพื่อสร้างสรรค์นวัตกรรมการศึกษาของประเทศ
            </p>
          </div>

          {/* Academic heritage highlight pill */}
          <div className="p-4 rounded-2xl bg-white/[0.07] border border-white/15 backdrop-blur-xl flex items-center gap-4 text-xs shrink-0 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-900 font-extrabold text-lg shadow-md">
              SU
            </div>
            <div>
              <div className="text-amber-300 font-bold tracking-wide">มหาวิทยาลัยศิลปากร</div>
              <div className="text-slate-300 font-mono text-[11px]">พระราชวังสนามจันทร์ นครปฐม</div>
              <div className="text-emerald-300 text-[10px] font-semibold flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ก่อตั้ง พ.ศ. 2524 (กว่า 45 ปี)</span>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            CAMPUS ATMOSPHERE & REAL HD PHOTOS SHOWCASE (ภาพจริง คมชัด HD)
            ------------------------------------------------------------- */}
        <div className="mb-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Camera className="w-4 h-4 text-amber-400" />
                <span>ภาพบรรยากาศจริง มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์ (HD Real Photos)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                ทัศนียภาพสถานที่จริงและชีวิตในรั้วมหาวิทยาลัย
              </h3>
              <p className="text-xs text-slate-300 font-light">
                ภาพถ่ายคมชัดระดับ HD อิงสถานที่จริงและกิจกรรมของนักศึกษาภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์
              </p>
            </div>

            {/* Category filter tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white/[0.06] rounded-xl border border-white/10 self-start sm:self-auto text-xs">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                ทั้งหมด (6 ภาพ)
              </button>
              <button
                onClick={() => setSelectedCategory('สถานที่จริง')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedCategory === 'สถานที่จริง'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                พระราชวังสนามจันทร์
              </button>
              <button
                onClick={() => setSelectedCategory('กิจกรรม')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedCategory === 'กิจกรรม'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                กิจกรรม & นิทรรศการ
              </button>
            </div>
          </div>

          {/* Photo Grid with HD Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative rounded-2xl overflow-hidden border border-white/15 bg-[#0A1E33]/80 hover:border-cyan-400/60 shadow-[0_12px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Photo Image Aspect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle top & bottom shadow gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061423] via-transparent to-black/30 opacity-90 group-hover:opacity-75 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/30 shadow-sm flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{photo.tag}</span>
                    </span>
                    <span className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/80 group-hover:text-white group-hover:bg-cyan-500 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Location Pin */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-[11px] text-cyan-200 font-medium truncate drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{photo.location}</span>
                  </div>
                </div>

                {/* Card Description Content */}
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0A1E33]/90 to-[#071524]">
                  <div>
                    <div className="text-[11px] font-mono text-cyan-400/90 tracking-wide">
                      {photo.category}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-300/90 line-clamp-2 leading-relaxed pt-1 font-light">
                      {photo.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-300 transition-colors">
                    <span>คลิกเพื่อดูภาพขยาย HD</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------------
            VISION & MISSIONS BENTO GRID (Deep Royal Navy + Glassmorphism)
            ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Vision Block (Rich royal gradient with amber rim glow) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B2138] via-[#091D32] to-[#040E1A] text-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-amber-500/20 relative overflow-hidden group">
            {/* Ambient glows inside card */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center shadow-md">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-400/30">
                  วิสัยทัศน์สาขาวิชา
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-display leading-snug">
                มุ่งสู่ความเป็นเลิศด้าน <br />
                <span className="text-amber-300">นวัตกรรมและเทคโนโลยีการเรียนรู้</span>
              </h3>

              <p className="text-slate-200 text-base font-light leading-relaxed italic bg-white/[0.04] p-5 rounded-2xl border border-white/5">
                "{DEPARTMENT_ABOUT.visionTh}"
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>วิทยาเขตพระราชวังสนามจันทร์ นครปฐม</span>
              </span>
              <span className="font-mono text-amber-300 font-bold">EST. 2524</span>
            </div>
          </div>

          {/* Mission & Core Pillars Block with Glassmorphism */}
          <div className="lg:col-span-7 bg-[#0A1E33]/70 backdrop-blur-2xl rounded-3xl p-8 border border-white/15 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      พันธกิจหลัก 4 มิติ (Key Missions)
                    </h3>
                    <p className="text-xs text-slate-300">
                      ทิศทางการพัฒนาทางวิชาการและสังคมของภาควิชาเทคโนโลยีการศึกษา
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DEPARTMENT_ABOUT.missionTh.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md border border-white/10 space-y-2 glow-card-hover shadow-sm transition-all"
                  >
                    <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
                      พันธกิจ 0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-snug font-light">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accreditations bar */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-3">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ผ่านการรับรองมาตรฐานหลักสูตรกระทรวง อว.</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>อาจารย์ผ่านเกณฑ์ Thailand-PSF ระดับมืออาชีพ</span>
              </span>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            FACILITIES SHOWCASE with High-Contrast Photo Previews
            ------------------------------------------------------------- */}
        <div className="bg-gradient-to-br from-[#0B2138] via-[#091D32] to-[#040E1A] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/15">
          {/* Ambient lights */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left selector */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Building className="w-4 h-4" />
                <span>ห้องปฏิบัติการและศูนย์การเรียนรู้เฉพาะทาง</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug">
                โครงสร้างพื้นฐานระดับพรีเมียม <br />
                เพื่อการฝึกปฏิบัติการจริง
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed font-light">
                เราจัดเตรียมสภาพแวดล้อมที่จำลองสตูดิโอถ่ายทำระดับบรอดคาสต์ ห้องตัดต่อ ห้องปฏิบัติการเสมือนจริง (VR Lab) 
                เพื่อให้นักศึกษาได้ลงมือปฏิบัติจริงตั้งแต่ชั้นปีที่ 1
              </p>

              <div className="space-y-2 pt-2">
                {DEPARTMENT_ABOUT.facilities.map((fac, idx) => (
                  <button
                    key={fac.title}
                    onClick={() => setActiveFacility(idx)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm ${
                      activeFacility === idx
                        ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold shadow-[0_4px_16px_rgba(6,182,212,0.35)] border border-cyan-300/40'
                        : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] border border-white/5'
                    }`}
                  >
                    <span>{fac.title}</span>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right preview display */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/50 aspect-video flex flex-col justify-end p-6 shadow-2xl">
                <img
                  src={
                    activeFacility === 0
                      ? '/src/assets/images/silpakorn_edtech_building_1791887900456.jpg'
                      : activeFacility === 1
                      ? '/src/assets/images/student_work_interactive_vr_1790939657670.jpg'
                      : activeFacility === 2
                      ? '/src/assets/images/infocomm/infocomm_expo_2.jpg'
                      : '/src/assets/images/research_edtech_lab_1790939681860.jpg'
                  }
                  alt={DEPARTMENT_ABOUT.facilities[activeFacility].title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                />
                
                {/* Contrast scrim for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E1A] via-[#040E1A]/60 to-transparent" />

                <div className="relative z-10 space-y-2">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                    Facility Highlight 0{activeFacility + 1}
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {DEPARTMENT_ABOUT.facilities[activeFacility].title}
                  </h4>
                  <p className="text-xs text-slate-200 max-w-xl leading-relaxed font-light">
                    {DEPARTMENT_ABOUT.facilities[activeFacility].desc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* -------------------------------------------------------------
          FULL-SCREEN HD PHOTO PREVIEW MODAL
          ------------------------------------------------------------- */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="w-full max-w-5xl bg-[#071626] rounded-3xl border border-white/20 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 bg-[#05111D] flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold">
                  {selectedPhoto.tag}
                </span>
                <span className="text-slate-300 hidden sm:inline">·</span>
                <span className="text-cyan-300 font-medium hidden sm:inline">{selectedPhoto.location}</span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="ปิดรูปภาพ"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative bg-black flex-1 min-h-[300px] max-h-[65vh] flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-5 sm:p-6 bg-[#081C30] border-t border-white/10 space-y-1.5">
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {selectedPhoto.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
