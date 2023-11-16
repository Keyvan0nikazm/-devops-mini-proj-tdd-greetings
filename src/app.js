function greet(name) {
  if (Array.isArray(name)) {
    let upperCaseName;
    let arrayNamesLowerCase = [];
    let language;
    if (
      name[name.length - 1] === "fr" ||
      name[name.length - 1] === "nl" ||
      name[name.length - 1] === "en"
    ) {
      language = name[name.length - 1];
    }
    if (name.length >= 2) {
      for (let index = 0; index < name.length; index++) {
        if (isUpperCase(name[index])) {
          // if we have already seen a name in uppercase
          if (upperCaseName) {
            return "Impossible because more than 1 uppercase name";
          }
          upperCaseName = name[index];
        } else {
          if (name[index] !== language) arrayNamesLowerCase.push(name[index]);
        }
      }
    }
    if (upperCaseName)
      return (
        stringConstructor(arrayNamesLowerCase) +
        " AND HELLO " +
        upperCaseName +
        "!"
      );
    else {
      return stringConstructor(arrayNamesLowerCase, language);
    }
  } else {
    if (!name) {
      return "Hello, my friend.";
    }
    if (isUpperCase(name)) {
      return "HELLO, " + name + "!";
    }
    return "Hello, " + name + ".";
  }
}

/**
 * Function that returns if the parameter is in uppercase or not
 * @param {string} name
 * @returns true if the name is in uppercase, false otherwise
 */
function isUpperCase(name) {
  return name === name.toUpperCase();
}

/**
 * Function that builds the greeting based of the list of names and the language if there is one
 * @param {Array} names the list of all the names
 * @param {string} language the language in wich we want the greeting to be
 * @returns the greeting in the correct language
 */
function stringConstructor(names, language) {
  let greetingWord;
  let andConnector;
  if (!language || language === "en") {
    greetingWord = "Hello, ";
    andConnector = " and ";
  } else if (language === "fr") {
    greetingWord = "Bonjour ";
    andConnector = " et ";
  } else if (language === "nl") {
    greetingWord = "Goeidag ";
    andConnector = " en ";
  }

  return (
    greetingWord +
    names.slice(0, names.length - 1).join(", ") +
    andConnector +
    names[names.length - 1] +
    "."
  );
}

module.exports = greet;
