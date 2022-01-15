function solve(input = String) {
    let words = input.match(/[\w]+/g).join(", ").toUpperCase();
    console.log(words);
}

solve('Hi, how are you?');
solve('Functions in JS can be nested, i.e. hold other functions');