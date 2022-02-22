function solve(){

    let authorElement = document.getElementById('creator');
    let titleElement = document.getElementById('title');
    let categoryElement = document.getElementById('category');
    let contentElement = document.getElementById('content');
    let createButton = document.querySelector('.btn');
    let sectionElement = document.querySelector('.site-content section');
    
    createButton.addEventListener('click', (e) =>{
        e.preventDefault();

        let articleElement = document.createElement('article');

        let h1Element = document.createElement('h1');
        h1Element.textContent = titleElement.value;

        let pCategoryElement = document.createElement('p');
        let pCategoryStrongElement = document.createElement('strong');
        pCategoryElement.textContent = `Category: `;
        pCategoryStrongElement.textContent = categoryElement.value;
        pCategoryElement.appendChild(pCategoryStrongElement);

        let pCreatorElement = document.createElement('p');
        let pCreatorStrongElement = document.createElement('strong');
        pCreatorElement.textContent = `Creator: `;
        pCreatorStrongElement.textContent = authorElement.value;
        pCreatorElement.appendChild(pCreatorStrongElement);

        let pContentElement = document.createElement('p');
        pContentElement.textContent = contentElement.value;

        let divElement = document.createElement('div');
        divElement.classList.add('buttons');

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn');
        deleteButton.classList.add('delete');
        
        let archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';
        archiveButton.classList.add('btn');
        archiveButton.classList.add('archive');

        divElement.appendChild(deleteButton);
        divElement.appendChild(archiveButton);

        articleElement.appendChild(h1Element);
        articleElement.appendChild(pCategoryElement);
        articleElement.appendChild(pCreatorElement);
        articleElement.appendChild(pContentElement);
        articleElement.appendChild(divElement);

        sectionElement.appendChild(articleElement);

        authorElement.value = '';
        titleElement.value = '';
        categoryElement.value = '';
        contentElement.value = '';

        archiveButton.addEventListener('click', (e) => {
            let olElement = document.querySelector('.archive-section ol');
            let articleTitle = e.target.parentElement.parentElement.children[0].textContent;

            let liElement = document.createElement('li');
            liElement.textContent = articleTitle;
            olElement.appendChild(liElement);
            
            e.target.parentElement.parentElement.remove();

            Array.from(olElement.getElementsByTagName('LI'))
            .sort((a,b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => olElement.appendChild(li));
        });

        deleteButton.addEventListener('click', () => {
            articleElement.remove();
        });

    });
    
}
