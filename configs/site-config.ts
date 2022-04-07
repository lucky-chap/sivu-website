const baseUrl = 'https://github.com/sivu-tutorials/website'

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Nayan Patel. All Rights Reserved.`,
  algolia: {
    apiKey: 'API KEY',
    appID: 'APP ID',
    indexName: 'INDEX NAME',
    inputSelector: '#algolia-search',
  },
  author: {
    name: 'Nayan Patel',
    github: 'https://github.com/pateln123',
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  seo: {
    title: 'Sivu',
    titleTemplate: '%s - Sivu',
    description:
      'A bank of tutorials made by open source developers, to help beginners get started in the world of website development.',
    siteUrl: 'https://sivu.tk',
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: 'https://sivu.tk',
      title: 'Sivu',
      description:
        'A bank of tutorials made by open source developers, to help beginners get started in the world of website development.',
      site_name:
        'Sivu: Simple website tutorials.',
      images: [
        {
          url: '', //TODO
          width: 1240,
          height: 480,
          alt: '', //TODO
        },
        {
          url: '', //TODO
          width: 1012,
          height: 506,
          alt: '', //TODO
        },
      ],
    },
  },
}

export default siteConfig
