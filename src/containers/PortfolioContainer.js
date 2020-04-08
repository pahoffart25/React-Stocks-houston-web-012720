import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
          this.props.owned.map(stock =>  <Stock stock={stock} panel="stocks" sell={this.props.sell} owned={true}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
