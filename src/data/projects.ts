import { GENITEAM, UET_GAMING } from './experience';

export type Studio = typeof GENITEAM | 'Game Tap Studio' | typeof UET_GAMING;

export type GameProject = {
  title: string;
  studio: Studio;
  video: string; // exact original YouTube URL
  thumbnail: string; // under public/
};

export const studios: { name: Studio; description: string }[] = [
  {
    name: GENITEAM, // TODO: confirm spelling with Abdullah
    description:
      'These games are not entertainment-driven alone; they are pedagogically grounded, carefully structured to enhance problem-solving abilities, critical thinking and higher-order cognitive skills in children. Each game integrates real-world scenarios, decision-making challenges and reflective tasks that encourage learners to analyze situations, evaluate consequences and apply reasoning through fun.',
  },
  {
    name: 'Game Tap Studio',
    description:
      'These function-based games focus on interaction, responsiveness and smooth gameplay mechanics rather than instruction. They are designed to deliver quick engagement through clear actions, immediate feedback and intuitive controls. Each game emphasizes usability and performance, ensuring an enjoyable and seamless experience that keeps players engaged through well-crafted functionality.',
  },
  {
    name: UET_GAMING, // TODO: confirm spelling with Abdullah
    description:
      'These games promote problem-solving abilities, critical thinking and higher-order cognitive skills in children, while integrating real-world scenarios and decision-making challenges through fun. They intentionally embed moral and ethical values, such as empathy, responsibility, cooperation, honesty and respect, helping learners build character alongside academic skills.',
  },
];

const t = (file: string) => `images/projects/${file}`;

export const projects: GameProject[] = [
  // GeniTeam Solutions
  { title: 'Nick and Tani', studio: GENITEAM, video: 'https://www.youtube.com/watch?v=LMz83P-2nZY', thumbnail: t('nick-and-tani.jpg') },
  { title: 'Scary Stranger 3D', studio: GENITEAM, video: 'https://youtu.be/ft5TWnPTEUs', thumbnail: t('scary-stranger-3d.jpg') },
  { title: 'Scary Siblings', studio: GENITEAM, video: 'https://youtu.be/GXuURhyN_Jo', thumbnail: t('scary-siblings.jpg') },

  // Game Tap Studio
  { title: 'Airplane Fly 3D', studio: 'Game Tap Studio', video: 'https://youtu.be/Q4h99NOFqBs', thumbnail: t('airplane-fly-3d.jpg') },
  { title: 'Car Parking Simulator', studio: 'Game Tap Studio', video: 'https://www.youtube.com/watch?v=5yxdEETAoQ0', thumbnail: t('car-parking-simulator.jpg') },
  { title: 'Toonish Car Parking', studio: 'Game Tap Studio', video: 'https://youtu.be/gkCYsgEO8Aw', thumbnail: t('toonish-car-parking.jpg') },
  // TODO: same video as Airplane Fly 3D — confirm link with Abdullah
  { title: 'Tuk Tuk Rally Racing', studio: 'Game Tap Studio', video: 'https://youtu.be/Q4h99NOFqBs', thumbnail: t('tuk-tuk-rally-racing.jpg') },
  { title: 'Car Rally Racing', studio: 'Game Tap Studio', video: 'https://www.youtube.com/watch?v=g9XoU-PVx48', thumbnail: t('car-rally-racing.jpg') },
  { title: 'Super Hero Bike Taxi Simulator', studio: 'Game Tap Studio', video: 'https://youtu.be/clg5UHwOhww', thumbnail: t('super-hero-bike-taxi-simulator.jpg') },
  { title: 'Super Hero Bike Racing', studio: 'Game Tap Studio', video: 'https://youtu.be/svELugTHhXw', thumbnail: t('super-hero-bike-racing.jpg') },
  { title: 'Snow Bike Stunt', studio: 'Game Tap Studio', video: 'https://youtu.be/V1fUc9jsAeg', thumbnail: t('snow-bike-stunt.jpg') },
  { title: 'Bus Jump Stunt', studio: 'Game Tap Studio', video: 'https://youtu.be/hUSD4U4xyjE', thumbnail: t('bus-jump-stunt.jpg') },

  // UET Gaming Studio
  { title: 'Flappy Dog', studio: UET_GAMING, video: 'https://www.youtube.com/watch?v=ZaIclppFxQ0', thumbnail: t('flappy-dog.jpg') },
  { title: 'Falling Dude', studio: UET_GAMING, video: 'https://www.youtube.com/watch?v=oyoI9MDKsHM', thumbnail: t('falling-dude.jpg') },
  { title: 'City of Foods', studio: UET_GAMING, video: 'https://www.youtube.com/watch?v=DztUj93TFg8', thumbnail: t('city-of-foods.jpg') },
  { title: 'Scary House', studio: UET_GAMING, video: 'https://www.youtube.com/watch?v=yOs4N1HAZsw', thumbnail: t('scary-house.jpg') },
  { title: 'Big Foot', studio: UET_GAMING, video: 'https://www.youtube.com/watch?v=eGpjPUrb_Zo', thumbnail: t('big-foot.jpg') },
  { title: 'Halloween Escape', studio: UET_GAMING, video: 'https://www.youtube.com/watch?v=zCSDBbVt_5Q', thumbnail: t('halloween-escape.jpg') },
  { title: 'Orbia Game', studio: UET_GAMING, video: 'https://www.youtube.com/watch?v=pAWqwR5AMy8', thumbnail: t('orbia-game.jpg') },
  { title: 'Zombie Headshot', studio: UET_GAMING, video: 'https://www.youtube.com/watch?v=hlhfPOEaWSw', thumbnail: t('zombie-headshot.jpg') },
  { title: 'Balloon Game', studio: UET_GAMING, video: 'https://www.youtube.com/watch?v=1QuZRjREAEY', thumbnail: t('balloon-game.jpg') },
];
