const btn=document.getElementsByTagName("button")[0];
const input=document.getElementsByTagName("input")[0];
const list=document.getElementsByTagName("ul")[0];
const form=document.getElementsByTagName("form")[0];
const clear=document.getElementById("clear");
const table=document.getElementsByClassName("tasksBoard")[0];

table.style.display="inline";
function del(e){
    e.target.parentNode.remove();
}
function submit(){
    if (input.value!=""){
        const li=document.createElement("li");
        li.innerHTML="<span class=\"delete\">X</span> <input type=\"checkbox\" />"+input.value;
        list.appendChild(li);
        li.firstChild.addEventListener("click",del);
        input.value="";
        table.style.display="inline";
    }
}
function stopUpdating(e){
    e.preventDefault();
}
function  clearCallBack() {
    list.innerHTML="";
}
form.addEventListener("submit",stopUpdating,false);
btn.addEventListener("click",submit,false);
clear.addEventListener("click",clearCallBack,false);