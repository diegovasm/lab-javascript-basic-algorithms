// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name. <br>
let hacker1 = "Heloisa";
// 1.2 Print `"The driver's name is XXXX"`.<br>
console.log(`The driver's name is ${hacker1}.`);
// 1.3 Create a variable `hacker2` with the navigator's name.<br>
let hacker2 = "Eduardo";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}.`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters.`
  );
}

// Iteration 3: Loops

//3.1

console.log(hacker1.toUpperCase().split("").join(" "));

//3.2

console.log(hacker2.split("").reverse().join(""));

//3.3

if (hacker1 > hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker2 > hacker1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1:

let loremParagraph = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nam placerat elit sed libero lobortis, ut consequat massa pulvinar.
Duis cursus tellus sodales ex pellentesque, vitae pretium orci eleifend. 
Nunc varius quis augue ac dignissim. Sed gravida ipsum eu purus viverra, eget pharetra tellus interdum. 
Maecenas viverra eget mi ac placerat. In ornare leo sed mi venenatis malesuada. 
Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec quis mattis tellus. 
Pellentesque et ipsum in turpis cursus rhoncus. Nunc maximus consectetur ante et consequat. 
Aliquam vehicula vestibulum condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Morbi et venenatis erat. Mauris commodo purus eu congue imperdiet. Curabitur vitae libero purus. 
Phasellus ornare dictum facilisis. In eu ultrices risus. In luctus semper lorem, vitae lobortis leo tempus vitae. 
Nam ac tempus arcu. Donec quis eros in tellus mattis laoreet a auctor libero. Nunc sed lectus ante. 
Praesent hendrerit eget magna ac posuere. Aliquam venenatis felis mauris, ut lobortis eros mattis id. 
Vestibulum ut turpis vitae neque feugiat molestie at sit amet lacus. Vestibulum faucibus rutrum erat, ut placerat lectus faucibus ut.

Phasellus dolor erat, egestas id tincidunt at, ullamcorper vel sapien. Nulla feugiat eleifend efficitur. 
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
In venenatis, nulla sit amet tempus pulvinar, urna felis euismod elit, auctor ultricies odio nulla sed nulla. 
Cras commodo id diam et laoreet. Curabitur placerat leo egestas, mattis mi vitae, eleifend elit. 
Vestibulum accumsan porttitor euismod. Suspendisse fringilla faucibus viverra. Aliquam nec pulvinar lectus. 
Quisque ornare, eros quis sodales efficitur, purus nunc interdum orci, at ornare metus ligula non diam.

`;

let count = loremParagraph.split(" ").length;
console.log(count);

count = (loremParagraph.match(/et/g) || []).length;
console.log(count);

//Bonus 2:

let phraseToCheck = "Amor Roma";

function palindrome(word){

    let palindrome = "";
    let control = false;

    for(let c = word.length-1; c >= 0; c--){

        palindrome+=word[c];
    }

    // console.log(`Comparando as saídas ${palindrome} === ${splitWord}`);

    if(palindrome.toUpperCase() === word.toUpperCase()){

        control = true;
    }

    return control;
}

palindrome(phraseToCheck);

if(palindrome(phraseToCheck)){
    console.log(`The word "${phraseToCheck}" is a Palindrome`);
}else{
    console.log(`The word "${phraseToCheck}" isn't a Palindrome`);
}


