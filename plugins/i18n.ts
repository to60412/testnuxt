import { createI18n } from 'vue-i18n'
import tw from '~/locales/tw.json'
import cn from '~/locales/cn.json'
import en from '~/locales/en.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'tw',
    messages: {
        tw,
        en, 
        cn
    }
  })

  vueApp.use(i18n)
})