type ValidationStrategies = {
  email: (value: string) => boolean;
  password: (value: string) => boolean;
};

const strategies: ValidationStrategies = {
  email: (value) => /\s+@\s+\.\s+/.test(value),
  password: (value) => value.length > 6,
};

function validate<T extends keyof ValidationStrategies>(
  input: string,
  type: T
): boolean {
  return strategies[type](input);
}

console.log(validate("test@example.com", "email"));
console.log(validate("12345", "password"));
