const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specials = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '`', '{', '|', '}', '~'];
const lcLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const ucLetters = ['A', 'B', 'C', 'D', 'E', 'F' ,'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function userInput() {
    var howMany = prompt("How many characters would you like in your password?");

    while (howMany < 8 || howMany > 128) {
        alert("Your password must have between 8 and 128 characters.");
        delete howMany;
        var howMany = prompt("How many characters would you like in your password?");
    }

    var numChar = confirm("Would you like to include numbers in your password?");
    var spChar = confirm("Would you like to include special characters in your password?");
    var lcChar = confirm("Would you like to include lowercase letters in your password?");
    var ucChar = confirm("Would you like to include uppercase letters in your password?");

    while (numChar === false && spChar === false && lcChar ===false && ucChar ===false) {
        alert("Select at least one type of character for your password.");
        delete numChar;
        delete spChar;
        delete lcChar;
        delete ucChar;
        var numChar = confirm("Would you like to include numbers in your password?");
        var spChar = confirm("Would you like to include special characters in your password?");
        var lcChar = confirm("Would you like to include lowercase letters in your password?");
        var ucChar = confirm("Would you like to include uppercase letters in your password?");
    }
    
    let availChar = []
        
    if (numChar) {
        availChar.push(...numbers);
    } 
    
    if (spChar) {
        availChar.push(...specials);
    }

    if (lcChar) {
        availChar.push(...lcLetters);
    }

    if (ucChar) {
        availChar.push(...ucLetters);
    }
    
    document.getElementById("password").innerHTML = makePassword(howMany, availChar);
}

function makePassword(howMany, availChar) {
    var text = "";
    
    for (var i = 0; i < howMany; i++) {
        var j = Math.floor(Math.random() * availChar.length);
        text += availChar[j];
    }

    return text;
}