export function pad (num: string | number, size = 2) {
  let n = String(num)
  while (n.length < size) n = `0${n}`
  return n
}
