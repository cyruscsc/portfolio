import { createClient, type ClientConfig } from '@sanity/client';

const clientConfig: ClientConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-11-11',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
};

const client = createClient(clientConfig);

export default client;
