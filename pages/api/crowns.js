// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API_ENDPOINT = process.env.CROWN_API_ENDPOINT

export default async function handler(req, res) {
  const allRank = await fetch(API_ENDPOINT)
  const rank = await allRank.json()

  if (rank.error) {
    res.statusCode = 500
    res.end('Internal Server Error')
  }

  res.statusCode = 200
  res.json(rank)
}
