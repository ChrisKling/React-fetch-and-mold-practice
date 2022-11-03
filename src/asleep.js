export default async function asleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
