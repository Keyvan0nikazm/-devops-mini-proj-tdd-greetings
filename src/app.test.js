const greet = module.require("./app"); 

test('should return Hello, Jean-Kevin', () => {
    const result = greet("Jean-Kevin");
    console.log(result);
    expect(result).toEqual("Hello, Jean-Kevin");
});