const add = (a, b) => a + b;
const generateGreeting = (name = 'no-one') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test('should generate a greeting with a name', () => {
  const testName = generateGreeting('Rupert');

  expect(testName).toBe('Hello Rupert!');
});

test('should generate a greeting with no name', () => {
  const testName = generateGreeting();

  expect(testName).toBe('Hello no-one!');
});
