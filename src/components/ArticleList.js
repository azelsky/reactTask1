import React from 'react';
import Article from './Article'
import './style.css'

class ArticleList extends React.Component{
	render(){
	const {articles} = this.props;
	
	const location = window.location.pathname.slice(1);

	const articleElements = articles.map(function(article){
		if(article.bsr_category.replace(/ /g, "-").includes(location)){
			return <li key={article.asin}><Article article = {article}/></li>
		} else return null
	})
	
		
		return(
			<ul>
				{articleElements}
			</ul>
		)
	}
}

export default ArticleList