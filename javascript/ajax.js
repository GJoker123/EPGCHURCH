var church_info;
var BActive;
function loadinfo(church_info){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){       
        if (this.readyState == 4 /*&& this.status == 200*/ ){
            document.getElementById("info_wall").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET",church_info,true);   
    xhttp.send();
}