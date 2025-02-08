import sanityClient from '@sanity/client';

// Sanity client configuration
export const client = sanityClient({
  projectId: 'vbxee77u',  // Replace with your Sanity project ID
  dataset: 'production',       // Replace with your dataset name (usually 'production')
  useCdn: true,                // Set to false if you want fresh data each time
});
