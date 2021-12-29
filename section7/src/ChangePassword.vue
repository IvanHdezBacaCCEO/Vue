<template>
<div class="container">
  <div class="jumbotron">
    <show-form>
      <div slot="title">
        <h3>Cambiar Contrasena</h3>
      </div>
      <div slot="elements">
        <div class="form-group">
            <label for="email">Correo Electronico</label>
            <input type="email" class="form-control"
                id="email" placeholder="Escribe tu correo electronico">
        </div>
      </div>
      <div slot="button">
        <button class="btn btn-primary my-2">Cambiar Contrasena</button>
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
