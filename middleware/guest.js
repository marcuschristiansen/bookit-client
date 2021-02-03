export default async function (context) {
  try {
    await context.store.dispatch('auth/user')
    return context.redirect('/dashboard')
  } catch (error) {}
}
