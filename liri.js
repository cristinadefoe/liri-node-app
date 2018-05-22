// Add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// Add the code required to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");

// Require twitter 
var Twitter = require('twitter');

// Require node-spotify-api
var Spotify = require('node-spotify-api');

// Require request
var request = require("request");

// Require fs (read file)
var fs = require("fs");

// Save userAction in variable
var userAction = process.argv[2];
//node liri [my-tweets(becomes userAction)]
// Title of song or movie
var userTitle = process.argv[3];

var getTweets = function () {

    var client = new Twitter(keys.twitterKeys);

    var params = { screen_name: 'crisdef12' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {

            // Loop through all my tweets
            for (var i = 0; i < tweets.length; i++) {

                // Console log tweets
                console.log(tweets[i].created_at);
                console.log(" ");
                console.log(tweets[i].text);
            }
        }
    });

}

var getSpotify = function (songName) {

    var spotify = new Spotify(keys.spotifyKeys);

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // console.log(JSON.stringify(data, null, 2))
        var songs = data.tracks.items[0];

        // Console log Spotify
        console.log("artist(s): " + songs.artists[0].name);
        console.log("Song Name: " + songs.name);
        console.log("Preview Song: " + songs.preview_url);
        console.log("Album: " + songs.album.name);
        console.log("-----------------------------------------------");

    });
}

var getMovies = function (movieName) {

    // Run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    // Debug against the actual URL
    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
            var movie = JSON.parse(body);

            // Movie title
            console.log("Title: " + movie.Title);

            // Release year of movie
            console.log("Release Year: " + movie.Year);

            // IMDB rating
            console.log("IMDB Rating: " + movie.imdbRating);

            // Rotten Tomatoes rating
            console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);

            // Country produced
            console.log("Country Produced: " + movie.Country);

            // Languages available
            console.log("Language(s) Available: " + movie.Language);

            // Plot synopsis
            console.log("Plot Synopsis: " + movie.Plot);

            // Actors
            console.log("Actors: " + movie.Actors);
        }
    });

}

var doThat = function () {

    // This block of code will read from the "movies.txt" file.
    // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
    // The code will store the contents of the reading inside the variable "data"
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        // .split converts string into array
        // .join converts array into string
        var dataArr = data.split(", ");

        // We will then re-display the content as an array for later use.
        console.log(dataArr);

        // Show indexes of an array
        console.log(dataArr[1]);
        userTitle = dataArr[1];
        userAction = dataArr[0];
        pick(userAction, userTitle);
    });

}

var pick = function (caseData, functionData) {
    switch (caseData) {
        case "my-tweets":
            getTweets();
            break;
        case "spotify-this-song":
            getSpotify(functionData);
            break;
        case "movie-this":
            getMovies(functionData);
            break;
        case "do-what-it-says":
            doThat();
            break;
        default:
            console.log("LIRI does not know that");
    }
}

pick(userAction, userTitle);