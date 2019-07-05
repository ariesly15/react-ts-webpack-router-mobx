import * as React from 'react';
import { Alert } from 'antd';
import { observer } from 'mobx-react';
import { appStore } from '../../stores';
import { Provider } from 'mobx-react';
import { Router } from 'react-router';
import rootStores from '../../stores';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from 'history';
import Nav from '../Nav';
import RootRouters from '../../router';
import { Spin } from 'antd';
// import './index.less';

const browserHistory = createBrowserHistory();
const routerStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routerStore);

const Store = {
    router: routerStore,
    ...rootStores
};

@observer
export default class RootView extends React.Component<{}, {}> {
    render() {
        return (
            <Provider {...Store}>
                <Router history={history}>
                    <Spin tip='Loading' spinning={rootStores.appStore.reqCount > 0}>
                        <Nav />
                        <RootRouters />
                    </Spin>
                </Router>
            </Provider>
        );
    }
}
