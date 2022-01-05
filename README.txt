This is not the official readme, but rather a document for me to explain to everyone
what I have so far. Basically the data flow goes like this:


Database -> api.js -> Player.js -> Roster.js -> main.js

See: https://www.balldontlie.io/#introduction for more detail on the api
We're limited to 60 requests per minute using this one, so we might consider 
a different source for pulling data if we want dynamic datasets, 
or a different strategy that closer resembles the update a few times a day strategy.

(i.e. Pull the whole data set, write it to a JSON file and
store it locally to then be parsed when users want to access something) 

I always struggle with the asyncronus stuff dealing with promises, but so far everything
works fine. I was using the utils file to do the fetch before, but it works much simpler
when I just do the fetch while creating the player object