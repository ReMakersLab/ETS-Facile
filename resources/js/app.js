import {version} from '../../package.json';
import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

import PrimeVue from 'primevue/config';
import Knob from 'primevue/knob';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row
import Chart from 'primevue/chart';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';


import 'primevue/resources/themes/saga-blue/theme.css'  //theme
import 'primevue/resources/primevue.css'            //core css
import 'primeicons/primeicons.css'                      //icons

InertiaProgress.init()

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  title: title => title ? `${title} - ETS Facile` : 'ETS Facile',
  setup({ el, App, props, plugin }) {
    const VueApp = createApp({ render: () => h(App, props) });
    VueApp.config.globalProperties.$version = version;
    VueApp.use(plugin)
      .use(PrimeVue)
      .component('Knob', Knob)
      .component('DataTable', DataTable)
      .component('Column', Column)
      .component('ColumnGroup', ColumnGroup)
      .component('Row', Row)
      .component('Chart', Chart)
      .component('Button', Button)
      .component('InputText', InputText)
      .mount(el)
  },
})
