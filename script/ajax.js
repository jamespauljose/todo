var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        var op1 = "";
        for(var i=0;i<response.length;i++){

            op1 += '<tr>';
            if(+response[i].completed==true){
                op1 += '<td>' +'<input type="checkbox" disabled>'+'</td.';

            }
            else{
                op1 += '<td>' +'<input type="checkbox" onclick="pr()">'+'</td.';
            }
            
            op1 += '<tc>'
            op1 += '<td>' +response[i].title+'</td.';
            op1 += '</tc>'
            op1 += '</tr>'
        }
        document.getElementById("tb2").innerHTML = op1;

    }
}
xhttp.open("GET","sc.json",true)
xhttp.send(); 

