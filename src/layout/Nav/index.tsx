import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'antd';
import { observer } from 'mobx-react';
import { appStore } from '../../stores';
import './index.less';

const Routers = [
    {
        link: '/',
        text: '首页'
    },
    {
        link: '/app',
        text: 'App'
    },
    {
        link: '/login',
        text: '登录页面'
    },
    {
        link: '/airtest',
        text: 'Airtest'
    },
    {
        link: '/socketio',
        text: 'SocketIO'
    }
];

@observer
export default class Nav extends React.Component {
    render() {
        return (
            <div className='nav-container'>
                <div className='alert'>
                    <Alert message={`hasLogin: ${String(appStore.hasLogin)}`} />
                    <Alert message={`reqCount:${appStore.reqCount}`} />
                </div>
                <div className='route'>
                    {Routers.map((item, idx) => (
                        <Link className='link' to={item.link} key={idx}>
                            {item.text}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}
