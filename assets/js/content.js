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
    XPD: "PALLADIUM",
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
}

//list of valid categories
const categories = {
	"currency":"",
	"cryptocurrency":"",
	"consumables":"",
	"metals":"",
	"resources":"",
}

//commodity prices card
const comContainer = $('.commodity-prices-card');
//const comAPIKey = "5i3439mr3qzg7beo14kvb7wfvneh2jgduglakzo3fv86l6480m4t701hh1c1";  //this is the old key, max number of requests per month reached
//const comAPIKey = "f3tsk69begcgm86joa1f1gk94403e89bshgj11m1ja255966xz6mwtjzt6t4"; //this is the new key, max number of requests per month reached
//const comAPIKey = "pvbbfl57hthgd102chp2njje681xzw650igd4ct0ozpc2y1cnvwxn7c28so3"
const comAPIKey = "ybxoombge7m6bnzqhb1vny4or1s98u4x31uk4cewrx64bj7l042wr624pvb9"
const comAPIBaseCurrency = "AUD";

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
	var commodityAPIURL = "https://www.commodities-api.com/api/latest?access_key="+ comAPIKey +"&base=" + comAPIBaseCurrency;
	//run a HTTP GET request to the API and attempt to decode the JSON response
	fetch(commodityAPIURL)
	.then((response) => response.json()) //decode the JSON response
	.then(function(data){ //process the data
		//for each item in our category, attempt to lookup the correspoding price in the commodities API response
		console.log("this is the API response");
		console.log(data);
		for(const item in categoryObj)
		{
			//if we find a match
			if(item in data.data.rates)
			{
				//calculate the $ value by dividing by 1
				var itemValue = (data.data.rates[item]).toFixed(6);
				//console.log(item+" - "+categoryObj[item]+": "+itemValue+" "+comAPIBaseCurrency);
				
				//display the price on the commodity prices card
				var newCommodity = $("<div></div>").addClass("commodity m-2");
				newCommodity.append($("<span>"+categoryObj[item]+"</span>").addClass("item"));
				newCommodity.append($("<span>$"+itemValue +"</span>").addClass("price"));
				comContainer.append(newCommodity);
			}
		}
	});
}

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




// business news card
// create individual news link cards

// find the container on the html where we want the data to be displayed
const newsContainer = $('.business-news-container');
// create a variable to hold the API Key
const newsAPIKey = "596798da2f1a2ffec8641a0a2f3f72b9"
// the following function pulls the news data from the API and displays it on the screen
$(function createNewsContainers(){
    // this variable holds the URL to the API and includes the API Key
    var newsQueryURL = "http://api.mediastack.com/v1/news?access_key=" + newsAPIKey + "&categories=business&countries=au&languages=en&limit=5"
    console.log(newsQueryURL);
    // the fetch function grabs the URL for the API 
    return fetch(newsQueryURL)
    .then(function(response){
        console.log(response);
        // the return response JSON returns the data into the application, ready to be pulled and displayed
        return response.json();
    })
    .then(function(result){
        // the for loop creates 5 of the news articles and presents then onto the screen
        for(let i=0; i<=5; i++){
            console.log(result);
            // the following lines pull the information from the json to easily access though a local variable
            let image = result.data[i].image;
            let title = result.data[i].title;
            let description = result.data[i].description;
            let link = result.data[i].url; 
            // the next line creates a div for the data
            var article = document.createElement("div");
            // and adds the following class to the div
            article.classList.add("articles-class");
            // this will create the article and display it in the html with the corresponding values
            article.innerHTML = `
            <div class="article-image-container">
            <img src="${image}" class="article-image" alt="${title}">
            </div>
            <div class="article-text">
            <a href="${link}" title="Go to the website" target="_blank class="article-title">${title}
            <h3 class="article-description">${description}
            </div>`
            // this will append the article div to the pre-existing html
            newsContainer.append(article);
        };
        
    });
});