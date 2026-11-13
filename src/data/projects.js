export const projectCategories = ["Web Development", "Cybersecurity & AI"];

export const projects = [
  {
    id: "sonelgaz", category: "Web Development", title: "Sonelgaz Service Request Management Platform", eyebrow: "Licence graduation project · 3-month internship",
    description: "A web application developed during my Sonelgaz internship to centralize service requests and make their follow-up easier for clients and staff.",
    longDescription: "The platform digitizes the complete service-request lifecycle: client registration, request submission, technical review, quotation management, engineer administration, and monthly reporting. It was designed around clear operational workflows and responsive interface views.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap"],
    highlights: ["Centralized service-request workflow", "Administrative dashboards and data tables", "Responsive forms and interface views"],
    preview: "service", note: "Original project screenshots anonymized for public presentation.",
  },
  {
    id: "citizenvision", category: "Web Development", title: "CitizenVision — Civic Ideas Platform", eyebrow: "Java EE full-stack project",
    description: "A Java EE civic-participation platform where users can publish ideas, vote, and manage their contributions.",
    longDescription: "CitizenVision provides a complete authenticated user journey: registration, sign-in, idea submission with image uploads, voting, and personal content management. The administration area is protected by role-based access controls.",
    technologies: ["Java EE", "Servlets & JSP", "MySQL", "Tomcat", "JavaScript", "Bootstrap"],
    highlights: ["Secure registration and authenticated user journeys", "Idea submission, image uploads, and vote management", "Role-protected administration and user-owned content controls"],
    preview: "citizenvision", note: "Original application screenshots created with demonstration data.",
  },
  {
    id: "elearning", category: "Web Development", title: "E-Learning Web Application", eyebrow: "University group project · Team of 9",
    description: "A nine-person university project focused on an accessible e-learning experience for Blida 1 students.",
    longDescription: "The project focused on collaborative design and development of a course-oriented learning platform. The supplied screens show the portal, university authentication flow, and course dashboard used to organize learning resources and course access.",
    technologies: ["Collaborative development", "Web application design"],
    highlights: ["Course-centered learning experience", "Collaborative university development", "Progress-focused interface concept"],
    preview: "learning", note: "Original project screenshots supplied for public presentation.",
    screenshots: [
      ["portal", "E-learning portal"],
      ["login", "University login"],
      ["courses", "Course dashboard"],
    ],
  },
  {
    id: "ecommerce", category: "Web Development", title: "E-Commerce Website Interfaces", eyebrow: "Web development & interface design",
    description: "An e-commerce interface project focused on product discovery, account access, and a clear shopping journey.",
    longDescription: "The SAAB interface set explores practical e-commerce screens: a category-driven storefront, a shopping-cart state, and a sign-in flow. The work emphasizes responsive layouts, visual hierarchy, and a familiar browsing experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    highlights: ["Responsive product grid patterns", "Modern storefront and detail views", "Clear, conversion-aware interface hierarchy"],
    preview: "commerce", note: "Original interface screenshots supplied for public presentation.",
    screenshots: [
      ["home", "Storefront landing page"],
      ["cart", "Shopping cart"],
      ["login", "Sign in page"],
    ],
  },
  {
    id: "malware", category: "Cybersecurity & AI", title: "Towards Explainable Malware Detection", eyebrow: "Master's research · M2 Information Systems Security",
    description: "Master's research on explainable malware detection using deep learning and relational graphs.",
    longDescription: "This research investigates multi-task malware detection from static PE features, combining deep neural networks with relational graph learning. Explainability methods—SHAP, LIME, and GNNExplainer—are used to make classification decisions more understandable and actionable.",
    technologies: ["Python", "Deep Learning", "Relational GNNs", "SHAP & LIME", "GNNExplainer"],
    highlights: ["Static PE feature analysis and malware classification", "Explainability with SHAP, LIME, and GNNExplainer", "Relational graph-based learning pipeline"],
    results: [["Classification accuracy", "96.20%"], ["ROC-AUC", "0.9915"], ["BODMAS validation", "91.19%"]],
    preview: "research", note: "Original ASM Secure research prototype screenshots supplied for public presentation.",
    screenshots: [
      ["home", "ASM Secure landing page"],
      ["predict", "Single-sample malware prediction"],
      ["compare", "FFNN and GNN comparison"],
      ["explainability", "Explainability analysis"],
    ],
  },
];
