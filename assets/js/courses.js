const courses = [
  // ✅ 1 MERN Stack
  {
    id: 1,
    title: "MERN Stack Web Development",
    description:
      "Master MongoDB, Express.js, React.js, and Node.js to build complete full-stack web applications from scratch.",
    level: "Beginner",
    duration: "12 Weeks",
    img: "assets/img/education/students-9.webp",
    badge: "Featured",
    rating: "4.8",
    language: "English",
    assignments: "8 Projects",
    students: "342",

    longDescription: [
      "This MERN Stack course will take you from beginner to full-stack developer with real-world projects.",
      "You will learn React frontend, Node backend, MongoDB database, authentication, and deployment step-by-step."
    ],

    skills: [
      {
        icon: "bi bi-code-slash",
        title: "React Frontend",
        text: "Components, Hooks, UI Development"
      },
      {
        icon: "bi bi-server",
        title: "Node.js Backend",
        text: "Express APIs, Authentication"
      },
      {
        icon: "bi bi-database",
        title: "MongoDB Database",
        text: "Schema, CRUD, Mongoose"
      },
      {
        icon: "bi bi-shield-check",
        title: "Deployment & Security",
        text: "JWT Auth, Hosting, Protection"
      }
    ],

    requirements: [
      "Basic HTML & CSS knowledge",
      "JavaScript fundamentals",
      "Laptop + Internet connection"
    ],

    curriculum: [
      {
        module: "Frontend Basics",
        lessons: ["HTML5 & CSS3", "Bootstrap Layouts", "JavaScript DOM"]
      },
      {
        module: "React.js Development",
        lessons: ["Components & Props", "Hooks", "React Router"]
      },
      {
        module: "Backend with Node.js",
        lessons: ["Express Setup", "REST APIs", "MongoDB Integration"]
      }
    ]
  },

  // ✅ 2 React Modern UI
  {
    id: 2,
    title: "React.js with Modern Web Design",
    description:
      "Learn React.js along with responsive UI design, animations, and real-world project development.",
    level: "Intermediate",
    duration: "8 Weeks",
    img: "assets/img/education/campus-4.webp",
    badge: "New",
    rating: "4.7",
    language: "Hindi",
    assignments: "5 Projects",
    students: "210",

    longDescription: [
      "In this React course, you will learn how to build modern websites with animations and clean UI.",
      "You will create responsive real-world projects using React, Tailwind CSS, and Bootstrap."
    ],

    skills: [
      {
        icon: "bi bi-window-stack",
        title: "React UI Development",
        text: "Modern Components & Layouts"
      },
      {
        icon: "bi bi-palette",
        title: "Tailwind + Bootstrap",
        text: "Responsive styling & themes"
      },
      {
        icon: "bi bi-magic",
        title: "Modern Animations",
        text: "Scroll effects & transitions"
      },
      {
        icon: "bi bi-briefcase",
        title: "Portfolio Projects",
        text: "Industry-ready frontend builds"
      }
    ],

    requirements: [
      "Basic JavaScript required",
      "HTML/CSS knowledge"
    ],

    curriculum: [
      {
        module: "React Fundamentals",
        lessons: ["JSX & Components", "Props & State", "Hooks Usage"]
      },
      {
        module: "Modern Web UI",
        lessons: ["Responsive Layouts", "Animations", "Landing Page Projects"]
      }
    ]
  },

  // ✅ 3 Web Design Masterclass
  {
    id: 3,
    title: "Professional Web Design Masterclass",
    description:
      "Become a creative web designer by learning HTML, CSS, Bootstrap, Tailwind, and modern layouts.",
    level: "Beginner",
    duration: "6 Weeks",
    img: "assets/img/education/education-5.webp",
    badge: "Popular",
    rating: "4.6",
    language: "Gujarati",
    assignments: "4 Projects",
    students: "500",

    longDescription: [
      "This course helps you become a professional web designer from scratch.",
      "Learn responsive layouts, modern UI trends, and real-world website building."
    ],

    skills: [
      {
        icon: "bi bi-layout-text-window",
        title: "HTML + CSS Mastery",
        text: "Layouts, Flexbox, Grid System"
      },
      {
        icon: "bi bi-bootstrap",
        title: "Bootstrap Framework",
        text: "Modern components & pages"
      },
      {
        icon: "bi bi-palette",
        title: "Tailwind CSS",
        text: "Utility-first styling system"
      },
      {
        icon: "bi bi-phone",
        title: "Responsive Design",
        text: "Mobile-friendly UI building"
      }
    ],

    requirements: [
      "No coding experience required",
      "Creative interest in design"
    ],

    curriculum: [
      {
        module: "Design Basics",
        lessons: ["HTML Structure", "CSS Styling", "Flexbox + Grid"]
      },
      {
        module: "Modern Frameworks",
        lessons: ["Bootstrap Projects", "Tailwind UI", "Landing Pages"]
      }
    ]
  },

  // ✅ 4 Node.js Backend
  {
    id: 4,
    title: "Node.js Backend Development",
    description:
      "Build powerful backend applications using Node.js, Express, REST APIs, and authentication systems.",
    level: "Intermediate",
    duration: "10 Weeks",
    img: "assets/img/education/students-7.webp",
    badge: "Certificate",
    rating: "4.8",
    language: "English",
    assignments: "6 Projects",
    students: "275",

    longDescription: [
      "Learn backend development from scratch using Node.js and Express.",
      "Build REST APIs, authentication systems, and real-world backend projects."
    ],

    skills: [
      {
        icon: "bi bi-server",
        title: "Express.js APIs",
        text: "RESTful API Development"
      },
      {
        icon: "bi bi-key",
        title: "Authentication",
        text: "JWT + Login Systems"
      },
      {
        icon: "bi bi-database",
        title: "Database Integration",
        text: "MongoDB + MySQL Support"
      },
      {
        icon: "bi bi-shield-lock",
        title: "Secure Backend",
        text: "Validation + Security"
      }
    ],

    requirements: [
      "JavaScript basics required",
      "Some frontend knowledge helpful"
    ],

    curriculum: [
      {
        module: "Backend Basics",
        lessons: ["Node Setup", "Express Routing", "Middleware"]
      },
      {
        module: "API Development",
        lessons: ["REST API Design", "MongoDB", "Authentication सिस्टम"]
      }
    ]
  },

  // ✅ 5 Python Django
  {
    id: 5,
    title: "Web Development with Python & Django",
    description:
      "Learn Python Django framework to build secure, scalable, and database-driven web applications.",
    level: "Intermediate",
    duration: "8 Weeks",
    img: "assets/img/education/campus-4.webp",
    badge: "New",
    rating: "4.7",
    language: "English",
    assignments: "5 Projects",
    students: "156",

    longDescription: [
      "This Django course helps you build powerful backend applications with Python.",
      "Learn models, admin panel, authentication, APIs, and deployment."
    ],

    skills: [
      {
        icon: "bi bi-code",
        title: "Python Fundamentals",
        text: "Syntax, Functions, OOP"
      },
      {
        icon: "bi bi-window",
        title: "Django Framework",
        text: "Views, Templates, Routing"
      },
      {
        icon: "bi bi-database",
        title: "Database Models",
        text: "ORM, Migrations, Queries"
      },
      {
        icon: "bi bi-shield-check",
        title: "Admin Panel + APIs",
        text: "Admin Dashboard & REST APIs"
      }
    ],

    requirements: [
      "Basic Python knowledge helpful",
      "Web development interest"
    ],

    curriculum: [
      {
        module: "Python Basics",
        lessons: ["Syntax", "Functions", "OOP"]
      },
      {
        module: "Django Development",
        lessons: ["Models", "Views", "Templates", "Admin Dashboard"]
      }
    ]
  },

  // ✅ 6 UI/UX Design
  {
    id: 6,
    title: "UI/UX Design Essentials",
    description:
      "Understand user experience principles, wireframing, prototyping, and design tools like Figma.",
    level: "Beginner",
    duration: "5 Weeks",
    img: "assets/img/education/activities-3.webp",
    badge: "Certificate",
    rating: "4.5",
    language: "Hindi",
    assignments: "3 Case Studies",
    students: "320",

    longDescription: [
      "Start your UI/UX journey with design thinking and user research.",
      "Learn wireframes, prototypes, and modern design systems using Figma."
    ],

    skills: [
      {
        icon: "bi bi-people",
        title: "UX Research",
        text: "User journey & psychology"
      },
      {
        icon: "bi bi-pencil-square",
        title: "Wireframing",
        text: "Low & high fidelity designs"
      },
      {
        icon: "bi bi-easel",
        title: "Prototyping",
        text: "Clickable UI mockups"
      },
      {
        icon: "bi bi-palette",
        title: "Design Systems",
        text: "Figma components & UI kits"
      }
    ],

    requirements: [
      "No coding required",
      "Creative mindset helpful"
    ],

    curriculum: [
      {
        module: "UX Fundamentals",
        lessons: ["User Journey", "Wireframes", "Mobile UX"]
      },
      {
        module: "Figma Design",
        lessons: ["Prototype", "UI Components", "Real App Design"]
      }
    ]
  },

  // ✅ 7 PHP Laravel
  {
    id: 7,
    title: "PHP Laravel Full Stack Development",
    description:
      "Become a full-stack developer by learning Laravel framework, CRUD, authentication, and APIs.",
    level: "Intermediate",
    duration: "9 Weeks",
    img: "assets/img/education/teacher-6.webp",
    badge: "Popular",
    rating: "4.6",
    language: "English",
    assignments: "6 Projects",
    students: "198",

    longDescription: [
      "Laravel is the most popular PHP framework for backend development.",
      "Build complete full-stack apps with authentication, CRUD, and APIs."
    ],

    skills: [
      {
        icon: "bi bi-diagram-3",
        title: "Laravel MVC",
        text: "Routes, Controllers, Models"
      },
      {
        icon: "bi bi-pencil",
        title: "CRUD Systems",
        text: "Forms + Database Operations"
      },
      {
        icon: "bi bi-person-check",
        title: "Authentication",
        text: "Login + User Management"
      },
      {
        icon: "bi bi-cloud-arrow-up",
        title: "API Development",
        text: "Laravel REST APIs"
      }
    ],

    requirements: [
      "PHP basics required",
      "Database understanding helpful"
    ],

    curriculum: [
      {
        module: "Laravel Basics",
        lessons: ["Routes", "Controllers", "Blade Templates"]
      },
      {
        module: "Advanced Laravel",
        lessons: ["Auth System", "CRUD Projects", "API Integration"]
      }
    ]
  },

  // ✅ 8 Data Science ML
  {
    id: 8,
    title: "Data Science & Machine Learning Foundations",
    description:
      "Kickstart your journey in Data Science by learning Python, ML concepts, and real-world datasets.",
    level: "Advanced",
    duration: "12 Weeks",
    img: "assets/img/education/students-9.webp",
    badge: "Featured",
    rating: "4.9",
    language: "English",
    assignments: "10 Projects",
    students: "789",

    longDescription: [
      "Learn Data Science & Machine Learning from scratch with Python.",
      "Build regression, classification models and work with real datasets."
    ],

    skills: [
      {
        icon: "bi bi-bar-chart",
        title: "Data Visualization",
        text: "Matplotlib + Dashboards"
      },
      {
        icon: "bi bi-cpu",
        title: "Machine Learning",
        text: "Regression + Classification"
      },
      {
        icon: "bi bi-database",
        title: "Big Data Handling",
        text: "Pandas, NumPy, Data Cleaning"
      },
      {
        icon: "bi bi-graph-up",
        title: "Real Projects",
        text: "Industry dataset solutions"
      }
    ],

    requirements: [
      "Python basics required",
      "Math + Statistics helpful"
    ],

    curriculum: [
      {
        module: "Data Science Basics",
        lessons: ["Pandas", "NumPy", "Data Cleaning"]
      },
      {
        module: "Machine Learning",
        lessons: ["Regression", "Classification", "Real Projects"]
      }
    ]
  },

  // ✅ 9 Data Analysis Excel + Python
  {
    id: 9,
    title: "Data Analysis with Python & Excel",
    description:
      "Learn data cleaning, visualization, dashboards, and analytics using Python, Pandas, and Excel.",
    level: "Beginner",
    duration: "6 Weeks",
    img: "assets/img/education/campus-4.webp",
    badge: "Certificate",
    rating: "4.7",
    language: "Gujarati",
    assignments: "5 Dashboards",
    students: "410",

    longDescription: [
      "This course teaches Excel + Python analytics for business decision making.",
      "Build dashboards, reports, and data visualization projects."
    ],

    skills: [
      {
        icon: "bi bi-file-earmark-excel",
        title: "Excel Dashboards",
        text: "Pivot tables + formulas"
      },
      {
        icon: "bi bi-code",
        title: "Python Pandas",
        text: "Data cleaning + analysis"
      },
      {
        icon: "bi bi-graph-up",
        title: "Charts & Reports",
        text: "Visualization techniques"
      },
      {
        icon: "bi bi-briefcase",
        title: "Business Analytics",
        text: "Real datasets + reporting"
      }
    ],

    requirements: [
      "Basic computer knowledge",
      "Interest in analytics"
    ],

    curriculum: [
      {
        module: "Excel Analytics",
        lessons: ["Formulas", "Pivot Tables", "Dashboard Creation"]
      },
      {
        module: "Python Data Analysis",
        lessons: ["Pandas", "Matplotlib", "Real Business Data"]
      }
    ]
  }
];
