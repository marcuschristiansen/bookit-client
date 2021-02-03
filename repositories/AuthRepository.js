export default ($axios) => ({
  csrf() {
    return $axios.get('/sanctum/csrf-cookie')
  },

  login(payload) {
    return $axios
      .post(`/login`, payload)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error.response
      })
  },

  logout() {
    return $axios.post('/logout')
  },

  register(payload) {
    return $axios
      .post('/register', payload)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error.response
      })
  },

  forgotPassword(payload) {
    return $axios
      .post('/forgot-password', payload)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error.response
      })
  },

  resetPassword(payload) {
    return $axios
      .post('/reset-password', payload)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error.response
      })
  },

  user() {
    return $axios.get(`/api/user`)
  },
})
