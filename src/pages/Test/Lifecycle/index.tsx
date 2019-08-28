import React, { Component } from 'react';

export default class Lifecycle extends Component<any, any> {
    static defaultProps = {
    };
    constructor(props) {
        super(props);
        this.state = {
            logs: {}
        };
    }
    
    componentWillMount() {
        console.log('[parent]: componentWillMount');
    }
    componentDidMount() {
        console.log('[parent]: componentDidMount');
    }
    componentDidCatch() {
        console.log('[parent]: componentDidCatch');
    }
    componentDidUpdate() {
        console.log('[parent]: componentDidUpdate');
    }
    componentWillReceiveProps() {
        console.log('[parent]: componentWillReceiveProps');
    }
    componentWillUnmount() {
        console.log('[parent]: componentWillUnmount');
    }
    componentWillUpdate() {
        console.log('[parent]: shouldComponentUpdate');
    }
    shouldComponentUpdate(np, ns, nc) {
        console.log('[parent]: shouldComponentUpdate');
        return true;
    }
    
    render() {
        console.log('this:', this);
        return (
            <div className="airtest-log-container">
                <p>[parent] 生命周期测试</p>
            </div>
        );
    }
}
