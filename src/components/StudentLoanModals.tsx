import React, { useState } from 'react';
import { EquipmentItem, StudioRoom, LoanRequest } from '../data/edtechData';
import {
  X,
  Laptop,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  QrCode,
  Printer,
  MapPin,
  Sparkles,
} from 'lucide-react';

// -------------------------------------------------------------
// 1. Equipment Loan Request Modal
// -------------------------------------------------------------
interface EquipmentLoanModalProps {
  equipment: EquipmentItem | null;
  onClose: () => void;
  onSubmit: (loan: LoanRequest) => void;
}

export const EquipmentLoanModal: React.FC<EquipmentLoanModalProps> = ({
  equipment,
  onClose,
  onSubmit,
}) => {
  if (!equipment) return null;

  // Default dates: tomorrow to +3 days
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultStart = tomorrow.toISOString().split('T')[0];

  const returnDay = new Date(tomorrow);
  returnDay.setDate(returnDay.getDate() + Math.min(3, equipment.maxDays));
  const defaultReturn = returnDay.toISOString().split('T')[0];

  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [degreeLevel, setDegreeLevel] = useState('ปริญญาตรี ปีที่ 3');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [courseOrProject, setCourseOrProject] = useState('โครงงานนวัตกรรมสื่อดิจิทัล (Senior Project)');
  const [advisorName, setAdvisorName] = useState('ผศ.ดร.สิทธิชัย ลายเสมา');
  const [startDate, setStartDate] = useState(defaultStart);
  const [returnDate, setReturnDate] = useState(defaultReturn);
  const [purpose, setPurpose] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentId.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('กรุณากรอกข้อมูลส่วนตัวและข้อมูลติดต่อให้ครบถ้วน');
      return;
    }
    if (!acceptedTerms) {
      setErrorMsg('กรุณายินยอมปฏิบัติตามระเบียบการยืม-คืนอุปกรณ์');
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newLoan: LoanRequest = {
      id: `EDT-LN-2026-${randomSuffix}`,
      equipmentId: equipment.id,
      equipmentName: equipment.nameTh,
      studentName: studentName.trim(),
      studentId: studentId.trim(),
      degreeLevel,
      email: email.trim(),
      phone: phone.trim(),
      courseOrProject: courseOrProject.trim(),
      advisorName: advisorName.trim(),
      startDate,
      returnDate,
      purpose: purpose.trim() || 'ใช้ในการผลิตสื่อนวัตกรรมประกอบการเรียนการสอน',
      status: 'pending_pickup',
      createdAt: new Date().toISOString(),
    };

    onSubmit(newLoan);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#071626] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 bg-gradient-to-r from-[#06121E] to-[#0A1E33] text-white flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] flex items-center justify-center font-bold text-white shadow-md shrink-0">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-cyan-400">
                แบบฟอร์มขอยืมอุปกรณ์ออนไลน์ (Equipment Loan Request)
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">
                {equipment.nameTh}
              </h3>
              <div className="text-xs text-slate-300 font-mono mt-0.5">
                รหัสครุภัณฑ์: {equipment.code} · สิทธิ์ยืมสูงสุด: {equipment.maxDays} วัน
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Student Info Group */}
          <div className="space-y-3">
            <div className="font-bold text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>ข้อมูลนักศึกษาผู้ขอยืม (Student Information)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  ชื่อ - นามสกุล *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น นายธนภัทร สุขสมบัติ"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  รหัสนักศึกษา (Student ID) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น 650610123"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white placeholder-slate-400 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  ระดับการศึกษา / ชั้นปี
                </label>
                <select
                  value={degreeLevel}
                  onChange={(e) => setDegreeLevel(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="ปริญญาตรี ปีที่ 1">ปริญญาตรี ปีที่ 1</option>
                  <option value="ปริญญาตรี ปีที่ 2">ปริญญาตรี ปีที่ 2</option>
                  <option value="ปริญญาตรี ปีที่ 3">ปริญญาตรี ปีที่ 3</option>
                  <option value="ปริญญาตรี ปีที่ 4">ปริญญาตรี ปีที่ 4 (Senior)</option>
                  <option value="ปริญญาโท (ศษ.ม.)">ปริญญาโท (ศษ.ม.)</option>
                  <option value="ปริญญาเอก (ปร.ด.)">ปริญญาเอก (ปร.ด.)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  อีเมลมหาวิทยาลัย (@silpakorn.edu) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name_s@silpakorn.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white placeholder-slate-400 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  เบอร์โทรศัพท์ติดต่อ *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="08X-XXX-XXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white placeholder-slate-400 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Project & Purpose Group */}
          <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-white/5">
            <div className="font-bold text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>วัตถุประสงค์และการนำไปใช้ (Academic Purpose)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  รายวิชาหรือโครงงานที่นำไปใช้ *
                </label>
                <input
                  type="text"
                  required
                  value={courseOrProject}
                  onChange={(e) => setCourseOrProject(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  อาจารย์ผู้สอน / อาจารย์ที่ปรึกษา *
                </label>
                <input
                  type="text"
                  required
                  value={advisorName}
                  onChange={(e) => setAdvisorName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  วันที่ต้องการรับอุปกรณ์ (Pick-up Date) *
                </label>
                <input
                  type="date"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  กำหนดส่งคืน (Return Date) *
                </label>
                <input
                  type="date"
                  required
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                รายละเอียดวัตถุประสงค์ในการยืมใช้งาน
              </label>
              <textarea
                rows={2}
                placeholder="ระบุสถานที่ถ่ายทำ หรือลักษณะงานที่ต้องใช้อุปกรณ์นี้..."
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 space-y-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-0.5 rounded text-cyan-600 focus:ring-cyan-400 cursor-pointer"
              />
              <span className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                ข้าพเจ้ายินยอมปฏิบัติตามระเบียบการยืม-คืนอุปกรณ์ของภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร และจะดูแลรักษาอุปกรณ์ให้อยู่ในสภาพสมบูรณ์เรียบร้อยตลอดระยะเวลาการใช้งาน
              </span>
            </label>
          </div>

          {/* Form Actions */}
          <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-blue-600 hover:to-cyan-500 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>ยืนยันการขอยืมอุปกรณ์</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Digital Loan Slip Modal (ใบคอนเฟิร์มการยืมพร้อม QR Code)
// -------------------------------------------------------------
interface LoanSlipModalProps {
  loan: LoanRequest | null;
  onClose: () => void;
}

export const LoanSlipModal: React.FC<LoanSlipModalProps> = ({ loan, onClose }) => {
  if (!loan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-white dark:bg-[#071626] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Slip Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 bg-gradient-to-r from-[#06121E] via-[#091D32] to-[#040D17] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] flex items-center justify-center font-bold text-white shadow-md">
              SU
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-cyan-400">
                ใบคอนเฟิร์มการยืมอุปกรณ์ดิจิทัล (Digital Loan Slip)
              </div>
              <div className="text-sm font-bold text-white">
                ภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ ม.ศิลปากร
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Slip Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          
          {/* Reference & Barcode Header */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0A1E33]/70 border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[11px] text-slate-400 font-mono">รหัสอ้างอิงคำขอยืม:</div>
              <div className="text-base font-extrabold font-mono text-cyan-600 dark:text-cyan-400">
                {loan.id}
              </div>
              <div className="text-[10px] text-slate-400">
                บันทึกเมื่อ: {new Date(loan.createdAt).toLocaleString('th-TH')}
              </div>
            </div>

            {/* Simulated QR Code */}
            <div className="w-16 h-16 rounded-xl bg-white p-1.5 shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
              <QrCode className="w-full h-full text-slate-900" />
            </div>
          </div>

          {/* Equipment details */}
          <div className="space-y-1.5 p-3.5 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200/60 dark:border-cyan-800/40">
            <div className="text-[11px] font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-wide">
              อุปกรณ์ที่ขอยืม:
            </div>
            <div className="text-sm font-bold text-[#06121E] dark:text-white leading-snug">
              {loan.equipmentName}
            </div>
          </div>

          {/* Student Info */}
          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
              <div>
                <span className="text-slate-400 block text-[11px]">ผู้ขอยืม:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{loan.studentName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">รหัสนักศึกษา:</span>
                <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{loan.studentId}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">ระดับการศึกษา:</span>
                <span>{loan.degreeLevel}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">เบอร์โทรติดต่อ:</span>
                <span className="font-mono">{loan.phone}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-white/5 space-y-1 text-slate-600 dark:text-slate-300">
              <div>
                <span className="text-slate-400">วิชา/โครงงาน:</span>{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">{loan.courseOrProject}</span>
              </div>
              <div>
                <span className="text-slate-400">อาจารย์ผู้รับรอง:</span>{' '}
                <span className="font-medium text-slate-800 dark:text-slate-200">{loan.advisorName}</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 text-xs font-mono space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">วันเวลานัดรับอุปกรณ์:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{loan.startDate} (08:30 - 16:30 น.)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">กำหนดส่งคืนภายใน:</span>
              <span className="font-bold text-rose-500">{loan.returnDate} (ก่อน 16:00 น.)</span>
            </div>
          </div>

          {/* Pick-up instructions */}
          <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-800 dark:text-amber-200 space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>สถานที่รับอุปกรณ์:</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              กรุณาแคปหน้าจอนี้ หรือแสดงรหัส {loan.id} พร้อมบัตรประจำตัวนักศึกษา ณ <strong>ห้องพัสดุและคลังอุปกรณ์ อาคารศึกษาศาสตร์ 2 ชั้น 3</strong> เพื่อตรวจรับอุปกรณ์และลงลายมือชื่อ
            </p>
          </div>
        </div>

        {/* Slip Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex items-center justify-between text-xs">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/15 text-slate-800 dark:text-white font-medium flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>พิมพ์ / บันทึกหน้าจอ</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold shadow-sm hover:opacity-95"
          >
            เรียบร้อย
          </button>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. Studio Booking Modal
// -------------------------------------------------------------
interface StudioBookingModalProps {
  room: StudioRoom | null;
  onClose: () => void;
  onConfirmed: (details: { roomName: string; date: string; timeSlot: string; studentName: string }) => void;
}

export const StudioBookingModal: React.FC<StudioBookingModalProps> = ({
  room,
  onClose,
  onConfirmed,
}) => {
  if (!room) return null;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  const [date, setDate] = useState(defaultDate);
  const [timeSlot, setTimeSlot] = useState(room.timeSlots[0] || '09:00 - 12:00 น.');
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [attendees, setAttendees] = useState('4');
  const [purpose, setPurpose] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentId.trim()) return;

    setSubmitted(true);
    setTimeout(() => {
      onConfirmed({
        roomName: room.nameTh,
        date,
        timeSlot,
        studentName: studentName.trim(),
      });
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-white dark:bg-[#071626] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-200 dark:border-white/10 bg-gradient-to-r from-[#06121E] to-[#0A1E33] text-white flex items-start justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-cyan-400">
              ระบบจองห้องสตูดิโอออนไลน์ (Studio Reservation)
            </div>
            <h3 className="text-lg font-bold text-white leading-snug">
              {room.nameTh}
            </h3>
            <div className="text-xs text-slate-300 font-mono mt-0.5">
              สถานที่: {room.location} · ความจุ: {room.capacity}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-[#06121E] dark:text-white">
              บันทึกการจองสตูดิโอเรียบร้อยแล้ว!
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              ระบบได้บันทึกคิวการใช้งานห้อง {room.nameTh} วันที่ {date} รอบ {timeSlot} กรุณาไปถึงห้องก่อนเวลา 10 นาที
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  ชื่อ - นามสกุล ตัวแทนผู้จอง *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น น.ส.พิมพ์มาดา วงศ์สุวรรณ"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  รหัสนักศึกษา *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น 650610234"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  วันที่ต้องการใช้งาน *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  รอบเวลาที่ต้องการ *
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {room.timeSlots.map((ts, idx) => (
                    <option key={idx} value={ts}>{ts}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                จำนวนผู้เข้าใช้งาน (คน)
              </label>
              <input
                type="number"
                min="1"
                max="25"
                value={attendees}
                onChange={(e) => setAttendees(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                วัตถุประสงค์การใช้งานห้อง
              </label>
              <textarea
                rows={2}
                placeholder="เช่น บันทึกรายการพอดแคสต์วิชาการ, ถ่ายทำสื่อการสอนหน้า Green Screen..."
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1E33] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold text-xs shadow-md"
              >
                ยืนยันการจองสตูดิโอ
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
