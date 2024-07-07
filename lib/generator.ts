
// Random Password Generator

export function RandomGenerator(length: number, uppercase: boolean, symbols: boolean, numbers: boolean, fullUpper: boolean) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const nums = '0123456789'
  const sym = '!@#$%^'
  let all = ''
  let password = ''
  if (uppercase || fullUpper) {
    all += upper
  }
  if (symbols) {
    all += sym
  }
  if (numbers) {
    all += nums
  }
  if (!fullUpper) {
    all += lower
  }
  for (let i = 0; i < length; i++) {
    password += all[Math.floor(Math.random() * all.length)]
  }
  return password
}