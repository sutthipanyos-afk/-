import React, { useState } from 'react';
import { DEPARTMENT_ABOUT } from '../data/edtechData';
import { Compass, Eye, Target, MapPin, Building, ChevronRight, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<number>(0);

  return (
    <section id="about" className="py-20 relative bg-white dark:bg-[#06121E] transition-colors duration-200 overflow-hidden">
      
      {/* Subtle ambient lighting for background depth */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/5 via-blue-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-cyan-500 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
            <Compass className="w-4 h-4" />
            <span>เกี่ยวกับสาขาวิชา (About Department)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06121E] dark:text-white tracking-tight font-display leading-[1.25]">
            สร้างสรรค์นวัตกรรมการเรียนรู้ <br className="hidden sm:inline" />
            <span className="gradient-accent-text">
              ผสานศิลปะและเทคโนโลยีดิจิทัลแห่งศิลปากร
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300/90 leading-relaxed font-light">
            {DEPARTMENT_ABOUT.foundedTh} ตั้งอยู่ท่ามกลางบรรยากาศร่มรื่นทางประวัติศาสตร์ของวิทยาเขตพระราชวังสนามจันทร์ จังหวัดนครปฐม
          </p>
        </div>

        {/* Vision & Mission Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Vision Block (Deep Navy with ambient depth) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#06121E] via-[#091D30] to-[#040E19] text-white rounded-2xl p-8 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-400/20 text-cyan-300 flex items-center justify-center shadow-sm">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                วิสัยทัศน์ (Vision)
              </h3>
              <p className="text-slate-200 text-lg font-light leading-relaxed italic">
                {DEPARTMENT_ABOUT.visionTh}
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์</span>
            </div>
          </div>

          {/* Mission & Core Pillars Block with Glassmorphism */}
          <div className="lg:col-span-7 bg-[#F8FAFC]/80 dark:bg-[#071626]/70 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 dark:bg-blue-500/15 border border-blue-500/20 text-[#2563EB] dark:text-cyan-300 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#06121E] dark:text-white font-display">
                    พันธกิจหลัก 4 มิติ (Key Missions)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    ทิศทางการพัฒนาทางวิชาการและสังคมของภาควิชาเทคโนโลยีการศึกษา
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DEPARTMENT_ABOUT.missionTh.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/90 dark:bg-[#0A1E33]/70 backdrop-blur-md border border-slate-200/70 dark:border-white/5 space-y-2 glow-card-hover shadow-sm"
                  >
                    <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-mono">
                      พันธกิจ 0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accreditations bar */}
            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>ผ่านการรับรองมาตรฐานหลักสูตรกระทรวง อว.</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>อาจารย์ผ่านเกณฑ์ Thailand-PSF ระดับ 3</span>
              </span>
            </div>
          </div>
        </div>

        {/* Facilities Interactive Showcase with Layered Ambient Depth */}
        <div className="bg-gradient-to-br from-[#06121E] via-[#091D30] to-[#040E19] rounded-2xl p-6 sm:p-10 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10">
          
          {/* Subtle warm amber and teal ambient lights inside facilities container */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left selector */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Building className="w-4 h-4" />
                <span>ห้องปฏิบัติการและสิ่งอำนวยความสะดวก</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                โครงสร้างพื้นฐานระดับพรีเมียม <br />
                เพื่อการเรียนรู้เชิงปฏิบัติการจริง
              </h3>
              <p className="text-xs text-slate-300/90 leading-relaxed">
                เราจัดเตรียมสภาพแวดล้อมที่จำลองสตูดิโอและห้องทดลองวิจัยระดับอุตสาหกรรม เพื่อให้นักศึกษาได้ฝึกฝนทักษะการผลิตจริงตั้งแต่วันแรก
              </p>

              <div className="space-y-2 pt-2">
                {DEPARTMENT_ABOUT.facilities.map((fac, idx) => (
                  <button
                    key={fac.title}
                    onClick={() => setActiveFacility(idx)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm ${
                      activeFacility === idx
                        ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold shadow-[0_4px_16px_rgba(6,182,212,0.3)] border border-cyan-300/30'
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
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 aspect-video flex flex-col justify-end p-6 shadow-2xl">
                <img
                  src={
                    activeFacility === 0
                      ? '/src/assets/images/hero_silpakorn_edtech_1790939637201.jpg'
                      : activeFacility === 1
                      ? '/src/assets/images/student_work_interactive_vr_1790939657670.jpg'
                      : activeFacility === 2
                      ? '/src/assets/images/learning_hub_course_thumb_1790939670511.jpg'
                      : '/src/assets/images/research_edtech_lab_1790939681860.jpg'
                  }
                  alt={DEPARTMENT_ABOUT.facilities[activeFacility].title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                />
                {/* Contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-[#06121E]/60 to-transparent" />

                <div className="relative z-10 space-y-2">
                  <div className="text-xs font-bold text-cyan-300 uppercase tracking-wide">
                    Facility Highlight 0{activeFacility + 1}
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {DEPARTMENT_ABOUT.facilities[activeFacility].title}
                  </h4>
                  <p className="text-xs text-slate-200/90 max-w-xl leading-relaxed">
                    {DEPARTMENT_ABOUT.facilities[activeFacility].desc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
