import axios from 'axios'

class AuthHttp {
  constructor() {
    this.prefix = `${this.$config.baseURL}`
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.defaults.withCredentials = true
  }

  // async register(formData) {
  //   return await axios
  //     .post(`${this.prefix}/register`, formData)
  //     .then((res) => {
  //       return res
  //     })
  //     .catch((err) => {
  //       return err
  //     })
  // }

  async login(formData) {
    return await axios
      .post(`${this.prefix}/login`, formData)
      .then(() => {
        return this.user()
      })
      .catch((err) => {
        return err
      })
  }

  // async logout() {
  //   return await axios
  //     .post(`${this.prefix}/logout`)
  //     .then((res) => {
  //       return res
  //     })
  //     .catch((err) => {
  //       return err
  //     })
  // }

  async user() {
    return await axios.get(`${this.prefix}/user`)
  }
}

export default AuthHttp
