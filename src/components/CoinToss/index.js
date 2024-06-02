// Write your code here
import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    resultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  generateResult = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      return this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        tails: prevState.tails,
        resultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    }
    return this.setState(prevState => ({
      total: prevState.total + 1,
      heads: prevState.heads,
      tails: prevState.tails + 1,
      resultImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    }))
  }

  render() {
    const {total, heads, tails, resultImage} = this.state
    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="img" src={resultImage} alt="toss result" />
          <button className="btn" type="button" onClick={this.generateResult}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="description2">Total: {total}</p>
            <p className="description2">Heads: {heads}</p>
            <p className="description2">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
