import React from 'react'
import './style.css'

class Article extends React.Component {

  render() {
    const {link, img, bsr_category, name, price} = this.props.article;
    return (
      <div className="container">
          <div className="col-10 offset-1 post">
            <div className="row">
              <h4>{name}</h4>   
              <div className="col-6">
                <img width="100%" src={img} alt=""/>
              </div>
              <div className="col-6">
                <h4>Price: {price}</h4>
                <p>Category: {bsr_category}</p>
                <a href={link}>Buy</a>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
  


export default Article