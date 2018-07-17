import React from 'react';
import ArticleList from './ArticleList';
import Category from './Category';
import axios from 'axios';
import SearchBar from './SearchBar';
import { BrowserRouter as Router, } from "react-router-dom";

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			search: [],
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
	        this.setState({ 
				posts: this.initialData,
				search: this.initialData
			});
	    });	
	}

	render(){
 
		console.log(this.props.testStore)
		return(
      <Router>
        <div className="container">
          <SearchBar
            term = {this.state.term}
            data = {this.state.search}
            update = {this.updateData.bind(this)}
            
          />
          <div className="row">
            <div className="col-4">
							<Category 
                data = {this.initialData}
								update = {this.updateData.bind(this)}
              />
            </div>
            <div className="col-8">
              <ArticleList articles={this.state.posts}/>
            </div>
          </div>
        </div>
      </Router>
		)
		
	}
}

export default App