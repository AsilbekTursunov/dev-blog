export type ChildrenProps = {
  children: React.ReactNode
}
export interface IBlog {
  title: string
  description: string
  author: string
  date: string
  image: string
  tags: string[]
}

export interface IAuthor {
  name: string
  image: string
}
export interface Iform {
  name: string
  email: string
  message: string
}
