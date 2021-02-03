<template>
  <div>
    <Navbar></Navbar>
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
  middleware: ['guest'],
}
</script>
