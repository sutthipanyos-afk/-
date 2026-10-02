export interface FacultyMember {
  id: string;
  nameTh: string;
  nameEn: string;
  role: string;
  academicRank: string;
  education: string[];
  expertise: string[];
  email: string;
  office: string;
  avatarSeed: string;
  publicationsCount: number;
  highlight?: string;
  imageUrl: string;
  fallbackImageUrl?: string;
  profileLink?: string;
}

export interface Course {
  code: string;
  nameTh: string;
  nameEn: string;
  credits: string;
  level: 'undergraduate' | 'master' | 'doctoral';
  year?: number;
  semester?: number;
  type: 'core' | 'major_required' | 'major_elective' | 'practicum' | 'thesis';
  description: string;
  topics: string[];
  learningOutcomes: string[];
}

export interface StudentWork {
  id: string;
  titleTh: string;
  titleEn: string;
  category: 'Interactive & VR/AR' | 'Instructional Media' | 'Edutainment & Motion' | 'Web & App' | 'Game-based Learning';
  year: string;
  creators: string[];
  advisor: string;
  summary: string;
  technologies: string[];
  demoUrl?: string;
  awards?: string;
  image?: string;
}

export interface ResearchItem {
  id: string;
  titleTh: string;
  titleEn: string;
  authors: string[];
  year: string;
  journal: string;
  area: 'AI & Learning Analytics' | 'Instructional Design' | 'Virtual & Immersive Media' | 'MOOC & Digital Learning' | 'Pedagogical Innovation';
  abstract: string;
  doi?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Admissions' | 'Academic' | 'Achievement' | 'Events';
  date: string;
  summary: string;
  content: string[];
  featured?: boolean;
}

export interface LearningLesson {
  id: string;
  module: string;
  titleTh: string;
  titleEn: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  objectives: string[];
  contentSections: {
    heading: string;
    body: string;
  }[];
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'sitthichai',
    nameTh: 'ผศ.ดร.สิทธิชัย ลายเสมา',
    nameEn: 'Asst. Prof. Dr. Sitthichai Laisema',
    role: 'หัวหน้าภาควิชาเทคโนโลยีการศึกษา',
    academicRank: 'ผู้ช่วยศาสตราจารย์ ดร. (ผศ.ดร.)',
    education: [
      'ปร.ด. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศิลปากร',
      'ศษ.ม. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศิลปากร',
      'ศษ.บ. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศิลปากร'
    ],
    expertise: [
      'การออกแบบและพัฒนาระบบการเรียนรู้ดิจิทัล (Digital Learning System Design)',
      'การประเมินหลักสูตรและผลสัมฤทธิ์ทางการศึกษา',
      'การบริหารจัดการเทคโนโลยีสารสนเทศทางการศึกษา',
      'สภาพแวดล้อมการเรียนรู้เสมือนจริงและสมาร์ทเลิร์นนิง'
    ],
    email: 'LAISEMA_S@SU.AC.TH',
    office: 'ห้องหัวหน้าภาควิชา อาคารศึกษาศาสตร์ 2 คณะศึกษาศาสตร์ ม.ศิลปากร พระราชวังสนามจันทร์',
    avatarSeed: 'sitthichai',
    publicationsCount: 32,
    highlight: 'หัวหน้าภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร',
    imageUrl: '/src/assets/images/faculty/sitthichai.jpg',
    fallbackImageUrl: 'https://lh3.googleusercontent.com/d/1Z7FA8iJRBkS42CCzl-TpadFBV_7xg5dv=w800',
    profileLink: 'https://docs.google.com/document/d/1Rr6eGK4XNcYYjHCLuuZBS1A9kbpBXE4IOalpuMYSZdA/edit?usp=sharing'
  },
  {
    id: 'siwanit',
    nameTh: 'รศ.ดร.ศิวนิต อรรถวุฒิกุล',
    nameEn: 'Assoc. Prof. Dr. Siwanit Attawuttikul',
    role: 'อาจารย์ประจำภาควิชาเทคโนโลยีการศึกษา',
    academicRank: 'รองศาสตราจารย์ ดร. (รศ.ดร.)',
    education: [
      'กศ.ด. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศรีนครินทรวิโรฒ',
      'กศ.ม. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศรีนครินทรวิโรฒ',
      'กศ.บ. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศรีนครินทรวิโรฒ'
    ],
    expertise: [
      'การออกแบบระบบการสอน (Instructional Systems Design)',
      'การพัฒนาการเรียนรู้จากการปฏิบัติ (Action Learning)',
      'เว็บสำหรับการฝึกอบรมออนไลน์ (Web-based Training)',
      'การจัดการเรียนการสอนแบบบูรณาการด้วย ICT'
    ],
    email: 'AUTTHAWUTTIKUL_S@SILPAKORN.EDU',
    office: 'อาคารศึกษาศาสตร์ 2 ชั้น 3 มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์',
    avatarSeed: 'siwanit',
    publicationsCount: 28,
    highlight: 'ประธานคณะกรรมการบริหารหลักสูตรศึกษาศาสตรมหาบัณฑิต สาขาวิชาเทคโนโลยีการศึกษา',
    imageUrl: '/src/assets/images/faculty/siwanit.jpg',
    fallbackImageUrl: 'https://lh3.googleusercontent.com/d/13q31ImLsF-hMlLOGitmK_EIzmfhctRH3=w800',
    profileLink: 'https://docs.google.com/document/d/1p47kec_8mXKWFsJ-VGCt__q_n6Rwzp4Br1TcH1kf2Oc/edit?usp=sharing'
  },
  {
    id: 'thapanee',
    nameTh: 'รศ.ดร.ฐาปนีย์ ธรรมเมธา',
    nameEn: 'Assoc. Prof. Dr. Thapanee Thammetha',
    role: 'อาจารย์ประจำภาควิชาเทคโนโลยีการศึกษา',
    academicRank: 'รองศาสตราจารย์ ดร. (รศ.ดร.)',
    education: [
      'ค.ด. (เทคโนโลยีและสื่อสารการศึกษา) จุฬาลงกรณ์มหาวิทยาลัย',
      'ค.ม. (โสตทัศนศึกษา) จุฬาลงกรณ์มหาวิทยาลัย',
      'ศศ.บ. (ภาษาอังกฤษ) มหาวิทยาลัยศิลปากร'
    ],
    expertise: [
      'การเรียนการสอนออนไลน์และระบบอีเลิร์นนิง (E-learning Systems)',
      'การพัฒนาระบบคลังความรู้ออนไลน์ระดับชาติ (Thai MOOC & OERs)',
      'การออกแบบการเรียนการสอนสำหรับผู้ใหญ่และการเรียนรู้ตลอดชีวิต',
      'การบริหารจัดการเทคโนโลยีสารสนเทศเพื่อการศึกษา'
    ],
    email: 'THAMMETAR_T@SU.AC.TH',
    office: 'อาคารศึกษาศาสตร์ 2 มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์',
    avatarSeed: 'thapanee',
    publicationsCount: 42,
    highlight: 'อดีตผู้อำนวยการโครงการมหาวิทยาลัยไซเบอร์ไทย (Thailand Cyber University: TCU / Thai MOOC)',
    imageUrl: '/src/assets/images/faculty/thapanee.jpg',
    fallbackImageUrl: 'https://lh3.googleusercontent.com/d/1fghTrM_YJGrVlCJqv4YhDJ2rTuKdZG57=w800',
    profileLink: 'https://docs.google.com/document/d/1on2thwqcOftIUxjmF-_ZcdmNuHDb3je8GhdZEJUfDYI/edit?usp=sharing'
  },
  {
    id: 'anirut',
    nameTh: 'รศ.ดร.อนิรุทธ์ สติมั่น',
    nameEn: 'Assoc. Prof. Dr. Anirut Satiman',
    role: 'อาจารย์ประจำภาควิชาเทคโนโลยีการศึกษา',
    academicRank: 'รองศาสตราจารย์ ดร. (รศ.ดร.)',
    education: [
      'ค.ด. (เทคโนโลยีและสื่อสารการศึกษา) จุฬาลงกรณ์มหาวิทยาลัย',
      'ศษ.ม. (เทคโนโลยีการศึกษา) มหาวิทยาลัยเชียงใหม่',
      'วท.บ. (เคมี) มหาวิทยาลัยสงขลานครินทร์'
    ],
    expertise: [
      'การวิจัยทางเทคโนโลยีการศึกษา (Educational Technology Research)',
      'สภาพแวดล้อมการเรียนรู้เสมือนจริง (Virtual Learning Environments)',
      'เทคโนโลยีและการสื่อสารเพื่อการศึกษาขั้นสูง',
      'การพัฒนารูปแบบการเรียนรู้ดิจิทัลและสมาร์ทเลิร์นนิง'
    ],
    email: 'SATIMAN_A@SU.AC.TH',
    office: 'อาคารศึกษาศาสตร์ 2 ภาควิชาเทคโนโลยีการศึกษา มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์',
    avatarSeed: 'anirut',
    publicationsCount: 45,
    highlight: 'รางวัลอาจารย์ดีเด่นแห่งชาติ ประจำปี พ.ศ. 2566 สาขาเทคโนโลยีการศึกษา',
    imageUrl: '/src/assets/images/faculty/anirut.jpg',
    fallbackImageUrl: 'https://lh3.googleusercontent.com/d/1gSuur5vufgZvoxHiKyjGLR2aUlBt9Q0I=w800',
    profileLink: 'https://docs.google.com/document/d/1-F8PG4qrFUs1182rwkrqtayU-mrs3iHXU5yi8w3kYiY/edit?usp=sharing'
  },
  {
    id: 'nammon',
    nameTh: 'รศ.ดร.น้ำมนต์ เรืองฤทธิ์',
    nameEn: 'Assoc. Prof. Dr. Nammon Ruangrit',
    role: 'อาจารย์ประจำภาควิชาเทคโนโลยีการศึกษา',
    academicRank: 'รองศาสตราจารย์ ดร. (รศ.ดร.)',
    education: [
      'กศ.ด. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศรีนครินทรวิโรฒ',
      'ศษ.ม. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศิลปากร',
      'ศษ.บ. (ภาษาอังกฤษ) มหาวิทยาลัยศิลปากร'
    ],
    expertise: [
      'การประเมินหลักสูตรและสื่อนวัตกรรมการศึกษา',
      'เทคโนโลยีการสอนสำหรับครูยุคดิจิทัล (Educational Technology for Teachers)',
      'การพัฒนาชุดการสอนและบทเรียนออนไลน์',
      'การวิจัยและประเมินผลทางการศึกษา'
    ],
    email: 'RUANGRIT_N@silpakorn.edu',
    office: 'อาคารศึกษาศาสตร์ 2 มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์',
    avatarSeed: 'nammon',
    publicationsCount: 34,
    highlight: 'อาจารย์ผู้รับผิดชอบหลักสูตร ศษ.ม. และ ปร.ด. เทคโนโลยีการศึกษา',
    imageUrl: '/src/assets/images/faculty/nammon.jpg',
    fallbackImageUrl: 'https://lh3.googleusercontent.com/d/1QuVPyJSzSLNNM73pdExx7XnmlKanHzXh=w800',
    profileLink: 'https://docs.google.com/document/d/17bLs8Yz456-4XSKM53Mau7N7avgOW1cB3bpSfQ7TmQw/edit?usp=sharing'
  },
  {
    id: 'ekanarin',
    nameTh: 'รศ.ดร.เอกนฤน บางท่าไม้',
    nameEn: 'Assoc. Prof. Dr. Ekanarin Bangtamai',
    role: 'ผู้อำนวยการศูนย์นวัตกรรมการศึกษาแห่งมหาวิทยาลัยศิลปากร (SEIC)',
    academicRank: 'รองศาสตราจารย์ ดร. (รศ.ดร.)',
    education: [
      'ปร.ด. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศิลปากร',
      'ศษ.ม. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศิลปากร',
      'ศศ.บ. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศิลปากร'
    ],
    expertise: [
      'ปัญญาประดิษฐ์และการประยุกต์ใช้เพื่อการศึกษา (AI in Education)',
      'การออกแบบสื่อมัลติมีเดียปฏิสัมพันธ์และเกมการเรียนรู้',
      'มาตรฐานอาจารย์มืออาชีพ Thailand-PSF ระดับ 3',
      'การจัดการนวัตกรรมการศึกษาและทรัพย์สินทางปัญญา'
    ],
    email: 'BANGTHAMAI_E@SU.AC.TH',
    office: 'ศูนย์นวัตกรรมการศึกษาแห่งมหาวิทยาลัยศิลปากร / ภาควิชาเทคโนโลยีการศึกษา',
    avatarSeed: 'ekanarin',
    publicationsCount: 39,
    highlight: 'ผู้อำนวยการศูนย์นวัตกรรมการศึกษา ม.ศิลปากร & บุคลากรดีเด่น มหาวิทยาลัยศิลปากร 2566',
    imageUrl: '/src/assets/images/faculty/ekanarin.jpg',
    fallbackImageUrl: 'https://lh3.googleusercontent.com/d/1mPBSrnCYg5AteBc8eWNERN01geCaEQSf=w800',
    profileLink: 'https://docs.google.com/document/d/1fu683cnwv3fyJh4E2Crkhaf3lVW0zw7nEe2U86Wo1Ew/edit?usp=sharing'
  },
  {
    id: 'worawut',
    nameTh: 'ผศ.ดร.วรวุฒิ มั่นสุขผล',
    nameEn: 'Asst. Prof. Dr. Worawut Mansukpol',
    role: 'อาจารย์ประจำภาควิชาเทคโนโลยีการศึกษา',
    academicRank: 'ผู้ช่วยศาสตราจารย์ ดร. (ผศ.ดร.)',
    education: [
      'ปร.ด. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศิลปากร',
      'ศษ.ม. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศิลปากร',
      'ศษ.บ. (เทคโนโลยีการศึกษา) มหาวิทยาลัยศิลปากร'
    ],
    expertise: [
      'เทคโนโลยีความเป็นจริงเสริม (Augmented Reality in Education)',
      'การพัฒนาสื่อนวัตกรรมการศึกษาเชิงโต้ตอบ',
      'การวิจัยสื่อดิจิทัลและการเรียนรู้เชิงรุก',
      'การผลิตสื่อมัลติมีเดียขั้นสูง'
    ],
    email: 'MANSUKPOL_W@SU.AC.TH',
    office: 'อาคารศึกษาศาสตร์ 2 คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์',
    avatarSeed: 'worawut',
    publicationsCount: 22,
    highlight: 'ผู้เชี่ยวชาญเทคโนโลยีความจริงเสริม (AR) และสื่อนวัตกรรมเชิงโต้ตอบ',
    imageUrl: '/src/assets/images/faculty/worawut.jpg',
    fallbackImageUrl: 'https://lh3.googleusercontent.com/d/1fF4Tz5lJOpDXyfAFVNuz5nvY0vx7MRac=w800',
    profileLink: 'https://docs.google.com/document/d/1sKbH0Wtnl6cFcaGuteRpdrbu9q4-DCE-2H-6fQjeVZw/edit?usp=sharing'
  }
];

export const COURSES_DATA: Course[] = [
  // Undergraduate Year 1
  {
    code: '468 101',
    nameTh: 'สื่อการศึกษาเบื้องต้น',
    nameEn: 'Introduction to Educational Media',
    credits: '3(2-2-5)',
    level: 'undergraduate',
    year: 1,
    semester: 1,
    type: 'major_required',
    description: 'ศึกษาความหมาย ขอบข่าย และบทบาทของสื่อการศึกษาในกระบวนการเรียนรู้ การวิเคราะห์ความต้องการและการจำแนกประเภทของสื่อ ทั้งสื่อสิ่งพิมพ์ สื่อโสตทัศน์ สื่อดิจิทัล และสื่อร่วมสมัย การประยุกต์ใช้ทฤษฎีการสื่อสารและการเรียนรู้ในการเลือก ใช้ และเก็บรักษาทรัพยากรสื่อการศึกษาอย่างมีประสิทธิภาพ',
    topics: [
      'พัฒนาการและขอบข่ายเทคโนโลยีและสื่อการศึกษา',
      'แบบจำลองการสื่อสารทางการศึกษา (SMCR Model)',
      'การจำแนกประเภทสื่อการศึกษาตามกรวยประสบการณ์ของ Edgar Dale',
      'หลักการเลือกและการใช้สื่อการสอนให้สอดคล้องกับพฤติกรรมการเรียนรู้',
      'การบำรุงรักษาและการจัดการห้องปฏิบัติการสื่อ'
    ],
    learningOutcomes: [
      'อธิบายทฤษฎีพื้นฐานและความสัมพันธ์ระหว่างการสื่อสารกับการเรียนรู้ได้ถูกต้อง',
      'วิเคราะห์และเลือกใช้สื่อการศึกษาที่เหมาะสมกับวัตถุประสงค์การเรียนรู้',
      'ปฏิบัติการใช้อุปกรณ์โสตทัศนูปกรณ์และสื่อการศึกษาได้อย่างถูกต้องและปลอดภัย'
    ]
  },
  {
    code: '468 102',
    nameTh: 'คอมพิวเตอร์เพื่อการศึกษา',
    nameEn: 'Computers for Education',
    credits: '2(1-2-3)',
    level: 'undergraduate',
    year: 1,
    semester: 2,
    type: 'major_required',
    description: 'ศึกษาบทบาทและวิวัฒนาการของคอมพิวเตอร์ในระบบการศึกษา สถาปัตยกรรมฮาร์ดแวร์ ซอฟต์แวร์ประยุกต์ ระบบเครือข่าย และอินเทอร์เน็ตเพื่อการสืบค้นและจัดการความรู้ ฝึกปฏิบัติการใช้ซอฟต์แวร์ผลิตสื่อการเรียนรู้ขั้นพื้นฐาน คลาวด์คอมพิวติ้ง จริยธรรมและความปลอดภัยไซเบอร์ในการใช้เทคโนโลยีดิจิทัล',
    topics: [
      'คอมพิวเตอร์และเทคโนโลยีดิจิทัลในยุคการศึกษา 4.0/5.0',
      'เครื่องมือการทำงานร่วมกันบนคลาวด์ (Cloud Collaboration Tools)',
      'ซอฟต์แวร์ประยุกต์สำหรับนักเทคโนโลยีการศึกษา',
      'ความปลอดภัยทางไซเบอร์และ พ.ร.บ. ว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์',
      'ลิขสิทธิ์ทางปัญญา สัญญาอนุญาตครีเอทีฟคอมมอนส์ (Creative Commons)'
    ],
    learningOutcomes: [
      'ประยุกต์ใช้โปรแกรมคอมพิวเตอร์และเครื่องมือดิจิทัลในการทำงานและการจัดการการเรียนรู้',
      'ออกแบบระบบจัดเก็บและแลกเปลี่ยนทรัพยากรการศึกษาบนระบบคลาวด์',
      'ตระหนักถึงจริยธรรม กฎหมาย และความปลอดภัยในการใช้งานคอมพิวเตอร์'
    ]
  },
  {
    code: '463 101',
    nameTh: 'จิตวิทยาการศึกษา',
    nameEn: 'Educational Psychology',
    credits: '3(3-0-6)',
    level: 'undergraduate',
    year: 1,
    semester: 1,
    type: 'core',
    description: 'ศึกษาทฤษฎีจิตวิทยาที่เกี่ยวข้องกับพัฒนาการมนุษย์ การเจริญเติบโตด้านร่างกาย อารมณ์ สังคม และสติปัญญา ทฤษฎีการเรียนรู้กลุ่มพฤติกรรมนิยม พุทธิปัญญานิยม และคอนสตรัคติวิสต์ แรงจูงใจในการเรียนรู้ ความแตกต่างระหว่างบุคคล และการประยุกต์ใช้ในการออกแบบสื่อการเรียนรู้',
    topics: [
      'พัฒนาการมนุษย์ในแต่ละช่วงวัยกับการจัดสภาพแวดล้อมการเรียนรู้',
      'ทฤษฎีการเรียนรู้ Behaviorism, Cognitivism, Constructivism, Connectivism',
      'แรงจูงใจและความจำของมนุษย์ (Information Processing Model)',
      'ความแตกต่างระหว่างบุคคล พหุปัญญา และสไตล์การเรียนรู้ (Learning Styles)',
      'การออกแบบกิจกรรมที่สอดรับกับสมอง (Brain-based Learning)'
    ],
    learningOutcomes: [
      'อธิบายพฤติกรรมและกระบวนการเรียนรู้ของผู้เรียนตามหลักจิตวิทยาการศึกษาได้',
      'นำหลักจิตวิทยาไปบูรณาการกับการออกแบบสารและสื่อการสอนให้ดึงดูดความสนใจ',
      'เข้าใจความหลากหลายและปัจจัยที่ส่งผลต่อการเรียนรู้ของผู้เรียนแต่ละบุคคล'
    ]
  },

  // Undergraduate Year 2
  {
    code: '468 201',
    nameTh: 'นวัตกรรมและเทคโนโลยีการศึกษา',
    nameEn: 'Educational Innovation and Technology',
    credits: '3(3-0-6)',
    level: 'undergraduate',
    year: 2,
    semester: 1,
    type: 'major_required',
    description: 'มโนทัศน์ นวัตกรรม และการแพร่กระจายนวัตกรรมทางการศึกษา การวิเคราะห์แนวโน้มเทคโนโลยีเกิดใหม่ เช่น AI, AR/VR, Gamification, Microlearning และระบบการเรียนรู้ดิจิทัล การประเมินความคุ้มค่าและความพร้อมในการนำนวัตกรรมไปใช้แก้ปัญหาการจัดการเรียนรู้ในระดับสถานศึกษาและองค์กร',
    topics: [
      'ทฤษฎีการแพร่กระจายนวัตกรรม (Diffusion of Innovations โดย Everett Rogers)',
      'เทคโนโลยีอุบัติใหม่ทางการศึกษา (Emerging EdTech Horizons)',
      'การออกแบบสภาพแวดล้อมการเรียนรู้ดิจิทัล (Smart Learning Environments)',
      'นวัตกรรมแบบเปิด แหล่งทรัพยากรการศึกษาเปิด (OER) และระบบ MOOC',
      'การวิเคราะห์และประเมินประสิทธิผลของนวัตกรรมการศึกษา'
    ],
    learningOutcomes: [
      'วิเคราะห์แนวโน้มเทคโนโลยีและคัดสรรนวัตกรรมที่สอดคล้องกับบริบทการศึกษาไทย',
      'ออกแบบแผนกลยุทธ์การนำนวัตกรรมไปประยุกต์ใช้ในสถานศึกษาหรือองค์กร',
      'ประเมินผลกระทบและความคุ้มค่าของนวัตกรรมการศึกษาอย่างเป็นระบบ'
    ]
  },
  {
    code: '468 206',
    nameTh: 'โทรทัศน์เพื่อการศึกษา',
    nameEn: 'Educational Television',
    credits: '3(3-0-6)',
    level: 'undergraduate',
    year: 2,
    semester: 2,
    type: 'major_required',
    description: 'ศึกษาทฤษฎีและกระบวนการผลิตรายการโทรทัศน์และวิดีโอเพื่อการศึกษา การเขียนบทโทรทัศน์ การจัดลำดับภาพ การจัดแสง การบันทึกเสียง เทคนิคการกำกับและควบคุมรายการในสตูดิโอและนอกสถานที่ การตัดต่อและเทคนิคการกระจายเสียงดิจิทัล (Digital Broadcasting and Video Streaming)',
    topics: [
      'โครงสร้างและองค์ประกอบของรายการโทรทัศน์เพื่อการศึกษา',
      'การเขียนบทโทรทัศน์เพื่อการศึกษา (Educational Scriptwriting & Storyboard)',
      'เทคนิคการจัดแสง การบันทึกเสียง และการใช้อุปกรณ์สตูดิโอโทรทัศน์',
      'การถ่ายทำและการกำกับรายการโทรทัศน์',
      'การตัดต่อวิดีโอดิจิทัล (Non-linear Editing) และการเผยแพร่ผ่านช่องทางออนไลน์'
    ],
    learningOutcomes: [
      'เขียนบทและสตอรี่บอร์ดสำหรับรายการวิดีโอเพื่อการศึกษาได้อย่างมีประสิทธิภาพ',
      'ปฏิบัติหน้าที่ในตำแหน่งต่างๆ ในสตูดิโอโทรทัศน์เพื่อการศึกษาได้อย่างมืออาชีพ',
      'ผลิตและตัดต่อรายการโทรทัศน์เพื่อการศึกษาที่สอดคล้องกับมาตรฐานทางวิชาการและอุตสาหกรรม'
    ]
  },
  {
    code: '468 209',
    nameTh: 'เทคนิคงานกราฟิกสำหรับสื่อการสอน',
    nameEn: 'Graphic Techniques for Instructional Media',
    credits: '3(3-0-6)',
    level: 'undergraduate',
    year: 2,
    semester: 1,
    type: 'major_required',
    description: 'ศึกษาทฤษฎีศิลปะ องค์ประกอบศิลป์ จิตวิทยาการใช้สี ตัวอักษร และการจัดวางเพื่อการสื่อความหมายทางการศึกษา ฝึกทักษะการใช้ซอฟต์แวร์คอมพิวเตอร์กราฟิกทั้งภาพเวกเตอร์และภาพบิตแมป การออกแบบอินโฟกราฟิก สื่อสิ่งพิมพ์ทางการศึกษา และกราฟิกสำหรับอินเทอร์เฟซผู้ใช้งาน (UI Design)',
    topics: [
      'องค์ประกอบศิลป์และหลักการออกแบบเพื่อการสื่อสารทางการศึกษา',
      'จิตวิทยาการใช้สีและทฤษฎีตัวอักษร (Typography in Pedagogy)',
      'การออกแบบอินโฟกราฟิกเชิงการศึกษา (Educational Infographic Design)',
      'การผลิตกราฟิกเวกเตอร์และบิตแมปด้วยโปรแกรมคอมพิวเตอร์มาตรฐานสากล',
      'การออกแบบ User Interface และ Visual Assets สำหรับแพลตฟอร์มการเรียนรู้'
    ],
    learningOutcomes: [
      'ประยุกต์ใช้หลักการจัดองค์ประกอบศิลป์ในการออกแบบสื่อการสอนได้อย่างน่าสนใจ',
      'สร้างสรรค์อินโฟกราฟิกและชิ้นงานกราฟิกที่สื่อสารสาระความรู้ได้อย่างแม่นยำ',
      'ใช้เครื่องมือดิจิทัลกราฟิกระดับมืออาชีพในการผลิตชิ้นงานสื่อการศึกษา'
    ]
  },
  {
    code: '462 202',
    nameTh: 'วิธีสอนทั่วไป',
    nameEn: 'General Teaching Methods',
    credits: '2(2-0-4)',
    level: 'undergraduate',
    year: 2,
    semester: 1,
    type: 'core',
    description: 'ศึกษาหลักการและรูปแบบการจัดการเรียนรู้ วิธีการสอนแบบเน้นผู้เรียนเป็นสำคัญ เช่น Active Learning, Problem-based Learning, Inquiry-based Learning และ Project-based Learning การเขียนแผนการจัดการเรียนรู้ การจัดบรรยากาศชั้นเรียน และการบูรณาการสื่อและเทคโนโลยีเพื่อสนับสนุนกิจกรรมการสอน',
    topics: [
      'ปรัชญาและหลักการจัดประสบการณ์การเรียนรู้',
      'รูปแบบวิธีสอนเน้นผู้เรียนเป็นศูนย์กลาง (Learner-Centered Pedagogy)',
      'การจัดการเรียนรู้เชิงรุก (Active Learning Strategies)',
      'การเขียนแผนการจัดการเรียนรู้และการกำหนดวัตถุประสงค์เชิงพฤติกรรม',
      'การจัดการชั้นเรียนและการประเมินระหว่างการเรียนการสอน (Formative Assessment)'
    ],
    learningOutcomes: [
      'เขียนแผนการสอนที่มีเป้าหมายและกิจกรรมสอดรับกับผลลัพธ์การเรียนรู้',
      'เลือกใช้วิธีสอนที่กระตุ้นการมีส่วนร่วมและการคิดขั้นสูงของผู้เรียน',
      'จำลองการสอนและบูรณาการสื่อเพื่อการเรียนรู้อย่างราบรื่น'
    ]
  },

  // Undergraduate Year 3
  {
    code: '468 301',
    nameTh: 'การเลือกและการใช้สื่อการสอน',
    nameEn: 'Selection and Utilization of Instructional Media',
    credits: '3(3-0-6)',
    level: 'undergraduate',
    year: 3,
    semester: 1,
    type: 'major_required',
    description: 'ศึกษาเกณฑ์และตัวแบบการเลือกสื่อการสอน เช่น ASSURE Model, SECTIONS Model การวิเคราะห์ลักษณะผู้เรียน วัตถุประสงค์ เนื้อหา และสภาพแวดล้อมเพื่อเลือกสื่อที่เหมาะสมที่สุด การบูรณาการสื่อหลายชนิดเข้าด้วยกันเป็นระบบมัลติมีเดีย การประเมินผลสัมฤทธิ์ของการใช้สื่อในการปรับปรุงการเรียนการสอน',
    topics: [
      'แบบจำลองการวางแผนการใช้สื่อ ASSURE Model',
      'กรอบการพิจารณาเลือกเทคโนโลยี SECTIONS Framework โดย Tony Bates',
      'การวิเคราะห์ความต้องการและการจับคู่สื่อกับประเภทเนื้อหา',
      'การบูรณาการสื่อผสมและเทคโนโลยีดิจิทัลในสถานการณ์จริง',
      'การประเมินและสะท้อนผลสัมฤทธิ์ของการใช้สื่อ (Media Evaluation Rubrics)'
    ],
    learningOutcomes: [
      'วางแผนและกำหนดเกณฑ์การเลือกสื่อการสอนอย่างเป็นระบบด้วย ASSURE Model',
      'บูรณาการและใช้งานสื่อการสอนที่หลากหลายในบริบทการเรียนรู้ที่แตกต่างกัน',
      'สร้างเครื่องมือประเมินและประเมินคุณภาพของสื่อการสอนได้อย่างถูกต้อง'
    ]
  },
  {
    code: '468 302',
    nameTh: 'การออกแบบระบบการเรียนการสอน',
    nameEn: 'Instructional Systems Design',
    credits: '3(3-0-6)',
    level: 'undergraduate',
    year: 3,
    semester: 2,
    type: 'major_required',
    description: 'ศึกษาทฤษฎีและโมเดลการออกแบบระบบการเรียนการสอน เช่น ADDIE Model, Dick and Carey Model, SAM Model การวิเคราะห์ความต้องการจำเป็น (Needs Assessment) การวิเคราะห์งานและเนื้อหา การกำหนดวัตถุประสงค์เชิงพฤติกรรม การพัฒนากลยุทธ์การสอน และการประเมินเพื่อปรับปรุงและประเมินผลสรุป',
    topics: [
      'วงจรการออกแบบระบบการสอน (Instructional Systems Design - ISD)',
      'การวิเคราะห์ความต้องการจำเป็นและการวิเคราะห์กลุ่มเป้าหมาย',
      'การวิเคราะห์เนื้อหาและสายการเรียนรู้ (Task & Content Analysis)',
      'การเขียนข้อกำหนดการออกแบบและการพัฒนากลยุทธ์การสอน',
      'การประเมินความสอดคล้องระหว่างวัตถุประสงค์ กิจกรรม และการประเมินผล'
    ],
    learningOutcomes: [
      'อธิบายและเปรียบเทียบข้อดีข้อจำกัดของโมเดล ISD ต่างๆ ได้อย่างลึกซึ้ง',
      'ดำเนินการวิเคราะห์และจัดทำเอกสารแผนการออกแบบระบบการสอนฉบับสมบูรณ์',
      'ออกแบบระบบการเรียนการสอนที่ตอบสนองต่อปัญหาการเรียนรู้ในสถานการณ์จริง'
    ]
  },

  // Undergraduate Year 4
  {
    code: '468 300',
    nameTh: 'การฝึกประสบการณ์วิชาชีพเทคโนโลยีการศึกษา',
    nameEn: 'Educational Technology Practicum',
    credits: '6(0-12-6)',
    level: 'undergraduate',
    year: 4,
    semester: 1,
    type: 'practicum',
    description: 'การฝึกปฏิบัติงานจริงในหน่วยงานภาครัฐ เอกชน สถาบันการศึกษา หรือองค์กรด้านสื่อสารมวลชนและเทคโนโลยีสารสนเทศ เป็นเวลาไม่น้อยกว่า 300 ชั่วโมง เพื่อประยุกต์ใช้ความรู้ความสามารถ ทักษะทางเทคนิค และจรรยาบรรณวิชาชีพในการผลิต ให้บริการ และพัฒนานวัตกรรมเทคโนโลยีการศึกษาในสภาพแวดล้อมการทำงานจริง',
    topics: [
      'การปฐมนิเทศและการเตรียมความพร้อมสู่การทำงานระดับมืออาชีพ',
      'การปฏิบัติงานจริงในองค์กรฝึกงานภายใต้การดูแลของอาจารย์นิเทศก์และพี่เลี้ยง',
      'การบันทึกรายงานการปฏิบัติงานและการสะท้อนคิด (Reflective Practice)',
      'การแก้ปัญหาเฉพาะหน้าและการทำงานร่วมกับทีมสหวิชาชีพ',
      'การสัมมนานำเสนอผลการฝึกประสบการณ์วิชาชีพและแฟ้มสะสมผลงาน'
    ],
    learningOutcomes: [
      'ปฏิบัติงานด้านการออกแบบ การผลิต และการจัดการเทคโนโลยีการศึกษาในหน่วยงานจริงได้อย่างมืออาชีพ',
      'แสดงออกถึงจรรยาบรรณวิชาชีพ ทักษะการสื่อสาร และการทำงานเป็นทีม',
      'สังเคราะห์ประสบการณ์และจัดทำรายงานเพื่อสะท้อนพัฒนาการทางวิชาชีพ'
    ]
  },
  {
    code: '468 401',
    nameTh: 'สัมมนาทางเทคโนโลยีการศึกษา',
    nameEn: 'Seminar in Educational Technology',
    credits: '3(2-2-5)',
    level: 'undergraduate',
    year: 4,
    semester: 2,
    type: 'major_required',
    description: 'การศึกษา วิเคราะห์ และอภิปรายประเด็นปัญหา แนวโน้ม และความท้าทายร่วมสมัยในวงการเทคโนโลยีและนวัตกรรมการศึกษา ทั้งในระดับประเทศและนานาชาติ การสืบค้นวรรณกรรม การเขียนบทความวิชาการ การจัดประชุมสัมมนาทางวิชาการ และการฝึกนำเสนอผลงานต่อสาธารณชน',
    topics: [
      'ประเด็นท้าทายในวงการเทคโนโลยีการศึกษาปัจจุบัน',
      'การสังเคราะห์วรรณกรรมและงานวิจัยที่เกี่ยวข้อง',
      'เทคนิคการเขียนบทความทางวิชาการตามมาตรฐานสากล',
      'การจัดและบริหารการประชุมสัมมนาวิชาการ',
      'การนำเสนอและอภิปรายข้อถกเถียงเชิงวิชาการ'
    ],
    learningOutcomes: [
      'วิพากษ์และสังเคราะห์ประเด็นทางเทคโนโลยีการศึกษาได้อย่างมีหลักการ',
      'เขียนบทความวิชาการที่ได้มาตรฐานและถูกต้องตามหลักจริยธรรมทางวิชาการ',
      'จัดและดำเนินกิจกรรมสัมมนาทางวิชาการได้อย่างมีประสิทธิภาพ'
    ]
  },
  {
    code: '468 402',
    nameTh: 'โครงงานเทคโนโลยีการศึกษา',
    nameEn: 'Educational Technology Senior Project',
    credits: '3(0-6-3)',
    level: 'undergraduate',
    year: 4,
    semester: 2,
    type: 'major_required',
    description: 'การนำความรู้และทักษะตลอดหลักสูตรมาบูรณาการเพื่อศึกษา ออกแบบ พัฒนา และประเมินผลผลงานนวัตกรรมหรือชิ้นงานเทคโนโลยีการศึกษาฉบับสมบูรณ์ ภายใต้การให้คำปรึกษาของอาจารย์ที่ปรึกษาโครงงาน การทดสอบประสิทธิภาพกับกลุ่มเป้าหมายจริง และการจัดแสดงนิทรรศการโครงงานต่อสาธารณะ',
    topics: [
      'การกำหนดหัวข้อโครงงานและการจัดทำข้อเสนอโครงการ (Project Proposal)',
      'การออกแบบและพัฒนานวัตกรรมตามขั้นตอนระเบียบวิธีที่ชัดเจน',
      'การทดลองใช้เพื่อหาประสิทธิภาพของนวัตกรรม (Tryout & Evaluation)',
      'การเขียนรายงานโครงงานฉบับสมบูรณ์ตามรูปแบบมหาวิทยาลัยศิลปากร',
      'การสอบป้องกันโครงงานและการจัดแสดงในงานนิทรรศการผลงานประจำปี'
    ],
    learningOutcomes: [
      'สร้างสรรค์ผลงานนวัตกรรมเทคโนโลยีการศึกษาที่สมบูรณ์และใช้งานได้จริง',
      'ประเมินประสิทธิภาพและผลลัพธ์ของนวัตกรรมตามหลักวิชาการ',
      'สื่อสารและนำเสนอผลงานต่อผู้ทรงคุณวุฒิและสาธารณชนได้อย่างมั่นใจ'
    ]
  },

  // Master's Program (ศษ.ม.)
  {
    code: '464 411',
    nameTh: 'พื้นฐานทางการศึกษาเพื่อการพัฒนา',
    nameEn: 'Foundations of Education for Development',
    credits: '3(3-0-6)',
    level: 'master',
    type: 'core',
    description: 'ศึกษาพื้นฐานทางการศึกษาด้านปรัชญา ประวัติศาสตร์ สังคมวิทยา วัฒนธรรม เศรษฐกิจ และการเมืองที่มีอิทธิพลต่อนโยบายและระบบการศึกษาไทยและสากล การวิเคราะห์บทบาทของการศึกษาในการพัฒนาทุนมนุษย์และสังคมที่ยั่งยืนในยุคการเปลี่ยนแปลงอย่างพลิกผัน (Disruptive Era)',
    topics: [
      'ปรัชญาการศึกษาและแนวคิดพัฒนาการทางการศึกษา',
      'พลวัตทางเศรษฐกิจ สังคม และการเมืองกับนโยบายการศึกษา',
      'การศึกษาเพื่อการพัฒนาที่ยั่งยืน (SDG 4 - Quality Education)',
      'การปฏิรูปการศึกษาและบทบาทของเทคโนโลยีในการลดความเหลื่อมล้ำ'
    ],
    learningOutcomes: [
      'วิเคราะห์ปัจจัยพื้นฐานที่ขับเคลื่อนระบบการศึกษาในระดับนโยบาย',
      'เชื่อมโยงปรัชญาการศึกษากับการออกแบบการจัดการเรียนรู้เพื่อการพัฒนาสังคม'
    ]
  },
  {
    code: '464 461',
    nameTh: 'สถิติเพื่อการวิจัยทางการศึกษา',
    nameEn: 'Statistics for Educational Research',
    credits: '3(3-0-6)',
    level: 'master',
    type: 'core',
    description: 'ศึกษาหลักการสถิติเชิงพรรณนาและสถิติเชิงอนุมาน การทดสอบสมมติฐาน การวิเคราะห์ความแปรปรวน (ANOVA) สหสัมพันธ์ การถดถอยพหุคูณ และการฝึกใช้โปรแกรมสำเร็จรูปทางสถิติในการประมวลผลข้อมูลการวิจัยทางเทคโนโลยีการศึกษา',
    topics: [
      'แนวคิดพื้นฐานเกี่ยวกับตัวแปร ข้อมูล และระดับการวัด',
      'การทดสอบสมมติฐานทางสถิติ Parametric and Non-parametric tests',
      'การวิเคราะห์ความแปรปรวนและการวิเคราะห์การถดถอย',
      'การใช้โปรแกรมคอมพิวเตอร์ประมวลผลและแปลความหมายทางสถิติ'
    ],
    learningOutcomes: [
      'เลือกใช้สถิติที่เหมาะสมกับแบบแผนการวิจัยและคำถามวิจัยได้อย่างถูกต้อง',
      'แปลผลและรายงานผลการวิเคราะห์ข้อมูลทางสถิติได้อย่างถูกต้องตามแบบแผนสากล'
    ]
  },
  {
    code: '468 540',
    nameTh: 'เทคโนโลยีกับการศึกษาร่วมสมัย',
    nameEn: 'Technology and Contemporary Education',
    credits: '3(3-0-6)',
    level: 'master',
    type: 'major_required',
    description: 'วิเคราะห์บทบาทและผลกระทบของเทคโนโลยีร่วมสมัยที่มีต่อกระบวนการจัดการเรียนรู้ นโยบายการศึกษา และพฤติกรรมมนุษย์ การศึกษาแนวคิดดิจิทัลทรานส์ฟอร์เมชัน (Digital Transformation in Education), การจัดการเรียนการสอนแบบผสมผสาน, ปัญญาประดิษฐ์ทางการศึกษา และการคุ้มครองข้อมูลส่วนบุคคล (PDPA) ในสถาบันการศึกษา',
    topics: [
      'Digital Transformation และ EdTech Ecosystem',
      'ปัญญาประดิษฐ์ทางการศึกษา (AI in Education) และจริยธรรมดิจิทัล',
      'การออกแบบนิเวศการเรียนรู้แบบผสมผสาน (Blended Learning Ecosystems)',
      'การประยุกต์ใช้เทคโนโลยีกับการจัดการเรียนรู้ตลอดชีวิต'
    ],
    learningOutcomes: [
      'วิพากษ์แนวโน้มเทคโนโลยีร่วมสมัยและเสนอแนะนโยบายการประยุกต์ใช้ในระดับองค์กร',
      'ออกแบบยุทธศาสตร์การขับเคลื่อนเทคโนโลยีการศึกษาที่ยืดหยุ่นและเท่าเทียม'
    ]
  },
  {
    code: '468 563',
    nameTh: 'การผลิตสื่อการเรียนรู้เพื่อสื่อสารมวลชนและการศึกษานอกระบบ',
    nameEn: 'Instructional Media Production for Mass Communication and Non-formal Education',
    credits: '3(3-0-6)',
    level: 'master',
    type: 'major_elective',
    description: 'ศึกษาหลักการสื่อสารมวลชนเพื่อการศึกษา การออกแบบและผลิตสื่อสำหรับกลุ่มเป้าหมายที่หลากหลายในการศึกษานอกระบบและการศึกษาตามอัธยาศัย การใช้สื่อสังคมออนไลน์ พอดแคสต์ และแพลตฟอร์มวิดีโอเพื่อขับเคลื่อนการเรียนรู้ของชุมชนและสาธารณะ',
    topics: [
      'การสื่อสารเพื่อการพัฒนาสังคมและการศึกษานอกระบบ',
      'การผลิตสื่อเสียงและพอดแคสต์เพื่อการศึกษา (Educational Podcasting)',
      'กลยุทธ์การสื่อสารคอนเทนต์บนโซเชียลมีเดียเพื่อการเปลี่ยนแปลงพฤติกรรม',
      'การผลิตสื่อเพื่อชุมชนและการมีส่วนร่วมของประชาชน'
    ],
    learningOutcomes: [
      'ออกแบบสื่อการเรียนรู้ที่ตอบสนองความต้องการของผู้เรียนในบริบทการศึกษานอกระบบ',
      'ประยุกต์ใช้เครื่องมือสื่อสารมวลชนดิจิทัลเพื่อการเผยแพร่ความรู้อย่างมีผลกระทบ'
    ]
  },
  {
    code: '468 599',
    nameTh: 'วิทยานิพนธ์',
    nameEn: 'Thesis',
    credits: '12 หน่วยกิต',
    level: 'master',
    type: 'thesis',
    description: 'การทำวิจัยเดี่ยวเชิงวิชาการเพื่อค้นพบองค์ความรู้ใหม่หรือพัฒนานวัตกรรมทางเทคโนโลยีการศึกษาอย่างเป็นระบบ ภายใต้การควบคุมของคณะกรรมการที่ปรึกษาวิทยานิพนธ์ การสอบโครงร่าง การดำเนินการวิจัย การเขียนรายงานวิทยานิพนธ์ การสอบปากเปล่า และการตีพิมพ์เผยแพร่ในวารสารวิชาการที่ได้รับการยอมรับในระดับชาติหรือนานาชาติ (TCI/Scopus)',
    topics: [
      'การพัฒนากรอบแนวคิดและการกำหนดปัญหาวิจัยระดับมหาบัณฑิต',
      'การออกแบบระเบียบวิธีวิจัย การสร้างและตรวจสอบคุณภาพเครื่องมือ',
      'การเก็บรวบรวมและวิเคราะห์ข้อมูลวิจัย',
      'การเขียนรายงานวิทยานิพนธ์และการสังเคราะห์ข้อค้นพบ',
      'การเผยแพร่งานวิจัยในวารสารวิชาการและการสอบวิทยานิพนธ์'
    ],
    learningOutcomes: [
      'ดำเนินกระบวนการวิจัยทางเทคโนโลยีการศึกษาได้อย่างถูกต้องตามหลักวิชาการและจริยธรรม',
      'สร้างสรรค์ข้อค้นพบหรือนวัตกรรมที่เป็นประโยชน์ต่อวงการการศึกษา',
      'ตีพิมพ์เผยแพร่ผลงานวิจัยตามเกณฑ์มาตรฐานการสำเร็จการศึกษา'
    ]
  },

  // Doctoral Program (ปร.ด.)
  {
    code: '468 601',
    nameTh: 'การวิจัยขั้นสูงทางเทคโนโลยีและนวัตกรรมการศึกษา',
    nameEn: 'Advanced Research in Educational Technology and Innovation',
    credits: '3(3-0-6)',
    level: 'doctoral',
    type: 'core',
    description: 'ปรัชญาและญาณวิทยาของการวิจัยทางเทคโนโลยีการศึกษา การออกแบบการวิจัยแบบผสมวิธี (Mixed Methods Research) การวิจัยเชิงออกแบบและพัฒนา (Design-Based Research: DBR) การสร้างทฤษฎีฐานราก และการวิเคราะห์ข้อมูลขนาดใหญ่ทางการศึกษา (Educational Big Data Analytics)',
    topics: [
      'กระบวนทัศน์และญาณวิทยาการวิจัยเทคโนโลยีการศึกษาขั้นสูง',
      'ระเบียบวิธีวิจัย Design-Based Research (DBR)',
      'การวิจัยแบบผสมวิธีเชิงลึก (Advanced Mixed Methods Designs)',
      'การวิเคราะห์ Learning Analytics และ Educational Data Mining'
    ],
    learningOutcomes: [
      'วิพากษ์และบูรณาการระเบียบวิธีวิจัยขั้นสูงเพื่อแก้ปัญหาเชิงระบบในการศึกษา',
      'พัฒนาแบบจำลองหรือกรอบแนวคิดทฤษฎีด้านเทคโนโลยีการศึกษาที่สร้างคุณค่าใหม่'
    ]
  },
  {
    code: '468 699',
    nameTh: 'ดุษฎีนิพนธ์',
    nameEn: 'Dissertation',
    credits: '36 หรือ 48 หน่วยกิต',
    level: 'doctoral',
    type: 'thesis',
    description: 'การศึกษาวิจัยอิสระที่สร้างองค์ความรู้ใหม่ระดับก้าวหน้าอันเป็นคุณูปการอย่างมีนัยสำคัญต่อสาขาวิชาเทคโนโลยีการศึกษา การเขียนดุษฎีนิพนธ์ตามระเบียบวิธีวิจัยที่เข้มงวด การสอบปกป้องดุษฎีนิพนธ์ และการตีพิมพ์บทความในวารสารวิชาการระดับนานาชาติที่อยู่ในฐานข้อมูลระดับสูง (Scopus/Web of Science)',
    topics: [
      'การสังเคราะห์โจทย์วิจัยระดับดุษฎีบัณฑิตที่ตอบโจทย์อนาคตของการเรียนรู้',
      'การพัฒนานวัตกรรมเชิงทฤษฎีและเชิงปฏิบัติการ',
      'การดำเนินการวิจัยและทดสอบประสิทธิภาพอย่างเข้มข้น',
      'การตีพิมพ์เผยแพร่ในวารสารวิชาการระดับนานาชาติ',
      'การสอบปากเปล่าขั้นสุดท้ายและการขับเคลื่อนข้อเสนอเชิงนโยบาย'
    ],
    learningOutcomes: [
      'สร้างองค์ความรู้ นวัตกรรม หรือทฤษฎีใหม่ที่ได้รับการยอมรับในระดับนานาชาติ',
      'เป็นผู้นำทางวิชาการที่ขับเคลื่อนการเปลี่ยนแปลงของระบบการศึกษาด้วยเทคโนโลยี'
    ]
  }
];

export const STUDENT_WORKS_DATA: StudentWork[] = [
  {
    id: 'work-1',
    titleTh: 'ระบบการเรียนรู้เสมือนจริง (VR) จำลองสรีรวิทยาและกายวิภาคศาสตร์ระบบไหลเวียนโลหิต',
    titleEn: 'Immersive VR Human Circulatory Anatomy Learning Experience',
    category: 'Interactive & VR/AR',
    year: '2566',
    creators: ['นายกิตติคุณ พัชราภา', 'นางสาวณิชกานต์ วงษ์สวรรค์'],
    advisor: 'รศ.ดร.อนิรุทธ์ สติมั่น',
    summary: 'นวัตกรรมสื่อการเรียนรู้จำลองแบบโลกเสมือน 3 มิติ สำหรับนักเรียนระดับมัธยมศึกษาตอนปลาย ให้ผู้เรียนสามารถเดินทางเข้าไปสำรวจภายในห้องหัวใจ หลอดเลือดแดง และกระบวนการแลกเปลี่ยนก๊าซในปอดแบบเรียลไทม์ พร้อมระบบประเมินความเข้าใจระหว่างการสำรวจ',
    technologies: ['Unity 3D', 'Meta Quest SDK', 'Blender', 'C# Scripting', 'Spatial Audio'],
    awards: 'รางวัลดีเด่น นิทรรศการผลงานนวัตกรรมสื่อการศึกษานานาชาติ 2566',
    demoUrl: 'https://github.com/silpakorn-edtech',
    image: '/src/assets/images/student_work_interactive_vr_1790939657670.jpg'
  },
  {
    id: 'work-2',
    titleTh: 'นครปฐมเฮอริเทจ: แอปพลิเคชันความจริงเสริม (AR) เสริมสร้างการเรียนรู้ประวัติศาสตร์พระปฐมเจดีย์',
    titleEn: 'Nakhon Pathom Heritage: Augmented Reality Trail for Cultural Pedagogy',
    category: 'Interactive & VR/AR',
    year: '2566',
    creators: ['นายวรวิชย์ ศรีสวัสดิ์', 'นางสาวพิมพ์ชนก รัตนโกสินทร์'],
    advisor: 'รศ.ดร.เอกนฤน บางท่าไม้',
    summary: 'แอปพลิเคชันท่องเที่ยวเชิงการศึกษา บูรณาการเทคโนโลยีระบุพิกัดและโมเดล AR 3 มิติ ฉายภาพพระปฐมเจดีย์ในแต่ละยุคสมัยตั้งแต่ทวารวดีถึงรัตนโกสินทร์ เพื่อใช้จัดการเรียนรู้นอกห้องเรียนสำหรับเยาวชนและนักท่องเที่ยว',
    technologies: ['AR Foundation', 'Flutter', 'Firebase', 'Photogrammetry 3D'],
    awards: 'รางวัลชนะเลิศ นวัตกรรมซอฟต์พาวเวอร์เพื่อการเรียนรู้ มหาวิทยาลัยศิลปากร 2567',
    image: '/src/assets/images/hero_silpakorn_edtech_1790939637201.jpg'
  },
  {
    id: 'work-3',
    titleTh: 'ไมโครเลิร์นนิงสำหรับเสริมสร้างทักษะความฉลาดรู้ทางดิจิทัล (Digital Literacy Micro-course)',
    titleEn: 'Adaptive Microlearning Web Application for Lifelong Digital Literacy',
    category: 'Web & App',
    year: '2565',
    creators: ['นายธนภัทร สุวรรณโชติ', 'นางสาวกนกวรรณ จิตรประเสริฐ'],
    advisor: 'รศ.ดร.ฐาปนีย์ ธรรมเมธา',
    summary: 'เว็บแอปพลิเคชันบทเรียนขนาดสั้น (Microlearning) ที่ปรับแต่งตามความเร็วในการเรียนรู้ของผู้ใช้ พร้อมระบบควิซแบบ Adaptive และใบรับรองดิจิทัลแบบ Open Badge ตามมาตรฐานสากล',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'SCORM / xAPI'],
    awards: 'ผลงานโครงงานดีเด่น สาขาเทคโนโลยีการศึกษา ประจำปีการศึกษา 2565',
    image: '/src/assets/images/learning_hub_course_thumb_1790939670511.jpg'
  },
  {
    id: 'work-4',
    titleTh: 'โมชันกราฟิกและแอนิเมชันเรื่องเล่าทางวิทยาศาสตร์ “คลื่นเสียงและความมหัศจรรย์แห่งการได้ยิน”',
    titleEn: 'The Science of Sound: Educational Motion Graphic Storytelling Series',
    category: 'Edutainment & Motion',
    year: '2566',
    creators: ['นางสาวศุภิสรา แก้วมณี', 'นายชลทิศ พัฒนาพงษ์'],
    advisor: 'อาจารย์เอกชัย ภูมิระรื่น',
    summary: 'ชุดสื่อแอนิเมชันความยาว 5 ตอน อธิบายฟิสิกส์คลื่นเสียง ความถี่ เดซิเบล และกลไกของแก้วหูมนุษย์ด้วยลายเส้นโมเดิร์นสดใสและการพากย์เสียงที่เข้าใจง่ายสำหรับเด็กและบุคคลทั่วไป',
    technologies: ['Adobe After Effects', 'Adobe Illustrator', 'Cinema 4D', 'Pro Tools'],
    awards: 'รางวัลชมเชย การประกวดสื่อสร้างสรรค์เพื่อการเรียนรู้วิทยาศาสตร์ระดับอุดมศึกษา',
    image: '/src/assets/images/student_work_interactive_vr_1790939657670.jpg'
  },
  {
    id: 'work-5',
    titleTh: 'บอร์ดเกมจำลองระบบนิเวศและการอนุรักษ์สิ่งแวดล้อม “EcoBalance”',
    titleEn: 'EcoBalance: Serious Game-Based Learning for Environmental Conservation',
    category: 'Game-based Learning',
    year: '2565',
    creators: ['นายพงศกร เลิศวิจิตร', 'นายอานนท์ เพชรประดับ'],
    advisor: 'รศ.ดร.ศิวนิต อรรถวุฒิกุล',
    summary: 'บอร์ดเกมการศึกษาและเว็บแอปพลิเคชันเล่นร่วมกัน (Companion App) สำหรับจำลองห่วงโซ่อาหาร การจัดสรรทรัพยากร และผลกระทบจากกิจกรรมมนุษย์ต่อระบบนิเวศทางธรรมชาติ',
    technologies: ['Game Design Framework', 'TypeScript', 'WebSockets', 'Canvas API'],
    awards: 'รางวัลดีเด่น โครงงานบูรณาการวิชาชีพเทคโนโลยีการศึกษา',
    image: '/src/assets/images/learning_hub_course_thumb_1790939670511.jpg'
  }
];

export const RESEARCH_DATA: ResearchItem[] = [
  {
    id: 'res-1',
    titleTh: 'การพัฒนาการเรียนรู้จากการปฏิบัติเพื่อเสริมสร้างความสามารถในการออกแบบเว็บสำหรับการฝึกอบรมออนไลน์',
    titleEn: 'Development of Action Learning to Enhance Competencies in Web Design for Online Training',
    authors: ['รศ.ดร.ศิวนิต อรรถวุฒิกุล'],
    year: '2565',
    journal: 'วารสารศึกษาศาสตร์ มหาวิทยาลัยศิลปากร (Silpakorn Educational Research Journal)',
    area: 'Instructional Design',
    abstract: 'งานวิจัยนี้มีวัตถุประสงค์เพื่อพัฒนาและศึกษาผลการใช้รูปแบบการเรียนรู้จากการปฏิบัติ (Action Learning) ในการเสริมสร้างทักษะการออกแบบและพัฒนาเว็บไซต์สำหรับการฝึกอบรมออนไลน์ของนักศึกษาและบุคลากรทางการศึกษา ผลการวิจัยพบว่าผู้เรียนมีทักษะการออกแบบสูงขึ้นอย่างมีนัยสำคัญทางสถิติ และสามารถประยุกต์ใช้ในการแก้ปัญหาการจัดฝึกอบรมได้จริง',
    doi: '10.14456/serj.2022.18'
  },
  {
    id: 'res-2',
    titleTh: 'การพัฒนารูปแบบสภาพแวดล้อมการเรียนรู้เสมือนจริงเพื่อเสริมสร้างทักษะการคิดขั้นสูงในยุคดิจิทัล',
    titleEn: 'Development of a Virtual Learning Environment Model to Enhance Higher-Order Thinking Skills',
    authors: ['รศ.ดร.อนิรุทธ์ สติมั่น', 'และคณะ'],
    year: '2566',
    journal: 'Journal of Educational Technology and Innovation Studies',
    area: 'Virtual & Immersive Media',
    abstract: 'การวิจัยและพัฒนาเพื่อสร้างโมเดลสภาพแวดล้อมเสมือนจริงที่บูรณาการกลไกการสืบเสาะหาความรู้และการแก้ปัญหาแบบร่วมมือ ผลการประเมินโดยผู้เชี่ยวชาญยืนยันว่ารูปแบบดังกล่าวมีความเหมาะสมในระดับมากที่สุด และสามารถพัฒนาทักษะการคิดวิเคราะห์และการคิดสร้างสรรค์ของผู้เรียนได้อย่างมีประสิทธิภาพ',
    doi: '10.14456/jetis.2023.04'
  },
  {
    id: 'res-3',
    titleTh: 'การประเมินหลักสูตรศึกษาศาสตรมหาบัณฑิต สาขาวิชาเทคโนโลยีการศึกษา มหาวิทยาลัยศิลปากร',
    titleEn: 'Curriculum Evaluation of Master of Education Program in Educational Technology, Silpakorn University',
    authors: ['รศ.ดร.น้ำมนต์ เรืองฤทธิ์', 'รศ.ดร.ศิวนิต อรรถวุฒิกุล', 'รศ.ดร.เอกนฤน บางท่าไม้'],
    year: '2566',
    journal: 'วารสารสมาคมเทคโนโลยีและสื่อสารการศึกษา',
    area: 'Pedagogical Innovation',
    abstract: 'การวิจัยประเมินหลักสูตรตามรูปแบบ CIPP Model เพื่อปรับปรุงโครงสร้างรายวิชาและสมรรถนะบัณฑิตให้สอดรับกับการเปลี่ยนผ่านทางดิจิทัล โดยเก็บรวบรวมข้อมูลจากผู้ใช้บัณฑิต ศิษย์เก่า และนักศึกษาปัจจุบัน นำไปสู่การพัฒนาหลักสูตรปรับปรุง พ.ศ. 2566 ที่เน้นสมรรถนะนวัตกรรมดิจิทัลและการวิจัยประยุกต์',
    doi: '10.14456/jacte.2023.22'
  },
  {
    id: 'res-4',
    titleTh: 'การสังเคราะห์และประยุกต์ใช้ปัญญาประดิษฐ์เพื่อการประเมินสมรรถนะอาจารย์ตามกรอบ Thailand-PSF',
    titleEn: 'Synthesis and Application of Artificial Intelligence for Teacher Competency Assessment in Thailand-PSF',
    authors: ['รศ.ดร.เอกนฤน บางท่าไม้'],
    year: '2567',
    journal: 'Silpakorn University Innovation Forum',
    area: 'AI & Learning Analytics',
    abstract: 'การศึกษาวิเคราะห์แนวทางการบูรณาการ Generative AI และแบบจำลองการวิเคราะห์ข้อความเพื่อช่วยอาจารย์ผู้สอนในการจัดทำแฟ้มสะสมผลงานการสอนและการประเมินตนเองตามมาตรฐาน Thailand-PSF ระดับที่ 3 พร้อมข้อเสนอแนะเชิงจริยธรรมในการนำ AI มาใช้ในสถาบันอุดมศึกษา',
    doi: '10.14456/seic.2024.01'
  },
  {
    id: 'res-5',
    titleTh: 'แนวทางการออกแบบรายวิชาออนไลน์ระดับชาติบนระบบ Thai MOOC เพื่อส่งเสริมการเรียนรู้ตลอดชีวิต',
    titleEn: 'National Online Course Design Guidelines on Thai MOOC Platform for Lifelong Learning',
    authors: ['รศ.ดร.ฐาปนีย์ ธรรมเมธา'],
    year: '2565',
    journal: 'Thailand Cyber University Journal of E-learning',
    area: 'MOOC & Digital Learning',
    abstract: 'ถอดบทเรียนจากการพัฒนาและบริหารจัดการระบบ Thai MOOC วิเคราะห์ปัจจัยที่ส่งผลต่ออัตราการสำเร็จการศึกษา (Completion Rate) ของผู้เรียนในรายวิชาออนไลน์แบบเปิดกว้าง และนำเสนอกรอบมาตรฐานการออกแบบปฏิสัมพันธ์ (Interaction Design Framework) สำหรับผู้เรียนวัยผู้ใหญ่',
    doi: '10.14456/tcuj.2022.09'
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-1',
    title: 'เปิดรับสมัครนักศึกษาใหม่ระดับปริญญาตรี TCAS ประจำปีการศึกษา สาขาเทคโนโลยีการศึกษา ม.ศิลปากร',
    category: 'Admissions',
    date: '15 พ.ค. 2567',
    summary: 'ภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์ เปิดรับสมัครนักศึกษาใหม่ผ่านระบบ TCAS ทุกรอบ พร้อมทุนการศึกษาและสิ่งอำนวยความสะดวกในสตูดิโอระดับมืออาชีพ',
    content: [
      'ภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร ขอเชิญชวนนักเรียนระดับมัธยมศึกษาตอนปลายหรือเทียบเท่า ที่มีความสนใจด้านการออกแบบสื่อนวัตกรรม กราฟิก วิดีโอ สื่อการเรียนรู้ดิจิทัล และเทคโนโลยี สมัครเข้าศึกษาในหลักสูตรศิลปศาสตรบัณฑิต สาขาวิชาเทคโนโลยีการศึกษา',
      'คุณสมบัติของผู้สมัคร: สำเร็จการศึกษาระดับมัธยมศึกษาปีที่ 6 หรือเทียบเท่า มีแฟ้มสะสมผลงานด้านสื่อ เทคโนโลยี ศิลปะ หรือกิจกรรมที่เกี่ยวข้อง',
      'ช่องทางการสมัคร: ติดตามระเบียบการผ่านเว็บไซต์ reg.su.ac.th หรือติดต่อสอบถามภาควิชาโดยตรงที่ Facebook: Educational Technology, Silpakorn University'
    ],
    featured: true
  },
  {
    id: 'news-2',
    title: 'ขอแสดงความยินดีกับ รศ.ดร.อนิรุทธ์ สติมั่น ได้รับการยกย่องเชิดชูเกียรติเป็น “อาจารย์ดีเด่นแห่งชาติ ประจำปี พ.ศ. 2566”',
    category: 'Achievement',
    date: '28 มี.ค. 2567',
    summary: 'ปอมท. มีมติยกย่องเชิดชูเกียรติ รศ.ดร.อนิรุทธ์ สติมั่น อาจารย์ประจำภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร เป็นอาจารย์ดีเด่นแห่งชาติ สาขาเทคโนโลยีการศึกษา',
    content: [
      'ที่ประชุมประธานสภาอาจารย์มหาวิทยาลัยแห่งประเทศไทย (ปอมท.) ได้มีมติประกาศผลการคัดเลือกอาจารย์ดีเด่นแห่งชาติ ประจำปี พ.ศ. 2566 โดย รองศาสตราจารย์ ดร.อนิรุทธ์ สติมั่น อาจารย์ประจำภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร ได้รับการคัดเลือกในสาขาเทคโนโลยีการศึกษา',
      'รางวัลดังกล่าวเป็นเครื่องหมายสะท้อนถึงความมุ่งมั่น ทุ่มเทในการถ่ายทอดความรู้ การผลิตงานวิจัยคุณภาพสูง และการสร้างคุณูปการต่อวงการเทคโนโลยีและนวัตกรรมการศึกษาของประเทศไทยมาอย่างต่อเนื่องยาวนาน'
    ],
    featured: true
  },
  {
    id: 'news-3',
    title: 'นิทรรศการแสดงผลงานนวัตกรรมและเทคโนโลยีการศึกษา “EdTech Silpakorn Innovation Showcase”',
    category: 'Events',
    date: '10 ก.พ. 2567',
    summary: 'นักศึกษาชั้นปีที่ 4 ภาควิชาเทคโนโลยีการศึกษา จัดแสดงโครงงานนวัตกรรมและสื่อการศึกษาเสมือนจริง ณ โถงกิจกรรม คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์',
    content: [
      'ขอเชิญร่วมชมนิทรรศการผลงาน Senior Project ของนักศึกษาชั้นปีที่ 4 ภาควิชาเทคโนโลยีการศึกษา ประจำปีการศึกษา 2566 รวบรวมผลงานกว่า 25 ชิ้นงาน ทั้ง VR, AR, บอร์ดเกมการศึกษา, แอนิเมชัน และเว็บแอปพลิเคชัน',
      'ภายในงานมีพิธีเปิดโดยคณบดีและผู้บริหารคณะศึกษาศาสตร์ พร้อมการเสวนาพิเศษ “อนาคตเทคโนโลยีการศึกษากับ AI โลกใหม่แห่งการเรียนรู้” โดยคณาจารย์ผู้ทรงคุณวุฒิ'
    ]
  },
  {
    id: 'news-4',
    title: 'อบรมเชิงปฏิบัติการ “Generative AI for Instructional Design” สู่การยกระดับการศึกษาในศตวรรษที่ 21',
    category: 'Academic',
    date: '18 ม.ค. 2567',
    summary: 'ศูนย์นวัตกรรมการศึกษาแห่งมหาวิทยาลัยศิลปากร (SEIC) ร่วมกับภาควิชาเทคโนโลยีการศึกษา จัดคอร์สอบรมการประยุกต์ใช้ AI ในการออกแบบสื่อการเรียนรู้สำหรับครูและบุคลากร',
    content: [
      'กิจกรรมอบรมเข้มข้น 2 วัน ถ่ายทอดความรู้การใช้ Prompt Engineering, AI Text-to-Image และการสร้างสรรค์มัลติมีเดียเพื่อการสอน นำทีมวิทยากรโดย รศ.ดร.เอกนฤน บางท่าไม้ และคณาจารย์ในภาควิชาฯ'
    ]
  }
];

export const LEARNING_LESSONS: LearningLesson[] = [
  {
    id: 'lesson-1',
    module: 'Instructional Design Core',
    titleTh: 'โมเดลการออกแบบระบบการสอน ADDIE Framework',
    titleEn: 'ADDIE Model for Instructional Systems Design',
    duration: '15 นาที',
    level: 'Beginner',
    summary: 'เรียนรู้กรอบการทำงานคลาสสิกที่ทรงพลังที่สุดในการสร้างสรรค์สื่อและบทเรียนที่มีประสิทธิภาพ ตั้งแต่การวิเคราะห์จนถึงการประเมินผล',
    objectives: [
      'อธิบาย 5 ขั้นตอนของโมเดล ADDIE ได้ถูกต้องตามลำดับ',
      'ระบุสิ่งที่ต้องดำเนินการในขั้น Analysis และ Design',
      'จำแนกความแตกต่างระหว่าง Formative และ Summative Evaluation'
    ],
    contentSections: [
      {
        heading: '1. มโนทัศน์เบื้องต้นของ ADDIE Model',
        body: 'ADDIE เป็นตัวย่อของ 5 ขั้นตอนหลัก: Analysis (วิเคราะห์), Design (ออกแบบ), Development (พัฒนา), Implementation (นำไปใช้), และ Evaluation (ประเมินผล) โดยเป็นกระบวนการแบบวนซ้ำ (Iterative Process) ที่เปิดโอกาสให้ปรับปรุงแก้ไขได้ตลอดวงจร'
      },
      {
        heading: '2. ขั้นตอน Analysis & Design',
        body: 'Analysis คือการวิเคราะห์ปัญหา ช่องว่างสมรรถนะ (Performance Gap) ลักษณะกลุ่มเป้าหมาย และสภาพแวดล้อม ส่วน Design คือการกำหนดวัตถุประสงค์เชิงพฤติกรรม โครงสร้างเนื้อหา แผนการประเมินผล และการจัดทำ Storyboard ก่อนเริ่มสร้างจริง'
      },
      {
        heading: '3. ขั้นตอน Development, Implementation & Evaluation',
        body: 'Development คือการลงมือเขียนโค้ด ผลิตกราฟิก อัดเสียง หรือสร้างระบบตาม Storyboard จากนั้น Implementation คือการนำไปใช้งานกับกลุ่มเป้าหมายจริง และ Evaluation แบ่งเป็น Formative (ประเมินระหว่างทางเพื่อปรับปรุง) และ Summative (ประเมินสรุปเพื่อวัดความสำเร็จโดยรวม)'
      }
    ],
    quiz: {
      question: 'ขั้นตอนใดในโมเดล ADDIE ที่เกี่ยวข้องกับการกำหนดวัตถุประสงค์เชิงพฤติกรรมและการทำ Storyboard?',
      options: [
        'Analysis (การวิเคราะห์)',
        'Design (การออกแบบ)',
        'Development (การพัฒนา)',
        'Implementation (การนำไปใช้)'
      ],
      correctIndex: 1,
      explanation: 'ถูกต้อง! ขั้น Design (การออกแบบ) คือขั้นตอนในการวางโครงสร้างการสอน เขียนวัตถุประสงค์เชิงพฤติกรรม และร่าง Storyboard ก่อนที่จะลงมือผลิตในขั้น Development'
    }
  },
  {
    id: 'lesson-2',
    module: 'Emerging EdTech',
    titleTh: 'ปัญญาประดิษฐ์ (AI) ในการจัดการเรียนรู้ร่วมสมัย',
    titleEn: 'Generative AI & Pedagogical Integration',
    duration: '20 นาที',
    level: 'Intermediate',
    summary: 'ทำความเข้าใจบทบาทของ Generative AI, Large Language Models และการออกแบบคำสั่ง (Prompt Engineering) เพื่อสนับสนุนการสอนของครูและการเรียนรู้ของผู้เรียน',
    objectives: [
      'เข้าใจกรอบแนวคิด AI Literacy และจริยธรรมการใช้ AI ทางการศึกษา',
      'ฝึกทักษะการเขียน Prompt เพื่อออกแบบแผนการสอนและชุดกิจกรรม',
      'ตระหนักถึงข้อจำกัด เช่น ปัญหาภาพหลอน (Hallucination) และการอ้างอิงลิขสิทธิ์'
    ],
    contentSections: [
      {
        heading: '1. บทบาทของ AI ในฐานะผู้ช่วยการเรียนรู้ (Learning Co-Pilot)',
        body: 'AI ทางการศึกษาไม่ได้มาแทนที่ครูผู้สอน แต่ทำหน้าที่เป็นเครื่องมือทุ่นแรงในการจำแนกเนื้อหา การสร้างตัวอย่างที่หลากหลาย การสร้างโจทย์แบบฝึกหัดเฉพาะบุคคล (Personalized Learning) และการให้คำแนะนำเบื้องต้นแก่ผู้เรียน'
      },
      {
        heading: '2. เทคนิคการ Prompt สำหรับนักออกแบบการสอน',
        body: 'การสั่งการ AI ให้ได้ผลลัพธ์ทางการศึกษาที่ดี ต้องระบุ Role (บทบาท), Context (บริบทผู้เรียน), Task (ภารกิจที่ให้ทำ), Constraints (เงื่อนไขและข้อจำกัด) และ Output Format (รูปแบบผลลัพธ์ที่ต้องการ เช่น ตาราง แผนผัง หรือโค้ด)'
      },
      {
        heading: '3. จริยธรรมและความปลอดภัยทางดิจิทัล',
        body: 'ผู้ใช้งานต้องระมัดระวังการส่งข้อมูลส่วนบุคคลของนักเรียน (PDPA) รวมถึงต้องมีการตรวจสอบข้อเท็จจริง (Fact-checking) จากแหล่งข้อมูลปฐมภูมิเสมอเพื่อป้องกันข้อมูลเท็จจากโมเดล'
      }
    ],
    quiz: {
      question: 'ข้อใดเป็นหลักการสำคัญที่สุดในการนำ Generative AI มาใช้ในการออกแบบการสอน?',
      options: [
        'ใช้ AI คิดแผนการสอนและนำไปสอนทันทีโดยไม่ต้องตรวจทาน',
        'สั่งการโดยระบุบทบาท บริบท และให้ผู้สอนเป็นผู้ตรวจสอบความถูกต้องเชิงวิชาการ (Human-in-the-loop)',
        'ห้ามนักเรียนและครูทุกคนใช้งาน AI ในทุกกรณี',
        'ใช้ AI เป็นผู้ตัดสินเกรดของนักเรียนแทนมนุษย์ทั้งหมด'
      ],
      correctIndex: 1,
      explanation: 'ถูกต้อง! การใช้ AI อย่างมีคุณภาพต้องใช้หลัก Human-in-the-loop โดยครูและผู้สอนเป็นผู้ควบคุม ตรวจสอบความถูกต้องทางวิชาการ และนำมาประยุกต์ใช้อย่างมีจริยธรรม'
    }
  },
  {
    id: 'lesson-3',
    module: 'Media Production',
    titleTh: 'ทฤษฎีภาพและการจัดวางองค์ประกอบศิลป์สำหรับสื่อการสอน',
    titleEn: 'Visual Design & Layout Principles for Instructional Media',
    duration: '18 นาที',
    level: 'Beginner',
    summary: 'หลักการทางจิตวิทยาการรับรู้ทางสายตา กฎเกสตัลต์ (Gestalt Principles) และการใช้สีเพื่อลดภาระทางปัญญา (Cognitive Load) ของผู้เรียน',
    objectives: [
      'ระบุหลักการ Gestalt ที่นำมาใช้จัดระเบียบเนื้อหาบนหน้าจอ',
      'เข้าใจทฤษฎีภาระทางปัญญา (Cognitive Load Theory) ในการจัดองค์ประกอบภาพ',
      'เลือกชุดสีและฟอนต์ที่เอื้อต่อการอ่านและการเข้าถึง (Accessibility)'
    ],
    contentSections: [
      {
        heading: '1. Cognitive Load Theory กับการออกแบบสื่อ',
        body: 'สมองมนุษย์มีความสามารถในการประมวลผลข้อมูลในความจำใช้งาน (Working Memory) จำกัด การใส่ตัวหนังสือแน่นเกินไป หรือใส่ลูกเล่นเคลื่อนไหวที่ไม่เกี่ยวข้อง จะทำให้เกิด extraneous cognitive load ที่ขัดขวางการเรียนรู้'
      },
      {
        heading: '2. กฎเกสตัลต์ (Gestalt Principles)',
        body: 'กฎความใกล้ชิด (Proximity) กฎความคล้ายคลึง (Similarity) และกฎความต่อเนื่อง (Continuity) ช่วยให้สายตาของผู้เรียนจัดหมวดหมู่ข้อมูลได้อย่างเป็นธรรมชาติโดยไม่ต้องใช้พลังงานสมองมากเกินไป'
      },
      {
        heading: '3. อัตราส่วนคอนทราสต์และความเข้าถึงได้',
        body: 'ตัวอักษรกับพื้นหลังต้องมีอัตราส่วนคอนทราสต์อย่างน้อย 4.5:1 ตามมาตรฐาน WCAG เพื่อให้อ่านง่าย ชัดเจน และลดความเมื่อยล้าของสายตา'
      }
    ],
    quiz: {
      question: 'ตามหลัก Cognitive Load Theory การใส่กราฟิกเคลื่อนไหวหรือเพลงประกอบที่ไม่เกี่ยวข้องกับเนื้อหาจะส่งผลอย่างไร?',
      options: [
        'ช่วยเพิ่มความจำระยะยาวอย่างมีนัยสำคัญ',
        'เพิ่ม Extraneous Cognitive Load ซึ่งรบกวนกระบวนการเรียนรู้ของผู้เรียน',
        'ทำให้ผู้เรียนเข้าใจเนื้อหายากๆ ได้ในทันที',
        'ช่วยประหยัดเวลาในการศึกษาบทเรียน'
      ],
      correctIndex: 1,
      explanation: 'ถูกต้อง! สิ่งรบกวนหรือการตกแต่งที่ไม่มีคุณค่าทางการสอนจะสร้าง Extraneous Cognitive Load ทำให้ความจำใช้งานของผู้เรียนถูกรบกวนและประสิทธิภาพการเรียนรู้ลดลง'
    }
  },
  {
    id: 'lesson-4',
    module: 'Interactive Tech',
    titleTh: 'การออกแบบปฏิสัมพันธ์และกลไกเกมมิฟิเคชัน (Gamification)',
    titleEn: 'Interaction Design & Gamification Mechanics',
    duration: '22 นาที',
    level: 'Intermediate',
    summary: 'กลยุทธ์การนำองค์ประกอบของเกม เช่น แต้ม บอร์ดผู้นำ ความท้าทาย และ Feedback Loops มาออกแบบกิจกรรมการเรียนรู้ให้มีชีวิตชีวาและสร้างแรงจูงใจภายใน',
    objectives: [
      'จำแนกความแตกต่างระหว่าง Gamification กับ Educational Game (Serious Games)',
      'เข้าใจโมเดลแรงจูงใจ Self-Determination Theory (SDT)',
      'ออกแบบลูปปฏิสัมพันธ์และระบบให้ผลย้อนกลับทันที (Immediate Feedback)'
    ],
    contentSections: [
      {
        heading: '1. Gamification vs Serious Game',
        body: 'Gamification คือการนำองค์ประกอบของเกม (เช่น Points, Badges, Leaderboards, Quests) ไปใช้ในบริบทที่ไม่ใช่เกม เช่น บทเรียนหรือระบบฝึกอบรม ส่วน Serious Game คือตัวเกมที่มีเป้าหมายหลักในการเรียนรู้ตั้งแต่โครงสร้างพื้นฐาน'
      },
      {
        heading: '2. ปัจจัยแรงจูงใจภายใน (Intrinsic Motivation)',
        body: 'การใช้แค่คะแนนและเหรียญรางวัลเป็นเพียงแรงจูงใจภายนอก การออกแบบที่ดีต้องตอบโจทย์ความเป็นอิสระในการตัดสินใจ (Autonomy) ความรู้สึกว่าตนเองมีความสามารถ (Competence) และการมีความสัมพันธ์กับผู้อื่น (Relatedness)'
      },
      {
        heading: '3. Closed Feedback Loop',
        body: 'ผู้เรียนต้องได้รับผลสะท้อนกลับในทันทีเมื่อกระทำสิ่งใดลงไป เพื่อให้รู้ว่าสิ่งที่ทำนั้นถูกหรือผิด และสามารถปรับพฤติกรรมหรือแนวคิดได้ทันที'
      }
    ],
    quiz: {
      question: 'ข้อใดคือตัวอย่างของ Gamification ในการศึกษาที่แท้จริง?',
      options: [
        'ให้นักเรียนนั่งเล่นเกม Action ในเวลาเรียนโดยไม่มีวัตถุประสงค์',
        'การนำระบบ Quest, การสะสมเหรียญรางวัลความก้าวหน้า และระบบฟีดแบ็กทันทีมาใส่ในระบบส่งการบ้าน',
        'การยกเลิกการสอนแล้วให้ผู้เรียนอ่านหนังสือเอง',
        'การจัดทำข้อสอบแบบกระดาษปรนัย 100 ข้อ'
      ],
      correctIndex: 1,
      explanation: 'ถูกต้อง! Gamification คือการนำกลไกของเกม เช่น ภารกิจ (Quest) เหรียญรางวัล และระบบฟีดแบ็กทันใจ มาบูรณาการเข้ากับกระบวนการเรียนรู้ปกติเพื่อกระตุ้นความกระตือรือร้น'
    }
  }
];

export interface EquipmentItem {
  id: string;
  code: string;
  nameTh: string;
  nameEn: string;
  category: 'camera' | 'audio' | 'vr' | 'lighting' | 'graphic' | 'streaming';
  categoryLabel: string;
  totalQuantity: number;
  availableQuantity: number;
  location: string;
  specs: string[];
  includes: string[];
  maxDays: number;
  image: string;
  condition: 'Excellent' | 'Good';
  suitableFor: string;
}

export interface LoanRequest {
  id: string;
  equipmentId: string;
  equipmentName: string;
  studentName: string;
  studentId: string;
  degreeLevel: string;
  email: string;
  phone: string;
  courseOrProject: string;
  advisorName: string;
  startDate: string;
  returnDate: string;
  purpose: string;
  status: 'pending_pickup' | 'active' | 'returned' | 'cancelled';
  createdAt: string;
}

export interface StudioRoom {
  id: string;
  nameTh: string;
  nameEn: string;
  capacity: string;
  location: string;
  features: string[];
  image: string;
  timeSlots: string[];
}

export const EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: 'eq-cam-01',
    code: 'EDT-CAM-01',
    nameTh: 'ชุดกล้องภาพยนตร์ดิจิทัล Sony FX3 Cinema Line 4K',
    nameEn: 'Sony FX3 Full-Frame Cinema Camera Kit',
    category: 'camera',
    categoryLabel: 'กล้องและวิดีโอ',
    totalQuantity: 3,
    availableQuantity: 2,
    location: 'ห้องพัสดุและคลังอุปกรณ์ ชั้น 3 อาคารศึกษาศาสตร์ 2',
    specs: [
      'เซนเซอร์ Full-frame 12.1MP Exmor R CMOS',
      'บันทึกวิดีโอ 4K 120p 10-bit 4:2:2',
      'Dynamic Range 15+ stops พร้อม S-Cinetone',
      'ระบบโฟกัส Real-time Eye AF ติดตามดวงตาแม่นยำ'
    ],
    includes: [
      'ตัวกล้อง Sony FX3 พร้อม Top Handle Unit',
      'เลนส์ Sony FE 24-70mm F2.8 GM II',
      'แบตเตอรี่ NP-FZ100 จำนวน 3 ก้อน พร้อมแท่นชาร์จคู่',
      'การ์ด CFexpress Type A 160GB จำนวน 2 ใบ พร้อมการ์ดรีดเดอร์',
      'กระเป๋ากันกระแทก Pelicase'
    ],
    maxDays: 3,
    image: '/src/assets/images/research_edtech_lab_1790939681860.jpg',
    condition: 'Excellent',
    suitableFor: 'การผลิตสื่อวิดีโอเพื่อการศึกษาระดับมืออาชีพ สารคดีทางการศึกษา และ Senior Project'
  },
  {
    id: 'eq-cam-02',
    code: 'EDT-CAM-02',
    nameTh: 'ชุดกล้องมิเรอร์เลส Sony Alpha 7 IV + เลนส์ซูมมาตรฐาน',
    nameEn: 'Sony Alpha 7 IV Full-Frame Hybrid Camera',
    category: 'camera',
    categoryLabel: 'กล้องและวิดีโอ',
    totalQuantity: 5,
    availableQuantity: 4,
    location: 'ห้องพัสดุและคลังอุปกรณ์ ชั้น 3 อาคารศึกษาศาสตร์ 2',
    specs: [
      'ความละเอียดภาพนิ่ง 33MP Full-Frame',
      'บันทึกวิดีโอ 4K 60p ในโหมด Super 35',
      'หน้าจอสัมผัสพับหมุนได้รอบทิศทาง (Vari-angle)',
      'รองรับการ Live Streaming ระดับ Full HD'
    ],
    includes: [
      'ตัวกล้อง Sony A7 IV',
      'เลนส์ Sony FE 24-105mm F4 G OSS',
      'แบตเตอรี่ 2 ก้อน พร้อมแท่นชาร์จ',
      'SD Card UHS-II V60 128GB',
      'สายคล้องคอและกระเป๋ากล้อง'
    ],
    maxDays: 3,
    image: '/src/assets/images/hero_silpakorn_edtech_1790939637201.jpg',
    condition: 'Excellent',
    suitableFor: 'ถ่ายภาพนิ่งสื่อการสอน ถ่ายวิดีโอกิจกรรมภาควิชา และโครงงานรายวิชา'
  },
  {
    id: 'eq-vr-01',
    code: 'EDT-VR-01',
    nameTh: 'แว่นเสมือนจริงไร้สาย Meta Quest 3 (512GB) พร้อมชุดคอนโทรลเลอร์',
    nameEn: 'Meta Quest 3 Mixed Reality VR Headset 512GB',
    category: 'vr',
    categoryLabel: 'โลกเสมือนจริง VR/XR',
    totalQuantity: 8,
    availableQuantity: 5,
    location: 'ห้องปฏิบัติการ EdTech AR/VR Immersive Lab ชั้น 2',
    specs: [
      'ความละเอียด 2064x2208 พิกเซลต่อดวงตา (4K+ Infinite Display)',
      'ชิปประมวลผล Snapdragon XR2 Gen 2 แรงขึ้น 2 เท่า',
      'Full-color Passthrough คมชัดสำหรับ Mixed Reality',
      'ระบบเสียง 3D Spatial Audio ในตัว'
    ],
    includes: [
      'แว่น Meta Quest 3 Headset 512GB',
      'Touch Plus Controllers ซ้าย-ขวา',
      'Elite Strap พร้อมแบตเตอรี่เสริม',
      'สาย Link Cable Type-C ความยาว 5 เมตร',
      'เคสพกพาแบบกันกระแทก'
    ],
    maxDays: 5,
    image: '/src/assets/images/student_work_interactive_vr_1790939657670.jpg',
    condition: 'Excellent',
    suitableFor: 'ทดสอบแอปพลิเคชัน VR/AR, วิจัยการเรียนรู้ใน Metaverse และจัดแสดงผลงานนวัตกรรม'
  },
  {
    id: 'eq-vr-02',
    code: 'EDT-VR-02',
    nameTh: 'แว่นความจริงเสมือนระดับองค์กร HTC Vive Focus 3',
    nameEn: 'HTC Vive Focus 3 Enterprise VR Headset',
    category: 'vr',
    categoryLabel: 'โลกเสมือนจริง VR/XR',
    totalQuantity: 4,
    availableQuantity: 3,
    location: 'ห้องปฏิบัติการ EdTech AR/VR Immersive Lab ชั้น 2',
    specs: [
      'ความละเอียด 5K (2448 × 2448 ต่อดวงตา)',
      'มุมมองภาพกว้าง 120 องศา รีเฟรชเรท 90Hz',
      'ระบบถอดเปลี่ยนแบตเตอรี่แบบ Hot-swappable',
      'รองรับการจำลองสถานการณ์จำลอง (Simulation Training)'
    ],
    includes: [
      'แว่น HTC Vive Focus 3',
      'คอนโทรลเลอร์ 2 ข้าง',
      'แบตเตอรี่สำรอง 2 ก้อน',
      'แท่นชาร์จแบตเตอรี่',
      'กล่องเก็บอุปกรณ์'
    ],
    maxDays: 5,
    image: '/src/assets/images/student_work_interactive_vr_1790939657670.jpg',
    condition: 'Excellent',
    suitableFor: 'การพัฒนาระบบฝึกอบรมเสมือนจริง วิทยานิพนธ์ ป.โท/ป.เอก ด้าน Immersive Learning'
  },
  {
    id: 'eq-cam360-01',
    code: 'EDT-360-01',
    nameTh: 'ชุดกล้องพาโนรามา 360 องศา Insta360 X3 + ไม้เซลฟี่ล่องหน',
    nameEn: 'Insta360 X3 5.7K 360 Action Camera Kit',
    category: 'camera',
    categoryLabel: 'กล้องและวิดีโอ',
    totalQuantity: 4,
    availableQuantity: 3,
    location: 'ห้องพัสดุและคลังอุปกรณ์ ชั้น 3 อาคารศึกษาศาสตร์ 2',
    specs: [
      'บันทึกวิดีโอ 360 องศา ความละเอียด 5.7K Active HDR',
      'ภาพนิ่ง 360 องศา ความละเอียด 72MP',
      'หน้าจอสัมผัสขนาดใหญ่ 2.29 นิ้ว ควบคุมง่าย',
      'ระบบกันสั่น FlowState Stabilization 6 แกน'
    ],
    includes: [
      'ตัวกล้อง Insta360 X3',
      'Invisible Selfie Stick ความยาว 114 ซม.',
      'Bullet Time Handle / ขาตั้งกล้องสามขา',
      'ฝาครอบเลนส์ซิลิโคนและเคสกันรอย',
      'MicroSD Card 128GB High Speed'
    ],
    maxDays: 3,
    image: '/src/assets/images/student_work_interactive_vr_1790939657670.jpg',
    condition: 'Excellent',
    suitableFor: 'การจัดทำสื่อ Virtual Tour แหล่งเรียนรู้ประวัติศาสตร์ นิทรรศการเสมือน และสื่อ 360 องศา'
  },
  {
    id: 'eq-mic-01',
    code: 'EDT-AUD-01',
    nameTh: 'ชุดไมโครโฟนไร้สายบันทึกเสียงคู่ Rode Wireless PRO (32-bit Float)',
    nameEn: 'Rode Wireless PRO Dual Wireless Microphone System',
    category: 'audio',
    categoryLabel: 'เสียงและพอดแคสต์',
    totalQuantity: 6,
    availableQuantity: 4,
    location: 'ห้องพัสดุและคลังอุปกรณ์ ชั้น 3 อาคารศึกษาศาสตร์ 2',
    specs: [
      'บันทึกเสียงแบบ 32-bit Float On-board ไม่มีปัญหาเสียงแตก',
      'ระยะส่งสัญญาณไร้สายไกลถึง 260 เมตร (2.4GHz Series IV)',
      'หน่วยความจำภายในเครื่องส่ง 32GB บันทึกได้กว่า 40 ชม.',
      'ระบบ Timecode sync ในตัวสำหรับงานตัดต่อวิดีโอ'
    ],
    includes: [
      'ตัวส่ง Transmitter 2 ตัว + ตัวรับ Receiver 1 ตัว',
      'ไมโครโฟนหนีบปกเสื้อ Lavalier II จำนวน 2 เส้น',
      'กล่องชาร์จ Smart Charging Case',
      'ขนแมวกันลม Deadcat 2 ชิ้น',
      'สายเชื่อมต่อสำหรับกล้องและสมาร์ทโฟนครบเซ็ต'
    ],
    maxDays: 3,
    image: '/src/assets/images/learning_hub_course_thumb_1790939670511.jpg',
    condition: 'Excellent',
    suitableFor: 'สัมภาษณ์ผู้เชี่ยวชาญ ผลิตบทเรียนออนไลน์ อัดพอดแคสต์การศึกษา และถ่ายทำสารคดี'
  },
  {
    id: 'eq-mic-02',
    code: 'EDT-AUD-02',
    nameTh: 'ไมโครโฟนสตูดิโอบรอดแคสต์ Shure SM7B + ปรีแอมป์ Cloudlifter',
    nameEn: 'Shure SM7B Dynamic Vocal Studio Microphone Set',
    category: 'audio',
    categoryLabel: 'เสียงและพอดแคสต์',
    totalQuantity: 3,
    availableQuantity: 2,
    location: 'ห้อง EdTech Podcast Studio ชั้น 3 อาคารศึกษาศาสตร์ 2',
    specs: [
      'ไมโครโฟน Dynamic ระดับตำนานสำหรับเสียงพูดและพอดแคสต์',
      'ระบบซับเสียงสะท้อนและการสั่นสะเทือนแบบ Air Suspension',
      'การตอบสนองความถี่ 50 Hz - 20 kHz เสียงทุ้มนุ่มลึก',
      'ป้องกันคลื่นแม่เหล็กไฟฟ้ารบกวนจากจอคอมพิวเตอร์'
    ],
    includes: [
      'ไมโครโฟน Shure SM7B',
      'ปรีแอมป์บูสต์สัญญาณ Cloudlifter CL-1',
      'ขาแขวนไมค์บูมอาร์ม Rode PSA1+',
      'สายสัญญาณ Neutrik XLR เกรดสตูดิโอ 3 เมตร'
    ],
    maxDays: 3,
    image: '/src/assets/images/learning_hub_course_thumb_1790939670511.jpg',
    condition: 'Excellent',
    suitableFor: 'ลงเสียงบทเรียนอีเลิร์นนิง บันทึกรายการพอดแคสต์ และผลิตเสียงบรรยายประกอบสื่อ'
  },
  {
    id: 'eq-light-01',
    code: 'EDT-LGT-01',
    nameTh: 'ชุดไฟสตูดิโอ LED ต่อเนื่อง Godox SL-100D + ซอฟต์บ็อกซ์ Parabolic',
    nameEn: 'Godox SL-100D Daylight LED Light & Softbox Kit',
    category: 'lighting',
    categoryLabel: 'ไฟและสตูดิโอ',
    totalQuantity: 4,
    availableQuantity: 3,
    location: 'ห้องพัสดุและคลังอุปกรณ์ ชั้น 3 อาคารศึกษาศาสตร์ 2',
    specs: [
      'กำลังไฟ 100W อุณหภูมิสี Daylight 5600K',
      'ค่าความถูกต้องสีสูง CRI 96+ / TLCI 97+',
      'ควบคุมผ่านแอปพลิเคชัน Godox Light บนสมาร์ทโฟน',
      'พัดลมระบายความร้อนเงียบสนิท ไม่รบกวนเสียงบันทึก'
    ],
    includes: [
      'โคมไฟ Godox SL-100D จำนวน 2 ตัว',
      'ซอฟต์บ็อกซ์ Parabolic Softbox 85cm พร้อม Grid 2 ชุด',
      'ขาตั้งไฟสแตนเลสปรับระดับได้ 2.8 เมตร จำนวน 2 ขา',
      'กระเป๋าใส่ชุดไฟพกพา'
    ],
    maxDays: 3,
    image: '/src/assets/images/hero_silpakorn_edtech_1790939637201.jpg',
    condition: 'Excellent',
    suitableFor: 'จัดแสงถ่ายทำสื่อการสอนในสตูดิโอ ถ่ายทำหน้า Green Screen และบันทึกการสัมมนา'
  },
  {
    id: 'eq-gimbal-01',
    code: 'EDT-GMB-01',
    nameTh: 'ไม้กันสั่นกิมบอล 3 แกนสำหรับกล้องมืออาชีพ DJI RS 3 Pro Combo',
    nameEn: 'DJI RS 3 Pro 3-Axis Gimbal Stabilizer Combo',
    category: 'camera',
    categoryLabel: 'กล้องและวิดีโอ',
    totalQuantity: 3,
    availableQuantity: 2,
    location: 'ห้องพัสดุและคลังอุปกรณ์ ชั้น 3 อาคารศึกษาศาสตร์ 2',
    specs: [
      'แกนคาร์บอนไฟเบอร์ รองรับน้ำหนักกล้องได้สูงสุด 4.5 กก.',
      'ระบบล็อกแกนอัตโนมัติ (Automated Axis Locks)',
      'จอสัมผัสสี OLED ขนาด 1.8 นิ้ว',
      'อัลกอริทึม RS Stabilization รุ่นที่ 3 นิ่งทุกการเคลื่อนไหว'
    ],
    includes: [
      'กิมบอล DJI RS 3 Pro',
      'ด้ามจับแบตเตอรี่ BG30 ใช้งานได้ 12 ชั่วโมง',
      'Focus Motor (2022) พร้อมเฟืองเลนส์',
      'RavenEye Image Transmitter ส่งภาพเข้าจอมือถือ',
      'เคสพกพาแบบแข็ง'
    ],
    maxDays: 3,
    image: '/src/assets/images/research_edtech_lab_1790939681860.jpg',
    condition: 'Excellent',
    suitableFor: 'ถ่ายทำวิดีโอเคลื่อนไหว ติดตามตัวผู้สอนในห้องเรียน และถ่ายทำสื่อเชิงทดลอง'
  },
  {
    id: 'eq-pad-01',
    code: 'EDT-PAD-01',
    nameTh: 'แท็บเล็ตสร้างสรรค์สื่อการสอน Apple iPad Pro 12.9" M2 + Apple Pencil 2',
    nameEn: 'Apple iPad Pro 12.9-inch M2 with Apple Pencil 2',
    category: 'graphic',
    categoryLabel: 'แท็บเล็ตและกราฟิก',
    totalQuantity: 6,
    availableQuantity: 4,
    location: 'ห้องพัสดุและคลังอุปกรณ์ ชั้น 3 อาคารศึกษาศาสตร์ 2',
    specs: [
      'จอภาพ Liquid Retina XDR 12.9 นิ้ว สว่างคมชัดสมจริง',
      'ชิป Apple M2 ประมวลผลกราฟิกและวิดีโอ 4K รวดเร็ว',
      'รองรับ Apple Pencil Hover ตรวจจับระยะห่างก่อนแตะ',
      'ติดตั้งแอปพลิเคชัน Procreate, GoodNotes, DaVinci Resolve'
    ],
    includes: [
      'iPad Pro 12.9" 256GB พร้อม Smart Folio Case',
      'Apple Pencil รุ่นที่ 2',
      'อะแดปเตอร์แปลงไฟ USB-C 20W และสายชาร์จถัก',
      'กระเป๋าบุกำมะหยี่กันกระแทก'
    ],
    maxDays: 7,
    image: '/src/assets/images/learning_hub_course_thumb_1790939670511.jpg',
    condition: 'Excellent',
    suitableFor: 'สเก็ตช์ภาพ Storyboard วาดภาพประกอบบทเรียน ออกแบบ UI/UX สื่อ และจดบันทึกการเรียน'
  },
  {
    id: 'eq-wacom-01',
    code: 'EDT-WAC-01',
    nameTh: 'จอวาดภาพกราฟิกปฏิสัมพันธ์ Wacom Cintiq 16 + ปากกา Pro Pen 2',
    nameEn: 'Wacom Cintiq 16 Interactive Pen Display',
    category: 'graphic',
    categoryLabel: 'แท็บเล็ตและกราฟิก',
    totalQuantity: 4,
    availableQuantity: 3,
    location: 'ห้องปฏิบัติการคอมพิวเตอร์กราฟิก ชั้น 3 อาคารศึกษาศาสตร์ 2',
    specs: [
      'หน้าจอ Full HD 15.6 นิ้ว กระจกเคลือบด้านลดแสงสะท้อน',
      'ปากกา Wacom Pro Pen 2 รองรับแรงกด 8,192 ระดับ ไม่ต้องชาร์จไฟ',
      'ตรวจจับการเอียงปากกา 60 องศา วาดเส้นเป็นธรรมชาติ',
      'ขอบเขตสี 72% NTSC (96% sRGB)'
    ],
    includes: [
      'หน้าจอ Wacom Cintiq 16',
      'ปากกา Wacom Pro Pen 2 พร้อมหัวสำรอง 3 ชิ้น',
      'สายสัญญาณ 3-in-1 Cable (HDMI, USB, Power)',
      'ขาตั้งปรับระดับองศาได้'
    ],
    maxDays: 7,
    image: '/src/assets/images/student_work_interactive_vr_1790939657670.jpg',
    condition: 'Excellent',
    suitableFor: 'สร้างแอนิเมชัน 2D/3D ออกแบบตัวละครสื่อการสอน และวาดภาพประกอบแบบมืออาชีพ'
  }
];

export const STUDIO_ROOMS_DATA: StudioRoom[] = [
  {
    id: 'studio-green',
    nameTh: 'สตูดิโอถ่ายทำ 4K Green Screen Studio & Live Production',
    nameEn: '4K Virtual Green Screen Studio',
    capacity: '10 - 15 คน',
    location: 'อาคารศึกษาศาสตร์ 2 ชั้น 3 ห้อง 301',
    features: [
      'ฉาก Green Screen ไร้รอยต่อ กว้าง 6 เมตร สูง 3 เมตร',
      'ระบบไฟเพดาน Grid ควบคุมด้วยบอร์ด DMX 512',
      'ชุดกล้อง 3 ตัวพร้อมระบบสลับสัญญาณ Blackmagic ATEM Mini Extreme ISO',
      'ระบบ Teleprompter บอกบทสำหรับผู้สอน',
      'ระบบปรับอากาศและเก็บเสียงมาตรฐาน -45dB'
    ],
    image: '/src/assets/images/hero_silpakorn_edtech_1790939637201.jpg',
    timeSlots: ['09:00 - 12:00 น.', '13:00 - 16:00 น.', '16:30 - 19:30 น. (กรณีพิเศษ)']
  },
  {
    id: 'studio-podcast',
    nameTh: 'สตูดิโอบันทึกเสียงและพอดแคสต์ EdTech Audio Pod',
    nameEn: 'EdTech Podcast & Voiceover Studio',
    capacity: '2 - 4 คน',
    location: 'อาคารศึกษาศาสตร์ 2 ชั้น 3 ห้อง 303',
    features: [
      'ห้องเก็บเสียง Acoustic Treatment ไร้เสียงสะท้อน',
      'มิกเซอร์เสียง Rodecaster Pro II รองรับ 4 ช่องสัญญาณ',
      'ไมโครโฟน Shure SM7B 4 ตัวพร้อมหูฟัง Audio-Technica',
      'ระบบเชื่อมต่อ Bluetooth สำหรับโฟนอินผู้เชี่ยวชาญ',
      'คอมพิวเตอร์ Mac Studio สำหรับบันทึกและตัดต่อเสียง'
    ],
    image: '/src/assets/images/learning_hub_course_thumb_1790939670511.jpg',
    timeSlots: ['09:00 - 11:00 น.', '11:00 - 13:00 น.', '13:30 - 15:30 น.', '15:30 - 17:30 น.']
  },
  {
    id: 'studio-vr-lab',
    nameTh: 'ห้องปฏิบัติการโลกเสมือนจริง VR/MR Simulation Sandbox',
    nameEn: 'Immersive VR/MR Experience Lab',
    capacity: '8 - 12 คน',
    location: 'อาคารศึกษาศาสตร์ 2 ชั้น 2 ห้อง 205',
    features: [
      'พื้นที่ว่างแบบ Room-scale Tracking 8x8 เมตร พร้อมตาข่ายเซฟตี้',
      'แว่น Meta Quest 3 และ HTC Vive Focus 3 เชื่อมต่อไร้สายความเร็วสูง',
      'จอมอนิเตอร์ Mirroring 75 นิ้ว 4K แสดงภาพแบบเรียลไทม์',
      'เครื่องคอมพิวเตอร์ระดับ RTX 4080 สำหรับเรนเดอร์งาน 3D สด'
    ],
    image: '/src/assets/images/student_work_interactive_vr_1790939657670.jpg',
    timeSlots: ['09:30 - 12:00 น.', '13:30 - 16:00 น.']
  },
  {
    id: 'studio-maker',
    nameTh: 'พื้นที่ร่วมคิดและประดิษฐ์นวัตกรรมการเรียนรู้ Maker Space',
    nameEn: 'Instructional Media Maker & Prototyping Space',
    capacity: '15 - 20 คน',
    location: 'อาคารศึกษาศาสตร์ 2 ชั้น 1 โซน Open Lab',
    features: [
      'โต๊ะปฏิบัติงานแบบกลุ่ม ปรับเปลี่ยนเลย์เอาต์ได้อิสระ',
      'เครื่องพิมพ์สามมิติ (3D Printer) สำหรับจำลองโมเดลสื่อการสอน',
      'อุปกรณ์เครื่องมือตัดกระดาษ โฟมบอร์ด และชุดประกอบอิเล็กทรอนิกส์พื้นฐาน',
      'Wi-Fi 6 ความเร็วสูง และพอร์ตเชื่อมต่อไฟฟ้าประจำทุกจุด'
    ],
    image: '/src/assets/images/research_edtech_lab_1790939681860.jpg',
    timeSlots: ['08:30 - 12:00 น.', '13:00 - 16:30 น.']
  }
];

export const BORROWING_RULES = [
  {
    title: 'สิทธิ์และคุณสมบัติของผู้ยืม',
    detail: 'นักศึกษาปัจจุบันระดับปริญญาตรี ปริญญาโท และปริญญาเอก ภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร ที่ลงทะเบียนเรียนในภาคการศึกษานั้นๆ'
  },
  {
    title: 'ระยะเวลาในการยืม',
    detail: 'อุปกรณ์ทั่วไปยืมได้ครั้งละ 3 วันทำการ สำหรับนักศึกษาที่ทำวิทยานิพนธ์ โครงงานวิจัย หรือ Senior Project สามารถขอยืมต่อเนื่องได้สูงสุด 5-7 วันทำการ'
  },
  {
    title: 'เอกสารและขั้นตอนการรับอุปกรณ์',
    detail: '1. กรอกแบบฟอร์มยืมออนไลน์ในระบบ\n2. แสดงใบยืนยันการยืม (Digital Loan Slip) พร้อม QR Code\n3. แสดงบัตรประจำตัวนักศึกษา ณ ห้องพัสดุและคลังอุปกรณ์ อาคารศึกษาศาสตร์ 2 ชั้น 3\n4. ตรวจสอบอุปกรณ์ร่วมกับเจ้าหน้าที่ก่อนนำออก'
  },
  {
    title: 'การส่งคืนและความรับผิดชอบ',
    detail: 'ส่งคืนอุปกรณ์ตามวันเวลาที่กำหนดในสภาพเดิม อุปกรณ์ต้องได้รับการชาร์จแบตเตอรี่และเก็บลงกล่องอุปกรณ์ให้เรียบร้อย หากเกิดความชำรุดเสียหายหรือสูญหาย ผู้ยืมต้องรับผิดชอบตามระเบียบมหาวิทยาลัย'
  }
];

export const DEPARTMENT_ABOUT = {
  nameTh: 'สาขาวิชาเทคโนโลยีการศึกษา ภาควิชาเทคโนโลยีการศึกษา',
  nameEn: 'Department of Educational Technology',
  facultyTh: 'คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร',
  facultyEn: 'Faculty of Education, Silpakorn University',
  campusTh: 'วิทยาเขตพระราชวังสนามจันทร์ จังหวัดนครปฐม',
  foundedTh: 'ภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร มุ่งมั่นเป็นผู้นำในการสร้างสรรค์และบูรณาการศาสตร์แห่งการศึกษากับเทคโนโลยีดิจิทัล',
  visionTh: '“เป็นผู้นำระดับชาติและมาตรฐานสากลในการผลิตนักเทคโนโลยีการศึกษาและสร้างสรรค์นวัตกรรมการเรียนรู้ดิจิทัลเพื่อการพัฒนาสังคมที่ยั่งยืน”',
  missionTh: [
    'ผลิตบัณฑิต มหาบัณฑิต และดุษฎีบัณฑิตที่มีความรู้ ความสามารถ ความคิดสร้างสรรค์ และมีจรรยาบรรณวิชาชีพทางเทคโนโลยีการศึกษา',
    'สร้างสรรค์งานวิจัยและพัฒนานวัตกรรมการจัดการเรียนรู้ สื่อดิจิทัล และระบบการศึกษาอัจฉริยะ',
    'ให้บริการทางวิชาการ ถ่ายทอดความรู้และเทคโนโลยีแก่สถาบันการศึกษา ชุมชน และสังคม',
    'สืบสาน อนุรักษ์ และประยุกต์ใช้ศิลปวัฒนธรรมร่วมกับเทคโนโลยีเพื่อส่งเสริมคุณค่าแห่งศิลปากร'
  ],
  stats: [
    { labelTh: 'ปีที่ก่อตั้งและสั่งสมประสบการณ์', value: '45+', unitTh: 'ปี' },
    { labelTh: 'คณาจารย์ผู้ทรงคุณวุฒิระดับ รศ./ผศ./ดร.', value: '100%', unitTh: 'ของภาควิชา' },
    { labelTh: 'ผลงานวิจัยและนวัตกรรมเผยแพร่', value: '150+', unitTh: 'ชิ้นงาน' },
    { labelTh: 'ความพึงพอใจของผู้ใช้บัณฑิต', value: '4.85', unitTh: '/ 5.00' }
  ],
  facilities: [
    { title: 'Digital Media Production Studio', desc: 'สตูดิโอผลิตรายการโทรทัศน์และวิดีโอเพื่อการศึกษาระบบ 4K พร้อม Green Screen และระบบเสียงมาตรฐานสากล' },
    { title: 'EdTech AR/VR Immersive Lab', desc: 'ห้องปฏิบัติการโลกเสมือนจริงสำหรับพัฒนาและทดสอบสื่อ AR/VR/MR ด้วยอุปกรณ์แว่นและตัวควบคุมระดับอุตสาหกรรม' },
    { title: 'Interactive Learning & Maker Space', desc: 'พื้นที่เรียนรู้แบบร่วมมือเพื่อการประดิษฐ์สื่อนวัตกรรม บอร์ดเกม และโปรโตไทป์ฮาร์ดแวร์เพื่อการเรียนรู้' },
    { title: 'Smart Classroom & Computer Suite', desc: 'ห้องปฏิบัติการคอมพิวเตอร์กราฟิกและสถานีตัดต่อความเร็วสูง พร้อมซอฟต์แวร์ลิขสิทธิ์ระดับมืออาชีพครบครัน' }
  ],
  contact: {
    address: 'ภาควิชาเทคโนโลยีการศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยศิลปากร พระราชวังสนามจันทร์ เลขที่ 6 ถนนราชมรรคาใน ตำบลพระปฐมเจดีย์ อำเภอเมือง จังหวัดนครปฐม 73000',
    phone: '034-255-794, 034-255-091 ต่อ 26201, 26202',
    email: 'edtech@su.ac.th',
    facebook: 'Educational Technology, Silpakorn University',
    facebookUrl: 'https://www.facebook.com/edtech.silpakorn',
    hours: 'จันทร์ – ศุกร์ 08:30 – 16:30 น. (เว้นวันหยุดราชการ)'
  }
};
