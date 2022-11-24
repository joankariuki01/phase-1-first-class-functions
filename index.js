function receivesAFunction(callback) {
    return callback()
}
receivesAFunction(() => "Hello, world!")



function returnsANamedFunction() {
    return function namedFunction(){
        return "Hello, world!"
    }
}
returnsANamedFunction();



const returnsAnAnonymousFunction = function(){
    return function(){
        return "Hello, world"
    }
}
returnsAnAnonymousFunction()