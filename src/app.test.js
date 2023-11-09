const greet = module.require("./app"); 

test('should return Hello, Jean-Kevin', () => {
    const result = greet("Jean-Kevin");
    console.log(result);
    expect(result).toEqual("Hello, Jean-Kevin");
});

test('If the name is undifined should return Hello, my friend', () => {
  const result = greet(undefined);
  console.log(result);
  expect(result).toEqual("Hello, my friend");
});

test('If the name null should return Hello, my friend', () => {
  const result = greet(null);
  console.log(result);
  expect(result).toEqual("Hello, my friend");
});

test('If the name is empty should return Hello, my friend', () => {
  const result = greet("");
  console.log(result);
  expect(result).toEqual("Hello, my friend");
});