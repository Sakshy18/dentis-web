export function isValidEmail(email: string) {
  const normalizedEmail = email.trim();
  if (!normalizedEmail) return false;

  // Keeps validation strict enough for UI forms without overfitting edge cases.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);
}
