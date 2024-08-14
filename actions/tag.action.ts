import { IBlog, ICatergory, ITags } from '@/types'
import request, { gql } from 'graphql-request'
const graphAPI = process.env.NEXT_PUBLIC_HYGRAPHCMS_ENDPOINT!
export const getBlogsByTag = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      tag(where: { slug: $slug }) {
        tagTitle
        slug
        blogs {
          title
          description
          content {
            html
          }
          category {
            categoryTitle
            slug
          }
          tag {
            tagTitle
            slug
          }
          slug
          id
          author {
            ... on Author {
              id
              name
              image {
                url
              }
              bio
            }
          }
          createdAt
          image {
            url
          }
        }
      }
    }
  `

  const { tag } = await request<{ tag: ITags }>(graphAPI, query, { slug })
  return tag
}

export const getBlogsByCategory = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
        categoryTitle
        slug
        blogs {
          title
          description
          content {
            html
          }
          category {
            categoryTitle
            slug
          }
          tag {
            tagTitle
            slug
          }
          slug
          id
          author {
            ... on Author {
              id
              name
              image {
                url
              }
              bio
            }
          }
          createdAt
          image {
            url
          }
        }
      }
    }
  `

  const { category } = await request<{ category: ICatergory }>(graphAPI, query, { slug })
  return category
}

export const getAllCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        categoryTitle
        slug
        blogs {
          slug
        }
      }
    }
  `
  const { categories } = await request<{ categories: ICatergory[] }>(graphAPI, query)
  return categories
}
export const getAllTags = async () => {
  const query = gql`
    query MyQuery {
      tags {
        tagTitle
        slug
        blogs {
          id
        }
      }
    }
  `
  const { tags } = await request<{ tags: ITags[] }>(graphAPI, query)
  return tags
}
