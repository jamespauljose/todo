let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
function read1(){
  
     a(c);

    function a(callback)
    {
        if(id1.value=="admin"&&id2.value=="12345")
        callback(); 

        else
        alert("Username or Password incorrect ")
    }

    function c()
    {
        window.location.href = "data.html";
    }


}