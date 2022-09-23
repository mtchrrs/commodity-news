// Content page of web application


// commodity prices card


// create search bar
// use the search bar to run through the array selected on the landing page
// create a search button next to the input button
// when you type a commodity price in and click search...
// if the searched name does not match a commodity name
// inner html of input bar notifies the user that the commodity was not found
// if it was found the commodity searched raises to the top of the list
// the other commodities are still listed below

// list 10 commodities + prices
// pulls 10 commodity names and prices from the API -no order
// for each commodity, create a div for it to be held in
// in each div, show the commodity name and the price
// the price should have a color of red if it is in decline
// the price should have a color of green if it is increasing


// business news card


// create individual news link cards

// Assuming the layout of HTML is 
/* 
<div class="business-news-card">
    <h1 class="business-news-title">Business News</h1>
    <div class="business-news-container"></div>
</div> 
*/
const newsContainer = $('.business-news-container');
const newsAPIKey = "28be02997c3a44bcaf523fdb51d44ec3"
$(function createNewsContainers(){

    var newsQueryURL = "https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=" + newsAPIKey
    console.log(newsQueryURL);

    return fetch(newsQueryURL)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(result){
        for(let i=0; i<=5; i++){
            console.log(result);
            let image = result.articles[i].urlToImage;
            let title = result.articles[i].title;
            let description = result.articles[i].description;
            let link = result.articles[i].url; 
            
            var article = document.createElement("div");
            article.classList.add("articles-class");
            article.innerHTML = `
            <div class="article-image-container">
            <img src="${image}" class="article-image" alt="${title}">
            </div>
            <div class="article-text">
            <a href="${link}" title="Go to the website" target="_blank class="article-title">${title}
            <h3 class="article-description">${description}
            </div>`

            newsContainer.append(article);
        };
        
    });
});

// in those cards, include an image and description of the news article (depends on what the API will show)
// when a user clicks on a news link card, take them to a new tab and open the link