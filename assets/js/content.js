// Content page of web application

// different categories
// currency - https://www.commodities-api.com/api/symbols?access_key= API_KEY
// https://www.commodities-api.com/api/latest? access_key = API_KEY& base = USD& symbols = GBP,JPY,EUR
const currencyObj = {
    USD: "UNITED STATES DOLLAR",
    EUR: "EURO",
    AUD: "AUSTRALIAN DOLLAR",
    JPY: "JAPANESE YEN",
    GBP: "POUND STERLING",
    CAD: "CANADIAN DOLLAR",
    CHF: "SWISS FRANC",
}

// cryptocurrency
const cryptocurrencyObj = {
    BTC: "BITCOIN",
    ETH: "ETHERIUM",
    LTC: "LITECOIN",
    BCH: "BITCOIN CASH",
    ADA: "CARDANO",
    LINK: "CHAINLINK",
}

// consumables
const consumablesObj = {
    RICE: "RICE",
    COFFEE: "ARABICA COFFEE",
    ROBUSTA: "ROBUSTA COFFEE",
    CSCU22: "CHEESE",
    COCOA: "COCOA",
    CORN: "CORN",
    DCU22: "MILK",
    OAT: "OATS",
}

// metals
const metalsObj = {
    XAU: "GOLD (TROY OUNCE)",
    XAG: "SILVER (TROY OUNCE",
    XCU: "COPPER",
    ALU: "ALUMINIUM",
    IRD: "IRIDIUM (TROY OUNCE)",
    NI: "NICKEL",
    XPD: "PALLADIUM (TROY OUNCE)",
}

// resources
const resourcesObj = {
    HOU22: "HEATING OIL",
    CPO: "CRUDE PALM OIL",
    NG: "NATURAL GAS",
    CANO: "CANOLA",
    COAL: "COAL",
    ETHANOL: "ETHANOL",
    LUMBER: "LUMBER",
    LCAT: "LIVE CATTLE",
}

// when URL is sent from landing page, collect and break down the data
// find the category that is sent over from the previous URL
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

//send a get request to the commodities API and return an array of commodities and their prices
// commodity prices card
const comContainer = $('.commodity-prices-card');
const comAPIKey = "5i3439mr3qzg7beo14kvb7wfvneh2jgduglakzo3fv86l6480m4t701hh1c1";
function getCommodityPrices(categoryObj)
{
    var commodityAPIURL = "https://www.commodities-api.com/api/latest?access_key=" + comAPIKey
    var http = new XMLHttpRequest();
    http.open("GET", commodityAPIURL, true);
    http.timeout = 10000;
    http.ontimeout = function()
    {
      
    }
    http.onerror = function()
    {
        
    }
    //http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.onload = function()
    {
        if(http.readyState==4)
        {
            if(http.status==200)
            {
                try
                {
                    var response = jQuery.parseJSON(http.responseText);
                }
                catch(e)
                {
                    console.log("failed to parse JSON response");
                    return false;
                }
                console.log(categoryObj);
                console.log(response.data);
                //go through each rate returned by the API
                //if the commodity key matches that in our categoryObj, append to the commodities card
            }
            //non 200 OK response
            else
            {
     
            }
        }
    }
    http.send();
}

//try and get the category paramater if set
var category = getUrlParameter("category");
if(category)
{
    console.log("found the category parameter:"+category);
    // match the category sent from the url to to one of our categories above
    // TO DO - perform a more robust check of whether or not the category object exists
    if(eval(category+"Obj"))
    {
        console.log("we have an object:");
        // run the categorie collected into the API URL
        getCommodityPrices(eval(category+"Obj"));
        // log this into console log
        // pull from the API and paste and paste on the screen
    }
    else
    {
        console.log("could not find a matching category object");
    }
}
else
{
    console.log("could not find param");
}




// create search bar
// use the search bar to run through the array selected on the landing page
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