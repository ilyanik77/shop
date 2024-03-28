import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Items from './components/Items/Items'
import Category from './components/Category/Category'
import ShowFullItem from './components/ShowFullItem/ShowFullItem'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			currentItems: [],
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
					category: 'tables',
					price: '209.99',
				},
				{
					id: 4,
					title: 'Стол обеденный "Style S"',
					img: 'table1.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'tables',
					price: '220.99',
				},
				{
					id: 5,
					title: 'Кресло S',
					img: '001.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'armchairs',
					price: '89.99',
				},
				{
					id: 6,
					title: 'Кресло S1',
					img: '002.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'armchairs',
					price: '95.99',
				},
				{
					id: 7,
					title: 'Кровать XL',
					img: '007.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'beds',
					price: '249.99',
				},
				{
					id: 8,
					title: 'Кровать XXL',
					img: '008.jpg',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
					category: 'beds',
					price: '349.99',
				},
			],
            showFullItem: false,
            fullItem: {}
		}

        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
        
	}

	render() {
		return (
			<div className='wrapper'>
				<Header orders={this.state.orders} onDelete={this.deleteOrder} />
				<Category chooseCategory={this.chooseCategory} />
				<Items
					onShowItem={this.onShowItem}
					items={this.state.currentItems}
					onAdd={this.addToOrder}
				/>

				{this.state.showFullItem && (
					<ShowFullItem
						onAdd={this.addToOrder}
						onShowItem={this.onShowItem}
						item={this.state.fullItem}
					/>
				)}

				<Footer />
			</div>
		)
	}

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory (category) {
        if(category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id) 
                isInArray = true
            
        })
        if(!isInArray)
            this.setState({ orders: [...this.state.orders, item] })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

}



export default App
