import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import dotenv from 'dotenv';

// Explicitly load the local .env file if it's missing during monorepo execution
dotenv.config({ path: './.env' });

export default defineConfig({
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      useCdn: false, // Set to true for production edge caching, false for instant preview updates
      apiVersion: '2024-03-15', // Use a modern date for the API version
    }),
  ],
});