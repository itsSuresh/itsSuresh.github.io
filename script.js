
let btn = document.getElementById("btn");
let ul = document.querySelector("ol");
let input= document.getElementById("input");
let li= document.getElementsByClassName("items");
function inputLength(){
    return input.value.length;
}

function createItems(){
    if(inputLength()>0){
    var li=document.createElement("li");
    li.className="items";
    li.appendChild(document.createTextNode(input.value));

    var newButton=document.createElement("button");
    newButton.appendChild(document.createTextNode("delete"));
    
    li.appendChild(newButton);
    ul.appendChild(li);
    
    input.value="";
    }

    newButton.addEventListener("click",deleteItems);
    li.addEventListener("click",deleteItems1);
}
function deleteItems(){
    ul.removeChild(this.parentElement);
  
}
btn.addEventListener("click",createItems);
li.addEventListener("click",deleteItems1);


function deleteItems1(){
    
    this.classList.toggle("delete");
}