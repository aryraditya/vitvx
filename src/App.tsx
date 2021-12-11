import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'App',
  setup() {
    useHead({
      title: 'Vitvx',
      meta: [
        { name: 'description', content: 'Opinionated Vite Starter Template' },
      ],
    })

    return () => (
      <>
        <RouterView />
      </>
    )
  },
})
