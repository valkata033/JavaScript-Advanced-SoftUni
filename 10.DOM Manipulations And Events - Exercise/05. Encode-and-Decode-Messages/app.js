// function encodeAndDecodeMessages() {
    
//     let firstDiv = document.querySelector('main div:nth-of-type(1)');
//     let secondDiv = document.querySelector('main div:nth-of-type(2)');

//     let firstTextArea = firstDiv.children[1];
//     let secondTextArea = secondDiv.children[1];

//     let encodeButton = firstDiv.children[2];
//     let decodeButton = secondDiv.children[2];

//     encodeButton.addEventListener('click', encode);
//     decodeButton.addEventListener('click', decode);

//     let encodeResult = [];

//     function encode(e){
        
//         let text = firstTextArea.value;

//         for(let i = 0; i < text.length; i++){
            
//             if(text[i] !== ''){

//                 let curr = text.charCodeAt(i);
//                 curr += 1;
//                 encodeResult.push(String.fromCharCode(curr));
//             }
//         }
        
//         firstTextArea.value = '';
//         secondTextArea.value = encodeResult.join('');
        
//     };

//     let decodeResult = [];

//     function decode(e){
        
//         let text = secondTextArea.value;

//         for(let i = 0; i < text.length; i++){

//             if(text[i] !== ''){

//                 let curr = text.charCodeAt(i);
//                 curr -= 1;
//                 decodeResult.push(String.fromCharCode(curr));
//             }
//         }

//         secondTextArea.value = decodeResult.join('');
//     };

// }

function encodeAndDecodeMessages() {
    
    document.getElementById('main').children[0].children[2].addEventListener('click', encode);
    document.getElementById('main').children[1].children[2].addEventListener('click', decode);
    let message = '';

    function encode(ev) {

        message = ev.target.parentNode.children[1].value;
        message = message.split('').map(x => {

            let ascii = x.charCodeAt(0);
            ascii++;
            return String.fromCharCode(ascii);

        }).join('');
        ev.target.parentNode.children[1].value = null;
        document.getElementsByTagName('textarea')[1].value = message;

    }

    function decode(ev) {

        ev.target.parentNode.children[1].value = ev.target.parentNode.children[1].value
        .split('')
        .map(x => {

            let ascii = x.charCodeAt(0);
            ascii--;
            return String.fromCharCode(ascii);

        }).join('');

    }
}