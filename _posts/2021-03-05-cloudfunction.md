---
title: Using Google Sheets and Google Cloud Functions to Retrieve Tweets and Followers Data from TwitterS
tags: Technology
---


With the advancement of technology, data retrieval from social media platforms like Twitter has become easier. In this article, we will show you how to retrieve tweets and followers data from Twitter using Google Sheets and Google Cloud Functions.

Google Sheets is a powerful tool for data management and analysis. It provides a simple and intuitive interface for data input and retrieval. Google Cloud Functions, on the other haSSnd, is a serverless compute platform that allows you to run your code without having to manage infrastructure.

The main idea behind this process is to use Google Sheets as the front-end interface where you can input the keywords or usernames you want to retrieve tweets and followers data from. The inputted data will then be sent to a Google Cloud Function, which will call the Twitter API and retrieve the tweets and followers data. Finally, the retrieved data will be sent back to Google Sheets for display.

Here is the source code for the Google AppScript: [Github](https://github.com/byambaa1982/get_tweets_using_google_cloud).

The source code consists of several functions:

- clearSheet - This function clears the contents of a specific sheet in the Google Sheet document.
- search_word - This function retrieves tweets based on a keyword inputted in the Google Sheet.
- get_followers_data - This function retrieves the followers data of a specific Twitter account.
- get_tweets_data - This function retrieves the tweets data of a specific Twitter account based on a keyword inputted in the Google Sheet.
- Print - This function displays the retrieved tweets data based on the keyword inputted in the Google Sheet.
- Print2 - This function displays the retrieved followers data of a specific Twitter account.
- Print3 - This function displays the retrieved tweets data of a specific Twitter account based on a keyword inputted in the Google Sheet.
- deleteBlankRows - This function deletes any blank rows in the Google Sheet document.
- onOpen - This function creates a custom menu in the Google Sheet document.

In conclusion, this article has shown you how to retrieve tweets and followers data from Twitter using Google Sheets and Google Cloud Functions. The source code provided in this article can be easily modified to suit your needs, and the process can be repeated for other social media platforms.