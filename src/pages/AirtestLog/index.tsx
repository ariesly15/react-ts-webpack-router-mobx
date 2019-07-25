import React, { Component } from 'react';
import { getLogs } from '../../api/airtestLog';
import './index.less';

export default class AirtestLog extends Component<any, any> {
    static defaultProps = {
        logUrl: 'http://autotest.dev.qunar.com:7001/public/caselogs/15c3c1a2b5abc35ebacc447255d5f485/log.html'
    };
    constructor(props) {
        super(props);
        this.state = {
            logs: {}
        };
    }
    componentDidMount() {
        this.getLogs();
    }
    async getLogs() {
        const logs = await getLogs({ id: 11 });
        this.setState({ logs });
    }
    render() {
        console.log('this:', this);
        return (
            <div className="airtest-log-container">
                <iframe
                    className='iframe'
                    src={this.props.logUrl}
                />
            </div>
        );
    }
}
