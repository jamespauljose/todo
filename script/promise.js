function pr(){
    var count= document.querySelectorAll('input[type="checkbox"]:checked').length;

    var promise = new Promise(function(resolve,reject){
        if(count==5){
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        }
        else{
            reject("e");
        }
    
    });
    promise
    .then(function(a){
        alert(a);
    })
    .catch(function(b){
        // alert(b);
    });
}

function lgo(){
  
    a(c);

   function a(callback)
   {
    callback();
   }

   function c()
   {
       window.location.href= "login.html"
   }


}