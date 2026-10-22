import React, { useState } from 'react';
import { ArrowRight, Sparkles, Layers, Sliders, Play, CheckCircle2, ChevronRight, GraduationCap, Camera, Image as ImageIcon } from 'lucide-react';

interface HeroProps {
  onExplorePrograms: () => void;
  onOpenLearningHub: () => void;
}

export interface HeroCoverOption {
  id: string;
  name: string;
  shortName: string;
  src: string;
  caption: string;
}

export const HERO_COVER_OPTIONS: HeroCoverOption[] = [
  {
    id: 'sanam-chandra-hd',
    name: 'ม.ศิลปากร พระราชวังสนามจันทร์ (คมชัดระดับ HD อิงสถานที่จริง)',
    shortName: 'ม.ศิลปากร HD (สถานที่จริง)',
    src: '/src/assets/images/silpakorn_campus_hd_1791887871176.jpg',
    caption: 'ภาพทัศนียภาพพระราชวังสนามจันทร์ สระแก้ว และบรรยากาศมหาวิทยาลัยศิลปากร คมชัดระดับ HD',
  },
  {
    id: 'edtech-building-hd',
    name: 'อาคารคณะศึกษาศาสตร์ & สตูดิโอเทคโนโลยีการศึกษา (HD)',
    shortName: 'คณะศึกษาศาสตร์ (HD)',
    src: '/src/assets/images/silpakorn_edtech_building_1791887900456.jpg',
    caption: 'อาคารคณะศึกษาศาสตร์และศูนย์นวัตกรรมเทคโนโลยีการศึกษา มหาวิทยาลัยศิลปากร คมชัดระดับ HD',
  },
  {
    id: 'edtech-su-logo',
    name: 'ตราสัญลักษณ์ภาควิชาเทคโนโลยีการศึกษา ศิลปากร',
    shortName: 'โลโก้ภาควิชาฯ',
    src: '/src/assets/images/edtech_su_logo_cover_1791887375119.jpg',
    caption: 'ตราสัญลักษณ์และอัตลักษณ์ภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ ม.ศิลปากร',
  },
  {
    id: 'sanam-chandra-campus',
    name: 'พระราชวังสนามจันทร์ นครปฐม',
    shortName: 'พระราชวังสนามจันทร์',
    src: '/src/assets/images/sanam_chandra_campus_1791887374983.jpg',
    caption: 'ภาพทัศนียภาพมหาวิทยาลัยศิลปากร วิทยาเขตพระราชวังสนามจันทร์ จ.นครปฐม',
  },
  {
    id: 'wai-kru',
    name: 'พิธีไหว้ครู ภาควิชาฯ 2569 (ภาพจริง)',
    shortName: 'พิธีไหว้ครู 2569',
    src: '/src/assets/images/wai_kru_2569/photo_01.jpg',
    caption: 'พิธีไหว้ครู ภาควิชาเทคโนโลยีการศึกษา ณ อาคารโสมสวลี พระราชวังสนามจันทร์',
  },
  {
    id: 'symposium',
    name: 'นวัตกรรมและผลงานวิชาการ 4SPB',
    shortName: 'งานวิชาการ 4SPB',
    src: '/src/assets/images/symposium_4spb_booth_1791379580681.jpg',
    caption: 'บูธจัดแสดงผลงานนวัตกรรมสื่อการศึกษา ณ งานสัมมนาทางวิชาการ',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExplorePrograms, onOpenLearningHub }) => {
  // Hero Cover Image State (ภาพปกเว็บแบบอ่อนๆ มีความเบลอ ตัวหนังสืออ่านง่าย ไม่กลืนกัน)
  const [selectedCoverIndex, setSelectedCoverIndex] = useState<number>(0);
  const [opacityLevel, setOpacityLevel] = useState<number>(28); // Default soft 28%
  const [blurLevel, setBlurLevel] = useState<number>(8); // Default 8px blur (ให้มีความเบลอ)

  // Interactive Simulator State in Hero
  const [activeTab, setActiveTab] = useState<'isd' | 'techStack' | 'pedagogy'>('isd');
  
  // ISD Pipeline State
  const [currentStep, setCurrentStep] = useState<number>(0);
  const isdSteps = [
    { name: 'Analysis', desc: 'วิเคราะห์ความต้องการและลักษณะผู้เรียน', tool: 'Performance Gap & Needs Matrix' },
    { name: 'Design', desc: 'ออกแบบโครงสร้างสาระ วัตถุประสงค์ และ Storyboard', tool: 'Curriculum & UI/UX Blueprints' },
    { name: 'Development', desc: 'ผลิตสื่อมัลติมีเดีย โค้ดดิ้ง และแอนิเมชัน', tool: 'Interactive Digital Assets' },
    { name: 'Implementation', desc: 'ทดลองใช้ในสภาพแวดล้อมจริงและ LMS', tool: 'Cloud LMS & Virtual Sandbox' },
    { name: 'Evaluation', desc: 'ประเมินผลสัมฤทธิ์และสะท้อนข้อมูลปรับปรุง', tool: 'Formative & Summative Analytics' },
  ];

  // Pedagogy Simulator State
  const [interactivity, setInteractivity] = useState<number>(85);
  const [cognitivePacing, setCognitivePacing] = useState<number>(75);
  const [mediaRichness, setMediaRichness] = useState<number>(90);

  const retentionScore = Math.min(
    99,
    Math.round((interactivity * 0.45) + (cognitivePacing * 0.25) + (mediaRichness * 0.3))
  );

  const activeCover = HERO_COVER_OPTIONS[selectedCoverIndex] || HERO_COVER_OPTIONS[0];

  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-[#040D1A] via-[#07192C] to-[#05111D] text-white overflow-hidden">
      
      {/* -------------------------------------------------------------
          1. Hero Cover Image Backdrop (ภาพปกเว็บแบบอ่อนๆ มีความเบลอ ตัวหนังสืออ่านง่าย ไม่กลืนกัน)
          ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Cover Photo with Blur Effect (ให้มีความเบลอ) */}
        <img
          src={activeCover.src}
          alt={activeCover.name}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out scale-110 transform"
          style={{
            opacity: opacityLevel / 100,
            filter: `blur(${blurLevel}px) brightness(0.8) contrast(1.06)`,
          }}
        />

        {/* Multi-layered Dark Scrim Gradients for Absolute Text Readability */}
        {/* Horizontal Gradient: strong contrast on the left side where headings sit */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040D1A] via-[#040D1A]/90 sm:via-[#040D1A]/80 to-[#061423]/65" />

        {/* Vertical Gradient: seamless top-to-bottom flow (ไล่เฉดบนล่าง) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040D1A]/95 via-[#081B30]/65 to-[#05111D]" />

        {/* Subtle radial tech dot matrix */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* -------------------------------------------------------------
          2. Soft Multi-Layered Ambient Light & Radial Glows
          ------------------------------------------------------------- */}
      {/* Soft Ambient Light 1: Warm Amber / Gold glow for academic heritage */}
      <div 
        className="absolute -top-24 right-1/4 w-[520px] h-[520px] bg-gradient-to-br from-amber-400/10 via-amber-500/5 to-transparent rounded-full blur-[110px] pointer-events-none animate-amber-slow"
        aria-hidden="true"
      />

      {/* Soft Ambient Light 2: Digital Cyan / Sky glow for innovation */}
      <div 
        className="absolute top-1/4 -right-16 w-[620px] h-[620px] bg-gradient-to-bl from-cyan-500/12 via-blue-600/8 to-transparent rounded-full blur-[130px] pointer-events-none animate-ambient-slow"
        aria-hidden="true"
      />

      {/* Soft Ambient Light 3: Mint Green / Teal glow at lower left */}
      <div 
        className="absolute -bottom-20 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-500/12 via-teal-500/10 to-transparent rounded-full blur-[120px] pointer-events-none animate-ambient-reverse"
        aria-hidden="true"
      />

      {/* Floating subtle ambient light particles (organic, calm, non-gaming) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/5 w-1.5 h-1.5 rounded-full bg-cyan-300/40 blur-[1px] animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-amber-300/30 blur-[1px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-emerald-300/40 blur-[1px] animate-pulse" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-1/4 right-1/6 w-2 h-2 rounded-full bg-blue-400/30 blur-[1px] animate-pulse" style={{ animationDelay: '3.2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Academic Typography & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Quiet Sub-kicker with soft mint dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#05111D]/80 border border-white/15 backdrop-blur-md text-xs font-medium text-slate-200 shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span>คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์</span>
            </div>

            {/* Prominent Header with Blue -> Cyan -> Mint Green Gradient on accent */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] font-display text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                สาขาเทคโนโลยีการศึกษา
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent mt-1.5 drop-shadow-sm">
                  ศิลปากร พระราชวังสนามจันทร์
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                บูรณาการศาสตร์การศึกษา การออกแบบสื่อเชิงสร้างสรรค์ และเทคโนโลยีดิจิทัลขั้นสูง เพื่อสร้างสรรค์นักปฏิบัติการและผู้นำการเปลี่ยนแปลงแห่งวงการเรียนรู้ระดับสากล
              </p>
            </div>

            {/* Quick CTAs with subtle glow */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-blue-600 hover:to-cyan-500 text-white font-semibold text-sm shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.45)] transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>สำรวจหลักสูตรทุกระดับ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenLearningHub}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 hover:border-cyan-400/40 text-white font-medium text-sm backdrop-blur-md transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span>เข้าสู่ Learning Hub</span>
              </button>
            </div>

            {/* Editorial Numbers Row with Slender Glass Tiles */}
            <div className="grid grid-cols-3 gap-3.5 pt-6 border-t border-white/10">
              <div className="p-3.5 rounded-xl bg-[#061423]/75 border border-white/10 backdrop-blur-md shadow-md">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers drop-shadow-sm">
                  45+
                </div>
                <div className="text-xs text-slate-300 mt-1 font-medium">ปีแห่งการบุกเบิก</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#061423]/75 border border-white/10 backdrop-blur-md shadow-md">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono-numbers drop-shadow-sm">
                  100%
                </div>
                <div className="text-xs text-slate-300 mt-1 font-medium">คณาจารย์ระดับปริญญาเอก</div>
                {/* Faculty avatars row (7 distinct portraits) */}
                <div className="flex items-center -space-x-1.5 mt-2">
                  {[
                    { id: 'sitthichai', name: 'ผศ.ดร.สิทธิชัย ลายเสมา', img: '/src/assets/images/faculty/sitthichai.jpg' },
                    { id: 'siwanit', name: 'รศ.ดร.ศิวนิต อรรถวุฒิกุล', img: '/src/assets/images/faculty/siwanit.jpg' },
                    { id: 'thapanee', name: 'รศ.ดร.ฐาปนีย์ ธรรมเมธา', img: '/src/assets/images/faculty/thapanee.jpg' },
                    { id: 'anirut', name: 'รศ.ดร.อนิรุทธ์ สติมั่น', img: '/src/assets/images/faculty/anirut.jpg' },
                    { id: 'nammon', name: 'รศ.ดร.น้ำมนต์ เรืองฤทธิ์', img: '/src/assets/images/faculty/nammon.jpg' },
                    { id: 'ekanarin', name: 'รศ.ดร.เอกนฤน บางท่าไม้', img: '/src/assets/images/faculty/ekanarin.jpg' },
                    { id: 'worawut', name: 'ผศ.ดร.วรวุฒิ มั่นสุขผล', img: '/src/assets/images/faculty/worawut.jpg' },
                  ].map((fac) => (
                    <img
                      key={fac.id}
                      src={fac.img}
                      alt={fac.name}
                      title={fac.name}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover ring-1.5 ring-[#0A1E33] shadow-sm hover:scale-125 hover:z-10 transition-transform cursor-pointer"
                      onClick={() => {
                        const el = document.getElementById('faculty');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#061423]/75 border border-white/10 backdrop-blur-md shadow-md">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono-numbers drop-shadow-sm">
                  4
                </div>
                <div className="text-xs text-slate-300 mt-1 font-medium">ปริญญาตรี โท เอก</div>
              </div>
            </div>

            {/* Subtle Interactive Cover Photo Switcher, Blur Controller & Softness */}
            <div className="p-3 rounded-xl bg-[#061423]/80 border border-white/10 backdrop-blur-md space-y-2 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold text-slate-200">ภาพปกเว็บ (Cover Photo):</span>
                </div>
                
                {/* Controllers: Blur & Opacity ("ให้มีความเบลอ" และ "อ่อนๆ") */}
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  {/* Blur Controller */}
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400 hidden sm:inline">ความเบลอ:</span>
                    {[
                      { label: 'เบลอน้อย', val: 4 },
                      { label: 'เบลอนุ่มนวล', val: 8 },
                      { label: 'เบลอมาก', val: 14 },
                      { label: 'ไม่เบลอ', val: 0 },
                    ].map((b) => (
                      <button
                        key={b.val}
                        onClick={() => setBlurLevel(b.val)}
                        className={`px-1.5 py-0.5 rounded transition-colors ${
                          blurLevel === b.val
                            ? 'bg-emerald-500/30 text-emerald-200 font-medium border border-emerald-400/40'
                            : 'text-slate-400 hover:text-slate-200 bg-white/[0.04]'
                        }`}
                        title={`ปรับระดับความเบลอภาพ ${b.val}px`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>

                  {/* Opacity Softness Selector ("อ่อนๆ") */}
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400 hidden sm:inline ml-1">ความเข้ม:</span>
                    {[
                      { label: 'อ่อนๆ', val: 20 },
                      { label: 'พอดี', val: 28 },
                      { label: 'ชัดขึ้น', val: 40 },
                    ].map((lvl) => (
                      <button
                        key={lvl.val}
                        onClick={() => setOpacityLevel(lvl.val)}
                        className={`px-1.5 py-0.5 rounded transition-colors ${
                          opacityLevel === lvl.val
                            ? 'bg-cyan-500/30 text-cyan-200 font-medium border border-cyan-400/40'
                            : 'text-slate-400 hover:text-slate-200 bg-white/[0.04]'
                        }`}
                        title={`ปรับความเข้มแสงพื้นหลัง ${lvl.val}%`}
                      >
                        {lvl.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cover Options Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 pt-1">
                {HERO_COVER_OPTIONS.map((cov, idx) => {
                  const isSelected = selectedCoverIndex === idx;
                  return (
                    <button
                      key={cov.id}
                      onClick={() => setSelectedCoverIndex(idx)}
                      className={`px-2 py-1.5 rounded-lg text-left text-[11px] transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-gradient-to-r from-blue-600/50 to-cyan-600/40 border border-cyan-400/60 text-white font-medium shadow-sm'
                          : 'bg-white/[0.03] border border-white/5 text-slate-300 hover:text-white hover:bg-white/[0.07]'
                      }`}
                      title={cov.caption}
                    >
                      <Camera className={`w-3 h-3 shrink-0 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`} />
                      <span className="truncate">{cov.shortName}</span>
                    </button>
                  );
                })}
              </div>

              <div className="text-[10px] text-slate-400 truncate pt-0.5">
                📍 {activeCover.caption}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Technology Visual & Glassmorphism Simulator */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Soft Ambient Rim Glow behind Mockup */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 via-cyan-500/25 to-emerald-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Glassmorphic Container with Slender Border and Subtle Rim Light */}
              <div className="bg-[#0A1E33]/75 backdrop-blur-2xl rounded-2xl border border-white/15 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_35px_rgba(6,182,212,0.12)] relative overflow-hidden transition-all duration-300">
                
                {/* Header with Selector Tabs */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/90 shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm" />
                    <span className="text-xs font-mono text-slate-300 ml-2 hidden sm:inline">
                      EdTech Systems Interactive Simulator
                    </span>
                  </div>

                  {/* Segmented Control */}
                  <div className="flex items-center gap-1 p-1 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 text-xs">
                    <button
                      onClick={() => setActiveTab('isd')}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        activeTab === 'isd'
                          ? 'bg-[#2563EB] text-white font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      ADDIE
                    </button>
                    <button
                      onClick={() => setActiveTab('pedagogy')}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        activeTab === 'pedagogy'
                          ? 'bg-gradient-to-r from-[#00A99D] to-[#06B6D4] text-white font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Retention
                    </button>
                    <button
                      onClick={() => setActiveTab('techStack')}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        activeTab === 'techStack'
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Tech Stack
                    </button>
                  </div>
                </div>

                {/* View 1: ISD ADDIE Flow Stage */}
                {activeTab === 'isd' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold text-slate-200">
                        วงจรการออกแบบระบบการสอน (Instructional Systems Design)
                      </span>
                      <span className="font-mono text-cyan-300 font-medium">
                        ขั้นตอนที่ {currentStep + 1} จาก {isdSteps.length}
                      </span>
                    </div>

                    {/* Horizontal Stage Stepper */}
                    <div className="grid grid-cols-5 gap-1.5 py-2">
                      {isdSteps.map((step, idx) => {
                        const isCurrent = currentStep === idx;
                        const isDone = currentStep > idx;
                        return (
                          <button
                            key={step.name}
                            onClick={() => setCurrentStep(idx)}
                            className={`flex flex-col items-center p-2 rounded-xl text-center transition-all ${
                              isCurrent
                                ? 'bg-gradient-to-b from-[#2563EB] to-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-cyan-400/40 scale-105'
                                : isDone
                                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/25'
                                : 'bg-white/[0.04] text-slate-400 border border-white/5 hover:bg-white/[0.08]'
                            }`}
                          >
                            <div className="text-[10px] uppercase font-bold font-mono">
                              {step.name.slice(0, 3)}
                            </div>
                            <div className="text-[9px] truncate max-w-full font-medium mt-0.5">
                              {idx + 1}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Step Showcase Card with Layered Depth */}
                    <div className="bg-[#06121E]/60 backdrop-blur-md rounded-xl p-4 border border-white/10 space-y-2.5 shadow-inner">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          {isdSteps[currentStep].name} Stage
                        </h4>
                        <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-white/10 border border-white/10 text-slate-300 font-mono">
                          {isdSteps[currentStep].tool}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {isdSteps[currentStep].desc}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <button
                          onClick={() => setCurrentStep((prev) => (prev > 0 ? prev - 1 : isdSteps.length - 1))}
                          className="text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
                        >
                          ย้อนกลับ
                        </button>
                        <button
                          onClick={() => setCurrentStep((prev) => (prev < isdSteps.length - 1 ? prev + 1 : 0))}
                          className="text-xs text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-blue-600 hover:to-cyan-500 px-3.5 py-1.5 rounded-lg flex items-center gap-1 font-semibold shadow-md transition-all"
                        >
                          <span>ขั้นต่อไป</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* View 2: Pedagogy Retention Engine Simulator */}
                {activeTab === 'pedagogy' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold text-slate-200">
                        ดัชนีการคงอยู่ของความรู้ (Predicted Learning Retention)
                      </span>
                      <span className="text-emerald-400 font-bold font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active Engine
                      </span>
                    </div>

                    {/* Main Metric Gauge with Glassmorphic Highlight */}
                    <div className="bg-[#06121E]/60 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center justify-between shadow-inner">
                      <div>
                        <div className="text-xs text-slate-400">ดัชนีประสิทธิภาพการเรียนรู้</div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 font-mono-numbers">
                          {retentionScore}%
                        </div>
                        <div className="text-[11px] text-slate-300 mt-1">
                          {retentionScore >= 85 ? 'ระดับยอดเยี่ยม (High Retention & Engagement)' : 'ระดับปานกลาง (Moderate)'}
                        </div>
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-cyan-400/80 flex items-center justify-center bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                        <GraduationCap className="w-8 h-8 text-cyan-300" />
                      </div>
                    </div>

                    {/* Sliders with custom cyan/blue/mint accents */}
                    <div className="space-y-3 bg-[#06121E]/40 backdrop-blur-sm rounded-xl p-3.5 border border-white/5">
                      <div>
                        <div className="flex justify-between text-xs mb-1 text-slate-300">
                          <span>การมีปฏิสัมพันธ์ (Interactivity & Hands-on)</span>
                          <span className="font-mono text-cyan-300">{interactivity}%</span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="100"
                          value={interactivity}
                          onChange={(e) => setInteractivity(Number(e.target.value))}
                          className="w-full accent-[#06B6D4] cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1 text-slate-300">
                          <span>การแบ่งจังหวะเนื้อหา (Cognitive Pacing)</span>
                          <span className="font-mono text-blue-400">{cognitivePacing}%</span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="100"
                          value={cognitivePacing}
                          onChange={(e) => setCognitivePacing(Number(e.target.value))}
                          className="w-full accent-[#2563EB] cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1 text-slate-300">
                          <span>ความสมบูรณ์ของสื่อ (Multimodal Richness)</span>
                          <span className="font-mono text-purple-400">{mediaRichness}%</span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="100"
                          value={mediaRichness}
                          onChange={(e) => setMediaRichness(Number(e.target.value))}
                          className="w-full accent-purple-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* View 3: Tech Stack Matrix */}
                {activeTab === 'techStack' && (
                  <div className="space-y-3">
                    <div className="text-xs text-slate-300 font-semibold">
                      ระบบนิเวศเทคโนโลยีของภาควิชาเทคโนโลยีการศึกษา
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-[#06121E]/60 border border-white/10 space-y-1 hover:border-blue-400/40 transition-colors">
                        <div className="text-blue-400 font-bold flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Immersive XR</span>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          Unity 3D, Meta Quest SDK, Unreal Engine, WebXR
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#06121E]/60 border border-white/10 space-y-1 hover:border-cyan-400/40 transition-colors">
                        <div className="text-cyan-300 font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>AI & Analytics</span>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          LLM Integration, Prompt Engineering, Learner Analytics
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#06121E]/60 border border-white/10 space-y-1 hover:border-amber-400/40 transition-colors">
                        <div className="text-amber-300 font-bold flex items-center gap-1.5">
                          <Play className="w-3.5 h-3.5" />
                          <span>Media Production</span>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          4K Multi-camera Studio, Motion Design, Spatial Sound
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#06121E]/60 border border-white/10 space-y-1 hover:border-purple-400/40 transition-colors">
                        <div className="text-purple-400 font-bold flex items-center gap-1.5">
                          <Sliders className="w-3.5 h-3.5" />
                          <span>Digital Platform</span>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          Moodle, Thai MOOC Architecture, SCORM/xAPI, Web Apps
                        </p>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/30 text-[11px] text-blue-200">
                      💡 นักศึกษาได้ฝึกปฏิบัติงานจริงกับอุปกรณ์และซอฟต์แวร์ระดับอุตสาหกรรมตลอด 4 ปี
                    </div>
                  </div>
                )}

                {/* Bottom Scrim / Lab Photo Reference */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span>วิทยาเขตพระราชวังสนามจันทร์ จ.นครปฐม</span>
                  </span>
                  <a
                    href="#about"
                    className="text-cyan-300 hover:text-cyan-200 hover:underline flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>ข้อมูลอาคารสถานที่</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
