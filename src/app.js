function greet(name){

    if (Array.isArray(name)){
        let upperCaseName;
        let stringUpper = "Hello";
        let arraynamesLowerCase = [];
        if(name.length>=2){
            for (let index = 0; index < name.length; index++) {
                if(isUpperCase(name[index])){
                    upperCaseName = name[index];
                }else{
                    arraynamesLowerCase.push(name[index]);
                    }
                }
            }
            if(upperCaseName)
                return stringConstructor(arraynamesLowerCase) + ". AND HELLO " + upperCaseName + "!";
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