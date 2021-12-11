import { defineComponent } from 'vue'

/**
 * IDK how it's work

<route lang="yml">
  meta:
    layout: home
</route>
 */

export default defineComponent({
  setup() {
    return () => (
      <>
        <h1 class="mb-5 font-bold text-4xl">Home</h1>

        <div class="max-w-screen-sm mx-auto">
          <img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" loading="lazy" />
        </div>
        <p class="text-center">
          Image from <a href="https://unsplash.com/photos/d2w-_1LJioQ" target="_blank" rel="noreferrer">Unsplash</a>.
        </p>
      </>
    )
  },
})
