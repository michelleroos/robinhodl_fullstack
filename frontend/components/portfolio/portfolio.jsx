import React from 'react';
import AssetDetail from './asset_detail';
import PortfolioChart from './portfolio_chart';
import { Link } from 'react-router-dom';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.currentUser = this.props.currentUser;
        this.state = {}
    }
    
    componentDidMount() {
        this.props.fetchUser(this.currentUser);

        let allOrders = this.props.orders;
        for (let i = 0; i < allOrders.length; i++) {
            let currOrder = allOrders[i];

            if (!this.state[currOrder.token_sym]) {
                this.setState(() => {
                    return {[currOrder.order_type]: 0 }
                })
            }


        }
    }
    
    render() {
        let allOrders = this.props.orders;
        let uniqOrders = {}
        for (let i = 0; i < allOrders.length; i++) {
            if ([allOrders[i].order_type] == "Buy") {
                uniqOrders[allOrders[i].token_sym] = 0;
                uniqOrders[allOrders[i].token_sym] += parseInt([allOrders[i].number]);
            } else {
                uniqOrders[allOrders[i].token_sym] -= parseInt([allOrders[i].number]);
            }
        }
        let assets = Object.entries(uniqOrders).filter(count => count[1] > 0)
        
        console.log(this.props);

        if (Object.keys(this.props.orders).length == 0) {
            return <p>Loading...</p>
        } else {
            const buyingPower = this.props.buyingPower;
            return (
                <div className="outmost-portfolio-container">
                    <div className="outer-portfolio-container">
                        <div className="feed-container">
                            <div className="feed">
                                <header>
                                    <h1>{formatter.format(buyingPower)}</h1>
                                    <p>+$215.48 (+1.65%) Today</p>
                                </header>
                                <section className="chart">
                                    <PortfolioChart 
                                        fetchUser={this.props.fetchUser}
                                        currentUser={this.props.currentUser}
                                        transfers={this.props.transfers} 
                                        orders={this.props.orders}/>
                                </section>
                                <section className="buying-power">
                                    <div>
                                        <p>Buying Power</p>
                                    </div>
                                    <div>
                                        <p>{formatter.format(buyingPower)}</p>
                                    </div>
                                </section>
                                <section className="news">
                                    <div>
                                        <p>News</p>
                                    </div>
                                    <div>
                                        {/* <p>content here</p> */}
                                    </div>
                                </section>
                            </div>
                            <div className="side-panel">
                                <header>
                                    <h3>Cryptocurrencies</h3>
                                </header>
                                <ul className="asset-container">
                                    {assets.map((asset) => 
                                        <AssetDetail 
                                            key={asset[0]} 
                                            asset={asset} 
                                            fetchToken={this.props.fetchToken}
                                            token={this.props.token}
                                            tokens={this.props.tokens}/>)}
                                </ul>
                                <header>
                                    <h3>Watchlist</h3>
                                </header>
                                <ul className="asset-container">
                                    <Link to={"/tokens/bitcoin"}>
                                        <li className="asset">
                                            <div className="asset-info">
                                                <p className="asset-name">SNX</p>
                                            </div>
                                            <div className="asset-pricing">
                                                <p>$.08</p>
                                                <p className={isPositive("-5.6") ? "green" : "red"}>
                                                    -5.6%</p>
                                            </div>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) 
        }
    }
}

export default Portfolio;

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

let isPositive = (string) => {
    if (parseFloat(string) > 0) {
        return true;
    }
    return false;
}