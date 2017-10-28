import React, { Component } from 'react'

class Content extends Component {
	constructor() {
		super()
		this.state = {
			data: [],
			message: "Unlike",
			type: ""
		}
		this.changeMessage = this.changeMessage.bind(this)
		this.insert = this.insert.bind(this)
	}

	changeMessage() {
		this.setState({
			message: "Like"
		})
	}

	insert() {
		var item = 'React'
		var myArray = this.state.data;
		myArray.push(item)
		this.setState({
			data: myArray
		})
	}

	render() {
		return(
			<div>
				<h3>{ this.state.message }</h3>
				<p><button onClick={this.changeMessage}>Change Message</button></p>
				<h3>{ this.state.data }</h3>
				<p><button onClick={this.insert}>Insert Data</button></p>
			</div>
		)
	}
}

export default Content