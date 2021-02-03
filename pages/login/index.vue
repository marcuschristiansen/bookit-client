<template>
  <!-- Root element for center items -->
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
      <!-- Auth Card -->
      <Card title="Login">
        <!-- Validation Alerts -->
        <Alert v-if="invalidLogin" type="danger" icon="exclamation">
          <p slot="header" class="font-bold">Login unsuccessful</p>
          <p slot="description" class="text-sm">
            Your email or password is incorrect. Please try again or reset your
            password.
          </p>
        </Alert>

        <form class="mt-10" method="POST">
          <!-- Email Input -->
          <InputField
            v-model="formData.email"
            type="email"
            name="email"
            placeholder="Email address"
            required="required"
            >Email</InputField
          >

          <!-- Password Input -->
          <InputField
            v-model="formData.password"
            type="password"
            name="password"
            placeholder="Password"
            required="required"
            >Password</InputField
          >

          <!-- Auth Buttton -->
          <Button
            :loading="isFormSubmitting"
            type="button"
            @click="handleLogin"
          >
            Login
          </Button>

          <!-- Another Auth Routes -->
          <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
            <nuxt-link
              :to="{ name: 'forgot-password' }"
              class="flex-2 underline"
            >
              Forgot password?
            </nuxt-link>

            <p class="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">or</p>

            <nuxt-link :to="{ name: 'register' }" class="flex-2 underline">
              Create an Account
            </nuxt-link>
          </div>
        </form>
      </Card>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/Alert'
import Card from '@/components/Card'
import Button from '@/components/Button'
import InputField from '@/components/InputField'
export default {
  components: {
    Alert,
    Card,
    Button,
    InputField,
  },
  layout: 'guest',
  middleware: ['csrf'],
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      invalidLogin: false,
      isFormSubmitting: false,
    }
  },
  methods: {
    async handleLogin() {
      this.invalidLogin = false
      this.isFormSubmitting = true

      const response = await this.$store.dispatch('auth/login', this.formData)

      if (response.status !== 200) {
        this.invalidLogin = true
        this.isFormSubmitting = false
        return
      }

      return this.$router.push('/dashboard')
    },
  },
}
</script>
