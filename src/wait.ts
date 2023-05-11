export async function wait(time: number): Promise<null> {
  return new Promise((resolve) => setTimeout(() => resolve(null), time))
}
