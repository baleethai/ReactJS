import React, { Component } from 'react'

class Content extends Component {
	constructor() {
		super()
		this.state = {
			name: "Unlike",
			count: 0
		}
	}
	render() {
		setTimeout( () => {
			this.setState({
				name: "Like"
			})
		}, 2000)
		setInterval( () => {
			this.setState({count: this.state.count+1})
		}, 1000)
		return(
			<div>
				<h3>{ this.props.title }</h3>
				<p>Status : {this.state.name} {this.state.count}</p>
			</div>
		)
	}
}

export default Content