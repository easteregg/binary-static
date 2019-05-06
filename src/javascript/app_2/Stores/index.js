import ClientStore             from './client-store';
import CommonStore             from './common-store';
import ModulesStore            from './Modules';
import UIStore                 from './ui-store';
import { trackJSStoreMonitor } from '../Services/trackjs';

export default class RootStore {
    constructor() {
        this.client  = trackJSStoreMonitor(new ClientStore(this));
        this.common  = trackJSStoreMonitor(new CommonStore());
        this.modules = new ModulesStore(this);
        this.ui      = trackJSStoreMonitor(new UIStore());
    }
}
