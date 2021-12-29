<template>
<div class="container">
  <div class="jumbotron">
    <button class="btn btn-primary"
      @click="selectedComponent='LogIn'">
      Iniciar Sesion</button>
    <button class="btn btn-primary"
      @click="selectedComponent='ChangePassword'">
      Cambiar Contrasena</button>
    <keep-alive>
      <component v-bind:is="selectedComponent"></component>
    </keep-alive>
  </div>
</div>
</template>

<script>
import ShowForm from './ShowForm.vue';
import ChangePassword from './ChangePassword.vue';
import LogIn from './LogIn.vue';

export default {
  components: {
    ShowForm: ShowForm,
    ChangePassword: ChangePassword,
    LogIn: LogIn
  },
  data () {
    return {
      selectedComponent: 'LogIn'
    }
  }
}
</script>

<style scoped>
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}
</style>
