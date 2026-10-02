import React from 'react';
import { DEPARTMENT_ABOUT } from '../data/edtechData';
import { MapPin, Phone, Mail, Facebook, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#06121E] via-[#081829] to-[#040C15] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Soft Ambient Light Cones in Footer */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-b from-cyan-500/8 via-blue-500/4 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-gradient-to-t from-emerald-500/6 via-teal-500/3 to-transparent rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] via-[#06B6D4] to-[#10B981] flex items-center justify-center font-bold text-white text-base shadow-[0_0_18px_rgba(6,182,212,0.35)]">
                SU
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">
                  EdTech Silpakorn
                </div>
                <div className="text-xs text-slate-300">
                  ภาควิชาเทคโนโลยีการศึกษา มหาวิทยาลัยศิลปากร
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300/90 leading-relaxed font-light">
              คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร วิทยาเขตพระราชวังสนามจันทร์ 
              มุ่งมั่นผลิตบัณฑิตผู้เชี่ยวชาญด้านเทคโนโลยีและการออกแบบการสอน 
              สร้างสรรค์นวัตกรรมดิจิทัลเพื่อการเรียนรู้ที่ยั่งยืน
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={DEPARTMENT_ABOUT.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.07] hover:bg-[#2563EB] border border-white/10 flex items-center justify-center text-slate-200 hover:text-white transition-all shadow-sm"
                title="Facebook: Educational Technology, Silpakorn University"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${DEPARTMENT_ABOUT.contact.email}`}
                className="w-9 h-9 rounded-xl bg-white/[0.07] hover:bg-cyan-600 border border-white/10 flex items-center justify-center text-slate-200 hover:text-white transition-all shadow-sm"
                title="ส่งอีเมลถึงภาควิชาฯ"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              การศึกษาและหลักสูตร
            </div>
            <ul className="text-xs space-y-2 text-slate-300">
              <li>
                <a href="#programs" className="hover:text-cyan-300 transition-colors">
                  ปริญญาตรี (ศศ.บ. / ศษ.บ.)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-cyan-300 transition-colors">
                  ปริญญาโท (ศษ.ม.)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-cyan-300 transition-colors">
                  ปริญญาเอก (ปร.ด.)
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-cyan-300 transition-colors">
                  การรับสมัคร TCAS ทุกรอบ
                </a>
              </li>
              <li>
                <a href="#student-services" className="hover:text-cyan-300 transition-colors">
                  บริการ นศ. & ยืมอุปกรณ์
                </a>
              </li>
              <li>
                <a href="#learning-hub" className="hover:text-cyan-300 transition-colors">
                  EdTech Learning Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Faculty */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              ข้อมูลสาขาและผลงาน
            </div>
            <ul className="text-xs space-y-2 text-slate-300">
              <li>
                <a href="#faculty" className="hover:text-cyan-300 transition-colors">
                  คณาจารย์ประจำภาควิชา
                </a>
              </li>
              <li>
                <a href="#student-works" className="hover:text-cyan-300 transition-colors">
                  ผลงาน Senior Project
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-cyan-300 transition-colors">
                  คลังงานวิจัยและสิ่งพิมพ์
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  ห้องปฏิบัติการและสตูดิโอ
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-cyan-300 transition-colors">
                  ข่าวประชาสัมพันธ์
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              สถานที่ติดต่อ
            </div>
            <div className="text-xs text-slate-300 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {DEPARTMENT_ABOUT.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono">{DEPARTMENT_ABOUT.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono">{DEPARTMENT_ABOUT.contact.email}</span>
              </div>
              <div className="pt-1 text-[11px] text-slate-400">
                เวลาทำการ: {DEPARTMENT_ABOUT.contact.hours}
              </div>
            </div>
          </div>

        </div>

        {/* Admissions CTA Banner inside Footer with Blue -> Cyan -> Mint Gradient */}
        <div id="admissions" className="p-7 rounded-2xl bg-gradient-to-r from-[#1D4ED8] via-[#0284C7] to-[#0D9488] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_12px_40px_rgba(2,132,199,0.3)] border border-white/20 relative overflow-hidden">
          <div className="space-y-1.5 relative z-10">
            <h4 className="text-xl font-bold font-display">
              สนใจสมัครเข้าศึกษาในสาขาเทคโนโลยีการศึกษา ม.ศิลปากร?
            </h4>
            <p className="text-xs sm:text-sm text-cyan-100 font-light">
              ติดตามระเบียบการรับสมัคร TCAS รอบ Portfolio, โควตา และรอบ Admission ผ่านระบบของมหาวิทยาลัยศิลปากร
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 relative z-10">
            <a
              href="https://reg.su.ac.th"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-[#06121E] bg-white hover:bg-slate-100 rounded-xl transition-all flex items-center gap-1.5 shadow-md"
            >
              <span>ระบบรับสมัคร REG SU</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.educ.su.ac.th"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-white bg-black/25 hover:bg-black/35 rounded-xl border border-white/20 transition-all flex items-center gap-1.5 backdrop-blur-sm"
            >
              <span>คณะศึกษาศาสตร์</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} ภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์. สงวนลิขสิทธิ์ทั้งหมด.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
          >
            <span>กลับสู่ด้านบน</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
