import React, {Component} from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.css';

export default class Category extends Component{
    render(){
        const {update, data} = this.props;

        if(!data) return 'loading...';

        const categorySearch = function(e){
            const value = e.nativeEvent.path[0].innerText;
            let filter = [];
            if(e.nativeEvent.path[0].innerText !== 'All Category'){
                filter = data.filter(
                    post => {
                        return post.bsr_category.includes(value);
                    }
                );
            } else {
                filter = data;
            }

            update({
                posts: filter,
                search: filter
            })
        }

        let category = [];
        const categoryElements = data.map(
            (article) => {
                if(category.indexOf(article.bsr_category) === -1){
                    category[category.length] = article.bsr_category;
                    return (
                        <ListGroupItem onClick={categorySearch} className='category' key={article.asin}>{article.bsr_category}</ListGroupItem>
                    )
                } else {
                    return false;
                }
            }
        );
       
        return(
            <Panel>
                <Panel.Heading>Search by Category</Panel.Heading>
                <ListGroup>
                    <ListGroupItem className="category" onClick={categorySearch}>All Category</ListGroupItem>
                    {categoryElements}
                </ListGroup>
            </Panel>
        )
    }
}