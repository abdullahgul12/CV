export type SocialId = 'linkedin' | 'x' | 'instagram' | 'facebook';

export type SocialLink = { id: SocialId; label: string; url: string };

export const contact = {
  email: 'abdullah_gul@Live.com',
  emailHref: 'mailto:abdullah_gul@Live.com',
  phone: '+92 332 4847296',
  phoneHref: 'tel:+923324847296',
  address: 'University of Engineering and Technology Lahore, Pakistan',
};

// Display order: LinkedIn, X, Instagram, Facebook
export const socials: SocialLink[] = [
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullah-gul-424a6414b/' },
  { id: 'x', label: 'X (Twitter)', url: 'https://twitter.com/AbdullahGulAwa1' },
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/abdullah.gul12/' },
  { id: 'facebook', label: 'Facebook', url: 'https://web.facebook.com/abdullahgul11' },
];
