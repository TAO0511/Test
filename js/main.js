require.config({
    paths : {
        "jquery" : "jquery.min",
        "a":"a"   
    }
});
require(["jquery","a"],function($){
    $(function(){
        alert("load finished"); 
        
    });
});