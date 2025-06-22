// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/original.css'
  ],
  app: {
    head: {
      title: 'Yash Pawar | Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Yash Pawar, asyncyash@gmail.com' },
        { name: 'description', content: 'Portfolio of Yash Pawar, a Full Stack Developer with 5+ years of experience specializing in Go, Node.js, React, and more. Explore my projects, skills, and professional experience.' },
        { name: 'keywords', content: 'yash pawar, portfolio, resume, full stack developer, Go, Node.js, React, Next.js, Vue.js, PHP, Laravel, AWS' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css',
          crossorigin: 'anonymous', referrerpolicy: 'no-referrer' }
      ]
    }
  }
})
