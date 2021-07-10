/*Este JS nos servira para cargar en cada pagina el menu.html*/

var xhr = new XMLHttpRequest();
    xhr.open('POST','../header.html');
    xhr.setRequestHeader('Content-Type','text/html');
    xhr.send();
    xhr.onload = function(data){
        document.getElementById('Header').innerHTML = xhr.responseText;
    }
var xhr1 = new XMLHttpRequest();
    xhr1.open('POST','../menu.html');
    xhr1.setRequestHeader('Content-Type','text/html');
    xhr1.send();
    xhr1.onload = function(data){
        document.getElementById('Navegacion').innerHTML = xhr1.responseText;
    }



