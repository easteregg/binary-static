import { TrackJS }         from 'trackjs';
import { isProduction }    from '../../config';

/**
 * Listen on store method calls and computed access, and log them for TrackJS Telemetry
 */
export const TrackJSStoreHandler = {
    get(target, prop_key, receiver) {
        const target_value = Reflect.get(target, prop_key, receiver);
        TrackJS.console.log(target_value);
        return target_value;
    },
};
/**
 * Listen on method calls and inspect the response to see if error is thrown.
 * Handling the response status is NOT this function's responsibility
 */
export const TrackJSApiHandler = {
    get(target, prop_key, receiver) {
        const target_value = Reflect.get(target, prop_key, receiver);

        if (typeof target_value === 'function') {
            return function(...args) {
                const result = target_value.apply(this, args);
                if (result instanceof Promise) {
                    return new Promise((resolve) => {
                        let return_value;
                        result.then(response => {
                            if (response.error) {
                                this.trackError(response.error.message,{
                                    payload: response,
                                    type   : 'API',
                                });
                            }
                            return_value = response;
                        }).catch(error => {
                            this.trackError(error.toString(), {
                                payload: error,
                                type   : 'Network',
                            });
                        }).finally(() => {
                            resolve(return_value);
                        });
                    });
                }
                return result;

            }.bind(this);
        }

        return target_value;
    },

    trackError(message, payload) {
        if (!isProduction()) return;
        TrackJS.addMetadata('network-payload', payload);
        TrackJS.console.error(new NetworkError(message));
    },
};

class NetworkError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, NetworkError);
    }
}

export const trackJSNetworkMonitor = (obj) => new Proxy(obj, TrackJSApiHandler);
export const trackJSStoreMonitor = (obj) => new Proxy(obj, TrackJSStoreHandler);
