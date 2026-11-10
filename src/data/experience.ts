export type Experience = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  keyProject?: string;
  tech: string[];
};

// TODO: confirm spelling with Abdullah — "GeniTeam Solutions" and "UET Gaming Studio"
export const GENITEAM = 'GeniTeam Solutions'; // TODO: confirm spelling with Abdullah
export const UET_GAMING = 'UET Gaming Studio'; // TODO: confirm spelling with Abdullah

// Newest first
export const experience: Experience[] = [
  {
    role: 'Freelance Developer',
    company: 'Upwork',
    dates: 'July 2025 – Present',
    bullets: [
      'Worked on React Native mobile applications and developed games such as Pac-Man and Tetris using React Native.',
      'Built and maintained Unity games, resolving gameplay and performance issues for USA-based clients.',
      'Created AI-integrated educational games and interactive learning videos, combining game mechanics with engaging, content-driven experiences.',
    ],
    tech: ['React Native', 'Unity', 'AI Integration'],
  },
  {
    role: 'Developer',
    company: 'TBox Solution',
    dates: 'October 2024 – June 2025',
    bullets: [
      'Developed responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Built RESTful APIs with Express.js and implemented JWT authentication and authorization.',
      'Created dynamic user interfaces with React.js using Hooks, Context API and component lifecycle management.',
      'Designed and optimized MongoDB databases with efficient schema design and indexing.',
      'Developed cross-platform mobile applications using React Native for iOS and Android.',
      'Implemented state management solutions using Redux for complex application states.',
      'Collaborated using Git version control, conducted code reviews and followed Agile methodologies.',
      'Successfully deployed applications to the iOS App Store, handling certification and compliance requirements.',
      'Configured Prettier for code quality standards and established coding conventions across React/React Native projects.',
    ],
    keyProject: 'CarSalesHub (automotive marketplace)',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'React Native', 'Redux', 'JWT', 'REST APIs', 'Git'],
  },
  {
    role: 'Developer',
    company: 'Cheetah Agency',
    dates: 'February 2024 – September 2024',
    bullets: ['Worked on a PC game for a client (GTA-type game).', 'Worked on a Candy Crush–type game.'],
    tech: ['Game Development'],
  },
  {
    role: 'Developer',
    company: GENITEAM,
    dates: 'January 2022 – February 2024',
    bullets: [
      'Worked as a developer on Unity 3D.',
      'Mostly worked on the Scary series (Scary Stranger and Scary Teacher).',
      'Handled iOS builds.',
    ],
    tech: ['Unity 3D', 'C#', 'iOS'],
  },
  {
    role: 'Developer',
    company: 'Game Tap Studio',
    dates: 'October 2020 – December 2021',
    bullets: [
      'Worked as a developer on Unity 3D, mostly on simulation games.',
      'Worked on racing games (bike racing and car racing) and stunt games.',
    ],
    tech: ['Unity 3D', 'C#'],
  },
  {
    role: 'Developer',
    company: UET_GAMING,
    dates: 'May 2019 – September 2020',
    bullets: [
      'Worked as a developer on Corona and Unity 2D and 3D.',
      'Developed 3D games and mobile-based applications for different clients.',
    ],
    tech: ['Unity 2D/3D', 'Corona SDK', 'Mobile Apps'],
  },
  {
    role: 'Developer Intern / 3D Content Developer for VR',
    company: 'Social VR Lab',
    dates: 'Summer & Fall 2018',
    bullets: [
      'Developed 3D environments using Unity 3D and the STYLY-VR creation platform.',
      'Worked with animations in Unity.',
    ],
    tech: ['Unity 3D', 'STYLY-VR', 'VR'],
  },
];
