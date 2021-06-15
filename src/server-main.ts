import { createSSRApp as createApp } from 'vue';
import App from './App.vue';
import { createServerRouter as createRouter } from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme */
import './theme/main.scss';

import AppIcon from './_ui-kits/AppIcon.vue';

export default function () {
    const router = createRouter();
    const app = createApp(App)
        .use(IonicVue)
        .use(router);

    app.component('app-icon', AppIcon);

    return {
        app,
        router
    };
}