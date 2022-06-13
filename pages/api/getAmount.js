// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {sanityClient} from '@/lib/sanity'

import {groq} from 'next-sanity'

const amountQuery = groq`
  *[_type=="token-sale"] {
    _id,
    ...
  }
`

export default async function handler(req, res) {
  const saleRound = await sanityClient.fetch(amountQuery)

  res.status(200).json({saleRound})
}
