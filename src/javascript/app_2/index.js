import 'babel-polyfill';
import 'promise-polyfill';

import { TrackJS }           from 'trackjs';
import { checkNewRelease }   from '_common/check_new_release';
import initApp               from './App/app';
import registerServiceWorker from './Utils/pwa';
import { getTrackJSConfig }      from '../config';

window.check_new_release = checkNewRelease; // used by GTM to update page after a new release

TrackJS.install(getTrackJSConfig());
registerServiceWorker();
initApp();
