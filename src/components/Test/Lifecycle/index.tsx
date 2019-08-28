import React, { Component } from 'react';

export default class Lifecycle extends Component<any, any> {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {
            logs: {}
        };
    }
    componentWillMount() {
        console.log('[child]: componentWillMount');
    }
    componentDidMount() {
        console.log('[child]: componentDidMount');
    }
    componentDidCatch() {
        console.log('[child]: componentDidCatch');
    }
    componentDidUpdate() {
        console.log('[child]: componentDidUpdate');
    }
    componentWillReceiveProps() {
        console.log('[child]: componentWillReceiveProps');
    }
    componentWillUnmount() {
        console.log('[child]: componentWillUnmount');
    }
    componentWillUpdate() {
        console.log('[child]: shouldComponentUpdate');
    }
    shouldComponentUpdate(np, ns, nc) {
        console.log('[child]: shouldComponentUpdate');
        return true;
    }

    render() {
        return (
            <div className='airtest-log-container'>
                <p>[child]: 生命周期测试</p>
            </div>
        );
    }
}
