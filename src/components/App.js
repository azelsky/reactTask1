import React from 'react'
import ArticleList from './ArticleList'
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			posts: [],
			tern: ''
		};

		this.loadData();
	}

	updateData(config){
		this.setState(config);
	}

	loadData(){
	    axios.get(`https://demo1266316.mockable.io/azelsky_prac`)
	      .then(res => {
			this.initialData = res.data.products;
	        this.setState({ posts: this.initialData });
	    });	
	}

	render(){
		console.log(this.state.posts)
		return(
			<div>
				<SearchBar
					term = {this.state.term}
					data = {this.initialData}
					update = {this.updateData.bind(this)}
					
				/>
				<ArticleList articles={this.state.posts}/>
			</div>
		)
		
	}
}

export default App