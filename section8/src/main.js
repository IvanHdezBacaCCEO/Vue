import Vue from 'vue'
import App from './App.vue'

Vue.directive('decorate', {
  bind(el, binding, vnode){
    el.style.fontFamily = binding.value.family;
    el.style.color = binding.value.color;

    if(binding.arg == 'big'){
      el.style.fontSize = '50px'
    }
    if(binding.arg == 'small'){
      el.style.fontSize = '10px'
    }

    if(binding.modifiers['blackedOut']){
      el.style.fontWeight="bold";
    }
    if(binding.modifiers['italic']){
      el.style.fontStyle="italic";
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
