import React from 'react'
import ArticleList from './ArticleList'
//import articles from '../fixtures'
import axios from 'axios';


class App extends React.Component {
	state = {
    	posts: [],
  	}
	componentDidMount() {
	    axios.get(`https://demo1266316.mockable.io/azelsky_prac`)
	      .then(res => {
	        let posts = res.data.products;
	        this.setState({ posts });
	    });
	}

	render(){
		return(
			<div>
				<ArticleList articles={this.state.posts}/>
			</div>
		)
		
	}
}

export default App