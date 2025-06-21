import { Request, Response } from 'express'
import { SupportResource } from '../models/SupportResource'

interface Query {
  ageMin?: string
  ageMax?: string
  tags?: string
  types?: string
}

export const getSupportResources = async (req: Request, res: Response) => {
  const { tags, ageMin, ageMax, types } = req.query as Query

  let tagsArr: string[] = []
  if (tags) tagsArr = JSON.parse(tags)

  res.status(200).json({ message: 'test' })

  const resources = await SupportResource.find({
    $and: [
      {
        'age_range.minInclusive': { $lt: ageMin }
      },
      {
        $and: [
          {
            'age_range.maxExclusive': { $lte: ageMax }
          },
          {
            $and: [
              {
                type: ''
              },
              {
                $and: [
                  {
                    tags: { $in: tagsArr }
                  },
                  {}
                ]
              }
            ]
          }
        ]
      }
    ]
  })

  if (resources.length === 0) {
    res.status(404).json({ message: 'No resources found' })
    return
  }
  res.status(200).json(resources)
  return
}
