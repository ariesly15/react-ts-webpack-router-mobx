import React, { Component } from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router'
import { appStore } from '../../stores';

@observer
export default class Login extends Component<RouteComponentProps, {}> {
    clickA() {
        console.log('clickA:::::::::', appStore);
        appStore.updateHasLogin(!appStore.hasLogin);
    }
    componentDidMount() {
        console.log('..........Login:componentDidMount:\n', this);
    }
    render() {
        const { location } = this.props;
        return (
            <div>
                <Button onClick={this.clickA}>
                    点击切换登录状态 [{String(appStore.hasLogin)}]
                </Button>
                {location && location.state && <div>From: {location.state.from.pathname}</div>}
            </div>
        );
    }
}
