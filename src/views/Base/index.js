// Vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BaseView extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const { children } = this.props;
        return (
            <div>{children}</div>
        );
    }
}
