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

test('If the name is write in UpperCase should return HELLO, KENOBI!', () => {
    const result = greet("KENOBI");
    console.log(result);
    expect(result).toEqual("HELLO, KENOBI!");
  });

test('If the name is an array should return Hello, Kratos and Thanathos', () => {
    const result = greet(["Kratos", "Thanathos"]);
    console.log(result);
    expect(result).toEqual("Hello, Kratos and Thanathos");
  });

  test('If the name is an array with more than two should return Hello, Kratos, Thanathos and Hypnos', () => {
    const result = greet(["Kratos", "Thanathos", "Hypnos"]);
    console.log(result);
    expect(result).toEqual("Hello, Kratos, Thanathos and Hypnos");
  });