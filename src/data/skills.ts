export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: 'Game Development',
    items: [
      'iOS games',
      'Developing games from scratch',
      'Unity Animator',
      'C# programming for games',
      'Cinemachine cut scenes',
      'Mobile camera access (capture and save photos to the gallery)',
    ],
  },
  { title: 'Engines & Platforms', items: ['Unity 3D', 'Unity 2D', 'Corona SDK', 'STYLY-VR'] },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS', 'Bootstrap', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'Redux'],
  },
  { title: 'Mobile', items: ['React Native (iOS & Android)', 'iOS App Store deployment'] },
  { title: 'Tools & Practices', items: ['Git', 'Code reviews', 'Agile', 'Prettier'] },
  // AI — fill in when AI projects are added. Empty groups are not rendered.
  // { title: 'AI', items: [] },
];
