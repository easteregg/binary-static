import { trackJSStoreMonitor } from 'Services/trackjs';
import ContractStore           from './Contract/contract-store';
import PortfolioStore          from './Portfolio/portfolio-store';
import SmartChartStore         from './SmartChart/smart-chart-store';
import StatementStore          from './Statement/statement-store';
import TradeStore              from './Trading/trade-store';

export default class ModulesStore {
    constructor(root_store) {
        this.contract    = trackJSStoreMonitor(new ContractStore({ root_store }));
        this.portfolio   = trackJSStoreMonitor(new PortfolioStore({ root_store }));
        this.smart_chart = trackJSStoreMonitor(new SmartChartStore({ root_store }));
        this.statement   = trackJSStoreMonitor(new StatementStore({ root_store }));
        this.trade       = trackJSStoreMonitor(new TradeStore({ root_store }));
    }
}
