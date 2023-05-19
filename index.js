const Eris = require('eris');
const Axios = require('axios');
const {token} = require('./config.json');
const katsumi = new Eris(token);

katsumi.on('ready', () => {
  console.log(`Logged in as ${katsumi.user.username}`);
  katsumi.editStatus('online', { name: '$help', type: 0 });
});

katsumi.on('messageCreate', async (msg) => {
  if (msg.content === '$ping') {
    katsumi.createMessage(msg.channel.id, 'Hiya Katsumi Is Online..!');
  }
  
  else if(msg.content === '$joke'){
    try {
      const jokeResponse = await Axios.get('https://v2.jokeapi.dev/joke/Any?format=txt');
      const joke = jokeResponse.data;
      katsumi.createMessage(msg.channel.id,joke);
    } catch (error) {
      console.error('Error fetching joke:', error.message);
      katsumi.createMessage(msg.channel.id, 'Oops! Something went wrong while fetching a joke.');
    }
  }
  
  else if(msg.content === '$dark'){
    try {
      const darkResponse = await Axios.get('https://v2.jokeapi.dev/joke/Dark?format=txt');
      const darkJoke = darkResponse.data;
      katsumi.createMessage(msg.channel.id,darkJoke);
    } catch (error) {
      console.error('Error fetching Dark joke:', error.message);
      katsumi.createMessage(msg.channel.id, 'Oops! Something went wrong while getting dark joke.');
    }
  }
  
  else if(msg.content === '$pun'){
    try {
      const punResponse = await Axios.get('https://v2.jokeapi.dev/joke/Pun?format=txt');
      const punJoke = punResponse.data;
      katsumi.createMessage(msg.channel.id,punJoke);
    } catch (error) {
      console.error('Error fetching pun joke:', error.message);
      katsumi.createMessage(msg.channel.id, 'Oops! Something went wrong while getting pun joke.');
    }
  }
  
  else if(msg.content === '$programming'){
    try {
      const programmingResponse = await Axios.get('https://v2.jokeapi.dev/joke/Programming?format=txt');
      const programmingJoke = programmingResponse.data;
      katsumi.createMessage(msg.channel.id,programmingJoke);
    } catch (error) {
      console.error('Error fetching Programming joke:', error.message);
      katsumi.createMessage(msg.channel.id, 'Oops! Something went wrong while getting Programming joke.');
    }
  }
  
  else if(msg.content === '$dad'){
    try {
      const dadResponse = await Axios.get("http://icanhazdadjoke.com", { headers: { Accept: "text/plain", }, });
      const dadJoke = dadResponse.data;
      katsumi.createMessage(msg.channel.id,dadJoke);
    } catch (error) {
      console.error('Error fetching dad joke:', error.message);
      katsumi.createMessage(msg.channel.id, 'Oops! Something went wrong while getting dad joke.');
    }
  }
  
  else if(msg.content === '$meme'){
    try {
      const response = await Axios.get("https://meme-api.com/gimme");
      const meme = response.data;

      const memeTitle = meme.title;
      const memeImage = meme.url;

      katsumi.createMessage(msg.channel.id,`**${memeTitle}**\n${memeImage}`);
    } catch (error) {
      console.error("Error fetching meme:", error);
      katsumi.createMessage(msg.channel.id,"Oops! Something went wrong.");
    }
  }
  
  else if(msg.content === '$help'){
    katsumi.createMessage(msg.channel.id, "> **Welcome to Katsumi Help!** 💫\n\n> Created with ❤️ by **Arkaneel Roy**\n\n> **COMMANDS** 🤖\n\n> - `$ping`: Ping Katsumi.\n> - `$joke`: Katsumi generates a random joke.\n> - `$dark`: Katsumi generates a dark joke.\n> - `$dad`: Katsumi generates a dad joke.\n> - `$pun`: Katsumi generates a pun.\n> - `$programming`: Katsumi generates a joke on programming.\n> - `$meme`: Katsumi generates a meme.\n\n> Feel free to explore these commands and have some fun with Katsumi! 😄");
  }
});

katsumi.on('error', (error) => {
  console.error('Katsumi encountered an error:', error);
});

katsumi.connect();
