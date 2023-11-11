function greet(name){

    if (Array.isArray(name)){
        let upperCaseName;
        let arrayNamesLowerCase = [];
        if(name.length>=2){
            for (let index = 0; index < name.length; index++) {
                if(isUpperCase(name[index])){
                    if(upperCaseName){
                        return "Impossible because more than 1 uppercase name";
                    }
                    upperCaseName = name[index];
                }
                else{
                    arrayNamesLowerCase.push(name[index]);
                    }
                }
            }
            if(upperCaseName)
                return stringConstructor(arrayNamesLowerCase) + ". AND HELLO " + upperCaseName + "!";
            else{
                return stringConstructor(name);
            }
        }

    else{
        if (!name) {
            return "Hello, my friend";
        }
        if(isUpperCase(name)){
            return "HELLO, " + name + "!";
        }
        return "Hello, " + name;
    }
};

function isUpperCase(name){
    return name === name.toUpperCase();
}

function stringConstructor(names){
    let string = "Hello";
    for (let index = 0; index < names.length-1; index++) {
        string += ", " + names[index];
    } 
    return string + " and " + names[names.length-1];
}



module.exports = greet;