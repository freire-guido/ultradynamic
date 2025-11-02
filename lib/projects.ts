export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  githubLinks?: string[];
}

export const projects: Project[] = [
  {
    id: "ultravending",
    name: "Ultravending",
    shortDescription: "Autonomous retail through fully automated vending operations.",
    longDescription: "Transforming retail infrastructure with fully autonomous vending systems. Every aspect of the operation—from supply chain management to customer interaction—is handled by intelligent agents that adapt and optimize in real-time.",
    tags: ["Logistics", "Automation", "Retail"],
    githubLinks: ["https://github.com/freire-guido/ultravending"]
  },
  {
    id: "ultragaucho",
    name: "Ultragaucho",
    shortDescription: "Advancing regional AI capabilities through rigorous evaluation and quality datasets.",
    longDescription: "Ultragaucho seeks to expand the understanding of LLMs in rioplatense tasks and reasoning to boost cultural awareness. We are working with OMA (Olimpiada Matemática Argentina) question sets to create a regional math dataset, HCDN (Honorable Cámara de Diputados de la Nación) to collect transcripts, laws, and related materials to inform models of local policy and rhetoric.",
    tags: ["AI Evaluation", "Benchmarks", "LLMs"],
    githubLinks: [
      "https://github.com/freire-guido/trucobench",
      "https://github.com/freire-guido/phrenology",
      "https://github.com/freire-guido/diputados-datos"
    ]
  },
  {
    id: "ultrastudy",
    name: "Ultrastudy",
    shortDescription: "Incentivizing academic excellence through performance-based markets.",
    longDescription: "Creating economic incentives for educational achievement. Students commit to outperforming peers, transforming academic performance into a measurable and rewarded outcome.",
    tags: ["Prediction Markets", "Education", "Blockchain"]
  },
  {
    id: "ctrlshift",
    name: "CtrlShift",
    shortDescription: "Adaptive policy control for AI systems without retraining.",
    longDescription: "Enabling real-time adaptation of AI behavior through policy control mechanisms. Our platform allows systems to update their decision-making rules dynamically, informed by the latest research in AI alignment and control theory.",
    tags: ["AI Safety", "Control Systems", "Policy"]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

