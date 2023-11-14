# Assignment: Tenor Gif

## What are we gonna create?

The main purpose of most APIs is to retrieve data from a source and display it in a visual way.

We will make use of our beloved Tenor API to create our own website of gifs.

## Where can I start?

First of all, sign up to get an API KEY
Get the URL of calling the API GET request.
The URL consists of a protocol (https:// ), the API URL of Tenor (api.tenor.com/v1/), a search query to ask for specific searches such as Cat or Dog, or TV, the API Key, and finally limit the query to limit the list of elements.
The API should be something like https://api.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8
Test the API in the browser. Do you see a JSON response? Then start building your application.

## Your application should have?

HTML, CSS, and Bootstrap (optional)
Javascript page connected to the HTML
input field where you can put the text for the search query with a button to submit the search input.
XMLHttpRequest to make an API call to a Tenor server
Display a result on the page HTML under the input such as the picture above
