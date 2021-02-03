<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            :aria-expanded="open"
            @click="open = !open"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="h-6 w-6"
              :class="open ? 'hidden' : 'block'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              :class="open ? 'block' : 'hidden'"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="sm:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <img
              class="hidden sm:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <nuxt-link
                v-if="user"
                :to="{ name: 'dashboard' }"
                class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                ><font-awesome-icon :icon="['fas', 'shapes']" />
                Dashboard</nuxt-link
              >
              <!-- <a
                href="#"
                class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                ><font-awesome-icon :icon="['fas', 'shapes']" /> Dashboard</a
              > -->

              <a
                v-if="user"
                href="#"
                class="text-gray-300 px-3 py-2 hover:bg-gray-700 hover:text-white"
                ><font-awesome-icon :icon="['fas', 'calendar-alt']" />
                Bookings</a
              >
              <a
                v-if="user"
                href="#"
                class="text-gray-300 px-3 py-2 hover:bg-gray-700 hover:text-white"
                ><font-awesome-icon :icon="['fas', 'users']" /> Members</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="space-x-4 sm:flex hidden">
            <nuxt-link
              v-if="!user"
              :to="{ name: 'login' }"
              class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login</nuxt-link
            >
            <nuxt-link
              v-if="!user"
              :to="{ name: 'register' }"
              class="bg-teal-600 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Create Account</nuxt-link
            >
          </div>
          <!-- Profile dropdown -->
          <div v-if="user" class="ml-3 relative">
            <div>
              <button
                id="user-menu"
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  @click="profile = !profile"
                />
              </button>
            </div>
            <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
            <div
              v-if="user"
              :class="profile ? 'block' : 'hidden'"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <a
                v-if="user"
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                >Your Profile</a
              >
              <a
                v-if="user"
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                @click.prevent="handleLogout"
                >Logout</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
    <div class="sm:hidden" :class="open ? 'block' : 'hidden'">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <!-- <a
          href="#"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >Dashboard</a
        > -->
        <nuxt-link
          v-if="user"
          :to="{ name: 'dashboard' }"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Dashboard</nuxt-link
        >
        <a
          v-if="user"
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Bookings</a
        >
        <a
          v-if="user"
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Members</a
        >
        <nuxt-link
          v-if="!user"
          :to="{ name: 'register' }"
          class="text-gray-300 bg-teal-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Create Account</nuxt-link
        >
        <nuxt-link
          v-if="!user"
          :to="{ name: 'login' }"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Login</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      profile: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
  methods: {
    async handleLogout() {
      const response = await this.$store.dispatch('auth/logout')
      if (response.status !== 204) {
        // handle error
      }

      return this.$router.push('/login')
    },
  },
}
</script>
