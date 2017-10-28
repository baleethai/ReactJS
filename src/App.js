import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

class App extends Component {
	render() {
		return (
			<div>
				<p><a href="/">Home</a></p>
				<p><a href="/header">Header</a></p>
				<p><a href="/footer">Footer</a></p>
			</div>
		)
	}
}

export default App;