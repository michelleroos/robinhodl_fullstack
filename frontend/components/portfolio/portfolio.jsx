import React from 'react';
import AssetDetail from './asset_detail';
import PortfolioChart from './portfolio_chart';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.currentUser = this.props.currentUser;
    }
    
    componentDidMount() {
        this.props.fetchUser(this.currentUser);
        // if (Object.keys(this.props.buyingPower).length == 0) {
        // }
    }
    
    render() {
        console.log(this.props);

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
        let assets = Object.entries(uniqOrders)        

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
                                    <h1>${buyingPower}</h1>
                                </header>
                                <section>
                                    <PortfolioChart 
                                        fetchUser={this.props.fetchUser}
                                        currentUser={this.props.currentUser}
                                        transfers={this.props.transfers} 
                                        orders={this.props.orders}/>
                                </section>
                                <section className="buying-power">
                                    <h2>Buying Power</h2>
                                    <p>${buyingPower}</p>
                                </section>
                            </div>
                            <div className="side-panel">
                                <header>
                                    <h3>Cryptocurrencies</h3>
                                </header>
                                <ul>
                                    {assets.map((asset) => 
                                    <AssetDetail key={asset[0]} asset={asset}/>)}
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