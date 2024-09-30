import { Contact2, FileCode2, FolderArchive, Home, ListCollapse } from 'lucide-react'

export const navLinks = [
  { name: 'Home', route: '/', icon: Home },
  { name: 'About', route: '/about', icon: ListCollapse },
  { name: 'Blogs', route: '/blogs', icon: FileCode2 },
  { name: 'Archive', route: '/blogs/archive', icon: FolderArchive },
  { name: 'Contact', route: '/contact', icon: Contact2 },
]

export const popularCategories = [
  { name: 'Front End', slug: 'front-end' },
  { name: 'Back End', slug: 'back-end' },
  { name: 'Full Stack', slug: 'full-stack' },
  { name: 'Artificial Intelligence', slug: 'artificial-intelligence' },
]

export const popularTags = [
  { name: 'Express.Js', slug: 'expressjs' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'NodeJS', slug: 'nodejs' },
  { name: 'NextJS', slug: 'nextjs' },
]

export const meals = [
  {
    title: 'Pizza (8:AM to 10:PM)',
    imageUrl: '/oddmenu/pizza.jpg',
    category:'menu'
  },
  {
    title: 'Breackfast (8:AM to 10:AM)',
    imageUrl: '/oddmenu/breackfast.jpg',
    category:'bar'
  },
  {
    title: 'Chilken Meals and Burgers',
    imageUrl: '/oddmenu/chicken.jpg',
    category:'menu'
  },
  {
    title: 'Fastfood (Gamburger, Hotdog, Cheezeburger)',
    imageUrl: '/oddmenu/fasfood.jpg',
    category:'menu'
  },
  {
    title: 'Vegetarian Meals',
    imageUrl: '/oddmenu/vegetarian.jpg',
    category:'menu'
  },
  {
    title: 'Diet meals to lose weight',
    imageUrl: '/oddmenu/diet.jpg',
    category:'bar'
  },
]
