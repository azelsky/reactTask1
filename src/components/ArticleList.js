import React from 'react';
import Article from './Article'
import './style.css'

class ArticleList extends React.Component{
	render(){
	const articles = this.props.articles;
	const articleElements = articles.map(function(article){ 
		return <li key={article.asin}><Article article = {article}/></li>
	})
	
		
		return(
			<ul>
				{articleElements}
			</ul>
		)
	}
}

export default ArticleList