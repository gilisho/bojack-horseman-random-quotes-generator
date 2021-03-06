import React, { Component } from 'react';
import music from "./Back in the 90's.mp3";
import './App.css';
import FontAwesome from 'react-fontawesome';

class App extends Component {

  constructor() {
    super();
    this.quotes = [
      "I'm supposed to be responsible for my own happiness? I can't even be responsible for my own breakfast!",
      "There's nothing the least bit funny about stealing a meal from Neal McBeal the Navy Seal.",
      "Would you like an alcohol?",
      "I did a business.",
      "That's too much, man!",
      "It gets easier. Everyday it gets a little easier. But you gotta do it everyday, that's the hard part. But it does get easier.",
      "When you look at someone through rose-colored glasses, all the red flags just look like flags.",
      "You know, sometimes I feel like I was born with a leak, and any goodness I started with just slowly spilled out of me, and now it's all gone. And I'll never get it back in me. It's too late.",
      "I don't understand how people live. It's amazing to me that people wake up every morning and say \"Yeah! Another day! Let's do it!\" How do people do it? I don't know how.",
      "Kelsey, in this terrifying world, all we have are the connections that we make.",
      "I do love you by the way, I mean as much as I'm capable of loving anyone, which is never enough.",
      "See, Sarah Lynn? We're not doomed. In the great grand scheme of things, we're just tiny specks that will one day be forgotten. So it doesn't matter what we did in the past or how we'll be remembered, the only thing that matters is right now, this moment. This one spectacular moment we are sharing together. Right, Sarah Lynn? ...Sarah Lynn? ...Sarah Lynn?",
      "Believe it or not, time's arrow neither stands still nor reverses. It merely marches forward.",
      "You know what I do when I have a really bad, awful, terrible day? I imagine my great-great-great granddaughter in the future talking to her class about me. She's poised and funny, and tells people about me and how everything worked out in the end. And when I think about that, I think about how everything's going to work out. Because how else could she tell people?",
      "I got into this business because I love stories. They comfort us, they inspire us, they create a context for how we experience the world. But also, you have to be careful, because if you spend a lot of time with stories, you start to believe that life is just stories, and it's not. Life is life, and that's so sad, because there's so little time and... what are we doing with it?",
      "It takes a long time to realize how truly miserable you are, and even longer to see it doesn't have to be that way.",
      "BoJack, when I was your age, I got sad. A lot. I didn't come from such a great home, but one day, I started running, and that seemed to make sense, so then I just kept running. BoJack, when you get sad, you run, straight ahead, and you keep running forward, no matter what. There are people in your life who are gonna try to hold you back, slow you down, but you don't let them. Don't you stop running and don't you ever look behind you. There's nothing for you behind you. All that exists is what's ahead.",
      "The universe is a cruel, uncaring void. The key to being happy isn't the search for meaning; is to just keep yourself busy with unimportant nonsense, and eventually, you will be dead.",
      "I'm not afraid of commitment. I commit to things all the time. It's the following through on that commitment that I take issue with.",
      "One day, you’re gonna look around and you’re going to realize that everybody loves you, but nobody likes you. And that is the loneliest feeling in the world.",
      "I believe it was Benjamin Franklin who said: \"You have reached the end of you free trial membership at BenjaminFranklinQuotes.com.\"",
      "Fool me once shame on me, but teach a man to fool me and I'll be fooled for the rest of my life.",
      "Fool me once, fool me twice, fool me chicken soup and rice.",
      "I'm more of a before rehab kind of friend.",
      "It's so cruel to let people love you. All you're doing is promising you'll one day break their hearts.",
      "Only after you give up everything can you begin to find a way to be happy.",
      "Don't fetishize your own sadness.",
      "Can you believe it? I sell a company for millions of dollars and you get a job writing for a blog! When it rains, it pours, huh?",
      "Okay. Carolyn, you are the star of a movie. And this is the part of the movie where you get your heart broken. Where the world tests you, and people treat you like shit. But it has to happen this way. Otherwise, the end of the movie, when you get everything you want, won't feel as rewarding. There are assholes out there, but in the end, they don't matter. Because this movie's not about them. It's never been about them. All this time, the movie's been about you.",
      "Juice controls the media.",
      "You're BoJack Horseman. There's no cure for that.",
      "I do love having my picture taken. It's proof I exist.",
      "Closure is a thing made up by Steven Spielberg to sell movie tickets."
    ];
    this.mainButtonClickHandler = this.mainButtonClickHandler.bind(this);
    this.volumeClickHandler = this.volumeClickHandler.bind(this);
    this.state = {
      prevQuote: "",
      currQuote: "Click on the button!",
      index: -1,
      mute: false,
      modulo: 1
    };
  }

  mainButtonClickHandler() {
    let index;
    do {
      index = Math.floor(Math.random() * this.quotes.length)
    } while (index === this.state.index);
    this.setState({
      prevQuote: this.state.currQuote,
      currQuote: this.quotes[index],
      index,
      modulo: (this.state.modulo + 1) % 2
    });
  }

  volumeClickHandler() {
    this.setState({
      mute: !this.state.mute
    });
  }

  render() {
    return (
      <div className="app-root">
        <audio autoPlay loop muted={this.state.mute}>
          <source src={music} type="audio/mpeg"></source>
        </audio>
        <div className="quotes-header">
          <h1>BoJack Horseman Random Quote Generator</h1>
        </div>
        <div className="quote-box">
          <h4 className="quote-text"
            style={{
              opacity: (this.state.modulo + 1) % 2,
            }}>
            {this.state.modulo ? this.state.prevQuote : this.state.currQuote}
          </h4>
          <h4 className="quote-text"
            style={{
              opacity: (this.state.modulo),
            }}>
            {this.state.modulo ? this.state.currQuote : this.state.prevQuote}
          </h4>
        </div>
        <button className="button" onClick={this.mainButtonClickHandler}>Get Another Quote!</button>
        <FontAwesome
          className="volume-button"
          name={(this.state.mute) ? "volume-off" : "volume-up"}
          title={(this.state.mute) ? "unmute" : "mute"}
          onClick={this.volumeClickHandler}
        />
        <div className="credits">
          Credit to the talented <a href="http://www.pandatooth.com" target="_blank"/*open in new tab*/>PandaTooth</a> for the music
          and to <a href="http://www.bythebutterfly.com" target="_blank">bythebutterfly</a> for the font!</div>
      </div >
    );
  }
}

export default App;
