<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-6">
      <h1>Formulario</h1>
      <form>
        <div class="form-group">
          <label for="correo">Nombre</label>
          <input type="text" class="form-control" placeholder="Nombre"
                  v-model.trim="user.name">
        </div> 
        <div class="form-group">
          <label for="correo">Correo Electrónico</label>
          <input type="email" class="form-control" placeholder="Correo Electrónico"
                  v-model.lazy="user.email">
        </div>
        <div class="form-group">
          <label for="clave">Contraseña</label>
          <input type="password" class="form-control" placeholder="Contraseña"
                  v-model="user.password">
        </div>
        <div class="form-group">
          <label for="clave">Edad</label>
          <input type="text" class="form-control" placeholder="Edad"
                  v-model.number="user.age">
        </div>
        <div class="form-group">
          <label for="pais">País</label>
          <select class="form-control" v-model="user.country">
            <option v-for="c in countries">{{c}}</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="mensaje">Mensaje</label>
          <textarea class="form-control" rows="3"
                    v-model="user.message"></textarea>
        </div>

        <fieldset class="form-group">
          <legend>Genero</legend>
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="optionsRadios"  
                    value="male" checked v-model="user.gender">
              Hombre
            </label>
          </div>
          <div class="form-check">
          <label class="form-check-label">
              <input type="radio" class="form-check-input" name="optionsRadios"  
                    value="female" v-model="user.gender">
              Mujer
            </label>
          </div>
          
          </fieldset>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="Acepto las condiciones"
              v-model="user.conditions">
              Acepto las condiciones
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="Quiero recibir el newsletter"
              v-model="user.conditions">
              Recibir la newsletter
            </label>
          </div>
          <button type="submit" class="btn btn-primary"
                  @click.prevent="sendForm">Enviar</button>
        </form>
        </div>
        <div class="col-md-6" v-if="show">
          <h1>Resultados</h1>
          <p><strong>Nombre: </strong> {{user.name}} - {{user.name.length}}</p>
          <p><strong>Correo Electrónico: </strong>{{user.email}}</p>
          <p><strong>Contraseña: </strong>{{user.password}}</p>
          <p><strong>Edad: </strong>{{user.age}} - {{ typeof user.age }}</p>
          <p><strong>País: </strong>{{user.country}}</p>
          <p class="message"><strong>Mensaje: </strong><br>{{user.message}}</p>
          <p><strong>Genero: </strong>
            <span v-if="user.gender=='male'">Hombre</span>
            <span v-else>Mujer</span>
          </p>
          <strong>Condiciones: </strong>
          <ul>
            <li v-for="cond in user.conditions">{{cond}}</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user: {
        name : '',
        email : '',
        password : '',
        age : '',
        country : 'Mexico',
        message: '',
        gender: 'male',
        conditions: []
      },
      show : false,
      countries : ['Argentina','Bolivia','Brasil','Chile','Colombia','Ecuador','España','Mexico','Paraguay','Uruguay','Venezuela']

    }
  },
  methods:{
    sendForm(){
      this.show = true
    }
  }
}
</script>

<style>
.message{
  white-space: pre;
}
</style>
