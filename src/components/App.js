import React from 'react';
import ProductsList from './ProductsList';
import Categories from './Categories';
import axios from 'axios';
import Search from './Search';
import { BrowserRouter as Router, } from "react-router-dom";
import { Grid, Row, Col} from 'react-bootstrap';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			search: [],
			products: [],
            initialData: [],
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
                this.setState({ 
                    initialData: res.data.products,
                    products: res.data.products,
                    search: res.data.products
                });
	    });	
	}

	render(){
		return(
            <Router>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <Search
                                term = {this.state.term}
                                data = {this.state.search}
                                update = {this.updateData.bind(this)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} sm={12}> 
                            <Categories 
                                data = {this.state.initialData}
                                update = {this.updateData.bind(this)}
                            />
                        </Col>
                        <Col md={8} sm={12}> 
                            <ProductsList products={this.state.products}/>
                        </Col>
                    </Row>
                </Grid>
            </Router>
		)
	}
}

export default App