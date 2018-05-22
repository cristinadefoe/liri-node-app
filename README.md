# Project Name: liri-node-app

### Description: This is a LIRI application (Language Interpretation and Recognition Interface) which allows the user to use the command line node app that accepts the values of certain parameters and returns data. For instance, a user ca run node liri.js and include the following commands and it will output the data related to the user's request.

    - `my-tweets`

    -`spotify-this-song`

    - `movie-this`

    - `do-what-it-says`

### How to Use the App:

### NOTE: INSTRUCTIONS BELOW HAS BEEN COPIED FROM "# LIRI Bot" README.md homework instructions.

### From the command line type in the following:

1. `node liri.js my-tweets`

   ..* This will show last 20 tweets and when they were created in your terminal/bash window.

   ..* Screenshot path for my-tweets: 
   
   <img width="1280" alt="twitter" src="https://user-images.githubusercontent.com/35505038/40379196-c833210c-5db2-11e8-806c-ce6de60240aa.png">


2. `node liri.js spotify-this-song '<song name here>'`

   ..* This will show the following information about the song in your terminal/bash window
     
     * Artist(s)

     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from

    * If no song is provided then your program will default to "The Sign" by Ace of Base.

    Screenshot path for spotify-this-song: 
    
    <img width="1280" alt="spotify-this-song" src="https://user-images.githubusercontent.com/35505038/40379203-cc269564-5db2-11e8-89fe-05ebbc633d73.png">


3. `node liri.js movie-this '<movie name here>'`

   ..* This will output the following information to your terminal/bash window

       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
   
   ..* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

   Screenshot path for movie-this:
   
    <img width="1280" alt="movie-this" src="https://user-images.githubusercontent.com/35505038/40379207-ceefea0c-5db2-11e8-9e5a-025355e3cf90.png">

4. `node liri.js do-what-it-says`
   
   ..* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
   ..* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

   Screenshot path for do-what-it-says: 
   
   <img width="1280" alt="do-what-it-says" src="https://user-images.githubusercontent.com/35505038/40379212-d21e9ff2-5db2-11e8-928d-8e718af27b83.png">
   
     
Built With: Javascript, node.js

Author: Cristina Defoe

Acknowledgments: Thanks to anyone's code that was used as inspiration.

