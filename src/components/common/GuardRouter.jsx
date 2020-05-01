import React, {Component} from 'react';
import {
    withRouter
} from "react-router-dom"
export default class GuardRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <this.props.component {...this.props}/>
        )
    }
}