// create a constant for the compare button
const compareBtn = $('.submit');
// the following line creates a function when the button is clicked
compareBtn.on('click', function(){
    // this variable holds the value selected in the dropdown menu
    var category = $("#category_select").val();
    // if no category is selected, then the document will reload
    if(category == "none"){
        location.reload();
    }
    // create a variable to hold the content page URL and the category selected above
    var newURL = './content.html?category=' + category;
    // send the new URL created above to the current tabs URL to load the next page
    document.location.replace(newURL);
});