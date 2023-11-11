function greet(name){

    if (Array.isArray(name)){
        let upperCaseName;
        let arrayNamesLowerCase = [];
        let language;
        if (name[name.length -1] === "fr" || name[name.length -1] === "nl" || name[name.length -1] === "en"){
            language = name[name.length -1];
        }
        if(name.length>=2){
            for (let index = 0; index < name.length; index++) {
                if(isUpperCase(name[index])){
                    if(upperCaseName){
                        return "Impossible because more than 1 uppercase name";
                    }
                    upperCaseName = name[index];
                }
                else{
                    if (name[index] !== language)
                        arrayNamesLowerCase.push(name[index]);
                    }
                }
            }
            if(upperCaseName)
                return stringConstructor(arrayNamesLowerCase) + " AND HELLO " + upperCaseName + "!";
            else{
                return stringConstructor(arrayNamesLowerCase, language);
            }
        }

    else{
        if (!name) {
            return "Hello, my friend.";
        }
        if(isUpperCase(name)){
            return "HELLO, " + name + "!";
        }
        return "Hello, " + name + ".";
    }
};

function isUpperCase(name){
    return name === name.toUpperCase();
}

function stringConstructor(names, language){
    let greetingWord;
    let andConnector;
        if (!language || language === 'en'){
        greetingWord = "Hello";
        andConnector = " and ";
    }
    else if (language === 'fr'){
        greetingWord = 'Bonjour';
        andConnector = " et ";
    }
    else if (language === "nl"){
        greetingWord = "Goeidag";
        andConnector = " en ";
    }
    
    for (let index = 0; index < names.length-1; index++) {
        greetingWord += ", " + names[index];
    } 
    return greetingWord + andConnector + names[names.length-1] + ".";
}


module.exports = greet;