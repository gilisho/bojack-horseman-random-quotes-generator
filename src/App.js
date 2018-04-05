import React, { Component } from 'react';
import music from "./Back in the 90's.mp3";
import './App.css';
import FontAwesome from 'react-fontawesome';

class App extends Component {

  constructor() {
    super();
    var quotes = [
      "Would you like an alcohol?",
      "I did a business",
      "That's too much, man!",
      "It gets easier. Everyday it gets a little easier. But you gotta do it everyday, that's the hard part. But it does get easier.",
      "When you look at someone through rose-colored glasses, all the red flags just look like flags.",
      "You know, sometimes I feel like I was born with a leak, and any goodness I started with just slowly spilled out of me, and now it's all gone. And I'll never get it back in me. It's too late.",
      "I don't understand how people live. It's amazing to me that people wake up every morning and say \"Yeah! Another day! Let's do it!!\" How do people do it? I don't know how.",
      "Kelsey, in this terrifying world, all we have are the connections that we make. I'm sorry I got you fired. I'm sorry I never called you after.",
      "I do love you by the way, I mean as much as I'm capable of loving anyone, which is never enough.",
      "See, Sarah Lynn? We're not doomed. In the great grand scheme of things, we're just tiny specks that will one day be forgotten. So it doesn't matter what we did in the past or how we'll be remembered, the only thing that matters is right now, this moment. This one spectacular moment we are sharing together. Right, Sarah Lynn?",
      "Believe it or not, time's arrow neither stands still nor reverses. It merely marches forward.",
      "I imagine my great-great-great granddaughter in the future talking to her class about me. She's poised and funny, and tells people about me and how everything worked out in the end. And when I think about that, I think about how everything's going to work out. Because how else could she tell people?",
      "I got into this business because I love stories. They comfort us, they inspire us, they create a context for how we experience the world. But also, you have to be careful, because if you spend a lot of time with stories, you start to believe that life is just stories, and it's not. Life is life, and that's so sad, because there's so little time and... what are we doing with it?",
      "It takes a long time to realize how truly miserable you are, and even longer to see it doesn't have to be that way.",
      "BoJack, when I was your age, I got sad. A lot. I didn't come from such a great home, but one day, I started running, and that seemed to make sense, so then I just kept running. BoJack, when you get sad, you run straight ahead and you keep running forward, no matter what. There are people in your life who are gonna try to hold you back, slow you down, but you don't let them. Don't you stop running and don't you ever look behind you. There's nothing for you behind you. All that exists is what's ahead.",
      "The universe is a cruel, uncaring void. The key to being happy isn't the search for meaning; is to just keep yourself busy with unimportant nonsense, and eventually, you will be dead.",
      "I'm not afraid of commitment. I commit to things all the time. It's the following through on that commitment that I take issue with.",
      "One day, you’re gonna look around and you’re going to realize that everybody loves you, but nobody likes you. And that is the loneliest feeling in the world",
      "I believe it was Benjamin Franklin who said: \"You have reached the end of you free trial membership at BenjaminFranklinQuotes.com.\"",
      "Fool me once shame on me, but teach a man to fool me and I'll be fooled for the rest of my life.",
      "Fool me once, fool me twice, fool me chicken soup and rice."
    ];
    this.mainButtonClickHandler = this.mainButtonClickHandler.bind(this);
    this.volumeClickHandler = this.volumeClickHandler.bind(this);
    this.state = {
      currQuote: "",
      mute: false
    };
  }

  mainButtonClickHandler() {
    let index = Math.floor(Math.random() * this.quotes.length);
    this.setState({
      currQuote: this.quotes[index]
    });
  }

  volumeClickHandler() {
    this.setState({
      mute: !this.state.mute
    });
  }

  render() {
    return (
      <div className="App">
        <audio autoPlay loop muted={this.state.mute}>
          <source src={music} type="audio/mpeg">
          </source>
        </audio>
        <FontAwesome
          className="volume-button"
          name={(this.state.mute) ? "volume-off" : "volume-up"}
          title={(this.state.mute) ? "unmute" : "mute"}
          onClick={this.volumeClickHandler}
        />
      </div>
    );
  }
}

export default App;
