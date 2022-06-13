import {createClient} from 'next-sanity'

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)
