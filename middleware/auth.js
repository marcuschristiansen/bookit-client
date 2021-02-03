export default async function (context) {
  if (!context.store.state.user) {
    try {
      return await context.store.dispatch('auth/user')
    } catch (error) {
      return context.redirect('/login')
    }
  }
}
