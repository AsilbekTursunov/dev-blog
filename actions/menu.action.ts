import { IMeal } from '@/types'
import request, { gql } from 'graphql-request'
const graphAPI = process.env.NEXT_PUBLIC_HYGRAPHCMS_ENDPOINT!
export const getMeals = async () => {
  const query = gql`
    query MyQuery {
      oddmenus {
        id
        mealTitle
        imageUrl {
          url
          id
        }
        category
      }
    }
  `

  const { oddmenus } = await request<{ oddmenus: IMeal[] }>(graphAPI, query)
  return oddmenus
}
