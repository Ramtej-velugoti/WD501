function generateGreetings (name1){
function spanish() {
console. log (`Hola ${name1}!`);
}
function english() {
console. log (`Hello ${name1}`);
}
function telugu() {
    console. log (`pukka ${name1}`);
    }
return {spanish, english,telugu};
}
const name1 = 'John';
const greetings = generateGreetings (name1) ;
console. log (typeof(greetings)); // function
greetings.telugu(); // Hola John! greetings.english(); // Hello John!