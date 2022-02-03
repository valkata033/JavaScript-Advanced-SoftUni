function getArticleGenerator(articles) {
    
    return () => {
        while(articles.length){
            let divElement = document.getElementById('content');
            let newArticle = document.createElement('article');
            
            let firstElement = articles.shift();
            
            newArticle.innerText = firstElement;
            divElement.appendChild(newArticle);

            return divElement;
        }
    }
}
