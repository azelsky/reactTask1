import React, {Component} from 'react';
import axios from 'axios';

class FetchDemo extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://demo1266316.mockable.io/azelsky_prac`)
      .then(res => {
        const posts = res.data;
        
      });
  }

}

export default FetchDemo



