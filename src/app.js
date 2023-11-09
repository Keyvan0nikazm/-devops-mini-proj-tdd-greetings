function greet(name){
    if(name===undefined || name==="" || name===null) return "Hello, my friend";
    if(name === name.toUpperCase()){
        return "HELLO, " + name + "!";
    }
    return "Hello, " + name;
};


module.exports = greet;