<template>
  <Header />
  <main class="container flex-grow px-4 mx-auto my-12">
    <slot />
  </main>
</template>

<script>
import Header from "../components/Header2.vue"

export default {
  components: {
    Header,
    
  },
}
</script>