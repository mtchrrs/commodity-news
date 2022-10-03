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
//list of valid categories
const categories = {
    "currency":"",
    "cryptocurrency":"",
    "consumables":"",
    "metals":"",
    "resources":"",
}

//reload the page to search the commodities API based on the selected category
function reloadPageBasedOnCommodity()
{
    //read the value commodity category selected
    var category = $("#categorySelect").val();
    //create the new URL
    if(category == "none"){
        location.reload();
    }
    var newURL = './content.html?category=' + category;
    //reload the page with new URL
    //window.open(newURL);
    window.location.replace(newURL);
}

//commodity prices card
const comContainer = $('.commodity-prices-card');
const comAPIKey = "5i3439mr3qzg7beo14kvb7wfvneh2jgduglakzo3fv86l6480m4t701hh1c1";
//const comAPIKey = "5pj0h95a9jmdih51dzywtxwvbi7y3r4optdpz1t3tw7q431jab0f62273p7s"; //this is the new key
const comAPIBaseCurrency = "USD";
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
//send a get request to the commodities API and display a list of relevant commodities and their prices.
function getCommodityPrices(categoryObj)
{
    //url of the commodities API
    var commodityAPIURL = "https://www.commodities-api.com/api/latest?access_key="+comAPIKey+"&base="+comAPIBaseCurrency;
    //run a HTTP GET request to the API and attempt to decode the JSON response
    fetch(commodityAPIURL)
    .then((response) => response.json()) //decode the JSON response
    .then(function(data){ //process the data
        //for each item in our category, attempt to lookup the correspoding price in the commodities API response
        //console.log(data);
        //check that we received a successful response from the API
        if(data.data.success==false)
        {
            //log the error message to console and return false
            console.log("ERROR - "+data.data.error.info);
            return false;
        }
        for(const item in categoryObj)
        {
            //if we find a match
            if(item in data.data.rates)
            {
                //calculate the $ value by dividing by 1
                var itemValue = (data.data.rates[item]/1).toFixed(10);
                //console.log(item+" - "+categoryObj[item]+": "+itemValue+" "+comAPIBaseCurrency);
                //display the price on the commodity prices card
                var newCommodity = $("<div></div>").addClass("commodity m-2");
                newCommodity.append($("<span>"+categoryObj[item]+"</span>").addClass("item"));
                newCommodity.append($("<span>$"+itemValue+" "+comAPIBaseCurrency+"</span>").addClass("price"));
                comContainer.append(newCommodity);
            }
        }
    });
}
//get the category paramater if set
var category = getUrlParameter("category");
//console.log(category+"Obj")
if(category){
    //if the category is valid, run the commodoties API
    if(category in categories){
        //set the commodity category drop down list to match the url param value in Jquery
        $("#categorySelect").val(category);
        //the above is shorthand for javascripts document.getElementById("categorySelect").value()
        getCommodityPrices(eval(category+"Obj"));
    }
    else{
        console.log("category "+category+" is invalid");
    }
}
else{
    console.log("category parameter not set");
}
// create search bar

const compareBtn = $('.submit');
compareBtn.on('click', function(){
    //var queryString = document.location.search;
    //var category = queryString.split('=')[1];
    var category = $("#category_select").val();
    //console.log(category);
    if(category == "none"){
        location.reload();
    }
    var newURL = window.location.pathname + '?category=' + category;
    // window.open(newURL);
    window.location.replace(newURL);
});

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