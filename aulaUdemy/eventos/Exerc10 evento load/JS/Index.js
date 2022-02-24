/*window.addEventListener("load",function(){
    this.alert("carregamento da pagina");
});*/

window.addEventListener("beforeunload",function(){
    event.returnValue = null;
});
