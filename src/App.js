import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Items from './components/Items/Items'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            orders: [],
			items: [
				{
					id: 1,
					title: 'Стул серый',
					img: '004.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'chairs',
					price: '49.99',
				},
				{
					id: 2,
					title: 'Стул обеденный',
					img: '003.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'chairs',
					price: '59.99',
				},
				{
					id: 3,
					title: 'Стол обеденный "Style"',
					img: 'table.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'chairs',
					price: '209.99',
				},
				{
					id: 4,
					title: 'Стол обеденный "Style S"',
					img: 'table1.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'chairs',
					price: '220.99',
				},
				{
					id: 5,
					title: 'Кресло S',
					img: '001.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'chairs',
					price: '89.99',
				},
				{
					id: 6,
					title: 'Кресло S1',
					img: '002.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'chairs',
					price: '95.99',
				},
				{
					id: 7,
					title: 'Кровать XL',
					img: '007.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'chairs',
					price: '249.99',
				},
				{
					id: 8,
					title: 'Кровать XXL',
					img: '008.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'bed',
					price: '349.99',
				},
			]
		}
        this.addToOrder = this.addToOrder.bind(this)
	}

	render() {
		return (
			<div className='wrapper'>
				<Header orders={this.state.orders} />
				<Items items={this.state.items} onAdd={this.addToOrder} />
				<Footer />
			</div>
		)
	}

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id ===item.id) 
                isInArray = true
            
        })
        if(!isInArray)
            this.setState({ orders: [...this.state.orders, item] })
    }
}



export default App
