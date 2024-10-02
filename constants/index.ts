import { Contact2, FileCode2, FolderArchive, Home, ListCollapse, Menu } from 'lucide-react'

export const navLinks = [
  { name: 'Home', route: '/', icon: Home },
  { name: 'About', route: '/about', icon: ListCollapse },
  { name: 'Blogs', route: '/blogs', icon: FileCode2 },
  { name: 'Archive', route: '/blogs/archive', icon: FolderArchive },
  { name: 'Contact', route: '/contact', icon: Contact2 },
  { name: 'Oddmenu', route: '/oddmenu', icon: Menu },
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
    category: 'menu',
  },
  {
    title: 'Breackfast (8:AM to 10:AM)',
    imageUrl: '/oddmenu/breackfast.jpg',
    category: 'bar',
  },
  {
    title: 'Chilken Meals and Burgers',
    imageUrl: '/oddmenu/chicken.jpg',
    category: 'menu',
  },
  {
    title: 'Fastfood (Gamburger, Hotdog, Cheezeburger)',
    imageUrl: '/oddmenu/fasfood.jpg',
    category: 'menu',
  },
  {
    title: 'Vegetarian Meals',
    imageUrl: '/oddmenu/vegetarian.jpg',
    category: 'menu',
  },
  {
    title: 'Diet meals to lose weight',
    imageUrl: '/oddmenu/diet.jpg',
    category: 'bar',
  },
]

export const menus = [
  {
    id: 'c145234v634c624634',
    title: 'Ovqat',
    description: 'Here you can add additional information for your guests, like taxes',
    image:
      'https://dyj6gt4964deb.cloudfront.net/images/crop-a26c8729-a6cc-497b-af6e-0bf45fa883d2.jpeg',
    quantity: 700,
    price: 50000,
    lastPrice: 40000,
    types: [
      {
        name: 'Chocolate 5g',
        price: 1,
        label: 'chocolate',
      },
      {
        name: 'Berries 5g',
        price: 1.5,
        label: 'berries',
      },
    ],
    order: 1,
  },
  {
    id: 'c534345c153434v',
    title: 'Pizza 1',
    description: `Here you can add additional information for your guests, like taxes, service fees,restaurant working hours`,
    image: 'https://dyj6gt4964deb.cloudfront.net/images/1d63cb91-02e3-45f4-92d6-c6d00781b596.jpg',
    quantity: 700,
    price: 50000,
    lastPrice: 40000,
    types: [
      {
        name: 'Small',
        price: 15,
        label: 'small',
      },
      {
        name: 'Medium',
        price: 20,
        label: 'medium',
      },
      {
        name: 'Large',
        price: 25,
        label: 'large',
      },
    ],
    order: 1,
  },
]
