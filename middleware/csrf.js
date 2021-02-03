export default async function (context) {
  await context.$repositories.auth.csrf()
}
