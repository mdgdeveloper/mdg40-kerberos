
// Random Password Generator

export function RandomGenerator(length: number, uppercase: boolean, symbols: boolean, numbers: boolean, fullUpper: boolean) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const nums = '0123456789';
  const sym = '!@#$%^&*()';
  let all = '';
  let password = '';
  let mandatoryParts = '';

  // Ensure at least one character from each selected category is included
  if (uppercase || fullUpper) {
    all += upper;
    mandatoryParts += upper[Math.floor(Math.random() * upper.length)];
  }
  if (symbols) {
    all += sym;
    mandatoryParts += sym[Math.floor(Math.random() * sym.length)];
  }
  if (numbers) {
    all += nums;
    mandatoryParts += nums[Math.floor(Math.random() * nums.length)];
  }
  if (!fullUpper) {
    all += lower;
  }

  // Adjust the loop to account for the length of mandatory parts
  for (let i = 0; i < length - mandatoryParts.length; i++) {
    password += all[Math.floor(Math.random() * all.length)];
  }

  // Add the mandatory parts to the password and shuffle
  password += mandatoryParts;
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  return password;
}