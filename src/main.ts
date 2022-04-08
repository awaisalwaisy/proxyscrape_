import { createApp } from 'vue';
import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon';
import App from './App.vue';
import router from './router';
import store from './store';
import '@yzfe/svgicon/lib/svgicon.css';

createApp(App).use(VueSvgIconPlugin, { tagName: 'icon' })
  .use(store)
  .use(router)
  .mount('#app');
