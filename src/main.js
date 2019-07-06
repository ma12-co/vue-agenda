import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

//automatic registration of global components
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});
//automatic registration of global components

Vue.config.productionTip = false;

new Vue({
  router, // es6 short syntax
  store,
  render: h => h(App)
}).$mount('#app');
