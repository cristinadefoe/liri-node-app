# LIRI Bot: Node.js Homework #8

This is a LIRI application (Language Interpretation and Recognition Interface) which allows the user to use the command line node app that accepts the values of certain parameters and returns data. For instance, a user ca run node liri.js and include the following commands and it will output the data related to the user's request.

    - `my-tweets`, `spotify-this-song`, `movie-this`, `do-what-it-says`

## Getting Started

Create your own Spotify and API keys and replace it with the information in the file called `.env`. 
#### Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
#### Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

### NPM Installations

Navigate to the root of your project. Then in the terminal command line run `npm init`, this will initalize a `package.json` for your project. Include the following NPM installations, `npm dotenv`, `npm node-spotify-api`, `npm request`, `npm twitter`.

## Deployment 

To see LIRI Bot in action, run the following in your command line:

`node liri.js my-tweets`

   * This will show the last 20 tweets and when they were created in your terminal/bash window.
#### Screenshot
   
![screen shot 2018-06-03 at 11 47 32 am](https://user-images.githubusercontent.com/35505038/40889456-5cb25d32-6724-11e8-880c-11c73aa8c666.png)

`node liri.js spotify-this-song '<song name here>'`

   * This will show the artist(s), song's name, preview link of the song from Spotify, album song is from; in your terminal/bash window

   * If no song is given, it will default to "The Sign" by Ace of Base.

#### Screenshot
    
![screen shot 2018-06-03 at 12 05 45 pm](https://user-images.githubusercontent.com/35505038/40889595-8d98556c-6726-11e8-9a36-2e1a09a73be5.png)

 `node liri.js movie-this '<movie name here>'`

   * This will show title of the movie, year movie was released, IMDB Rating, Rotten Tomatoes Rating, country movie was made, language, plot, actors; to your terminal/bash window

    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

#### Screenshot
   
![screen shot 2018-06-03 at 12 16 19 pm](https://user-images.githubusercontent.com/35505038/40889654-fc0c6276-6727-11e8-8eda-9fdd780d1c9e.png)


4. `node liri.js do-what-it-says`
   
   ..* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

   Screenshot path for do-what-it-says: 
   
   <img width="1280" alt="do-what-it-says" src="https://user-images.githubusercontent.com/35505038/40379212-d21e9ff2-5db2-11e8-928d-8e718af27b83.png">

## Built With

* Visual Studio Code (https://code.visualstudio.com) - Text editor
* Javascript 
* Node.js (https://nodejs.org/en/) - Framework used
* JSON (http://www.json.org) - Data format used
* Twitter API  - API 
* Spotify API  - API for music 
* OMDB API - API for movies 

## Author

* **Cristina Defoe** - (https://github.com/cristinadefoe)

## Acknowledgments

* Thanks to anyone's code that was used as inspiration.

* Instructions copied from "LIRI Bot" README.md homework.
