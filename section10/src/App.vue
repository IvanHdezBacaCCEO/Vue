<template>
  <div class="container">
    <div class="jumbotron">
      <span>
        {{message | caps}}
        <hr>
        {{message | suspensive}}
        <hr>
        {{message | caps | suspensive}}
        <hr>
        {{message}}
        <hr>
        Celsius: {{temperature}} <br>
        Farenheit: {{temperature | toFarenheit}}

      </span>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      message: 'Aprende Vue.js 2 Facilmente',
      temperature: 20
    }
  },
  filters : {
    caps(message) {
      return message.toUpperCase();
    },
    toFarenheit(temp) {
      return (9/5 * temp) + 32 + 'F'
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
