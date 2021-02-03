<template>
  <div>
    <Navbar></Navbar>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          User Dashboard
        </h1>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>
