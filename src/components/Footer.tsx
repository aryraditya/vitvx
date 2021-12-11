import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  setup() {
    return () => (
      <>
        <nav class="text-sm mt-6">
          <RouterLink class="icon-btn mx-2 underline" to="/">
            Home page
          </RouterLink>

          <RouterLink class="icon-btn mx-2 underline" to="/about">
            About
          </RouterLink>
        </nav>
      </>
    )
  },
})
