import { defineComponent } from 'vue'

/**
 * IDK how it's work

<route lang="yml">
  meta:
    layout: default
</route>
 */

export default defineComponent({
  setup() {
    return () => (
      <>
        <h1 class="mb-5 font-bold text-4xl">About</h1>
        <div class="max-w-screen-sm mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum recusandae rerum nobis vitae, reiciendis culpa facere id et minima officiis dolor quasi ea, consequuntur qui animi repellat iste accusantium suscipit?
        </div>
      </>
    )
  },
})
