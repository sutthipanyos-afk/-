/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramExplorer } from './components/ProgramExplorer';
import { FacultySection } from './components/FacultySection';
import { StudentServicesSection } from './components/StudentServicesSection';
import { LearningHubSection } from './components/LearningHubSection';
import { StudentWorksSection } from './components/StudentWorksSection';
import { ResearchSection } from './components/ResearchSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import {
  EquipmentLoanModal,
  LoanSlipModal,
  StudioBookingModal,
} from './components/StudentLoanModals';
import {
  CourseModal,
  FacultyModal,
  WorkModal,
  NewsModal,
  LessonModal,
} from './components/Modals';
import {
  Course,
  FacultyMember,
  StudentWork,
  NewsItem,
  LearningLesson,
  EquipmentItem,
  StudioRoom,
  LoanRequest,
} from './data/edtechData';

export default function App() {
  // Dark mode state with localStorage persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('edtech_dark_mode');
      if (saved !== null) {
        return saved === 'true';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Learning progress state with localStorage persistence
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('edtech_completed_lessons');
        return saved ? JSON.parse(saved) : ['lesson-1'];
      } catch {
        return ['lesson-1'];
      }
    }
    return ['lesson-1'];
  });

  // Equipment loan requests state with localStorage persistence
  const [loanRequests, setLoanRequests] = useState<LoanRequest[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('edtech_loan_requests');
        if (saved) return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return [
      {
        id: 'EDT-LN-2026-1048',
        equipmentId: 'eq-cam-01',
        equipmentName: 'ชุดกล้องภาพยนตร์ดิจิทัล Sony FX3 Cinema Line 4K',
        studentName: 'นายวีรภัทร จิตรมั่น',
        studentId: '650610142',
        degreeLevel: 'ปริญญาตรี ปีที่ 4 (Senior)',
        email: 'veerapat_j@silpakorn.edu',
        phone: '089-456-7890',
        courseOrProject: 'Senior Project สื่อการสอนแอนิเมชันผสมผสาน',
        advisorName: 'ผศ.ดร.สิทธิชัย ลายเสมา',
        startDate: '2026-10-05',
        returnDate: '2026-10-08',
        purpose: 'ถ่ายทำวิดีโอสัมภาษณ์ผู้เชี่ยวชาญประกอบโครงงานวิจัย',
        status: 'pending_pickup',
        createdAt: '2026-10-02T08:30:00.000Z',
      },
    ];
  });

  // Modal states
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  const [selectedWork, setSelectedWork] = useState<StudentWork | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<LearningLesson | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Student Services Modals
  const [selectedEquipmentForLoan, setSelectedEquipmentForLoan] = useState<EquipmentItem | null>(null);
  const [selectedStudioForBooking, setSelectedStudioForBooking] = useState<StudioRoom | null>(null);
  const [viewingLoanSlip, setViewingLoanSlip] = useState<LoanRequest | null>(null);
  const [toastNotification, setToastNotification] = useState<string | null>(null);

  // Active section for navigation tracking
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Sync dark mode class to html document
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('edtech_dark_mode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('edtech_dark_mode', 'false');
    }
  }, [darkMode]);

  // Sync completed lessons to localStorage
  useEffect(() => {
    localStorage.setItem('edtech_completed_lessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  // Sync loan requests to localStorage
  useEffect(() => {
    localStorage.setItem('edtech_loan_requests', JSON.stringify(loanRequests));
  }, [loanRequests]);

  // Mark lesson as complete
  const handleCompleteLesson = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons((prev) => [...prev, lessonId]);
    }
  };

  const handleResetProgress = () => {
    setCompletedLessons([]);
  };

  // Loan Actions
  const handleSubmitLoan = (newLoan: LoanRequest) => {
    setLoanRequests((prev) => [newLoan, ...prev]);
    setSelectedEquipmentForLoan(null);
    setViewingLoanSlip(newLoan);
    showToast(`✓ บันทึกคำขอยืม ${newLoan.equipmentName} เรียบร้อยแล้ว (รหัส: ${newLoan.id})`);
  };

  const handleCancelLoan = (loanId: string) => {
    if (window.confirm('คุณต้องการยกเลิกคำขอยืมอุปกรณ์นี้ใช่หรือไม่?')) {
      setLoanRequests((prev) => prev.filter((l) => l.id !== loanId));
      showToast('ยกเลิกรายการขอยืมเรียบร้อยแล้ว');
    }
  };

  const handleConfirmedStudioBooking = (details: { roomName: string; date: string; timeSlot: string; studentName: string }) => {
    showToast(`✓ จอง ${details.roomName} สำเร็จ (วันที่ ${details.date} รอบ ${details.timeSlot})`);
  };

  const showToast = (msg: string) => {
    setToastNotification(msg);
    setTimeout(() => setToastNotification(null), 4500);
  };

  // Keyboard shortcut listener for Global Search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Section observer for active nav
  useEffect(() => {
    const sections = [
      'about',
      'programs',
      'faculty',
      'student-services',
      'learning-hub',
      'student-works',
      'research',
      'news',
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#06121E] text-[#06121E] dark:text-[#E2E8F0] selection:bg-cyan-500 selection:text-white transition-colors duration-200">
      
      {/* Toast Notification Banner */}
      {toastNotification && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="px-5 py-3 rounded-2xl bg-[#06121E] dark:bg-[#0A1E33] border border-cyan-400/40 text-white text-xs font-semibold shadow-2xl flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{toastNotification}</span>
            <button
              onClick={() => setToastNotification(null)}
              className="ml-2 text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 1. Header / Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main>
        {/* 2. Hero with Interactive Technology Visualizer */}
        <Hero
          onExplorePrograms={() => {
            const el = document.getElementById('programs');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenLearningHub={() => {
            const el = document.getElementById('learning-hub');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Program Explorer */}
        <ProgramExplorer onSelectCourse={(course) => setSelectedCourse(course)} />

        {/* 5. Faculty Directory */}
        <FacultySection onSelectFaculty={(faculty) => setSelectedFaculty(faculty)} />

        {/* 6. Student Services & Equipment Hub (NEW FEATURE) */}
        <StudentServicesSection
          onBorrowEquipment={(item) => setSelectedEquipmentForLoan(item)}
          onBookStudio={(room) => setSelectedStudioForBooking(room)}
          loanRequests={loanRequests}
          onViewLoanSlip={(loan) => setViewingLoanSlip(loan)}
          onCancelLoan={handleCancelLoan}
        />

        {/* 7. Learning Hub with Progress */}
        <LearningHubSection
          completedLessons={completedLessons}
          onOpenLesson={(lesson) => setSelectedLesson(lesson)}
          onResetProgress={handleResetProgress}
        />

        {/* 8. Student Works Showcase */}
        <StudentWorksSection onSelectWork={(work) => setSelectedWork(work)} />

        {/* 9. Research & Publications */}
        <ResearchSection />

        {/* 10. News & Events */}
        <NewsSection onSelectNews={(news) => setSelectedNews(news)} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Modals */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={(course) => setSelectedCourse(course)}
        onSelectFaculty={(faculty) => setSelectedFaculty(faculty)}
        onSelectWork={(work) => setSelectedWork(work)}
        onSelectNews={(news) => setSelectedNews(news)}
        onSelectLesson={(lesson) => setSelectedLesson(lesson)}
      />

      {/* Student Services Modals */}
      <EquipmentLoanModal
        equipment={selectedEquipmentForLoan}
        onClose={() => setSelectedEquipmentForLoan(null)}
        onSubmit={handleSubmitLoan}
      />

      <LoanSlipModal
        loan={viewingLoanSlip}
        onClose={() => setViewingLoanSlip(null)}
      />

      <StudioBookingModal
        room={selectedStudioForBooking}
        onClose={() => setSelectedStudioForBooking(null)}
        onConfirmed={handleConfirmedStudioBooking}
      />

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      <FacultyModal
        faculty={selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
      />

      <WorkModal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
      />

      <NewsModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
      />

      <LessonModal
        lesson={selectedLesson}
        onClose={() => setSelectedLesson(null)}
        isCompleted={selectedLesson ? completedLessons.includes(selectedLesson.id) : false}
        onCompleteLesson={handleCompleteLesson}
      />
    </div>
  );
}
