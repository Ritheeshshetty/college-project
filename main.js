
//navbar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style","display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation"); 
    iconBar.setAttribute("style","display:block;");
    navigation.classList.add("hide");
}

// function button-click(){
//     var
// }
// var itemInput=document.querySelector('input[type="text"]');
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);
    
