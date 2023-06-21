

// ***************************** Question 1 ********************
let code1 = document.getElementById('Code1')
let isCode1 = false
function seeHide1(element) {
    if (isCode1) {
        element.innerText = "See Code"
        code1.style.display = "none"
        isCode1 = false
    } 
    else{
        element.innerText = "Hide Code"
        code1.style.display = "block"
        isCode1 = true
    }   
}

// ***************************** Question 2 ********************
let code2 = document.getElementById('Code2')
let isCode2 = false
function seeHide2(element) {
    if (isCode2) {
        element.innerText = "See Code"
        code2.style.display = "none"
        isCode2 = false
    } 
    else{
        element.innerText = "Hide Code"
        code2.style.display = "block"
        isCode2 = true
    }   
}