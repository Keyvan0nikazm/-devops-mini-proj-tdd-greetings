const greet = module.require("./app");

test("should return Hello, Jean-Kevin", () => {
    const result = greet("Jean-Kevin");
    console.log(result);
    expect(result).toEqual("Hello, Jean-Kevin.");
});

test("If the name is undifined should return Hello, my friend", () => {
    const result = greet(undefined);
    console.log(result);
    expect(result).toEqual("Hello, my friend.");
});

test("If the name null should return Hello, my friend", () => {
    const result = greet(null);
    console.log(result);
    expect(result).toEqual("Hello, my friend.");
});

test("If the name is empty should return Hello, my friend", () => {
    const result = greet("");
    console.log(result);
    expect(result).toEqual("Hello, my friend.");
});

test("If the name is write in UpperCase should return HELLO, KENOBI!", () => {
    const result = greet("KENOBI");
    console.log(result);
    expect(result).toEqual("HELLO, KENOBI!");
});

test("If the name is an array should return Hello, Kratos and Thanathos", () => {
    const result = greet(["Kratos", "Thanathos"]);
    console.log(result);
    expect(result).toEqual("Hello, Kratos and Thanathos.");
});

test("If the name is an array with more than two names should return Hello, Kratos, Thanathos and Hypnos", () => {
    const result = greet(["Kratos", "Thanathos", "Hypnos"]);
    console.log(result);
    expect(result).toEqual("Hello, Kratos, Thanathos and Hypnos.");
});

test("If the name is an array with more than two names and one word in upperCase should return Hello, Thanathos and Hypnos. AND HELLO KRATOS!", () => {
    const result = greet(["KRATOS", "Thanathos", "Hypnos"]);
    console.log(result);
    expect(result).toEqual("Hello, Thanathos and Hypnos. AND HELLO KRATOS!");
});

test("If the name is an array with more than two names and 2 word in upperCase should return Impossible because more than 1 uppercase name", () => {
    const result = greet(["KRATOS", "Thanathos", "Hypnos", "KENOBI"]);
    console.log(result);
    expect(result).toEqual("Impossible because more than 1 uppercase name");
});

test('If the name is an array with more than two names and with the language "fr" should Bonjour Kratos et Thanathos.', () => {
    const result = greet(["Kratos", "Thanathos", "fr"]);
    console.log(result);
    expect(result).toEqual("Bonjour Kratos et Thanathos.");
});

test('If the name is an array with more than two names and with the language "nl" should return Goeidag Kratos en Thanathos.', () => {
    const result = greet(["Kratos", "Thanathos", "nl"]);
    console.log(result);
    expect(result).toEqual("Goeidag Kratos en Thanathos.");
});

test('If the name is an array with more than two names and with the language "en" should return Hello, Kratos and Thanathos.', () => {
    const result = greet(["Kratos", "Thanathos", "en"]);
    console.log(result);
    expect(result).toEqual("Hello, Kratos and Thanathos.");
});
