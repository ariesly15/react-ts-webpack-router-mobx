import React, { Component } from 'react';
// import { Button } from 'antd';
import { observer } from 'mobx-react';
// import { RouteComponentProps } from 'react-router';
// import { appStore } from '../../stores';
import './index.less';

interface IProps {
    next: string;
}

@observer
export default class Login extends Component<IProps, {}> {
    static defaultProps = {
        next: window.location.pathname
    };
    componentDidMount() {
        try {
            QSSO.attach(
                'qsso-login-component',
                `/api/qssologin?next=${encodeURIComponent(this.props.next)}`
            );
            // QSSO.attach('qsso-login', '/airtest');
        } catch (e) {
            console.error(e);
        }
        console.log('..........Login:componentDidMount:\n', this, '\n');
    }

    login = () => {
        // QSSO.login();
    };

    render() {
        return (
            <div>
                <div id='qsso-login-component'>QSSO登录 Component</div>
            </div>
        );
    }
}
