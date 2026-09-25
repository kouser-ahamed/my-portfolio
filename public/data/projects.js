// Central project data source.
// Used by: components/ProjectsPreview.jsx (home page),
// app/projects/page.js (full grid) and app/projects/[slug]/page.js (details).
//
// To add a new project, just push a new object here — every page updates automatically.

export const projects = [
  // {
  //   slug: "gymnest",
  //   title: "GymNest",
  //   description:
  //     "GymNest is a full-stack Fitness & Gym Management Platform with role-based dashboards for Members, Trainers, and Admins. Members can browse and book classes via Stripe, save favorites, and join the community forum. Trainers manage classes and publish posts. Admins control users, approvals, transactions, and content moderation.",
  //   images: [
  //     "/assets/GymNest/i1.png",
  //     "/assets/GymNest/i2.png",
  //     "/assets/GymNest/i3.png",
  //     "/assets/GymNest/i4.png",
  //     "/assets/GymNest/i5.png",
  //     "/assets/GymNest/i6.png",
  //     "/assets/GymNest/i7.png",
  //     "/assets/GymNest/i8.png",
  //     "/assets/GymNest/i9.png",
  //     "/assets/GymNest/i10.png",
  //     "/assets/GymNest/i11.png",
  //     "/assets/GymNest/i12.png",
  //     "/assets/GymNest/i13.png",
  //     "/assets/GymNest/i14.png",
  //     "/assets/GymNest/i15.png",
  //     "/assets/GymNest/i16.png",
  //     "/assets/GymNest/i17.png",
  //   ],
  //   mainTech: ["Next.js", "React.js", "Node.js", "MongoDB"],
  //   tech: [
  //     "Next.js",
  //     "React.js",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Tailwind CSS",
  //     "HeroUI",
  //     "Better Auth",
  //     "JWT Authentication",
  //     "Stripe",
  //     "Recharts",
  //     "Framer Motion",
  //     "React Toastify",
  //     "Swiper",
  //   ],
  //   live: "https://gymnest-client-k88v.vercel.app",
  //   github: "https://github.com/kouser-ahamed/gymnest-client",
  //   challenges: [
  //     "Designing a single data model that could serve three very different dashboards (Member, Trainer, Admin) without duplicating logic or leaking permissions between roles.",
  //     "Keeping Stripe payment state, class capacity, and booking status in sync in real time so a class never gets over-booked.",
  //     "Building a moderation workflow so admins could approve trainer content and transactions without slowing down the day-to-day experience for members.",
  //   ],
  //   futurePlans: [
  //     "Add a native mobile companion app for quick class check-ins.",
  //     "Introduce recurring/subscription-based membership billing on top of the current one-off Stripe payments.",
  //     "Add attendance analytics so trainers can see engagement trends per class.",
  //   ],
  // },


  {
  slug: "gymnest",
  title: "GymNest",

  description:
    "GymNest is a full-stack Fitness and Gym Management Platform designed for Members, Trainers, and Administrators. Members can discover and filter fitness classes, complete secure bookings through Stripe, manage favorites, apply to become trainers, and participate in a community forum. Trainers can create and manage classes, monitor enrolled students, and publish community content. Administrators can manage users, trainer applications, class approvals, payment transactions, account restrictions, analytics, and platform-wide content moderation through a secure role-based dashboard.",

  images: [
    "/assets/GymNest/i1.png",
    "/assets/GymNest/i2.png",
    "/assets/GymNest/i3.png",
    "/assets/GymNest/i4.png",
    "/assets/GymNest/i5.png",
    "/assets/GymNest/i6.png",
    "/assets/GymNest/i7.png",
    "/assets/GymNest/i8.png",
    "/assets/GymNest/i9.png",
    "/assets/GymNest/i10.png",
    "/assets/GymNest/i11.png",
    "/assets/GymNest/i12.png",
    "/assets/GymNest/i13.png",
    "/assets/GymNest/i14.png",
    "/assets/GymNest/i15.png",
    "/assets/GymNest/i16.png",
    "/assets/GymNest/i17.png",
  ],

  mainTech: [
    "Next.js",
    "React.js",
    "Node.js",
    "MongoDB",
  ],

  tech: [
    "Next.js",
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "HeroUI",
    "Better Auth",
    "Google OAuth",
    "JWT Authentication",
    "HTTPOnly Cookies",
    "Stripe",
    "Recharts",
    "Framer Motion",
    "React Toastify",
    "Swiper",
    "ImgBB",
    "Vercel",
  ],

  live: "https://gymnest-client-k88v.vercel.app",

  github:
    "https://github.com/kouser-ahamed/gymnest-client",

  githubBackend:
    "https://github.com/kouser-ahamed/gymnest-server",

  challenges: [
    "Designing a secure role-based architecture for Members, Trainers, and Administrators while keeping dashboard access, API permissions, user-role changes, and account restrictions synchronized across the frontend and backend.",

    "Integrating Stripe payments with class booking while preventing duplicate bookings and ensuring that successful payment records, booking information, class details, and transaction history remained consistent in MongoDB.",

    "Building a complete trainer lifecycle where members can apply, administrators can approve or reject applications with feedback, approved trainers can create classes, and submitted classes remain unavailable publicly until administrator approval.",

    "Implementing a soft-block system that allows restricted users to continue browsing the platform while preventing every state-changing action through both frontend validation and secure backend authorization.",

    "Developing an interactive community forum with posts, likes, dislikes, comments, replies, editing, deletion, ownership validation, pagination, and administrator moderation without compromising performance or data integrity.",
  ],

  futurePlans: [
    "Introduce recurring membership subscriptions and multiple pricing plans in addition to the current one-time Stripe class booking system.",

    "Add trainer availability calendars, live class schedules, attendance tracking, QR-based check-ins, and automated booking reminders for members.",

    "Develop richer analytics dashboards for administrators and trainers, including revenue trends, class popularity, attendance rates, member engagement, and trainer performance.",

    "Add real-time notifications for bookings, trainer application updates, class approvals, comments, replies, and administrative actions.",

    "Improve the platform with automated testing, centralized error monitoring, API documentation, stronger form validation, accessibility enhancements, and performance optimization.",

    "Create a mobile companion application so members can browse classes, receive reminders, manage bookings, and check in to sessions more conveniently.",
  ],
},
{
  slug: "sharebite",
  title: "ShareBite",

  description:
    "ShareBite is a full-stack Community Surplus Food-Sharing Platform that connects people who have safe surplus food with nearby people who can use it. Users can publish available food with category, preparation and expiry dates, halal status, and pickup location. Other users can browse, search, and request food, while owners review incoming requests, approve one requester, reject the rest, and share pickup details through a respectful, transparent approval workflow.",

  images: [
    "/assets/ShareBite/1.png",
    "/assets/ShareBite/2.png",
    "/assets/ShareBite/3.png",
    "/assets/ShareBite/4.png",
    "/assets/ShareBite/5.png",
    "/assets/ShareBite/6.png",
    "/assets/ShareBite/7.png",
    "/assets/ShareBite/8.png",
    "/assets/ShareBite/9.png",
    "/assets/ShareBite/10.png",
    "/assets/ShareBite/11.png",
    "/assets/ShareBite/12.png",
    "/assets/ShareBite/13.png",
    "/assets/ShareBite/14.png",
    "/assets/ShareBite/15.png",
  ],

  mainTech: [
    "Next.js",
    "React.js",
    "Node.js",
    "MongoDB",
  ],

  tech: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MongoDB Atlas",
    "Tailwind CSS",
    "HeroUI",
    "Better Auth",
    "Google OAuth",
    "JWT Authentication",
    "JOSE",
    "CORS",
    "React Icons",
    "Vercel",
  ],

  live: "https://sharebite-frontend-silk.vercel.app",

  github: "https://github.com/kouser-ahamed/sharebite-frontend",

  githubBackend: "https://github.com/kouser-ahamed/sharebite-backend",

  challenges: [
    "Designing a complete food-request lifecycle where a single approval automatically rejects all other pending requests for the same food while keeping the food's status synchronized between 'available' and 'booked' across the frontend and backend.",

    "Implementing secure JWT-based authorization on top of Better Auth sessions, where the frontend generates a token after login and the Express backend independently verifies it with JOSE before allowing any protected food or request operation.",

    "Enforcing strict ownership rules so that only a food's owner can manage its incoming requests and only a requester can manage their own submitted requests, validated on the backend rather than trusted from the frontend alone.",

    "Preventing duplicate or invalid food requests and safely handling invalid MongoDB document IDs across all food and request-related API routes.",

    "Building a responsive, filterable food discovery experience with search, sorting, and pagination while ensuring unavailable or already-booked food never appears in public listing pages.",
  ],

  futurePlans: [
    "Add real-time notifications for new requests, approvals, rejections, and pickup updates using sockets or push notifications.",

    "Introduce a rating and feedback system so requesters and food owners can review each other after a completed pickup.",

    "Add location-based discovery with maps and distance filtering so users can find nearby available food more easily.",

    "Build an admin dashboard for monitoring reported posts, resolving disputes, and moderating platform-wide activity.",

    "Add multi-image upload per food post and richer food categorization with dietary tags beyond halal status.",

    "Develop a mobile-friendly PWA experience so users can browse, request, and manage food listings on the go.",
  ],
},
  {
  slug: "sebasathi-ai",
  title: "SebaSathi AI",
  description:
    "SebaSathi AI is a full-stack AI-powered healthcare assistance and doctor appointment platform designed for Patients, Doctors, and Administrators. Patients can discover doctors, request appointments, submit reviews, communicate with an AI Health Assistant in Bangla, Banglish, or English, save conversation history, and generate structured health summaries. Doctors can manage appointment-related activities, while administrators can manage users, create doctor accounts, control account status, and oversee platform operations through secure role-based dashboards.",

  images: [
    "/assets/SebaSathiAI/UI/1.png",
    "/assets/SebaSathiAI/UI/2.png",
    "/assets/SebaSathiAI/UI/3.png",
    "/assets/SebaSathiAI/UI/4.png",
    "/assets/SebaSathiAI/UI/5.png",
    "/assets/SebaSathiAI/UI/6.png",
    "/assets/SebaSathiAI/UI/7.png",
    "/assets/SebaSathiAI/UI/8.png",
    "/assets/SebaSathiAI/UI/9.png",
    "/assets/SebaSathiAI/UI/10.png",
    "/assets/SebaSathiAI/UI/11.png",
    "/assets/SebaSathiAI/UI/12.png",
    "/assets/SebaSathiAI/UI/13.png",
    "/assets/SebaSathiAI/UI/14.png",
  ],

  mainTech: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
  ],

  tech: [
    "Next.js 16",
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "HeroUI",
    "Better Auth",
    "Google OAuth",
    "JWT Authentication",
    "JOSE / JWKS",
    "Groq API",
    "Framer Motion",
    "React Icons",
    "React Toastify",
    "Vercel",
  ],

  live: "https://sebasathiai-frontend.vercel.app",

  github:
    "https://github.com/kouser-ahamed/sebasathiai-frontend",

  githubBackend:
    "https://github.com/kouser-ahamed/sebasathiai-backend",

  challenges: [
    "Implementing secure role-based authentication and authorization for Patients, Doctors, and Administrators while keeping frontend sessions, Better Auth, backend JWT verification, user roles, and account status synchronized.",

    "Building a multilingual AI Health Assistant that supports Bangla, Banglish, and English, streams responses in real time, preserves conversation context, stores user-specific chat history, and generates structured health summaries safely.",

    "Designing connected workflows for doctor discovery, appointment requests, reviews, doctor account creation, and account-status management without exposing protected operations or allowing unauthorized roles to access restricted features.",

    "Integrating the independently deployed Next.js frontend and Express backend while correctly handling authentication cookies, CORS, callback URLs, protected API requests, database records, and production environment variables.",
  ],

  futurePlans: [
    "Refactor the current backend into separate routes, controllers, services, middleware, validation schemas, database utilities, and AI service modules for improved scalability and maintainability.",

    "Add real-time appointment notifications, doctor availability schedules, appointment reminders, rescheduling, cancellation workflows, and email or in-app updates for patients and doctors.",

    "Improve the AI Health Assistant with more advanced health-history analysis, downloadable health reports, stronger safety controls, better emergency detection, and clearer doctor-specialization recommendations.",

    "Add automated testing, centralized error monitoring, API documentation, analytics dashboards, and stronger validation to improve production reliability and development quality.",
  ],
},
  {
    slug: "turfcraft",
    title: "TurfCraft",
    description:
      "TurfCraft is a full-stack sports facility booking platform that digitizes venue reservations. Users can browse facilities, book time slots, and manage bookings in real time. JWT-based authentication ensures secure access with protected routes. Facility owners can manage venues, pricing, and availability through a dashboard.",
    images: [
      "/assets/TurfCraft/img-1.png",
      "/assets/TurfCraft/img-2.png",
      "/assets/TurfCraft/img-3.png",
      "/assets/TurfCraft/img-4.png",
      "/assets/TurfCraft/img-5.png",
      "/assets/TurfCraft/img-6.png",
      "/assets/TurfCraft/img-7.png",
      "/assets/TurfCraft/img-8.png",
      "/assets/TurfCraft/img-9.png",
    ],
    mainTech: ["Next.js", "React.js", "Node.js", "MongoDB"],
    tech: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "JWT Authentication",
      "React Toastify",
      "React Icons",
      "Swiper",
    ],
    live: "https://turfcraft.vercel.app",
    github: "https://github.com/kouser-ahamed/turfcraft",
    githubBackend: "https://github.com/kouser-ahamed/turfcraft-server",
    challenges: [
      "Preventing double-booking of the same turf and time slot when multiple users try to book concurrently.",
      "Modeling flexible pricing that changes by time slot, day, and facility without over-complicating the schema.",
      "Building protected, role-aware routes so facility owners and regular users see completely different dashboards from the same codebase.",
    ],
    futurePlans: [
      "Add an online payment gateway so bookings can be confirmed and paid for in one step.",
      "Add a review and rating system for facilities.",
      "Build a calendar-style availability view for facility owners.",
    ],
  },
  {
    slug: "binarybooks",
    title: "BinaryBooks",
    description:
      "A modern full-stack online book borrowing platform designed to provide users with a seamless digital library experience through smart book exploration, secure authentication, protected borrowing workflows, and responsive UI design.",
    images: [
      "/assets/binarybooks/im-1.png",
      "/assets/binarybooks/im-2.png",
      "/assets/binarybooks/im-3.png",
      "/assets/binarybooks/im-4.png",
      "/assets/binarybooks/im-5.png",
      "/assets/binarybooks/im-6.png",
      "/assets/binarybooks/im-7.png",
      "/assets/binarybooks/im-8.png",
      "/assets/binarybooks/im-9.png",
      "/assets/binarybooks/im-10.png",
    ],
    mainTech: ["Next.js", "React.js", "MongoDB"],
    tech: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Tailwind CSS",
      "HeroUI",
      "BetterAuth",
      "SwiperJS",
      "React Toastify",
    ],
    live: "https://binary-books.vercel.app/",
    github: "https://github.com/kouser-ahamed/binary-books",
    challenges: [
      "Keeping borrow/return status accurate so a book can't be borrowed by two people at once.",
      "Designing a clean, distraction-free reading/browsing UI while still surfacing enough book metadata.",
    ],
    futurePlans: [
      "Add due-date reminders and email notifications.",
      "Add a personal reading history and recommendation section.",
    ],
  },
  {
    slug: "keenkeeper",
    title: "KeenKeeper",
    description:
      "A modern friendship-tracking web application designed to help users maintain meaningful personal relationships through smart communication tracking, interaction analytics, engagement monitoring, and responsive dashboard experiences.",
    images: [
      "/assets/keen-keeper/p1.png",
      "/assets/keen-keeper/p2.png",
      "/assets/keen-keeper/p3.png",
      "/assets/keen-keeper/p4.png",
      "/assets/keen-keeper/p5.png",
      "/assets/keen-keeper/p6.png",
    ],
    mainTech: ["React.js"],
    tech: [
      "React.js",
      "React Router",
      "Context API",
      "Tailwind CSS",
      "DaisyUI",
      "Recharts",
      "React Toastify",
      "React Icons",
      "React Spinners",
    ],
    live: "https://superb-panda-c429ef-kouser.netlify.app/",
    github: "https://github.com/kouser-ahamed/B13-A7-keen-keeper",
    challenges: [
      "Designing analytics (interaction frequency, engagement score) that stay meaningful without needing a heavy backend.",
      "Managing shared state across multiple dashboard widgets cleanly with Context API alone.",
    ],
    futurePlans: [
      "Move persistence to a proper backend + database instead of client-only storage.",
      "Add reminders for friends you haven't connected with in a while.",
    ],
  },
  {
    slug: "github-issues-tracker",
    title: "GitHub Issues Tracker",
    description:
      "A responsive issue management web application inspired by GitHub, allowing users to track, filter, search, and explore issues through interactive cards, status indicators, and detailed modal-based issue views.",
    images: [
      "/assets/GitHubIssuesPic/git-1.png",
      "/assets/GitHubIssuesPic/git-2.png",
      "/assets/GitHubIssuesPic/git-3.png",
      "/assets/GitHubIssuesPic/git-4.png",
    ],
    mainTech: ["JavaScript"],
    tech: [
      "HTML5",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Fetch API",
      "Font Awesome",
    ],
    live: "https://github-issue-tracker-kouser.netlify.app/",
    github:
      "https://github.com/kouser-ahamed/B13-A5-Github-Issue-Tracker-Kouser",
    challenges: [
      "Handling GitHub's rate-limited public API gracefully while keeping search and filtering fast.",
      "Building a modal-based detail view that stays accessible and responsive on small screens.",
    ],
    futurePlans: [
      "Add authenticated requests to raise the API rate limit.",
      "Add the ability to track issues across multiple repositories at once.",
    ],
  },
  {
    slug: "techwave-podcast",
    title: "TechWave Podcast Website",
    description:
      "A modern and responsive podcast landing page designed to showcase technology-focused podcast content through visually engaging layouts, embedded video episodes, clean UI sections, and fully responsive user experience across all devices.",
    images: [
      "/assets/TechWaveDemoPic/tech-1.png",
      "/assets/TechWaveDemoPic/tech-2.png",
      "/assets/TechWaveDemoPic/tech-3.png",
      "/assets/TechWaveDemoPic/tech-4.png",
      "/assets/TechWaveDemoPic/tech-5.png",
    ],
    mainTech: ["JavaScript"],
    tech: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "CSS Grid",
      "Font Awesome",
      "Google Fonts",
    ],
    live: "https://kouser-ahamed.github.io/B13-A02-TechWave_Kouser/",
    github: "https://github.com/kouser-ahamed/B13-A02-TechWave_Kouser",
    challenges: [
      "Building a fully responsive multi-section landing page using only vanilla CSS layout tools (no framework).",
      "Keeping embedded video sections lightweight so the page still loads fast.",
    ],
    futurePlans: [
      "Migrate the layout to Tailwind CSS for easier maintenance.",
      "Add a real episode list pulled from an RSS/podcast API.",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
