// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  experimental: { appManifest: false },
  ssr: true,
  css: ['~/assets/css/global.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'EN' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'FR' },
      { code: 'es', iso: 'es-ES', file: 'es.json', name: 'ES' },
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'no_prefix',
    fallbackLocale: 'en',
    detectBrowserLanguage: { useCookie: true, cookieKey: 'i18n_redirected' },
    compilation: {
      strictMessage: false,
      allowHtml: true,
    },
  },
  $production: {
    nitro: {
      preset: 'vercel',
    },
  },
})
