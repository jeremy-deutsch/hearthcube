import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

const cardJSON = {
  "Common": {
    "River Crocolisk": {"default": 1},
    "Magma Rager": {"default": 1},
    "Wisp": {"default": 1},
    "Stonetusk Boar": {"default": 1},
    "Chillwind Yeti": {"default": 1},
    "Flamestrike": {"Mage": 1},
    "Boulderfist Ogre": {"default": 0.75}
  },
  "Rare": {
    "Alarm-O-Bot": {"default": 1},
    "Abomination": {"default": 1},
    "Coldlight Oracle": {"default": 1},
    "Crazed Alchemist": {"default": 1},
    "Defender of Argus": {"default": 0.5},
  },
  "Epic": {
    "Mountain Giant": {"default": 1},
    "Doomsayer": {"default": 1},
    "Faceless Manipulator": {"default": 1},
    "Blood Knight": {"default": 1},
  },
  "Legendary": {
    "Ragnaros the Firelord": {"default": 1},
    "Alexstrasza": {"default": 1},
    "Baron Geddon": {"default": 1},
    "Nat Pagle": {"default": 1.5},
    "Bloodmage Thalnos": {"default": 1},
  }
}

class CardOption extends Component {

  onClick() {
    const {cardName, addToDeck, loadNewThree} = this.props;
    
    addToDeck(cardName);
    loadNewThree();
  }

  render() {
    const {cardName, onClick} = this.props;

    return (
      <div onClick={() => onClick()}>
        {cardName}
      </div>
    );
  }
}

class CardSelector extends Component {
  render() {
    const {currentOptions, addToDeck, loadNewThree, ...cardOptionProps} = this.props;

    return (
      <div>
      {currentOptions.length > 0 ? 
      <Row>
        <Col md={4}>
          <CardOption 
            cardName={currentOptions[0]}
            {...cardOptionProps} 
            onClick={() => {
              addToDeck(currentOptions[0]);
              loadNewThree();
            }}
          />
        </Col>
        <Col md={4}>
          <CardOption 
            cardName={currentOptions[1]}
            {...cardOptionProps} 
            onClick={() => {
              addToDeck(currentOptions[1]);
              loadNewThree();
            }}
          />
        </Col>
        <Col md={4}>
            <CardOption 
              cardName={currentOptions[2]}
              {...cardOptionProps} 
              onClick={() => {
                addToDeck(currentOptions[2]);
                loadNewThree();
              }}
            />
        </Col>
      </Row>
      :
      <div></div>
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
      started: false,
      thinking: false,
      decklistCards: [],
      currentOptions: []
    };
  }

  addToDeck(cardName) {
    this.setState(
      {decklistCards: this.state.decklistCards.concat(cardName)}
    );
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  loadNewThree() {
    let newOptions = [];
    this.setState({currentOptions: []});

    
    // if (this.state.decklistCards.length % 2 !== 0) {
    //   newOptions =  [
    //     "Magma Rager",
    //     "River Crocolisk",
    //     "Wisp"
    //   ];
    // } else {
    //   newOptions =  [
    //     "Dr. Boom",
    //     "Leeroy Jenkins",
    //     "Alarm-O-Bot"
    //   ];
    // }
    this.setState({
      thinking: false,
      currentOptions: newOptions
    });
  }

  render() {
    if (!this.state.started) {
      return (
        <button
          onClick={() => {
            this.setState({started: true});
            this.loadNewThree();
          }}
        >
          Start
        </button>
      );
    } else {
      return (
        <div className="App">
          {this.state.decklistCards.length < 30 ?
          <CardSelector 
            currentOptions={this.state.currentOptions}
            addToDeck = {name => this.addToDeck(name)}
            loadNewThree = {() => this.loadNewThree()}
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

export default App;
