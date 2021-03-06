import Vue from 'vue'
import App from './App.vue'

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
