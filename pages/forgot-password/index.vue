<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
      <Card title="Reset Password">
        <!-- Validation Alerts -->
        <Alert v-if="invalidEmail" type="danger" icon="exclamation">
          <p slot="header" class="font-bold">Invalid email address</p>
          <p slot="description" class="text-sm">
            The email address you have entered is invalid
          </p>
        </Alert>

        <Alert v-if="passwordResetEmailSent" type="success" icon="check">
          <p slot="header" class="font-bold">
            Password reset instructions sent
          </p>
          <p slot="description" class="text-sm">
            Please check your inbox for password reset instructions.
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

          <!-- Auth Buttton -->
          <Button
            :loading="isFormSubmitting"
            type="button"
            class="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
            @click="handleForgotPassword"
          >
            Reset password
          </Button>

          <!-- Another Auth Routes -->
          <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
            <nuxt-link :to="{ name: 'login' }" class="flex-2 underline">
              Back to login
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
  <!-- Root element for center items -->
</template>

<script>
import global from '@/mixins/global'
import Card from '@/components/Card'
import Button from '@/components/Button'
import InputField from '@/components/InputField'

export default {
  components: {
    Card,
    Button,
    InputField,
  },
  mixins: [global],
  layout: 'guest',
  data() {
    return {
      formData: {
        email: '',
      },
      isFormSubmitting: false,
      invalidEmail: false,
      passwordResetEmailSent: false,
    }
  },
  methods: {
    async handleForgotPassword() {
      this.isFormSubmitting = true
      this.invalidEmail = false
      this.passwordResetEmailSent = false

      if (!this.isValidEmail(this.formData.email)) {
        this.isFormSubmitting = false
        return (this.invalidEmail = true)
      }

      await this.$store.dispatch('auth/forgotPassword', this.formData)

      this.passwordResetEmailSent = true
      this.isFormSubmitting = false
    },
  },
}
</script>
