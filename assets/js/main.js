var xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.send();

xhr.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById("id").innerHTML = this.responseText;
    }
};