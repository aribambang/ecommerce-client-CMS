import Vue from 'vue';
import Vuex from 'vuex';

import authModule from './modules/auth/index';
import dashboardModule from './modules/dashboard/index';
import categoriesModule from './modules/categories/index';
import bannersModule from './modules/banners/index';
import productsModule from './modules/products/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    dashboard: dashboardModule,
    categories: categoriesModule,
    banners: bannersModule,
    products: productsModule,
  },
});
