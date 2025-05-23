export function arrayToChunks<T>(arr: T[], len: number): T[][] {
  const chunks = []
  let i = 0
  const n = arr.length
  while (i < n) {
    chunks.push(arr.slice(i, i + len))
    i += len
  }
  return chunks
}
