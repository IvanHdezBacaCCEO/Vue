<template>
<div class="container">
  <div class="jumbotron">
    <show-form>
      <div slot="title">
        <h3>Iniciar Sesion</h3>
      </div>
      <div slot="elements">
        <div class="form-group">
            <label for="email">Correo Electronico</label>
            <input type="email" class="form-control"
                id="email" placeholder="Escribe tu correo electronico">
        </div>
        <div class="form-group">
            <label for="password">Contrasena</label>
            <input type="password" class="form-control"
                id="password" placeholder="Escribe tu contrasena">
        </div>
      </div>
      <div slot="button">
        <button class="btn btn-primary my-2">Iniciar Sesion</button>
      </div>
    </show-form>
  </div>
</div>
</template>

<script>
import ShowForm from './ShowForm.vue';

export default {
  components: {
    ShowForm: ShowForm
  },
  destroyed() {
    console.log('Destroyed');
  },
  activated() {
    console.log('Activated');
  },
  deactivated() {
    console.log('Deactivated');
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
