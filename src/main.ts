import { createSSRApp as createApp } from 'vue';
import { IonicVue } from '@ionic/vue';
// import VCalendar from 'v-calendar';
// import Calendar from 'v-calendar/lib/components/calendar.umd'

import App from './App.vue';
import router from './router';
import AppIcon from './_ui-kits/AppIcon.vue';


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
import {appFilters} from "@/filters";


const app = createApp(App)
    .use(appFilters)
    .use(IonicVue)
    .use(router);

app.component('app-icon', AppIcon);
// app.component('vc-calender', Calendar);


router.isReady().then(() => {
    app.mount('#app');
});
