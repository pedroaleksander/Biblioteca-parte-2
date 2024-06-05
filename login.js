function redirecionar(){
 if (document.getElementById("estudante").checked){
    window.location.href = "estudante.html";
}else if (document.getElementById("bibli").checked){
    window.location.href = "bibli.html";
} else{
    alert("Por favor, selecione uma opção.");
}

}