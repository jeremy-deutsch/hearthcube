import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import axios from 'axios';
import {encode, decode} from "deckstrings"; // encode doesn't work without importing decode, for some reason
import ClipboardButton from 'react-clipboard.js';

import druidCards from './api/cards.cube.druid.js';
import shamanCards from './api/cards.cube.shaman.js';
import rogueCards from './api/cards.cube.rogue.js';
import hunterCards from './api/cards.cube.hunter.js';
import warriorCards from './api/cards.cube.warrior.js';
import paladinCards from './api/cards.cube.paladin.js';
import mageCards from './api/cards.cube.mage.js';
import priestCards from './api/cards.cube.priest.js';
import warlockCards from './api/cards.cube.warlock.js';

const twoPerDeckLimit = true;

const heroes = [
  {
    dbfId: 893,
    hearthClass: "Warlock"
  },
  {
    dbfId: 930,
    hearthClass: "Rogue"
  },
  {
    dbfId: 274,
    hearthClass: "Druid"
  },
  {
    dbfId: 813,
    hearthClass: "Priest"
  },
  {
    dbfId: 7,
    hearthClass: "Warrior"
  },
  {
    dbfId: 671,
    hearthClass: "Paladin"
  },
  {
    dbfId: 1066,
    hearthClass: "Shaman"
  },
  {
    dbfId: 637,
    hearthClass: "Mage"
  },
  {
    dbfId: 31,
    hearthClass: "Hunter"
  }
];

class HeroSelector extends Component {

  render() {
    const {currentOptions, chooseHero} = this.props;

    return (
      <div>
      {currentOptions.length > 0 && 
      <Row>
        <Col md={4}>
          <a href="#" 
            onClick={() => {
              chooseHero(currentOptions[0]);
            }}
          >
            {currentOptions[0].hearthClass}
          </a>
        </Col>
        <Col md={4}>
          <a href="#" 
            onClick={() => {
              chooseHero(currentOptions[1]);
            }}
          >
            {currentOptions[1].hearthClass}
          </a>
        </Col>
        <Col md={4}>
          <a href="#" 
            onClick={() => {
              chooseHero(currentOptions[2]);
            }}
          >
            {currentOptions[2].hearthClass}
          </a>
        </Col>
      </Row>
      }
      </div>
    );
  }
}

class CardOption extends Component {

  onClick() {
    const {cardData, addToDeck, loadNewThree} = this.props;
    
    addToDeck(cardData);
    loadNewThree();
  }

  render() {
    const {cardData, onClick} = this.props;

    return (
      <a href="#" onClick={() => onClick()}>
        <img src={cardData.url} alt={cardData.name}/>
        <p>{cardData.name}</p>
      </a>
    );
  }
}

class CardSelector extends Component {
  render() {
    const {currentOptions, addToDeck, loadNewThree, ...cardOptionProps} = this.props;

    return (
      <div>
      {currentOptions.length > 0 && 
      <Row>
        <Col md={4}>
          <CardOption 
            cardData={currentOptions[0]}
            {...cardOptionProps} 
            onClick={() => {
              addToDeck(currentOptions[0]);
              loadNewThree();
            }}
          />
        </Col>
        <Col md={4}>
          <CardOption 
            cardData={currentOptions[1]}
            {...cardOptionProps} 
            onClick={() => {
              addToDeck(currentOptions[1]);
              loadNewThree();
            }}
          />
        </Col>
        <Col md={4}>
            <CardOption 
              cardData={currentOptions[2]}
              {...cardOptionProps} 
              onClick={() => {
                addToDeck(currentOptions[2]);
                loadNewThree();
              }}
            />
        </Col>
      </Row>
      }
      </div>
    );
  }
}

class Decklist extends Component {
  render() {
    const {decklistCards} = this.props;
    return (
      <ListGroup>
        {decklistCards.map(cardName =>
          <ListGroupItem>
            {cardName}
          </ListGroupItem>
        )}
      </ListGroup>
    );
  }
}

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      step: "start",
      started: false,
      thinking: false,
      heroClass: "",
      decklistCards: [],
      currentOptions: []
    };
    this.heroDbfId = 0;
    this.lottery = {
      COMMON: [],
      RARE: [],
      EPIC: [],
      LEGENDARY: []
    };
    this.allCards = {}; // All possible cards to choose from, with DbfId as a key.
    this.decklistDbfIds = {}; // Key-value pairs of DbfId to number of copies.
    this.deckSize = 0; // Track deck size so we don't have to rely on state, which updates asynchronously
  }

  loadThreeHeroes() {
    let heroList = heroes;
    shuffleArray(heroList);

    this.setState({
      currentOptions: heroList.slice(0, 3),
      step: "hero"
    });
  }

  chooseHero(hero) {
    this.heroDbfId = hero.dbfId;
    this.fillLottery(hero.hearthClass);
  }

  fillLottery(heroClass) {
    this.setState({
      currentOptions: [],
      heroClass
    });
    switch(heroClass) {
      case "Priest": this.allCards = priestCards; break;
      case "Warlock": this.allCards = warlockCards; break;
      case "Mage": this.allCards = mageCards; break;
      case "Druid": this.allCards = druidCards; break;
      case "Shaman": this.allCards = shamanCards; break;
      case "Rogue": this.allCards = rogueCards; break;
      case "Paladin": this.allCards = paladinCards; break;
      case "Warrior": this.allCards = warriorCards; break;
      case "Hunter": this.allCards = hunterCards; break;
    }
    // Axios would be nice, but there isn't a backend yet
    // axios.get('./api/cards.cube.' + heroClass.toLowerCase() + '.json')
    //   .then(response => {
    //     this.allCards = response.data;
        // console.log(response.data);
    for (let dbfId in this.allCards) {
      const ticketsToAdd = Math.floor(this.allCards[dbfId].frequency * 20);
      const rarity = this.allCards[dbfId].rarity;
      for (let i = 0; i < ticketsToAdd; i++) {
        this.lottery[rarity].push(dbfId);
      }
    }
    // console.log(this.lottery);
    for (let rarity in this.lottery) {
      shuffleArray(this.lottery[rarity]);
    }
    this.setState({step: "cards"});
    this.loadNewThree();
      // })
      // .catch(error => {
      //   console.error("Could not retrieve the " + heroClass + " cards: " + error);
      // });
  }

  loadNewThree() {
    this.setState({currentOptions: []});

    let rarityRand = Math.random();
    let rarity = "";
    let commonChance, rareChance, epicChance, legendChance;
    if (this.deckSize === 0) {
      // console.log("Legend pick!");
      commonChance = 0;
      rareChance = 0;
      epicChance = 0.5;
      legendChance = 0.5;
    } else if (this.deckSize === 9 || this.deckSize === 19 || this.deckSize === 29) {
      // console.log("Rare pick!");
      commonChance = 0;
      rareChance = 0.4;
      epicChance = 0.4;
      legendChance = 0.2;
    } else {
      commonChance = 0.65;
      rareChance = 0.22;
      epicChance = 0.1;
      legendChance = 0.03;
    }
    if (rarityRand < commonChance) {
      rarity = "COMMON";
    } else if (rarityRand < commonChance + rareChance) {
      rarity = "RARE";
    } else if (rarityRand < commonChance + rareChance + epicChance) {
      rarity = "EPIC";
    } else {
      rarity = "LEGENDARY";
    }

    let newOptions = {};

    // let timesSearched = 0;
    while (Object.keys(newOptions).length < 3) {
      // if (timesSearched >= 3) {
      //   console.log("Dug " + timesSearched + " deep");
      // }
      let possibleOption = this.allCards[this.lottery[rarity].pop()];
      if (!(possibleOption.dbfId in newOptions) && 
        (!(possibleOption.dbfId in this.decklistDbfIds) || 
        (rarity !== "LEGENDARY" && this.decklistDbfIds[possibleOption.dbfId] < 2) || 
        !twoPerDeckLimit)) {
        newOptions[possibleOption.dbfId] = possibleOption;
      }
    }

    this.setState({
      thinking: false,
      currentOptions: Object.values(newOptions)
    });
  }

  addToDeck(cardData) {
    if (!(cardData.dbfId in this.decklistDbfIds)) {
      this.decklistDbfIds[cardData.dbfId] = 1;
    } else {
      this.decklistDbfIds[cardData.dbfId]++;
    }
    this.setState({
      decklistCards: this.state.decklistCards.concat(cardData.name)
    });
    this.deckSize++;
    if (this.deckSize === 30) {
      this.generateDeckstring();
    }
  }

  generateDeckstring() {
    const cards = Object.entries(this.decklistDbfIds).map(entry => 
      [parseInt(entry[0]), entry[1]]
    );
    const deck = {
      cards,
      heroes: [this.heroDbfId],
      format: 1
    }
    // console.log(deck);
    const finalDeckstring = encode(deck);
    this.setState({finalDeckstring});
  }

  render() {
    switch(this.state.step) {
      case "start": {
        return (
          <button
            onClick={() => {
              this.loadThreeHeroes();
            }}
          >
            Start
          </button>
        );
      }
      case "hero": {
        return (
          <div className="App">
            <HeroSelector
              chooseHero={className => this.chooseHero(className)}
              currentOptions={this.state.currentOptions}
            />
          </div>
        );
      }
      case "cards": {
        return (
          <div className="App">
            {this.deckSize < 30 ?
            <CardSelector 
              currentOptions={this.state.currentOptions}
              addToDeck={(name, dbfId) => this.addToDeck(name, dbfId)}
              loadNewThree={() => this.loadNewThree()}
            />
            :
            <div>
              Congrats on your deck!
              <ClipboardButton data-clipboard-text={this.state.finalDeckstring}>
                Copy deck to clipboard
              </ClipboardButton>
              <button>Restart</button>
            </div>
            }
            <Decklist 
              decklistCards={this.state.decklistCards}
            />
          </div>
        );
      }
      default: {
        return (
          <div>default case - error occured</div>
        );
      }
    }
  }
}

function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

export default App;