import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Alert } from 'antd';
import { appStore } from '../../stores';
import TestApi from '../../api/test';

@observer
export default class Home extends Component {
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
    render() {
        return (
            <div>
                <Button onClick={this.clickA}>global loading</Button>
                <Button onClick={this.clickB}>test post</Button>
            </div>
        );
    }
}
