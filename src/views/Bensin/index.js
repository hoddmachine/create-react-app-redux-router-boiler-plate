// Vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import BaseView from '../Base/index';
import Bensin from '../../components/Bensin/index';
// API
import { fetchBensin } from '../../api/bensin/actions';

class BensinView extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        bensinPrices: PropTypes.object
    };

    constructor (props) {
        super(props);
        this.state = {};
        this.props.dispatch(fetchBensin());
    }

    render () {
        const { bensinPrices } = this.props;
        return (
            <BaseView title={'Neytendavaktin'}>
                {bensinPrices && <Bensin bensinPrices={bensinPrices}/>}
                {!bensinPrices && <div>Loading...</div>}
            </BaseView>
        );
    }
}

const mapStateToProps = state => {
    return {
        bensinPrices: state.bensin.data
    };
};

export default connect(mapStateToProps)(BensinView);
