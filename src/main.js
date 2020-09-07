import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import router from './router'
import store from './store'

Vue.config.productionTip = false

store.dispatch('events/load')
.then(() => {
    new Vue({
      el: '#app',
      store,
      router,
      vuetify,
      render: h => h(App)
    });
})
.catch(error => console.warn(`Ну удалось загрузить события ${error}`))

