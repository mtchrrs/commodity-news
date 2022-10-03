// when you click submit, the page is redirected to content.html
// the url from this page is sent to the other page


const compareBtn = $('.submit');
compareBtn.on('click', function(){
    //var queryString = document.location.search; 
    //var category = queryString.split('=')[1];
    var category = $("#category_select").val();
    console.log(category);
    if(category == "none"){
        location.reload();
    }
    
    var newURL = './content.html?category=' + category;
    //window.open(newURL);
    window.location.replace(newURL);
});

