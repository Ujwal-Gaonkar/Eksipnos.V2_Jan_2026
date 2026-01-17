export interface CourseDetail {
  id: string;
  name: string;
  shortName: string;
  category: "UG" | "PG" | "MBA" | "MCA";
  duration: string;
  students: string;
  description: string;
  eligibility: string[];
  curriculum: {
    semester: string;
    subjects: string[];
  }[];
  fees: {
    component: string;
    amount: string;
  }[];
  highlights: string[];
  careerProspects: string[];
}

export const courseDetails: CourseDetail[] = [
  // MBA Courses
  {
    id: "mba-digital-marketing",
    name: "Master of Business Administration in Digital Marketing",
    shortName: "MBA Digital Marketing",
    category: "MBA",
    duration: "2 Years",
    students: "650+",
    description: "This program equips students with advanced digital marketing strategies, analytics, and online brand management skills essential for the modern business landscape.",
    eligibility: [
      "Bachelor's degree in any discipline with minimum 50% aggregate",
      "Valid score in entrance exams (CAT/MAT/XAT/CMAT) or university entrance test",
      "Work experience preferred but not mandatory",
      "Strong communication and analytical skills"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Principles of Management", "Business Communication", "Financial Accounting", "Marketing Management", "Digital Marketing Fundamentals"]
      },
      {
        semester: "Semester 2",
        subjects: ["Consumer Behavior", "Search Engine Optimization", "Social Media Marketing", "Content Marketing Strategy", "Marketing Analytics"]
      },
      {
        semester: "Semester 3",
        subjects: ["Pay-Per-Click Advertising", "Email Marketing", "E-commerce Marketing", "Brand Management", "Marketing Research"]
      },
      {
        semester: "Semester 4",
        subjects: ["Digital Marketing Strategy", "Marketing Automation", "Project Work", "Internship", "Dissertation"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "Industry-aligned curriculum with Google & Meta certifications",
      "Live project experience with real brands",
      "100% placement assistance",
      "Expert faculty from industry"
    ],
    careerProspects: ["Digital Marketing Manager", "SEO Specialist", "Social Media Strategist", "Content Marketing Head", "Performance Marketing Lead"]
  },
  {
    id: "mba-logistics-scm",
    name: "Master of Business Administration in Logistics and Supply Chain Management",
    shortName: "MBA Logistics & SCM",
    category: "MBA",
    duration: "2 Years",
    students: "480+",
    description: "This program develops expertise in supply chain optimization, logistics operations, and global distribution networks essential for modern businesses.",
    eligibility: [
      "Bachelor's degree in any discipline with minimum 50% aggregate",
      "Valid score in entrance exams (CAT/MAT/XAT/CMAT) or university entrance test",
      "Basic understanding of business operations preferred",
      "Analytical and problem-solving aptitude"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Principles of Management", "Operations Management", "Financial Accounting", "Business Statistics", "Supply Chain Fundamentals"]
      },
      {
        semester: "Semester 2",
        subjects: ["Logistics Management", "Inventory Management", "Procurement & Sourcing", "Transportation Management", "Warehouse Management"]
      },
      {
        semester: "Semester 3",
        subjects: ["Global Supply Chain", "Supply Chain Analytics", "ERP Systems", "Quality Management", "Demand Planning"]
      },
      {
        semester: "Semester 4",
        subjects: ["Strategic Supply Chain Management", "Green Logistics", "Project Work", "Internship", "Dissertation"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "SAP-integrated curriculum",
      "Industry visits to major logistics hubs",
      "Tie-ups with leading logistics companies",
      "Hands-on training in supply chain software"
    ],
    careerProspects: ["Supply Chain Manager", "Logistics Coordinator", "Procurement Specialist", "Operations Manager", "Distribution Head"]
  },
  {
    id: "mba-finance",
    name: "Master of Business Administration in Finance",
    shortName: "MBA Finance",
    category: "MBA",
    duration: "2 Years",
    students: "720+",
    description: "This program provides comprehensive knowledge of financial management, investment strategies, and corporate finance essential for leadership roles in the financial sector.",
    eligibility: [
      "Bachelor's degree in any discipline with minimum 50% aggregate",
      "Valid score in entrance exams (CAT/MAT/XAT/CMAT) or university entrance test",
      "Strong quantitative and analytical skills",
      "Basic knowledge of accounting and economics preferred"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Principles of Management", "Financial Accounting", "Managerial Economics", "Business Statistics", "Corporate Finance"]
      },
      {
        semester: "Semester 2",
        subjects: ["Financial Management", "Security Analysis", "Banking & Insurance", "Taxation", "Cost Accounting"]
      },
      {
        semester: "Semester 3",
        subjects: ["Investment Management", "International Finance", "Financial Modeling", "Risk Management", "Derivatives"]
      },
      {
        semester: "Semester 4",
        subjects: ["Strategic Financial Management", "Mergers & Acquisitions", "Project Work", "Internship", "Dissertation"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "CFA-aligned curriculum",
      "Bloomberg Terminal access",
      "Industry expert sessions",
      "Financial simulation labs"
    ],
    careerProspects: ["Financial Analyst", "Investment Banker", "Portfolio Manager", "CFO", "Risk Manager"]
  },
  {
    id: "mba-project-management",
    name: "Master of Business Administration in Project Management",
    shortName: "MBA Project Management",
    category: "MBA",
    duration: "2 Years",
    students: "550+",
    description: "This program develops expertise in project planning, execution, and delivery using modern methodologies and tools for successful project outcomes.",
    eligibility: [
      "Bachelor's degree in any discipline with minimum 50% aggregate",
      "Valid score in entrance exams (CAT/MAT/XAT/CMAT) or university entrance test",
      "Leadership and team management skills",
      "Technical background preferred but not mandatory"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Principles of Management", "Organizational Behavior", "Financial Accounting", "Business Communication", "Project Management Fundamentals"]
      },
      {
        semester: "Semester 2",
        subjects: ["Project Planning & Scheduling", "Risk Management", "Cost Estimation", "Stakeholder Management", "Agile Methodology"]
      },
      {
        semester: "Semester 3",
        subjects: ["Advanced Project Management", "Program Management", "MS Project & Primavera", "Quality Management", "Leadership Skills"]
      },
      {
        semester: "Semester 4",
        subjects: ["Strategic Project Management", "Portfolio Management", "Project Work", "Internship", "Dissertation"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "PMP-aligned curriculum",
      "Hands-on training in project management tools",
      "Real industry project experience",
      "Leadership development workshops"
    ],
    careerProspects: ["Project Manager", "Program Manager", "Scrum Master", "PMO Lead", "Business Analyst"]
  },
  // MCA Courses
  {
    id: "mca-ai-ml",
    name: "Master of Computer Applications in Artificial Intelligence & Machine Learning",
    shortName: "MCA AI & ML",
    category: "MCA",
    duration: "2 Years",
    students: "600+",
    description: "This program provides deep expertise in AI algorithms, machine learning models, and neural networks for building intelligent systems and applications.",
    eligibility: [
      "Bachelor's degree in Computer Science/IT/BCA or equivalent with minimum 50% aggregate",
      "Mathematics/Statistics at graduation level",
      "Basic programming knowledge required",
      "Logical reasoning and problem-solving aptitude"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Advanced Data Structures", "Database Management", "Python Programming", "Mathematics for ML", "Introduction to AI"]
      },
      {
        semester: "Semester 2",
        subjects: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Statistical Analysis"]
      },
      {
        semester: "Semester 3",
        subjects: ["Reinforcement Learning", "Advanced Neural Networks", "Big Data Analytics", "AI in Business", "MLOps"]
      },
      {
        semester: "Semester 4",
        subjects: ["AI Ethics & Governance", "Capstone Project", "Industry Internship", "Research Project", "Dissertation"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "GPU-enabled computing labs",
      "Industry projects with tech giants",
      "Research publications opportunity",
      "AI/ML certification courses included"
    ],
    careerProspects: ["AI Engineer", "ML Engineer", "Data Scientist", "Research Scientist", "AI Consultant"]
  },
  {
    id: "mca-ai-ds",
    name: "Master of Computer Applications in Artificial Intelligence & Data Science",
    shortName: "MCA AI & DS",
    category: "MCA",
    duration: "2 Years",
    students: "580+",
    description: "This program combines AI techniques with data science methodologies to extract insights and build intelligent data-driven solutions.",
    eligibility: [
      "Bachelor's degree in Computer Science/IT/BCA or equivalent with minimum 50% aggregate",
      "Mathematics/Statistics at graduation level",
      "Basic programming knowledge required",
      "Analytical and critical thinking skills"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Advanced Data Structures", "Database Management", "Python for Data Science", "Statistics & Probability", "Data Visualization"]
      },
      {
        semester: "Semester 2",
        subjects: ["Machine Learning", "Data Mining", "Big Data Technologies", "Predictive Analytics", "AI Fundamentals"]
      },
      {
        semester: "Semester 3",
        subjects: ["Deep Learning", "Advanced Analytics", "Cloud Computing for DS", "Business Intelligence", "Time Series Analysis"]
      },
      {
        semester: "Semester 4",
        subjects: ["AI Applications", "Capstone Project", "Industry Internship", "Research Project", "Dissertation"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "Hands-on training with industry datasets",
      "Tableau & Power BI certifications",
      "Kaggle competition participation",
      "Industry mentorship program"
    ],
    careerProspects: ["Data Scientist", "Data Analyst", "Business Analyst", "AI Developer", "Analytics Manager"]
  },
  {
    id: "mca-cyber-security",
    name: "Master of Computer Applications in Cyber Security",
    shortName: "MCA Cyber Security",
    category: "MCA",
    duration: "2 Years",
    students: "420+",
    description: "This program develops expertise in protecting digital assets, ethical hacking, and implementing robust security measures for organizations.",
    eligibility: [
      "Bachelor's degree in Computer Science/IT/BCA or equivalent with minimum 50% aggregate",
      "Understanding of computer networks and operating systems",
      "Logical reasoning and problem-solving skills",
      "Interest in security and ethical hacking"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Advanced Data Structures", "Network Security", "Cryptography", "Operating System Security", "Ethical Hacking Basics"]
      },
      {
        semester: "Semester 2",
        subjects: ["Web Application Security", "Malware Analysis", "Penetration Testing", "Digital Forensics", "Security Auditing"]
      },
      {
        semester: "Semester 3",
        subjects: ["Cloud Security", "Mobile Security", "IoT Security", "Incident Response", "Security Architecture"]
      },
      {
        semester: "Semester 4",
        subjects: ["Advanced Threat Detection", "Capstone Project", "Industry Internship", "Research Project", "Dissertation"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "CEH & CompTIA Security+ preparation",
      "Live cyber range training",
      "Capture The Flag competitions",
      "Industry partnerships with security firms"
    ],
    careerProspects: ["Security Analyst", "Ethical Hacker", "Security Architect", "SOC Analyst", "CISO"]
  },
  {
    id: "mca-cloud-computing",
    name: "Master of Computer Applications in Cloud Computing",
    shortName: "MCA Cloud Computing",
    category: "MCA",
    duration: "2 Years",
    students: "390+",
    description: "This program provides expertise in cloud technologies, infrastructure management, and deploying scalable applications on major cloud platforms.",
    eligibility: [
      "Bachelor's degree in Computer Science/IT/BCA or equivalent with minimum 50% aggregate",
      "Understanding of networking and operating systems",
      "Basic programming knowledge",
      "Interest in infrastructure and DevOps"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Advanced Data Structures", "Cloud Computing Fundamentals", "Virtualization Technologies", "Linux Administration", "Networking"]
      },
      {
        semester: "Semester 2",
        subjects: ["AWS Architecture", "Azure Services", "Google Cloud Platform", "Container Technologies", "DevOps Practices"]
      },
      {
        semester: "Semester 3",
        subjects: ["Kubernetes & Orchestration", "Cloud Security", "Microservices Architecture", "Infrastructure as Code", "Cloud Cost Optimization"]
      },
      {
        semester: "Semester 4",
        subjects: ["Multi-Cloud Strategies", "Capstone Project", "Industry Internship", "Research Project", "Dissertation"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "AWS & Azure certifications included",
      "Hands-on cloud lab environment",
      "Industry projects with cloud providers",
      "24/7 cloud lab access"
    ],
    careerProspects: ["Cloud Architect", "DevOps Engineer", "Cloud Administrator", "Site Reliability Engineer", "Cloud Consultant"]
  },
  // UG Courses
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    category: "UG",
    duration: "3 Years",
    students: "1200+",
    description: "This program provides a strong foundation in business management, developing skills in leadership, marketing, finance, and organizational behavior.",
    eligibility: [
      "10+2 or equivalent from a recognized board with minimum 50% aggregate",
      "Any stream (Science/Commerce/Arts)",
      "Good communication skills",
      "Interest in business and management"
    ],
    curriculum: [
      {
        semester: "Semester 1 & 2",
        subjects: ["Principles of Management", "Business Communication", "Financial Accounting", "Business Economics", "Computer Applications"]
      },
      {
        semester: "Semester 3 & 4",
        subjects: ["Marketing Management", "Human Resource Management", "Cost Accounting", "Business Law", "Organizational Behavior"]
      },
      {
        semester: "Semester 5 & 6",
        subjects: ["Strategic Management", "International Business", "Entrepreneurship", "Project Work", "Elective Specialization"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "Industry-oriented curriculum",
      "Summer internship program",
      "Soft skills development",
      "Corporate exposure visits"
    ],
    careerProspects: ["Management Trainee", "Business Analyst", "Marketing Executive", "HR Executive", "Entrepreneur"]
  },
  {
    id: "bcom",
    name: "Bachelor of Commerce",
    shortName: "BCom",
    category: "UG",
    duration: "3 Years",
    students: "1500+",
    description: "This program provides comprehensive knowledge of commerce, accounting, and finance, preparing students for careers in business and finance sectors.",
    eligibility: [
      "10+2 or equivalent from a recognized board with minimum 50% aggregate",
      "Commerce stream preferred, other streams accepted",
      "Basic mathematical aptitude",
      "Interest in finance and accounting"
    ],
    curriculum: [
      {
        semester: "Semester 1 & 2",
        subjects: ["Financial Accounting", "Business Economics", "Business Communication", "Business Mathematics", "Computer Applications"]
      },
      {
        semester: "Semester 3 & 4",
        subjects: ["Corporate Accounting", "Cost Accounting", "Business Law", "Taxation", "Banking & Insurance"]
      },
      {
        semester: "Semester 5 & 6",
        subjects: ["Auditing", "Financial Management", "Advanced Taxation", "Project Work", "Elective Specialization"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "CA/CS/CMA foundation preparation",
      "Tally & accounting software training",
      "Industry guest lectures",
      "Campus placement support"
    ],
    careerProspects: ["Accountant", "Tax Consultant", "Auditor", "Bank Officer", "Financial Analyst"]
  },
  {
    id: "bca",
    name: "Bachelor of Computer Applications",
    shortName: "BCA",
    category: "UG",
    duration: "3 Years",
    students: "900+",
    description: "This program provides foundational knowledge in computer science and applications, preparing students for careers in IT and software development.",
    eligibility: [
      "10+2 or equivalent from a recognized board with minimum 50% aggregate",
      "Mathematics as a subject in 10+2 preferred",
      "Basic computer knowledge",
      "Logical reasoning and problem-solving skills"
    ],
    curriculum: [
      {
        semester: "Semester 1 & 2",
        subjects: ["Programming in C", "Digital Electronics", "Mathematics", "Computer Fundamentals", "Communication Skills"]
      },
      {
        semester: "Semester 3 & 4",
        subjects: ["Data Structures", "Object-Oriented Programming", "Database Management", "Web Technologies", "Operating Systems"]
      },
      {
        semester: "Semester 5 & 6",
        subjects: ["Software Engineering", "Computer Networks", "Java Programming", "Project Work", "Elective Specialization"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "Modern computer labs",
      "Industry-relevant programming languages",
      "Coding bootcamps",
      "Tech company visits"
    ],
    careerProspects: ["Software Developer", "Web Developer", "System Analyst", "Database Administrator", "IT Support Specialist"]
  },
  {
    id: "ba",
    name: "Bachelor of Arts",
    shortName: "BA",
    category: "UG",
    duration: "3 Years",
    students: "800+",
    description: "This program provides a broad liberal arts education, developing critical thinking, communication, and analytical skills across various disciplines.",
    eligibility: [
      "10+2 or equivalent from a recognized board with minimum 50% aggregate",
      "Any stream (Science/Commerce/Arts)",
      "Good reading and writing skills",
      "Interest in humanities and social sciences"
    ],
    curriculum: [
      {
        semester: "Semester 1 & 2",
        subjects: ["English Literature", "Political Science", "History", "Sociology", "Language Studies"]
      },
      {
        semester: "Semester 3 & 4",
        subjects: ["Economics", "Psychology", "Philosophy", "Public Administration", "Elective Subjects"]
      },
      {
        semester: "Semester 5 & 6",
        subjects: ["Advanced Electives", "Research Methodology", "Communication Skills", "Project Work", "Specialization Papers"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "Diverse subject options",
      "UPSC/State PSC preparation support",
      "Debate and literary clubs",
      "Personality development programs"
    ],
    careerProspects: ["Civil Services", "Content Writer", "Journalist", "Teacher", "Social Worker"]
  },
  // PG Courses
  {
    id: "mba-general",
    name: "Master of Business Administration",
    shortName: "MBA",
    category: "PG",
    duration: "2 Years",
    students: "850+",
    description: "This comprehensive MBA program develops leadership, strategic thinking, and management skills for success in the corporate world.",
    eligibility: [
      "Bachelor's degree in any discipline with minimum 50% aggregate",
      "Valid score in entrance exams (CAT/MAT/XAT/CMAT) or university entrance test",
      "Work experience preferred but not mandatory",
      "Strong analytical and communication skills"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Principles of Management", "Managerial Economics", "Financial Accounting", "Business Communication", "Organizational Behavior"]
      },
      {
        semester: "Semester 2",
        subjects: ["Marketing Management", "Financial Management", "Human Resource Management", "Operations Management", "Business Research Methods"]
      },
      {
        semester: "Semester 3",
        subjects: ["Strategic Management", "International Business", "Elective I", "Elective II", "Summer Internship"]
      },
      {
        semester: "Semester 4",
        subjects: ["Business Ethics", "Entrepreneurship", "Elective III", "Project Work", "Dissertation"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "AICTE approved program",
      "Industry interface programs",
      "100+ recruiting companies",
      "International exchange opportunities"
    ],
    careerProspects: ["Business Manager", "Marketing Manager", "HR Manager", "Operations Manager", "Consultant"]
  },
  {
    id: "mca-general",
    name: "Master of Computer Applications",
    shortName: "MCA",
    category: "PG",
    duration: "2 Years",
    students: "700+",
    description: "This program provides advanced knowledge in computer science and software development for careers in the IT industry.",
    eligibility: [
      "Bachelor's degree in Computer Science/IT/BCA or equivalent with minimum 50% aggregate",
      "Mathematics at 10+2 level",
      "Programming knowledge preferred",
      "Logical reasoning and problem-solving skills"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Advanced Data Structures", "Object-Oriented Programming", "Database Management Systems", "Computer Networks", "Operating Systems"]
      },
      {
        semester: "Semester 2",
        subjects: ["Software Engineering", "Web Technologies", "Computer Architecture", "Design & Analysis of Algorithms", "Java Programming"]
      },
      {
        semester: "Semester 3",
        subjects: ["Cloud Computing", "Mobile Application Development", "Elective I", "Elective II", "Mini Project"]
      },
      {
        semester: "Semester 4",
        subjects: ["Advanced Topics in CS", "Industry Internship", "Major Project", "Seminar", "Dissertation"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "State-of-the-art computer labs",
      "Industry certifications included",
      "Hackathons and coding competitions",
      "Tech company placements"
    ],
    careerProspects: ["Software Developer", "System Analyst", "Database Administrator", "IT Manager", "Full Stack Developer"]
  },
  {
    id: "mcom",
    name: "Master of Commerce",
    shortName: "MCom",
    category: "PG",
    duration: "2 Years",
    students: "450+",
    description: "This program provides advanced knowledge in commerce, finance, and accounting for careers in business and academia.",
    eligibility: [
      "Bachelor's degree in Commerce with minimum 50% aggregate",
      "B.Com/BBA/BBM graduates preferred",
      "Strong foundation in accounting and finance",
      "Analytical and research aptitude"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Advanced Accounting", "Business Environment", "Managerial Economics", "Research Methodology", "Statistical Analysis"]
      },
      {
        semester: "Semester 2",
        subjects: ["Corporate Financial Reporting", "Financial Management", "Marketing Management", "E-Commerce", "Business Ethics"]
      },
      {
        semester: "Semester 3",
        subjects: ["Advanced Taxation", "Investment Management", "International Trade", "Elective Papers", "Research Project"]
      },
      {
        semester: "Semester 4",
        subjects: ["Strategic Management", "Contemporary Issues", "Elective Papers", "Dissertation", "Viva Voce"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "UGC NET preparation support",
      "Research publication opportunities",
      "Industry expert sessions",
      "CA/CS preparation assistance"
    ],
    careerProspects: ["Accountant", "Financial Analyst", "Tax Consultant", "Academic Faculty", "Research Analyst"]
  },
  {
    id: "ma",
    name: "Master of Arts",
    shortName: "MA",
    category: "PG",
    duration: "2 Years",
    students: "380+",
    description: "This program provides advanced study in humanities and social sciences, preparing students for academic and professional careers.",
    eligibility: [
      "Bachelor's degree in relevant discipline with minimum 50% aggregate",
      "BA graduates in the respective subject preferred",
      "Strong analytical and research skills",
      "Interest in academic research"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Core Subject Papers", "Research Methodology", "Advanced Studies I", "Contemporary Issues", "Language Skills"]
      },
      {
        semester: "Semester 2",
        subjects: ["Specialized Papers", "Advanced Studies II", "Comparative Studies", "Elective Papers", "Field Work"]
      },
      {
        semester: "Semester 3",
        subjects: ["Advanced Specialized Papers", "Research Project", "Seminar Presentations", "Elective Papers", "Internship"]
      },
      {
        semester: "Semester 4",
        subjects: ["Dissertation", "Advanced Topics", "Comprehensive Viva", "Final Project", "Academic Writing"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "UGC NET/SET coaching",
      "Research grants available",
      "Conference participation",
      "Publication support"
    ],
    careerProspects: ["Professor/Lecturer", "Researcher", "Civil Services", "Content Developer", "Policy Analyst"]
  },
  {
    id: "majmc",
    name: "Master of Arts in Journalism and Mass Communication",
    shortName: "MAJMC",
    category: "PG",
    duration: "2 Years",
    students: "320+",
    description: "This program develops expertise in journalism, media production, and mass communication for careers in the dynamic media industry.",
    eligibility: [
      "Bachelor's degree in any discipline with minimum 50% aggregate",
      "Good communication and writing skills",
      "Interest in media and journalism",
      "Creative thinking and analytical abilities"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Principles of Mass Communication", "Print Journalism", "Communication Research", "Media Laws & Ethics", "Writing for Media"]
      },
      {
        semester: "Semester 2",
        subjects: ["Broadcast Journalism", "Digital Media", "Advertising & PR", "Photography & Videography", "News Reporting"]
      },
      {
        semester: "Semester 3",
        subjects: ["Television Production", "New Media Technologies", "Media Management", "Documentary Making", "Internship"]
      },
      {
        semester: "Semester 4",
        subjects: ["Media Entrepreneurship", "Advanced Journalism", "Research Project", "Industry Project", "Dissertation"]
      }
    ],
    fees: [
      { component: "Tuition Fee (Per Semester)", amount: "₹XX,XXX" },
      { component: "Registration Fee (One-time)", amount: "₹X,XXX" },
      { component: "Examination Fee (Per Semester)", amount: "₹X,XXX" },
      { component: "Library & Lab Fee (Annual)", amount: "₹X,XXX" },
      { component: "Total Program Fee (Approximate)", amount: "₹X,XX,XXX" }
    ],
    highlights: [
      "Fully-equipped media lab",
      "Industry internships mandatory",
      "Live news production experience",
      "Media house tie-ups"
    ],
    careerProspects: ["Journalist", "News Anchor", "Content Producer", "PR Manager", "Media Planner"]
  }
];

export const getCourseById = (id: string): CourseDetail | undefined => {
  return courseDetails.find(course => course.id === id);
};

export const getCourseByShortName = (shortName: string): CourseDetail | undefined => {
  return courseDetails.find(course => course.shortName === shortName);
};
