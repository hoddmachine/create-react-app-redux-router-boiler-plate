// Vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
// API
// Styles
import Styles from './style.module.scss';

export default class BensinView extends Component {
    static propTypes = {
        bensinPrices: PropTypes.object
    };

    constructor (props) {
        super(props);
        this.state = {
            prices: []
        };
    }

    componentDidMount () {
        const { bensinPrices } = this.props;
        const prices = bensinPrices.results.sort((a, b) => a.bensin95 - b.bensin95);
        this.setState({ prices });
    }

    render () {
        const { prices } = this.state;
        return (
            <div>
                <div className={Styles.bensinPrice}>
                    <div className={Styles.price}>Verð</div>
                    <div className={Styles.priceCompany}>Staður</div>
                </div>
                {prices.map((price, index) => (
                    <div className={Styles.bensinPrice} key={index}>
                        {price.bensin95 && <div className={Styles.price}>{price.bensin95}</div>}
                        {price.company && price.name && <div className={Styles.priceCompany}>{`${price.company} - ${price.name}`}</div>}
                    </div>
                ))}
            </div>
        );
    }
}
