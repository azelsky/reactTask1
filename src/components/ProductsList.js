import React from 'react';
import Product from './Product';
import './style.css';
import PropTypes from 'prop-types';

class ProductsList extends React.Component{
	static propTypes = {
		products: PropTypes.array.isRequired
	}

	getProduct = () => {
		const {products} = this.props;
		const location = window.location.pathname.slice(1);

		return products.map(function(product){
			if(product.bsr_category.replace(/ /g, "-").includes(location)){
				return <li key={product.asin}><Product product = {product}/></li>
			} else return null
		})
	}

	render(){
		return(
			<ul>
				{this.getProduct()}
			</ul>
		)
	}
}

export default ProductsList