function greet(name){

    if (Array.isArray(name)){
        if(name.length>2){
            let string = "Hello";
            for (let index = 0; index < name.length-1; index++) {
                string += ", " + name[index];
            } 
            return string + " and " + name[name.length-1];
        }
        return "Hello, "+ name[0] + " and " + name[1];
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



module.exports = greet;