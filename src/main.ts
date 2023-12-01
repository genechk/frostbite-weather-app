import messages from '@intlify/unplugin-vue-i18n/messages'
import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router/auto'

import App from './App.vue'

// Global styles
import '@unocss/reset/tailwind.css'
import './style.css'

const head = createHead()
const pinia = createPinia()
const i18n = createI18n({
  locale: 'uk',
  messages,
})
const router = createRouter({
  history: createWebHistory(),
})

export default createApp(App)
  .use(head)
  .use(pinia)
  .use(i18n)
  .use(router)
  .mount('#app')
