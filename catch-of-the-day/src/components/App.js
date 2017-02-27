import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'

import { getSanderson } from '../helpers.js'
import sampleFishes from '../sample-fishes.js'

class App extends Component {

  constructor() {
    super();
    this.funnyName = this.funnyName.bind(this)
    this.addFish = this.addFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
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

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order}
    // update or add new number of fish ordered
    order[key] = order[key] + 1 || 1
    this.setState({ order })
  }

  funnyName() {
    return <p>{getSanderson()}</p>
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" funnyName={this.funnyName()} />
          <ul className="list-of-fishes">
            {Object
              .keys(this.state.fishes)
              .map(key => <Fish
                            key={key}
                            index={key}
                            details={this.state.fishes[key]}
                            addToOrder={this.addToOrder}/>)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
