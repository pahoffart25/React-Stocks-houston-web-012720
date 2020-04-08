import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      display: [],
      stocks: [],
      owned: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => {
      this.setState({
        stocks: stocks,
        display: stocks
      })
    })
  }

  buy = (stock) => { 
    let yourStocks = this.state.owned
    !yourStocks.includes(stock)
    ? this.setState({owned: [...yourStocks, stock]})
    : alert("You already own it.")
  }

  sell = (stock) => {
    let yourStocks = this.state.owned
    let i = yourStocks.indexOf(stock)
    yourStocks.splice(i,1)
    this.setState({owned: yourStocks})
  }

  alpha = () => {
    let alpha = this.state.stocks.sort((a,b) => a.name > b.name ? 1 : -1)

    this.setState({
      display: alpha
    })
  }

  pricey = () => {
    let pricey = this.state.stocks.sort((a,b) => a.price > b.price ? 1 : -1)

    this.setState({
      display: pricey
    })
  }

  filter = (event) => {
    let current = this.state.stocks
    let sorted = []

    switch(event.target.value){
      case("Tech"):
        sorted = current.filter(stock => stock.type === "Tech")
        break 
      case("Sportswear"):
        sorted = current.filter(stock => stock.type === "Sportswear")
        break 
      case("Finance"): 
        sorted = current.filter(stock => stock.type === "Finance")
       break
      case("None"): 
        sorted = current
    }
    this.setState({
      display: sorted
    })
    

  }



  render() {
    console.log(this.state.owned)
    return (
      <div>
        <SearchBar alpha={this.alpha} pricey={this.pricey} filter={this.filter}/>

          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.display} buy={this.buy}/>

            </div>
            <div className="col-4">

              <PortfolioContainer owned={this.state.owned} sell={this.sell}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
