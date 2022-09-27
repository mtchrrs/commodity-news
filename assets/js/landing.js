// when you click submit, the page is redirected to content.html
// the url from this page is sent to the other page


const compareBtn = $('.submit')
compareBtn.on('click', function(){
    
    var queryString = document.location.search; 
    var category = queryString.split('=')[1];
    console.log(category);
    document.location.href = './commodity-news/pages/content.html?category=' + category;
});

// reference pointer to category and compare button - separate variables
// read category.value - gives value of category - document.location set to new URL

// event listener on compare