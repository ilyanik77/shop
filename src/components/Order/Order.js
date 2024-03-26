import React, { Component } from 'react'
import './order.css'

export class Order extends Component {
	render() {
		return (
			<div className='order'>
				<img src={'./img/' + this.props.item.img} alt='Foto' />
				<h2>{this.props.item.title}</h2>
				<p>{this.props.item.price}$</p>
			</div>
		)
	}
}

export default Order
