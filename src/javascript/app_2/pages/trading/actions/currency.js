import DAO from '../data/dao';
import { isCryptocurrency } from '../../../../app/common/currency';
import { localize } from '../../../../_common/localize';

export const getCurrencies = function *(store) {
    const r = yield DAO.getPayoutCurrencies();
    const fiat   = [];
    const crypto = [];

    r.payout_currencies.forEach((currency) => {
        if (isCryptocurrency(currency)) crypto.push(currency);
        else fiat.push(currency);
    });

    const fields = {
        currencies_list: {
            [localize('Fiat Currency')] : fiat,
            [localize('Cryptocurrency')]: crypto,
        },
    };
    if (!store.currency) {
        fields.currency = Object.values(fields.currencies_list).reduce((a, b) => [...a, ...b]).find(c => c);
    }
    return fields;
};