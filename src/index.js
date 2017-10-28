import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { BrowserRouter, Link, Route } from 'react-router-dom'

ReactDOM.render (
	<BrowserRouter>
		<div>
			<Route path="/" component={App}/>
			<Route path="/header" component={Header}/>
			<Route path="/footer" component={Footer}/>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
)