import React, { Component } from 'react';
import withCounter from "./withCounter";

class ClickCounter extends Component {
    render() {
        const { count, increamentCount } = this.props;                
        return <button onClick={increamentCount}> {this.props.name} Click {count} times code</button>
    }
}

export default withCounter(ClickCounter, 5)
