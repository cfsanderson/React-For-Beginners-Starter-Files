import React, { Component } from 'react'
import { formatPrice } from '../helpers.js'

class Fish extends Component {

  render() {
    // ES6 destructuring syntax which is the same as saying...
    // const details = this.props.details
    // const index = this.props.index
    const { details, index } = this.props

    const isAvailable = details.status === 'available'
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';

    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className='fish-name'>
          {details.name}
          <span className='price'>{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button
          onClick={() => this.props.addToOrder(index)}
          disabled={!isAvailable}>{buttonText}</button>
      </li>
    )
  }
}

export default Fish
