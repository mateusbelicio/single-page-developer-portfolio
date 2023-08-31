export function isOnlyWords(char) {
  return !/\d/g.test(char);
}

export function isValidEmail(email) {
  return /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi.test(email);
}

export function isNotEmpty(value) {
  return value !== '' && value !== undefined && value !== null;
}
