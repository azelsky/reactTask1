import React, {Component} from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

export default class Categories extends Component{
    static propTypes = {
        update: PropTypes.func.isRequired,
        data: PropTypes.array.isRequired
    }

    categorySearch = (e) => {
        const {update, data} = this.props;

        const value = e.nativeEvent.path[0].innerText;
        let filter = [];
        if(e.nativeEvent.path[0].innerText !== 'All Categories'){
            filter = data.filter(post =>  post.bsr_category.includes(value));
        } else {
            filter = data;
        }

        update({
            posts: filter,
            search: filter
        })
    }

    getCategoriesList = () => {
        const {data} = this.props; 
        let category = [];
        return  data.map(
            (article) => {
                if(category.indexOf(article.bsr_category) === -1){
                    const categoryLink = article.bsr_category.replace(/ /g, "-");
                    category[category.length] = article.bsr_category;
                    let currentClass = '';
                    if(article.bsr_category.replace(/ /g, "-") === window.location.pathname.slice(1)){
                        currentClass = 'current';
                    }
                    return (
                        <NavLink activeStyle={{color: 'red'}} to={`/${categoryLink}`} key={article.asin}>
                            <ListGroupItem onClick={this.categorySearch} bsClass={"category list-group-item " + currentClass}>
                                    {article.bsr_category}   
                            </ListGroupItem>
                        </NavLink> 
                    )
                } else {
                    return false;
                }
            }
        );
    }
    
    render(){
        const {data} = this.props; 
        if(!data) return null;

        let currentClass = "";
        if(window.location.pathname === "/"){
            currentClass = "current"
        }
        return(
            <Panel >
                <Panel.Heading>Search by Category</Panel.Heading>
                <ListGroup>                   
                    <NavLink to='/'>
                        <ListGroupItem bsClass={"category list-group-item " + currentClass} onClick={this.categorySearch}>
                            All Categories
                        </ListGroupItem> 
                    </NavLink> 
                    {this.getCategoriesList()}
                </ListGroup>
            </Panel>   
        )
    }
}

