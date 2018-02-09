import { observable, action,  reaction } from 'mobx';
import Client from '../../../../app/base/client';
import Reactions from './reactions';
import ContractType from './logic/contract_type';
import getDurationUnits from './logic/duration';
import getStartDates from './logic/start_date';
import onSymbolChange from './logic/symbol';
import { getCountry, getTicks, onAmountChange } from './logic/test';
import { cloneObject } from '../../../../_common/utility';
import actions, {initActions} from '../actions';

const event_map = {
    amount: onAmountChange,
    symbol: onSymbolChange,
};

export default class TradeStore {
    @action.bound init() {
        initActions(this);
        this._initReactions();

        ContractType.getContractsList(this.symbol).then(action(r => {
            this.contract_types_list = r;
        }));
        getCountry().then(action(r => { this.message = r; }));
        getTicks(action((r) => { this.tick = r; }));
        this.start_dates_list = getStartDates();
        if (!Client.get('currency')) {
            actions.getCurrencies();
        }
        this.duration_units_list = getDurationUnits();
    }

    _initReactions() {
        const reaction_map = Reactions.getReactions();
        Object.keys(reaction_map).forEach((reaction_key) => {
            const disposer = reaction(() => this[reaction_key], (new_value) => {
                Promise
                    .resolve(reaction_map[reaction_key](new_value, this._cloneState()))
                    .then(this.updateState);
            });
            Reactions.storeDisposer(disposer);
        });
    };

    _cloneState() {
        return cloneObject(this);
    }

    @action.bound updateState(new_state) {
        Object.keys(new_state).forEach((key) => {
            this[key] = new_state[key];
        });
    }

    @action.bound handleChange(e) {
        const { name, value } = e.target;
        if (!(name in this)) {
            throw new Error(`Invalid Argument: ${name}`);
        }
        this[name] = value;
        this.dispatch(name, value);
    }

    @action.bound dispatch(name, value) {
        const handler = event_map[name];
        if (typeof handler === 'function') {
            Promise
                .resolve(handler(value))
                .then(this.updateState);
        }
    }

    // Underlying
    @observable symbols_list = { frxAUDJPY: 'AUD/JPY', AS51: 'Australian Index', DEAIR: 'Airbus', frxXAUUSD: 'Gold/USD', R_10: 'Volatility 10 Index' };
    @observable symbol       = Object.keys(this.symbols_list)[0];

    // Contract Type
    @observable contract_type        = '';
    @observable contract_types_list  = {};
    @observable trade_types          = [];
    // TODO: add logic for contract_start_type and contract_expiry_type dynamic values
    @observable contract_start_type  = 'spot';
    @observable contract_expiry_type = 'intraday';
    @observable form_components      = [];

    // Amount
    @observable basis           = 'stake';
    @observable currency        = Client.get('currency');
    @observable currencies_list = {};
    @observable amount          = 5;

    // Duration
    @observable expiry_type         = 'duration';
    @observable duration            = 15;
    @observable duration_unit       = 's';
    @observable duration_units_list = {};
    @observable expiry_date         = null;
    @observable expiry_time         = null;

    // Barrier
    @observable barrier_1 = 0;
    @observable barrier_2 = 0;

    // Start Time
    @observable start_dates_list = [];
    @observable start_date       = 'now';
    @observable start_time       = '';

    // Last Digit
    @observable last_digit = 3;

    // Test
    @observable message = '';
    @observable tick = '';
};
