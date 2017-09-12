import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import axios from 'axios';

const twoPerDeckLimit = true;

class CardOption extends Component {

  onClick() {
    const {cardData, addToDeck, loadNewThree} = this.props;
    
    addToDeck(cardData);
    loadNewThree();
  }

  render() {
    const {cardData, onClick} = this.props;

    return (
      <div onClick={() => onClick()}>
        {cardData.name}
      </div>
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
      decklistCards: [],
      currentOptions: []
    };
    this.lottery = {
      COMMON: [],
      RARE: [],
      EPIC: [],
      LEGENDARY: []
    };
    this.allCards = {};
    this.decklistDbfIds = {};
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
  }



  fillLottery(heroClass) {
    axios.get('/card-json/cards.cube.' + heroClass + '.json')
      .then(response => {
        this.allCards = response.data;
        // console.log(response.data);
        for (let dbfId in response.data) {
          const ticketsToAdd = Math.floor(response.data[dbfId].frequency * 20);
          const rarity = response.data[dbfId].rarity;
          for (let i = 0; i < ticketsToAdd; i++) {
            this.lottery[rarity].push(dbfId);
          }
        }
        // console.log(this.lottery);
        for (let rarity in this.lottery) {
          shuffle(this.lottery[rarity]);
        }
        this.setState({step: "cards"});
        this.loadNewThree();
      })
      .catch(error => {
        console.error("Could not retrieve the " + heroClass + " cards: " + error);
      });
  }

  loadNewThree() {
    this.setState({currentOptions: []});
    let newOptions = [];

    let rarityRand = Math.random();
    let rarity = "";
    if (rarityRand < 0.5) {
      rarity = "COMMON";
    } else if (rarityRand < 0.75) {
      rarity = "RARE";
    } else if (rarityRand < 0.93) {
      rarity = "EPIC";
    } else {
      rarity = "LEGENDARY";
    }

    while (newOptions.length < 3) {
      let possibleOption = this.allCards[this.lottery[rarity].pop()];
      if (!(possibleOption in newOptions) && 
        (!(possibleOption.dbfId in this.decklistDbfIds) || 
        this.decklistDbfIds[possibleOption.dbfId] < 2 || 
        !twoPerDeckLimit)) {
        newOptions.push(possibleOption);
      }
    }

    this.setState({
      thinking: false,
      currentOptions: newOptions
    });
  }

  render() {
    switch(this.state.step) {
      case "start": {
        return (
          <button
            onClick={() => {
              {/* this.setState({step: "hero"}); */}
              this.fillLottery("priest");
            }}
          >
            Start
          </button>
        );
      }
      case "hero": {
        return (
          <div>
            {/* <HeroSelector
              chooseClass={(className) => this.fillLottery(className)}
            /> */}
          </div>
        );
      }
      case "cards": {
        return (
          <div className="App">
            {this.state.decklistCards.length < 30 ?
            <CardSelector 
              currentOptions={this.state.currentOptions}
              addToDeck={(name, dbfId) => this.addToDeck(name, dbfId)}
              loadNewThree={() => this.loadNewThree()}
            />
            :
            <div>
              Congrats on your deck!
              <button>Copy Decklist</button>
              <button>Restart</button>
            </div>
            }
            <Decklist 
              decklistCards={this.state.decklistCards}
            />
          </div>
        );
      }
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function shuffle (array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

export default App;
