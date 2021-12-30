import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = 'https://vuecoursesection11-default-rtdb.firebaseio.com';

export var bus = new Vue({
  methods: {
    updateTaskCounter(tasksNum){
      this.$emit('updateTaskCounter',tasksNum);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
