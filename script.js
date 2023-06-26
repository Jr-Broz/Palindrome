let userInput = prompt("Write something to check if it's a Palindrome");

let palindromo = userInput.split("").reverse().join("");
console.log(palindromo);


if(palindromo == userInput) {

  alert("It's a palindrome");
}
else{ 
  
  alert("Its not  a palindrome");
}
