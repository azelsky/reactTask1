import React from 'react';
import { Grid, Row, Col, Image, Panel, Button } from 'react-bootstrap';
import './style.css';
import PropTypes from 'prop-types';

class Article extends React.Component {
    static propTypes = {
        product: PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            bsr_category: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired         
        }).isRequired
    }

    render() {
        const {link, img, bsr_category, name, price} = this.props.product;

        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <Panel>
                            <Panel.Heading>{name}</Panel.Heading>
                            <Panel.Body>
                                <Row>
                                    <Col md={8} sm={12}>
                                        <Image src={img}/>
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <h4>Price: {`${price}$`}</h4>
                                        <p>Category: {bsr_category}</p>
                                        <Button bsStyle="success" block href={link}>Buy</Button>
                                        
                                    </Col>
                                </Row>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
  


export default Article