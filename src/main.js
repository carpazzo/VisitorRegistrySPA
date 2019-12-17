import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:8000/newcrud/API',

new Vue({

  el:'#app',
  render: h => h(App),
});
