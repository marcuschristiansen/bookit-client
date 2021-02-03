<template>
  <!-- Root element for center items -->
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
      <Card title="Create an Account">
        <!-- Validation Alerts -->
        <Alert v-if="invalidRegister.status" type="danger" icon="exclamation">
          <p slot="header" class="font-bold">{{ invalidRegister.message }}</p>
          <div
            v-if="!isEmptyObject(invalidRegister.errors)"
            slot="description"
            class="text-sm"
          >
            <ul
              v-for="(errors, fieldIndex) in invalidRegister.errors"
              :key="fieldIndex"
              class="list-disc"
            >
              <li v-for="(error, errorIndex) in errors" :key="errorIndex">
                {{ error }}
              </li>
            </ul>
          </div>
        </Alert>

        <form class="mt-10" method="POST">
          <!-- Name Input -->
          <InputField
            v-model="formData.name"
            type="text"
            name="name"
            placeholder="Name"
            required="required"
            >Name</InputField
          >

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

          <!-- Password Confirmation Input -->
          <InputField
            v-model="formData.password_confirmation"
            type="password"
            name="password-confirmation"
            placeholder="Confirm Password"
            required="required"
            >Confirm Password</InputField
          >

          <!-- Auth Buttton -->
          <Button
            :loading="isFormSubmitting"
            type="button"
            @click="handleRegister"
          >
            Create new account
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

            <nuxt-link :to="{ name: 'login' }" class="flex-2 underline">
              Already have an account?
            </nuxt-link>
          </div>
        </form>
      </Card>
    </div>
  </div>
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
  middleware: ['csrf'],
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      invalidRegister: {
        status: false,
        message: '',
        errors: {},
      },
      isFormSubmitting: false,
    }
  },
  methods: {
    async handleRegister() {
      this.invalidRegister = {
        status: false,
        message: '',
        errors: {},
      }
      this.isFormSubmitting = true

      const response = await this.$store.dispatch(
        'auth/register',
        this.formData
      )

      if (response.status === 422) {
        const { message, errors } = response.data
        this.invalidRegister.status = true
        this.invalidRegister.message = message
        this.invalidRegister.errors = errors
        this.isFormSubmitting = false
        return
      }

      if (response.status === 201) {
        return this.$router.push('/dashboard')
      }

      this.invalidRegister.message = 'An unexpected error occurred'
      this.isFormSubmitting = false
    },
  },
}
</script>
