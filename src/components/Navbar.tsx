import React, { useState, useEffect } from 'react';
import { Search, Sun, Moon, Menu, X, BookOpen, GraduationCap, Users, Lightbulb, Newspaper, Compass, Laptop } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSearch: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenSearch,
  activeSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'เกี่ยวกับสาขา', icon: Compass },
    { href: '#programs', label: 'หลักสูตร', icon: GraduationCap },
    { href: '#faculty', label: 'คณาจารย์', icon: Users },
    { href: '#student-services', label: 'บริการ นศ. & ยืมอุปกรณ์', icon: Laptop },
    { href: '#learning-hub', label: 'Learning Hub', icon: BookOpen },
    { href: '#student-works', label: 'ผลงาน นศ.', icon: Lightbulb },
    { href: '#research', label: 'งานวิจัย', icon: BookOpen },
    { href: '#news', label: 'ข่าวสาร', icon: Newspaper },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06121E]/85 dark:bg-[#040C15]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] text-white'
          : 'bg-[#06121E]/70 backdrop-blur-md text-white border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark with subtle ambient glow */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] via-[#06B6D4] to-[#10B981] flex items-center justify-center font-bold text-white text-base shadow-[0_0_20px_rgba(6,182,212,0.35)] group-hover:scale-105 transition-all duration-300">
                SU
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#10B981] blur-md opacity-40 group-hover:opacity-75 transition-opacity -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight leading-tight text-white group-hover:text-cyan-300 transition-colors">
                EdTech Silpakorn
              </span>
              <span className="text-[11px] font-medium text-slate-300/90 tracking-wider">
                เทคโนโลยีการศึกษา ม.ศิลปากร
              </span>
            </div>
          </a>

          {/* Zone 2: 4-7 text navigation links with subtle underline/glow indicator */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-cyan-300 bg-white/[0.07] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Search, Dark Mode, Admissions CTA) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 hover:border-cyan-400/40 text-slate-200 hover:text-white transition-all text-xs shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
              title="ค้นหาข้อมูล (Ctrl + K)"
              aria-label="ค้นหาข้อมูลทั่วทั้งเว็บไซต์"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">ค้นหา...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white/10 border border-white/10 rounded text-slate-300 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 hover:border-cyan-400/40 text-slate-200 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
              title={darkMode ? 'สลับเป็นโหมดสว่าง' : 'สลับเป็นโหมดมืด'}
              aria-label="สลับโหมดการแสดงผล"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-cyan-300" />}
            </button>

            {/* Admissions Direct Portal Link */}
            <a
              href="https://admission.su.ac.th"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-blue-600 hover:to-cyan-500 text-white font-semibold text-xs tracking-wide shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_22px_rgba(6,182,212,0.45)] transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              รับสมัคร TCAS 2026
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 text-slate-200"
              aria-label="เปิดเมนูนำทาง"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-[#06121E]/95 backdrop-blur-2xl rounded-b-2xl px-2 space-y-1 animate-in fade-in duration-150">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-300 bg-white/[0.08]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.label}</span>
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-white/10 px-2">
              <a
                href="https://admission.su.ac.th"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-medium text-xs tracking-wide shadow-md"
              >
                เข้าสู่ระบบรับสมัครนักศึกษาใหม่ TCAS
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
