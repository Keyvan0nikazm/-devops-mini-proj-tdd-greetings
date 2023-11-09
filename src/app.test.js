const greet = module.require("./app"); 

test('should return test', () => {
    const result = greet("test");
    expect(result).toEqual("test");
  });