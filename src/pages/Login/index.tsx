import React, { Component } from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { appStore } from '../../stores';
import './index.less';

@observer
export default class Login extends Component<RouteComponentProps, {}> {
    clickA() {
        console.log('clickA:::::::::', appStore);
        appStore.updateHasLogin(!appStore.hasLogin);
    }
    componentDidMount() {
        try {
            QSSO.attach(
                'qsso-login',
                `/api/qssologin?next=${encodeURIComponent(this.props.location.state.from.pathname)}`
            );
            // QSSO.attach('qsso-login', '/airtest');
        } catch (e) {
            console.error(e);
        }
        console.log('..........Login:componentDidMount:\n', this);
    }

    login = () => {
        // QSSO.login();
    };

    render() {
        const { location } = this.props;
        return (
            <div>
                <Button onClick={this.clickA}>
                    点击切换登录状态 [{String(appStore.hasLogin)}]
                </Button>
                {location && location.state && <div>From: {location.state.from.pathname}</div>}
                <div>
                    <div id='qsso-login'>QSSO登录</div>
                </div>
            </div>
        );
    }
}
