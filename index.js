function callback(){

}
function receivesAFunction(callback){
    return callback()
}   
//named =function() {
//}

 function returnsANamedFunction() {  
        return function named (){
            console.log("Hello")
        } 
    }
    returnsANamedFunction()
    function returnsAnAnonymousFunction(){
        return ()=> console.log("Hello")
    }
    returnsAnAnonymousFunction()
  