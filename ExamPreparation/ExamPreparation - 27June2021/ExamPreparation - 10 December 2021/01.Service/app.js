window.addEventListener('load', solve);

function solve() {
    
    let typeProductsElement = document.getElementById('type-product');
    let descriptionElement = document.getElementById('description');
    let clientNameElement = document.getElementById('client-name');
    let clientPhoneElement = document.getElementById('client-phone');
    let buttonElement = document.getElementById('right').querySelector('button');

    let receivedOrdersElement = document.getElementById('received-orders');
    let completedOrdersElement = document.getElementById('completed-orders');

    let clearButton = document.querySelector('.clear-btn');

    buttonElement.addEventListener('click', (e) => {

        e.preventDefault();

        if(!descriptionElement.value || !clientNameElement.value || !clientPhoneElement.value){
            return;
        }

        let divElement = document.createElement('div');
        divElement.classList.add('container');

        let h2Element = document.createElement('h2');
        h2Element.textContent = `Product type for repair: ${typeProductsElement.value}`;

        let h3Element = document.createElement('h3');
        h3Element.textContent = `Client information: ${clientNameElement.value}, ${clientPhoneElement.value}`;

        let h4Element = document.createElement('h4');
        h4Element.textContent = `Description of the problem: ${descriptionElement.value}`;

        let startButton = document.createElement('button');
        startButton.textContent = 'Start repair';
        startButton.classList.add('start-btn');
        
        let finishButton = document.createElement('button');
        finishButton.textContent = 'Finish repair';
        finishButton.classList.add('finish-btn');
        finishButton.disabled = true;

        divElement.appendChild(h2Element);
        divElement.appendChild(h3Element);
        divElement.appendChild(h4Element);
        divElement.appendChild(startButton);
        divElement.appendChild(finishButton);

        receivedOrdersElement.appendChild(divElement);

        typeProductsElement.value = '';
        descriptionElement.value = '';
        clientNameElement.value = '';
        clientPhoneElement.value = '';

        startButton.addEventListener('click', (e) => {

            e.target.disabled = true;
            finishButton.disabled = false;
        });

        finishButton.addEventListener('click', (e) => {

            let container = e.currentTarget.parentNode;
            let buttons = container.querySelectorAll('button');
            
            buttons[0].remove();
            buttons[1].remove();

            completedOrdersElement.appendChild(container);


            clearButton.addEventListener('click', (e) => {

                let containerElements = e.currentTarget.parentNode.getElementsByClassName('container');
                Array.from(containerElements).forEach(x => x.remove());

            });
        });

    });

}