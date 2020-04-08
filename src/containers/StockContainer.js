import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
          <h2>All Stocks</h2>
          {this.props.stocks.map(stock =>  <Stock stock={stock} panel="stocks" buy={this.props.buy}/>)}
      </div>
    );
  }

}

export default StockContainer;
