# commodity-news
An application that compares commodity prices in AUD with current Australian Business news

# User Story

AS AN investor in the Australian market

I WANT TO be able to analyse commodity prices 

AND I WANT TO be able to compare these prices to the Australian Business News

SO THAT I can make the most informed investment decisions based on up to date data


# Acceptance Criteria

GIVEN an application that compares commodity prices and Australian Business News

WHEN I open the application

THEN I am presented with a description of the application, and a drop down menu

SO THAT I can select a category of commodities relevant to the ones I want to see

THEN I can click the 'COMPARE" button and be directed to the next page

GIVEN I am on the 'Compare' page

WHEN I look at the left card for Commodity Prices

THEN I can see the commodities listed in the category or search for a commodity

SO THAT I can see exactly what I am interested in seeing

WHEN I look at the right card for Business News

THEN I can see the current Australian Business News

SO THAT I can compare the local business news to the current commodity prices in AUD

# Using the Application

Deployed Application URL: https://mtchrrs.github.io/commodity-news/

Upon launching the application, users will open to the landing page, as shown below
![image](https://user-images.githubusercontent.com/110107834/193551705-e1553038-c6bd-4520-8a34-847db1148165.png)

Users will be asked to pick a category from the dropdown menu. To continue, the user must pick a category and then click the compare button.
![image](https://user-images.githubusercontent.com/110107834/193551865-60c4b515-ed86-42a0-bd58-a08b43c6a8c6.png)

Users will then be directed to the content page, where the catgrory selected (in this case cryptocurrency) is shown, as seen below.
![image](https://user-images.githubusercontent.com/110107834/193552926-0a178135-0652-4217-b115-9ff365885c24.png)

Users will see the commodities in the category listed below on the left hand side, with a drop down menu that can be used to instantly change the category list shown.
These commodities are pulled from the Commodity API.
![image](https://user-images.githubusercontent.com/110107834/193553104-bc647f25-0fd5-4d9a-9986-057824ae0b31.png)

On the right you can see the Business News card which shows 5 recent business news articles called from the Media Stack API
![image](https://user-images.githubusercontent.com/110107834/193553409-6ac67b60-293e-4df4-920a-0445bb4e6da6.png)

If a user would like to see an article in more detail, they simply need to click the title or description of the article, and it will open in a new tab.
