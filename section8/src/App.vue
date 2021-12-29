<template>
  <div class="container">
    <div class="jumbotron">
      <span v-decorate:big.italic.blackedOut="{family: 'helvetica', color: 'red'}">
        Aprende Vue.js 2 Facilmente
      </span>
      <hr>
      <span v-decorate-local:small.italic.blackedOut="{family: 'serif', color: 'green'}">
        Aprende Angular 2 Facilmente
      </span>
    </div>
  </div>
</template>

<script>
export default {
  directives : {
    'decorate-local' : {
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
    }
  }
}
</script>

<style>
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}
</style>
