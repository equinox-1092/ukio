import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n.js'
import PrimeVue from 'primevue/config';
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Drawer from "primevue/drawer";
import Aura from '@primeuix/themes/aura';
import router from './router/index.js'
import {
    Card,
    Checkbox,
    Column,
    DataTable,
    Dialog,
    DialogService,
    InputNumber,
    InputText,
    Menu,
    Rating,
    Row,
    Select,
    SelectButton,
    Tag,
    Textarea,
    Toast,
    ToastService,
    DatePicker
} from "primevue";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
const app = createApp(App);
// Use i18n
app.use(i18n);
// Use Router for in-app navigation
app.use(router);
// Import PrimeVue components
app.use(PrimeVue, {theme: { preset: Aura}, ripple: true})
.component('pv-toolbar', Toolbar)
.component('pv-button', Button)
.component('pv-drawer', Drawer)
.component('pv-card', Card)
.component('pv-checkbox', Checkbox)
.component('pv-column', Column)
.component('pv-data-table', DataTable)
.component('pv-dialog', Dialog)
.component('pv-input-number', InputNumber)
.component('pv-inputtext', InputText)
.component('pv-menu', Menu)
.component('pv-rating', Rating)
.component('pv-row', Row)
.component('pv-select', Select)
.component('pv-select-button', SelectButton)
.component('pv-tag', Tag)
.component('pv-textarea', Textarea)
.component('pv-toast', Toast)
.component('pv-datepicker', DatePicker);

// Mount app
app.mount('#app');
