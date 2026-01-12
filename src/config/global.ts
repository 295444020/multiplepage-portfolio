export const globalConfig = {
  site: {
    name: "Your Portfolio Name",
    author: "Jacky Chen",
    description: "Jacky Chen's Blog",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Jacky Chen. All rights reserved.",
    social: {
      twitter: "https://x.com/TencentCloudEO",
      github: "https://github.com/295444020",
      email: "chenxuvip@gmail.com"
    }
  }
} as const; 
