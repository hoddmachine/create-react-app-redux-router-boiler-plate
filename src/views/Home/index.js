// Vendor
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Components
import BaseView from '../Base/index';

class HomeView extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <BaseView title={'Neytendavaktin'}>
                <div>Við erum Neytendavaktin.</div>
                <Link to={'/bensin'}>Bensínverð</Link>
            </BaseView>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(HomeView);
