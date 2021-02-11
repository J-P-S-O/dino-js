export default function thrown(rson: String, num: number | undefined) {
  console.log("Dino-error: " + rson);
  process.exit(num || 1);
}
