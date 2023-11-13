import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export interface Brand {
  name: string;
  headline: string;
  description: string;
  image?: SanityImageObject;
}

export interface Socials {
  platform: string;
  link: string;
}
