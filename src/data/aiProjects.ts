export type AIProject = {
  title: string;
  description: string;
  tech: string[];
  image?: string; // path under public/images/ai/
  links: { demo?: string; github?: string; video?: string };
};

// While this array is empty, the "AI Projects" tab is hidden.
// Once it has entries, AI Projects appear first in the tabs and at the top of "All".
export const aiProjects: AIProject[] = [
  // Example — copy, uncomment and fill in:
  // {
  //   title: 'My AI Project',
  //   description: 'One or two sentences about what it does.',
  //   tech: ['Python', 'PyTorch'],
  //   image: 'images/ai/my-ai-project.jpg',
  //   links: {
  //     demo: 'https://example.com',
  //     github: 'https://github.com/abdullahgul12/my-ai-project',
  //     video: 'https://youtu.be/VIDEO_ID',
  //   },
  // },
];
