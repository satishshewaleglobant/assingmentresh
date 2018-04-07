
//comment made by satish
//Module Design pattern

var currentModule = (function(){
    var name = "satish";
    console.log(name);

    // var obj = {};
    // obj.username  =  name;
    // obj.sum = function(){
        
    // }
    return {
        "username" : name,
        sum : function(){
            console.log("In Sum",name);
        }
    };

})();

currentModule.sum();
console.log(currentModule.username);
