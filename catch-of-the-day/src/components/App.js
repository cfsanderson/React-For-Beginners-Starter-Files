import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import { getSanderson } from '../helpers.js'

class App extends Component {

  constructor() {
    super();
    this.funnyName = this.funnyName.bind(this)
    this.addFish = this.addFish.bind(this)
    // this will set the initial state = getinitialState
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    // update our state
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes })
  }

  funnyName() {
    return <p>{getSanderson()}</p>
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" funnyName={this.funnyName()} />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
