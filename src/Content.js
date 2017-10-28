import React, { Component } from 'react'

class Content extends Component {
	constructor() {
		super()
		this.state = {
			message: "Unlike"
		}
	}

	changeMessage(event) {
		this.setState({
			message: event.target.value
		})
	}

	render() {
		return(
			<div>
				<h3>{ this.state.message }</h3>
				<p><input type="text" onChange={this.changeMessage.bind(this)}/></p>
			</div>
		)
	}
}

export default Content