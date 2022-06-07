import * as prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown){
  const client = prismic.createClient(
    process.env.PRISMIC_END_POINT,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )

  return client
}