function userInput() {
    var howMany = prompt("How many characters would you like in your password?");

    while (howMany < 8 || howMany > 128) {
        alert("Your password must have between 8 and 128 characters.");
        delete howMany;
        var howMany = prompt("How many characters would you like in your password?");
    }

    if (howMany > 7 || howMany < 129) {
        console.log(howMany);
    }

    var numChar = confirm("Would you like to include numbers in your password?");
    var spChar = confirm("Would you like to include special characters in your password?");
    var lcChar = confirm("Would you like to include lowercase letters in your password?");
    var ucChar = confirm("Would you like to include uppercase letters in your password?");
    
    console.log(numChar);
    console.log(spChar);
    console.log(lcChar);
    console.log(ucChar);

    const lcLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const ucLetters = ['A', 'B', 'C', 'D', 'E', 'F' ,'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const specials = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '`', '{', '|', '}', '~'];
    
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
    
    console.log(availChar);

    function makePassword(howMany) {
        var result           = '';
        var charactersLength = availChar.length;
        for ( var i = 0; i < howMany; i++ ) {
            result += availChar.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    
    }

    document.getElementById("password").innerHTML = result;

    console.log(result);

}





// Definition of perimeters: numbers, lowercase letters, uppercase letters, special characters
// Limit to user selections: which sets can we draw from?
// Draw random characters out of complete set of available characters based on:
// 1. user set selections
// 2. set perimeters
// 3. user input, number of characters