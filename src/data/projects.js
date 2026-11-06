export const projectCategories = ["Web Development", "Software Engineering", "Cybersecurity & AI"];

export const projects = [
  {
    id: "sonelgaz", category: "Web Development", title: "Sonelgaz Service Request Management Platform", eyebrow: "Licence graduation project · 3-month internship",
    description: "A full web application created to centralize and streamline service-request management during my internship at Sonelgaz.",
    longDescription: "The project digitizes service-request workflows through a centralized web platform. It focuses on clear operational views, request tracking, and an administrative experience designed for day-to-day use.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap"],
    highlights: ["Centralized service-request workflow", "Administrative dashboards and data tables", "Responsive forms and interface views"],
    preview: "service", note: "Original anonymized interface mockup — not a production screenshot.",
  },
  {
    id: "elearning", category: "Web Development", title: "E-Learning Web Application", eyebrow: "University group project · Team of 9",
    description: "A collaborative university project exploring the design of a web-based learning platform.",
    longDescription: "This project demonstrates collaborative software development around an online learning experience, with a course-oriented interface and learner progress views presented as an illustrative product preview.",
    technologies: ["Collaborative development", "Web application design"],
    highlights: ["Course-centered learning experience", "Collaborative university development", "Progress-focused interface concept"],
    preview: "learning", note: "Illustrative interface preview — not a production screenshot.",
  },
  {
    id: "ecommerce", category: "Web Development", title: "E-Commerce Website Interfaces", eyebrow: "Web development & interface design",
    description: "A collection of storefront interface concepts that demonstrate product discovery, browsing, and modern online shopping layouts.",
    longDescription: "These individual e-commerce interface explorations focus on polished storefront design: product grids, product detail patterns, and responsive shopping flows. They are shown as separate illustrative web design work rather than claims of live commercial stores.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    highlights: ["Responsive product grid patterns", "Modern storefront and detail views", "Clear, conversion-aware interface hierarchy"],
    preview: "commerce", note: "Illustrative interface preview — not a production storefront.",
  },
  {
    id: "voting", category: "Software Engineering", title: "University Voting Application", eyebrow: "Individual university project",
    description: "An individual voting-management application developed with Java EE for a university project.",
    longDescription: "The project explores a structured election-management experience with candidate presentation, voting-oriented screens, and a results dashboard. The visual is an illustrative representation of the application concept.",
    technologies: ["Java EE", "Java"],
    highlights: ["Individual application development", "Election and candidate management interface", "Voting and result presentation concepts"],
    preview: "vote", note: "Illustrative interface preview — not a verified production deployment.",
  },
  {
    id: "malware", category: "Cybersecurity & AI", title: "Towards Explainable Malware Detection", eyebrow: "Master's research · M2 Information Systems Security",
    description: "Multi-task malware detection using deep neural networks and relational graphs, with explainability built into the research workflow.",
    longDescription: "Towards Explainable Malware Detection: Multi-Task Approaches Using Deep Neural Networks and Relational Graphs. The research combines static PE feature analysis, malware classification, and interpretable AI methods to make model decisions more transparent.",
    technologies: ["Python", "Deep Learning", "Relational GNNs", "SHAP & LIME", "GNNExplainer"],
    highlights: ["Static PE feature analysis and malware classification", "Explainability with SHAP, LIME, and GNNExplainer", "Relational graph-based learning pipeline"],
    results: [["Classification accuracy", "96.20%"], ["ROC-AUC", "0.9915"], ["BODMAS validation", "91.19%"]],
    preview: "research", note: "Research architecture visualization based on the thesis methodology.",
  },
];
