const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 12
let altLegth = 20

function generateRandomNum() {
    let Number = Math.floor(Math.random()*characters.length)
    return Number
}

function GetPassword() {
    let space = ""
    for (let i = 0; i < passwordLength; i++) {
        space += characters[generateRandomNum()]
    }
    return space
}

function Newpassword() {
    let password = ""
    for (let i = 0; i < altLegth; i++) {
        password += characters[generateRandomNum()]
    }
    return password
}

function clicked() {
    document.getElementById("line-el").textContent =  Newpassword()
    document.getElementById("copied1").textContent = GetPassword()
    document.getElementById("copied2").textContent = GetPassword()

}

// function copytext() {
//     var copyText = document.getElementById("copied1");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     navigator.clipboard.write(copyText.value);
//     alert("Copied to clipboard:" + copyText.value)
// }



console.log(GetPassword())

