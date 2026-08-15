// ============================================
// Projects Data — Lalit Mittal's Projects from Resume
// ============================================

export const projects = [
  {
    id: 1,
    title: 'WakeGuard – Real-Time Driver Drowsiness Detection System',
    description:
      'Built a real-time multi-signal drowsiness detection system (MediaPipe face landmarks, EAR/MAR, solvePnP-based head pose) with automatic event logging and an analytics dashboard; added an emergency-contact escalation alert for unresponsive drivers. Trained a MobileNetV2 transfer-learning CNN eye-state classifier (98.3% validation accuracy on 67K+ images) as a second, learned signal in an ensemble alongside geometric detection methods.',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Keras', 'Pygame'],
    liveUrl: '',
    githubUrl: 'https://github.com/mittal-lalit/WakeGuard',
    image: '',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Test Case Generation System',
    description:
      'Built an AI system using LLMs and RAG to auto-generate test cases from requirements, reducing manual effort by ~60%; integrated a Neo4j knowledge graph for requirement traceability, improving coverage mapping accuracy.',
    techStack: ['Python', 'LLMs', 'RAG', 'Neo4j', 'Hugging Face'],
    liveUrl: '',
    githubUrl: 'https://github.com/mittal-lalit/graph_rag',
    image: '',
    featured: true,
  },
  {
    id: 3,
    title: 'RoomAI – AI Interior Design SaaS',
    description:
      'Full-stack AI interior-design SaaS featuring a WebGL 3D hero experience, real-time style morphing, JWT authentication, Stripe payment processing, and Claude / Replicate AI model integration.',
    techStack: ['React', 'Node.js', 'MySQL', 'Three.js', 'Framer Motion', 'Stripe', 'Claude AI'],
    liveUrl: '',
    githubUrl: 'https://github.com/mittal-lalit/RoomAI',
    image: '',
    featured: true,
  },
];
