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
  { name: "Sun'iy Intelekt", slug: 'artificial-intelligence' },
]

export const popularTags = [
  { name: 'ReactJS', slug: 'react-js' },
  { name: 'JavaScript', slug: 'java-script' },
  { name: 'NodeJS', slug: 'node-js' },
  { name: 'NextJS', slug: 'next-js' },
]

export const blogs = [
  {
    title: 'The AGI hype train is running out of steam',
    description:
      'While futurists and fundraisers used to make bullish predictions about artificial general intelligence, they’ve become quieter lately. Peter Thiel.',
    author: 'Thomas Macaulay',
    tags: ['Machine learning'],
    date: 'Dec 5, 2021',
    image: '/blogs/01.jpg',
  },
  {
    title: 'Creating an object that travels at 1% the speed of light?',
    description:
      'Light is fast. In fact, it is the fastest thing that exists, and a law of the universe is that nothing can move faster than light. Light travels.',
    author: 'Emma Hazel',
    tags: ['Front End'],
    date: 'Jan 12, 2021',
    image: '/blogs/02.jpg',
  },
  {
    title: 'Everything you wanted to know about the metaverse',
    description:
      'In the wake of Facebook rebranding as Meta, reflecting its focus on the “metaverse”, Microsoft has now announced it, too, will launch into this.',
    author: 'Chris Impey',
    tags: ['Backend'],
    date: 'June 5, 2022',
    image: '/blogs/03.jpg',
  },
  {
    title: 'How to hire a developer straight out of bootcamp — without getting burned',
    description:
      'There’s a worldwide talent shortage in software development, and nearly one-third of hiring managers have hired someone from a coding bootcamp to.',
    author: 'Emma Hazel',
    tags: ['Full Stack'],
    date: 'Dec 12, 2021',
    image: '/blogs/04.jpg',
  },
]

export const authors = [
  {
    name: 'Chris Impey',
    image: '/author/chris-impey.jpg',
  },
  {
    name: 'Thomas Macaulay',
    image: '/author/thomas-macaulay.jpg',
  },
  {
    name: 'Emma Hazel',
    image: '/author/emma-hazel.jpg',
  },
]


export const content = `
  <p class="w-full">What are Promises in JavaScript?</p><p>**Promises** are a key feature in JavaScript that help manage asynchronous operations. They represent a value that may be available now, or in the future, or never. Promises allow developers to write asynchronous code in a more readable and manageable way, avoiding the dreaded &quot;callback hell.&quot;</p><p></p><p>Key Concepts of Promises:</p><p></p><p>1. States of a Promise:</p><p>   - Pending: Initial state, neither fulfilled nor rejected.</p><p>   - Fulfilled: Operation completed successfully.</p><p>   - Rejected: Operation failed.</p><p></p><p>2. Creating a Promise:</p><pre><code>   javascript\n   let promise = new Promise((resolve, reject) =&gt; {\n       // Some asynchronous operation\n       let success = true; // Example condition\n       \n       if(success) {\n           resolve(&quot;Operation was successful!&quot;);\n       } else {\n           reject(&quot;Operation failed.&quot;);\n       }\n   });</code></pre><p></p><p>3. Handling Promises:</p><p>   - .then(): Used to handle a successful outcome.</p><p>   - .catch(): Used to handle errors or rejections.</p><p>   - .finally(): Executes code regardless of the promise&#39;s outcome.</p><p></p><pre><code>   javascript\n   promise.then(result =&gt; {\n       console.log(result); // Operation was successful!\n   }).catch(error =&gt; {\n       console.log(error); // Operation failed.\n   }).finally(() =&gt; {\n       console.log(&quot;Operation complete.&quot;);\n   });</code></pre><p></p><p>Why Use Promises?</p><p></p><p>Promises simplify handling asynchronous operations, especially when dealing with sequences of asynchronous tasks. They enable chaining, which allows for cleaner code:</p><p></p><pre><code>javascript\ndoSomething()\n   .then(result =&gt; doSomethingElse(result))\n   .then(newResult =&gt; doAnotherThing(newResult))\n   .catch(error =&gt; console.log(error));</code></pre><p>What are Classes in JavaScript?</p><p></p><p>Classes in JavaScript are a blueprint for creating objects. They provide a more structured way to define object templates, bringing object-oriented programming principles to JavaScript. While JavaScript has always been a prototype-based language, the introduction of classes in ECMAScript 6 (ES6) made it easier to work with objects and inheritance.</p><p></p><p>Key Concepts of Classes:</p><p></p><p>1. Defining a Class:</p><pre><code>   javascript\n   class Animal {\n       constructor(name, species) {\n           this.name = name;\n           this.species = species;\n       }\n\n\n       describe() {\n           return {this.name} is a {this.species}.;\n       }\n   }</code></pre><p>2. Creating an Instance of a Class:</p><pre><code>   javascript\n   let lion = new Animal(&quot;Leo&quot;, &quot;Lion&quot;);\n   console.log(lion.describe()); // Leo is a Lion.</code></pre><p>3. Inheritance with Classes:</p><p>   Inheritance allows one class to inherit properties and methods from another class.</p><pre><code> javascript\n   class Dog extends Animal {\n       constructor(name, breed) {\n           super(name, &quot;Dog&quot;);\n           this.breed = breed;\n       }\n       bark() {\n           return &quot;Woof! Woof!&quot;;\n       }\n   }\n   let myDog = new Dog(&quot;Rex&quot;, &quot;Golden Retriever&quot;);\n   console.log(myDog.describe()); // Rex is a Dog.\n   console.log(myDog.bark()); // Woof! Woof!</code></pre><p>Why Use Classes?</p><p></p><p>Classes offer a cleaner, more intuitive syntax for creating and managing objects. They provide a clear structure for your code and make it easier to implement inheritance and other object-oriented principles.</p><p>Combining Promises and Classes</p><pre><code>javascript\n   class Dog extends Animal {\n       constructor(name, breed) {\n           super(name, &quot;Dog&quot;);\n           this.breed = breed;\n       }\n       bark() {\n           return &quot;Woof! Woof!&quot;;\n       }\n   }\n   let myDog = new Dog(&quot;Rex&quot;, &quot;Golden Retriever&quot;);\n   console.log(myDog.describe()); // Rex is a Dog.\n   console.log(myDog.bark()); // Woof! Woof!</code></pre><p>Promises and Classes can be combined to manage asynchronous operations within object-oriented structures. For example, consider a class that fetches data from an API:</p><pre><code>javascript\nclass APIService {\n    constructor(baseURL) {\n        this.baseURL = baseURL;\n    }\n\n\n    fetchData(endpoint) {\n        return new Promise((resolve, reject) =&gt; {\n            fetch(this.baseURL + endpoint)\n                .then(response =&gt; {\n                    if (response.ok) {\n                        return response.json();\n                    } else {\n                        reject(&quot;Error: &quot; + response.status);\n                    }\n                })\n                .then(data =&gt; resolve(data))\n                .catch(error =&gt; reject(error));\n        });\n    }\n}\n\n\nlet api = new APIService(&quot;https://jsonplaceholder.typicode.com/&quot;);\napi.fetchData(&quot;/posts&quot;)\n    .then(posts =&gt; console.log(posts))\n    .catch(error =&gt; console.log(error));</code></pre><p>This example demonstrates how a class can manage API requests, returning a Promise to handle asynchronous responses.</p><p>Conclusion</p><p></p><p>Promises and Classes in JavaScript are powerful tools that enhance code readability, maintainability, and efficiency. Promises help manage asynchronous operations seamlessly, while Classes provide a structured approach to object creation and inheritance. By understanding and utilizing these concepts, developers can write cleaner, more robust JavaScript code that scales well with complexity.</p><p>Whether you are building a simple web application or a complex enterprise solution, mastering Promises and Classes will significantly improve your JavaScript development skills.</p><p>Would you like to see visuals or code examples for the blog post? I can generate images to illustrate the concepts discussed.</p>
`