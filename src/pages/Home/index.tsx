import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button } from 'antd';
import { appStore } from '../../stores';
import TestApi from '../../api/test';
import ReactJson from 'react-json-view';
import Login from '../../components/LoginQSSO';

@observer
export default class Home extends Component<{}, any> {
    constructor(props) {
        super(props);
        this.state = {
            rj: {}
        };
    }
    async componentDidMount() {
        const rj = await TestApi.getjson();
        console.log('did did rj:', rj);
        this.setState({ rj });
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
        return (
            <div>
                <Button onClick={this.clickA}>global loading</Button>
                <Button onClick={this.clickB}>test post</Button>
                <Button onClick={this.clickC}>test cookie</Button>
                <div>
                    <Login />
                </div>
                <div>
                    <ReactJson src={this.state.rj} />
                </div>
            </div>
        );
    }
}
