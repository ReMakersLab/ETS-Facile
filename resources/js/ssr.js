import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'

import PrimeVue from 'primevue/config';

createServer((page) => createInertiaApp({
  page,
  render: renderToString,
  resolve: name => require(`./Pages/${name}`),
  title: title => title ? `${title} - ETS Facile` : 'ETS Facile',
  setup({ app, props, plugin }) {
    return createSSRApp({
      render: () => h(app, props),
    }).use(plugin)
    .use(PrimeVue)
  },
}))
