import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button } from 'antd';
import { appStore } from '../../stores';
import TestApi from '../../api/test';
import ReactJson from 'react-json-view';
import io from 'socket.io-client';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

@observer
export default class Home extends Component<{}, any> {
    constructor(props) {
        super(props);
        this.state = {
            rj: {}
        };
    }
    async componentDidMount() {
        // const rj = await TestApi.getjson();
        // console.log('did did rj:', rj);
        // this.setState({ rj });
        // this.initIO();
        hljs.initHighlightingOnLoad();
    }

    initIO() {
        const socket = io('/airtest', {
            query: {
                socket: 'test'
            }
        });
        socket.on('connect', () => {
            const id = socket.id;
            console.log('###socket::id::', id, socket);
        });
        socket.on('online', msg => console.log('###online::', msg));
        socket.on('disconnect', msg => console.log('###disconnect::', msg));
        socket.on('disconnecting', () => console.log('###disconnecting'));
        socket.on('error', () => console.log('###error'));
    }
    clickA() {
        appStore.updateReqCount(2);
        setTimeout(() => {
            appStore.updateReqCount(-2);
        }, 3000);
    }
    async clickB() {
        const result = await TestApi.testPost();
        console.log('..........result:::', result);
    }
    async clickC() {
        const result = await TestApi.testCookie();
        console.log('..........result:::', result);
    }
    render() {
        const c = `
export default class Home extends Component<{}, any> {
    constructor(props) {
        super(props);
        this.state = {
            rj: {}
        };
    }
}
    `;
        const { rj } = this.state;
        return (
            <div>
                <Button onClick={this.clickA}>global loading</Button>
                <Button onClick={this.clickB}>test post</Button>
                <Button onClick={this.clickC}>test cookie</Button>
                <div />
                <br />
                <pre>
                    <code className='language-js'>{c}</code>
                </pre>
                <br />
                <div>
                    <ReactJson src={rj} />
                </div>
            </div>
        );
    }
}
