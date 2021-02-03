<template>
  <!-- Root element for center items -->
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
      <Card title="Create new Password">
        <!-- Validation Alerts -->
        <Alert
          v-if="invalidPasswordReset.status"
          type="danger"
          icon="exclamation"
        >
          <p slot="header" class="font-bold">
            {{ invalidPasswordReset.message }}
          </p>
          <div
            v-if="!isEmptyObject(invalidPasswordReset.errors)"
            slot="description"
            class="text-sm"
          >
            <ul
              v-for="(errors, fieldIndex) in invalidPasswordReset.errors"
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
            @click="handleResetPassword"
          >
            Reset password
          </Button>
        </form></Card
      >
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
  data() {
    return {
      formData: {
        email: '',
        token: '',
        password: '',
        password_confirmation: '',
      },
      invalidPasswordReset: {
        status: false,
        message: '',
        errors: {},
      },
      isFormSubmitting: false,
    }
  },
  methods: {
    async handleResetPassword() {
      this.invalidPasswordReset = {
        status: false,
        message: '',
        errors: {},
      }
      this.isFormSubmitting = true

      this.formData.token = this.$route.params.token
      this.formData.email = this.$route.query.email

      const response = await this.$store.dispatch(
        'auth/resetPassword',
        this.formData
      )

      if (response.status === 422) {
        const { message, errors } = response.data
        this.invalidPasswordReset.status = true
        this.invalidPasswordReset.message = message
        this.invalidPasswordReset.errors = errors
        this.isFormSubmitting = false
        return
      }

      if (response.status === 200) {
        return this.$router.push('/login')
      }

      this.invalidPasswordReset.message = 'An unexpected error occurred'
      this.isFormSubmitting = false
    },
  },
}
</script>
