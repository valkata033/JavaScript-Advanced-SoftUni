window.addEventListener('load', solve);

function solve() {
    
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElement = document.getElementById('price');
    let addButtonElement = document.getElementById('add');

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let model = modelElement.value;
        let year = Number(yearElement.value);
        let description = descriptionElement.value;
        let price = Number(priceElement.value);

        if(!model || !description){
            return;
        }
        if(!(year > 0) || !(price > 0)){
            return;
        }

        let tBodtElement = document.getElementById('furniture-list');

        let trElement = document.createElement('tr');
        trElement.classList.add('info');

        let tdModelElement = document.createElement('td');
        tdModelElement.textContent = model;

        let tdPriceElement = document.createElement('td');
        tdPriceElement.textContent = price.toFixed(2);

        let tdButtonsElement = document.createElement('td');
        let moreInfoButtonElement = document.createElement('button');
        moreInfoButtonElement.textContent = 'More Info';
        moreInfoButtonElement.classList.add('moreBtn');
        
        let buyItButtonElement = document.createElement('button');
        buyItButtonElement.textContent = 'Buy it';
        buyItButtonElement.classList.add('buyBtn');

        tdButtonsElement.appendChild(moreInfoButtonElement);
        tdButtonsElement.appendChild(buyItButtonElement);

        trElement.appendChild(tdModelElement);
        trElement.appendChild(tdPriceElement);
        trElement.appendChild(tdButtonsElement);

        tBodtElement.appendChild(trElement);

        let hideTrElement = document.createElement('tr');
        hideTrElement.classList.add('hide');

        let hideTdYearElement = document.createElement('td');
        hideTdYearElement.textContent = `Year: ${year}`;

        let hideTdDescriptionElement = document.createElement('td');
        hideTdDescriptionElement.textContent = `Description: ${description}`;
        hideTdDescriptionElement.setAttribute('colspan', 3);

        hideTrElement.appendChild(hideTdYearElement);
        hideTrElement.appendChild(hideTdDescriptionElement);

        tBodtElement.appendChild(hideTrElement);

        moreInfoButtonElement.addEventListener('click', () => {

            if(moreInfoButtonElement.textContent == 'More Info'){
                hideTrElement.style.display = 'contents';
                moreInfoButtonElement.textContent = 'Less Info';
            }
            else{
                hideTrElement.style.display = 'none';
                moreInfoButtonElement.textContent = 'More Info';
            }
        });

        buyItButtonElement.addEventListener('click', () => {

            let totalPriceElement = document.querySelector('.total-price');
            
            let currentPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            
            trElement.remove();
            hideTrElement.remove();
        });

    });

}
