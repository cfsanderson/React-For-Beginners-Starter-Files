import React, { Component } from 'react'
import { getSanderson } from '../helpers'

class StorePicker extends Component {

  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  // This ^ (pun intended) is a way to bind "this" to the goToStore method b/c otherwise "this" is only inherently bound to the render function of the class.

  goToStore() {
    event.preventDefault()
    const storeId = this.storeInput.value
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required placeholder="Store Name"
          defaultValue={getSanderson()}
          ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store =></button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker
