import React, { Component } from 'react';
import io from 'socket.io-client';
import TestApi from '../../../api/test';
import { Button } from 'antd';

export default class SocketIO extends Component<any, any> {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {
            logs: {}
        };
    }

    componentWillMount() {
        this.initIO();
    }

    initIO() {
        const socket = io('/');
        socket.on('connect', () => {
            const id = socket.id;
            console.log('%c ###socket::id::', 'color:blue', id, socket);
            socket.emit('test', 'emit test args');
        });
        socket.on('disconnect', msg => console.log('%c ###disconnect::', 'color:blue', msg));
        socket.on('disconnecting', () => console.log('%c ###disconnecting', 'color:blue'));
        socket.on('error', () => console.log('%c ###error', 'color:blue'));
        socket.on('res', msg => console.log('%c res from server: ', 'color:blue', msg));
        socket.on('timer', (...args) => console.log('%c res from server-timer: ', 'color:blue', args));
    }

    async clickB() {
        const result = await TestApi.testPost();
        console.log('..........result:::', result);
    }

    render() {
        return (
            <div className='airtest-log-container'>
                <Button onClick={this.clickB}>test post</Button>
                <p style={{ color: 'red', fontSize: '24px', marginTop: '15px' }}>Open Dev Tool</p>
            </div>
        );
    }
}
