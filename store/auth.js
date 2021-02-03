export const state = () => ({
  user: false,
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  unsetUser(state) {
    state.user = false
  },
}

export const actions = {
  async login({ commit }, formData) {
    return await this.$repositories.auth.login(formData)
  },

  async logout({ commit }) {
    const response = await this.$repositories.auth.logout()
    if (response.status === 204) {
      commit('unsetUser')
    }
    return response
  },

  async register({ commit }, formData) {
    return await this.$repositories.auth.register(formData)
  },

  async forgotPassword({ commit }, formData) {
    return await this.$repositories.auth.forgotPassword(formData)
  },

  async resetPassword({ commit }, formData) {
    return await this.$repositories.auth.resetPassword(formData)
  },

  async user({ commit }) {
    const response = await this.$repositories.auth.user()
    if (response.status === 200) {
      commit('setUser', response.data)
    }
    return response
  },
}
