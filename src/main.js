import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';

import PluginTest from 'zkapsui';
import 'zkapsui/dist/style.css';

import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus).use(VXETable).use(PluginTest).mount('#app');
