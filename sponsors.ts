interface User {
  name: string
  image: string
  url: string
  type: 'company' | 'project' | 'portfolio'
}

const users: User[] = [
  {
    name: 'Vercel',
    image: '/logos/vercel-logotype-dark.svg',
    url: 'https://vercel.com/?utm_source=sivu&utm_campaign=oss',
    type: 'company',
  },
  {
    name: 'Canny',
    image: '/logos/canny-wordmark-purple.svg',
    url: 'https://sivu.canny.io/',
    type: 'company',
  },
  {
    name: 'Koyeb',
    image: '/logos/koyeb-logo.svg',
    url: 'https://www.koyeb.com/',
    type: 'company',
  },
  {
    name: 'Algolia',
    image: '/logos/logo-algolia-nebula-blue-full.svg',
    url: 'https://www.algolia.com/',
    type: 'company',
  },
  {
    name: 'Gitpod',
    image: '/gitpod.png',
    url: 'https://www.gitpod.io/',
    type: 'company',
  },
  {
    name: 'Instatus',
    image: '/instatus-logo-black.svg',
    url: 'https://instatus.com/',
    type: 'company',
  },
  {
    name: 'Microsoft Azure',
    image: '/microsoftazurecropped.png',
    url: 'https://azure.microsoft.com/en-us/',
    type: 'company',
  },
]

export default users