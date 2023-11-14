import { PortableTextBlock } from '@portabletext/types';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export interface Brand {
  name: string;
  headline: string;
  description: string;
  image?: SanityImageObject;
}

export interface About {
  title: string;
  description: PortableTextBlock[];
  image?: SanityImageObject;
}

export interface Project {
  image: SanityImageObject;
  title: string;
  description: PortableTextBlock[];
  projectLink: string;
  codeLink: string;
  tags: Skill[];
  order: number;
}

export interface Skill {
  name: string;
  icon: SanityImageObject;
  category: string;
  order: number;
}

export interface Social {
  platform: string;
  link: string;
}
