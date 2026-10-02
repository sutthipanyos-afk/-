import React, { useState } from 'react';
import { ArrowRight, Sparkles, Layers, Sliders, Play, CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';

interface HeroProps {
  onExplorePrograms: () => void;
  onOpenLearningHub: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePrograms, onOpenLearningHub }) => {
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

  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-[#05111D] via-[#091D32] to-[#061423] text-white overflow-hidden">
      
      {/* -------------------------------------------------------------
          1. Soft Multi-Layered Ambient Light & Radial Glows
          Amber warmth + Cyan-Mint glow for high-end academic depth
          ------------------------------------------------------------- */}
      {/* Subtle background tech matrix */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Soft Ambient Light 1: Warm Amber / Gold glow for academic heritage */}
      <div 
        className="absolute -top-24 right-1/4 w-[520px] h-[520px] bg-gradient-to-br from-amber-400/12 via-amber-500/5 to-transparent rounded-full blur-[110px] pointer-events-none animate-amber-slow"
        aria-hidden="true"
      />

      {/* Soft Ambient Light 2: Digital Cyan / Sky glow for innovation */}
      <div 
        className="absolute top-1/4 -right-16 w-[620px] h-[620px] bg-gradient-to-bl from-cyan-500/16 via-blue-600/10 to-transparent rounded-full blur-[130px] pointer-events-none animate-ambient-slow"
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
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md text-xs font-medium text-slate-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span>คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์</span>
            </div>

            {/* Prominent Header with Blue -> Cyan -> Mint Green Gradient on accent */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] font-display text-balance">
                สาขาเทคโนโลยีการศึกษา
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent mt-1.5 drop-shadow-sm">
                  ศิลปากร พระราชวังสนามจันทร์
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300/90 font-light leading-relaxed max-w-xl">
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
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
                  45+
                </div>
                <div className="text-xs text-slate-400 mt-1">ปีแห่งการบุกเบิก</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono-numbers">
                  100%
                </div>
                <div className="text-xs text-slate-400 mt-1">คณาจารย์ระดับปริญญาเอก</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono-numbers">
                  4
                </div>
                <div className="text-xs text-slate-400 mt-1">ปริญญาตรี โท เอก</div>
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
