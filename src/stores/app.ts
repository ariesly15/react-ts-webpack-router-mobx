import { observable, action } from 'mobx';

export default class AppStore {
    @observable
    hasLogin: boolean = false;
    @observable
    reqCount: number = 0;

    @action
    updateHasLogin(hasLogin: boolean): void {
        this.hasLogin = hasLogin;
    }

    @action
    updateReqCount(count: number): void {
        const c = this.reqCount + count;
        this.reqCount = c > 0 ? c : 0;
    }
}
