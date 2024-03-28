import React, { Component } from 'react'
import './category.css'

export class Category extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [
				{
					key: 'all',
					name: 'Все',
				},
				{
					key: 'chairs',
					name: 'Стулья',
				},
				{
					key: 'armchairs',
					name: 'Кресла',
				},
				{
					key: 'tables',
					name: 'Столы',
				},
				{
					key: 'beds',
					name: 'Кровати',
				},
			],
		}
	}
	render() {
		return <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key) } >{el.name}</div>
            ))}
        </div>
	}
}

export default Category
