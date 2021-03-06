 import React, { Component } from 'react';
 import CardList from '../components/CardList';
 import SearchBox from '../components/SearchBox';
 import Scroll from '../components/Scroll';
 import { robots } from './robots';
 import ErrorBoundry from '../components/ErrorBoundry';
 import './App.css';



class App extends Component  {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		this.setState({ robots : robots});
	}

	onSearchChange = (event) => {


		this.setState({ searchfield: event.target.value })
	
	
	}


	render () {

			const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
	 		<div className='tc'>
	 			<h1 className='f1'>Robofriends</h1>
	 			<SearchBox searchChange={this.onSearchChange}/>
	 			<Scroll>
	 				<ErrorBoundry>
	 					<CardList robots={filteredRobots}/>
	 				</ErrorBoundry>	
	 			</Scroll>
	 		</div>	
 		);
 	}
  }

 export default App;