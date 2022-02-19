window.addEventListener('load', solution);

function solution() {

    let fullNameElement = document.getElementById('fname');
    let emailElement = document.getElementById('email');
    let phoneElement = document.getElementById('phone');
    let addressElement = document.getElementById('address');
    let postalCodeElement = document.getElementById('code');
    let submitButton = document.getElementById('submitBTN');

    submitButton.addEventListener('click', (e) => {

        let fullName = fullNameElement.value;
        let email = emailElement.value;
        let phone = phoneElement.value;
        let address = addressElement.value;
        let postalCode = postalCodeElement.value;

        if(fullName && email){
            
            
            let editButton = document.getElementById('editBTN');
            let continueButton = document.getElementById('continueBTN');
            
            e.target.disabled = true;
            editButton.disabled = false;
            continueButton.disabled = false;
            
            let ulElement = document.getElementById('infoPreview');
            let previewFullName = document.createElement('li');
            previewFullName.textContent = `Full Name: ${fullName}`;
            
            let previewEmail = document.createElement('li');
            previewEmail.textContent = `Email: ${email}`;
            
            let previewPhone = document.createElement('li');
            previewPhone.textContent = `Prone Number: ${phone}`;
            
            let previewAddress = document.createElement('li');
            previewAddress.textContent = `Address: ${address}`;
            
            let previewPostalCode = document.createElement('li');
            previewPostalCode.textContent = `Postal Code: ${postalCode}`;
            
            ulElement.appendChild(previewFullName);
            ulElement.appendChild(previewEmail);
            ulElement.appendChild(previewPhone);
            ulElement.appendChild(previewAddress);
            ulElement.appendChild(previewPostalCode);
            
            fullNameElement.value = '';
            emailElement.value = '';
            phoneElement.value = '';
            addressElement.value = '';
            postalCodeElement.value = '';
            
            editButton.addEventListener('click', () => {
                
                previewFullName.remove();
                previewEmail.remove();
                previewPhone.remove();
                previewAddress.remove();
                previewPostalCode.remove();
                
                editButton.disabled = true;
                continueButton.disabled = true;
                submitButton.disabled = false;
                
                fullNameElement.value = fullName;
                emailElement.value = email;
                phoneElement.value = phone;
                addressElement.value = address;
                postalCodeElement.value = postalCode;
                
            });
            
            continueButton.addEventListener('click', () => {
                
                let divElement = document.getElementById('block');
                divElement.innerHTML = '';
                
                let h3Element = document.createElement('h3');
                h3Element.textContent = 'Thank you for your reservation!';
                
                divElement.appendChild(h3Element);
            });
        }
            
    });
}

//More functional and quicker solution

// function solution() {

//     let labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));
//     let inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
//     inputValues.pop();
//     let ulElement = document.getElementById('infoPreview');

//     let submitButton = document.getElementById('submitBTN');
//     let editButton = document.getElementById('editBTN');
//     let continueButton = document.getElementById('continueBTN');

//     submitButton.addEventListener('click', (e) => {

//         let fullName = inputValues[0].value;
//         let email = inputValues[1].value;

//         if (fullName && email !== '') {

//             for (let i = 0; i < inputValues.length; i++) {
//                 let liElement = document.createElement('li');
//                 liElement.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`;
//                 ulElement.appendChild(liElement);
//             }

//             for (const input of inputValues) {
//                 input.value = '';
//             }

//             submitButton.disabled = true;
//             editButton.disabled = false;
//             continueButton.disabled = false;

//         }
//     });

//     editButton.addEventListener('click', () => {

//         let listItems = Array.from(ulElement.childNodes);

//         for (let i = 0; i < inputValues.length; i++) {
//             inputValues[i].value = listItems[i].textContent.split(': ')[1];
//             listItems[i].remove();
//         }

//         submitButton.disabled = false;
//         editButton.disabled = true;
//         continueButton.disabled = true;
//     });

//     continueButton.addEventListener('click', () => {

//         let divElement = document.getElementById('block');
//         divElement.innerHTML = '';

//         let h3Element = document.createElement('h3');
//         h3Element.textContent = 'Thank you for your reservation!';

//         divElement.appendChild(h3Element);
//     });

// }
