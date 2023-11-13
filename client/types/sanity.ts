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

export interface Socials {
  platform: string;
  link: string;
}
