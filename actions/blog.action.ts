import { IArchivedBlog, IAuthor, IBlog } from '@/types'
import request, { gql } from 'graphql-request'
import { cache } from 'react'
const graphAPI = process.env.NEXT_PUBLIC_HYGRAPHCMS_ENDPOINT!

export const getBlocks = async () => {
  const query = gql`
    query MyQuery {
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
  `
  const { blogs } = await request<{ blogs: IBlog[] }>(graphAPI, query)
  return blogs
}

export const getBlog = cache(async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: { slug: $slug }) {
        id
        title
        description
        slug
        image {
          url
        }
        content {
          html
        }
        createdAt
        author {
          ... on Author {
            id
            name
            bio
            image {
              url
            }
          }
        }
      }
    }
  `
  const { blog } = await request<{ blog: IBlog }>(graphAPI, query, { slug })
  return blog
})

export const getAuthors = async () => {
  const query = gql`
    query MyQuery {
      authors {
        id
        name
        bio
        image {
          url
        }
        blogs {
          id
        }
      }
    }
  `

  const { authors } = await request<{ authors: IAuthor[] }>(graphAPI, query)
  return authors
}

export const getAuthor = cache(async (id: string) => {
  const query = gql`
    query MyQuery($id: ID) {
      author(where: { id: $id }) {
        id
        name
        bio
        image {
          url
        }
        blogs {
          id
          title
          slug
          description
          image {
            url
          }
          content {
            html
          }
          createdAt
          author {
            ... on Author {
              id
              name
              bio
              image {
                url
              }
            }
          }
          category {
            categoryTitle
            slug
          }
          tag {
            tagTitle
            slug
          }
        }
      }
    }
  `
  const { author } = await request<{ author: IAuthor }>(graphAPI, query, { id })
  return author
})

export const getContainsBlogs = async (title: string) => {
  const query = gql`
    query MyQuery($title: String) {
      blogs(where: { title_contains: $title }) {
        title
        slug
        image {
          url
        }
      }
    }
  `
  const { blogs } = await request<{ blogs: IBlog[] }>(graphAPI, query, { title })
  return blogs
}
export const getArchiveBlogs = async () => {
  const query = gql`
    query MyQuery {
      blogs(where: { archive: true }) {
        title
        slug
        createdAt
      }
    }
  `
  const { blogs } = await request<{ blogs: IBlog[] }>(graphAPI, query)

  const filteredBlogs = blogs.reduce((acc: { [year: string]: IArchivedBlog }, blog: IBlog) => {
    const year = blog.createdAt.substring(0, 4)
    if (!acc[year]) {
      acc[year] = { year, blogs: [] }
    }
    acc[year].blogs.push(blog)
    return acc
  }, {})
  const results: IArchivedBlog[] = Object.values(filteredBlogs)
  return results
}

export const getLastBlocks = async () => {
  const query = gql`
    query MyQuery {
      blogs(last: 3) {
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
  `
  const { blogs } = await request<{ blogs: IBlog[] }>(graphAPI, query)
  return blogs
}
