window.addEventListener('load', solve);

function solve() {

    let genreElement = document.getElementById('genre');
    let nameElement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let dateElement = document.getElementById('date');
    let addButtonElement = document.getElementById('add-btn');

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let genre = genreElement.value;
        let name = nameElement.value;
        let author = authorElement.value;
        let date = dateElement.value;

        if(!genre || !name || !author || !date){
            return;
        }

        let allHitsDivElement = document.querySelector('.all-hits-container');

        let newDivElement = document.createElement('div');
        newDivElement.classList.add('hits-info');

        let h2GenreElement = document.createElement('h2');
        h2GenreElement.textContent = `Genre: ${genre}`;

        let h2NameElement = document.createElement('h2');
        h2NameElement.textContent = `Name: ${name}`;

        let h2AuthorElement = document.createElement('h2');
        h2AuthorElement.textContent = `Author: ${author}`;

        let h3DateElement = document.createElement('h3');
        h3DateElement.textContent = `Date: ${date}`;

        let saveSongButton = document.createElement('button');
        saveSongButton.textContent = 'Save song';
        saveSongButton.classList.add('save-btn');

        let likeSongButton = document.createElement('button');
        likeSongButton.textContent = 'Like song';
        likeSongButton.classList.add('like-btn');

        let deleteSongButton = document.createElement('button');
        deleteSongButton.textContent = 'Delete';
        deleteSongButton.classList.add('delete-btn');

        let imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';

        newDivElement.appendChild(imgElement);
        newDivElement.appendChild(h2GenreElement);
        newDivElement.appendChild(h2NameElement);
        newDivElement.appendChild(h2AuthorElement);
        newDivElement.appendChild(h3DateElement);
        newDivElement.appendChild(saveSongButton);
        newDivElement.appendChild(likeSongButton);
        newDivElement.appendChild(deleteSongButton);

        allHitsDivElement.appendChild(newDivElement);

        likeSongButton.addEventListener('click', (e) => {
            
            let totalLikesElement = document.querySelector('.likes').children[0];
            let text = totalLikesElement.textContent.split(' ');
            let likeAsNumber = Number(text[2]) + 1;
            totalLikesElement.textContent = `Total Likes: ${likeAsNumber}`;
            e.target.disabled = true;

        });

        saveSongButton.addEventListener('click', () => {

            newDivElement.remove();

            let savedHitsElement = document.querySelector('.saved-container');
            let savedDivElement = document.createElement('div');
            savedDivElement.classList.add('hits-info');

            savedDivElement.appendChild(imgElement);
            savedDivElement.appendChild(h2GenreElement);
            savedDivElement.appendChild(h2NameElement);
            savedDivElement.appendChild(h2AuthorElement);
            savedDivElement.appendChild(h3DateElement);
            savedDivElement.appendChild(deleteSongButton);

            savedHitsElement.appendChild(savedDivElement);

            deleteSongButton.addEventListener('click', () => {

                savedDivElement.remove();
            });
        });

        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';
        
    });
}