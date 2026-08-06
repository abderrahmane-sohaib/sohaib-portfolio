export const projects = [
  {
    id: 1,
    title:
      "Explainable Malware Detection Platform Using Deep Learning and Graph Neural Networks",
    description:
      "An AI-powered malware detection platform combining Deep Learning and Graph Neural Networks with Explainable AI techniques to provide accurate and interpretable malware predictions.",
    longDescription:
      "Designed for security analysis workflows, this platform combines state-of-the-art deep learning with graph-based representations to uncover malicious patterns while maintaining interpretability for researchers and analysts.",
    technologies: [
      "Python",
      "Deep Learning",
      "Graph Neural Networks",
      "RelationalGraphSAGE",
      "SHAP",
      "LIME",
      "GNNExplainer",
    ],
    results: [
      { label: "Accuracy", value: "96.20%" },
      { label: "ROC-AUC", value: "0.9915" },
    ],
    features: [
      "Explainable predictions with SHAP, LIME, and GNNExplainer",
      "Graph-based malware classification pipeline",
      "High-accuracy model evaluation and benchmarking",
      "Research-oriented interface for security analysis",
    ],
    liveUrl: "YOUR_MALWARE_PLATFORM_URL",
    githubUrl: "YOUR_MALWARE_GITHUB_URL",
    paperUrl: "YOUR_PAPER_URL",
    type: "Research Platform",
    accent: "from-teal-400/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "Sonelgaz Service Request Management - Frontend Application",
    description:
      "A modern frontend web application interface designed for managing service requests. The application provides a user-friendly dashboard and responsive interfaces for different user roles.",
    longDescription:
      "This frontend experience focuses on a polished user interface for service request management, including authentication, dashboards, forms, and responsive tables for operational workflows.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap 5",
      "Laravel Blade Templates (Frontend Views)",
    ],
    features: [
      "Modern login interface",
      "Responsive dashboard design",
      "Service request management views",
      "Navigation sidebar and forms",
      "Clean data tables and user experience",
    ],
    liveUrl: "YOUR_SONELGAZ_FRONTEND_URL",
    githubUrl: "YOUR_SONELGAZ_GITHUB_URL",
    type: "Frontend UI",
    accent: "from-blue-400/20 to-indigo-500/20",
  },
];
