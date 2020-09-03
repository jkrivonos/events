import Vue from 'vue'
import Router from 'vue-router'

import Events from './views/Events';
import Login from './views/Login'

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'MainPageCategories',
    //   component: MainPageCategories,
    // },
    // {
    //   path:'/category/:id/sub/:id_subcategory',
    //   name: 'subcategory',
    //   component: CurrentSubcategory,
    //   meta: { sidebar: true }
    // },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    // {
    //   path: '/addEvent',
    //   name: 'AddEvent',
    //   component: AddEvent
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    //одна категория
    // {
    //   path: '/category/:id',
    //   name: 'CurrentCategory',
    //   component: CurrentCategory,
    //   meta: { sidebar: true }
    // },
    // {
    //   path: '/404',
    //   name: '404',
    //   component: NotFound,
    // },
    // {
    //   path: '*',
    //   redirect: '/404',
    // }
  ]
})
