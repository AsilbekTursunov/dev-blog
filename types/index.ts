export type ChildrenProps = {
  children: React.ReactNode
}
export interface IBlog {
  title: string
  description: string
  content: {
    html: string
  }
  author: IAuthor
  category: ICatergory
  tag: ITag
  slug: string
  id: string
  image: { url: string }
  createdAt: string
}

export interface Iform {
  name: string
  email: string
  message: string
}

export interface IAuthor {
  id: string
  name: string
  bio: string
  image: { url: string }
  blogs?: IBlog[]
}
export interface ICatergory {
  categoryTitle: string
  slug: string
}

export interface ITag {
  tagTitle: string
  slug: string
}

export interface ITags {
  tagTitle: string
  slug: string
  blogs: IBlog[]
}
export interface ICatergory {
  categoryTitle: string
  slug: string
  blogs: IBlog[]
}
export interface IArchivedBlog {
  year: string
  blogs: IBlog[]
}

export interface IMeal {
  id: string
  mealTitle: string
  imageUrl: {
    url: string
    id: string
  }
  category: string
}

export interface IMenuMeal {
  id: string
  title: string
  description: string
  image: string
  quantity: number
  price: number
  lastPrice: number
  types: ITypes[]
  order: number
}

export interface ITypes {
  name: string
  price: number
  label: string
}
