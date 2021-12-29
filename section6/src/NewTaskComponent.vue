<template>
  <div class="input-group">
    <input
      v-model="newTask"
      @keyup.enter="addTask"
      class="form-control"
      placeholder="Escriba una nueva tarea"
      type="text"
    />
    <span class="input-group-btn">
      <button @click="addTask" class="btn btn-primary" type="button">
        Agregar
      </button>
    </span>
  </div>
</template>

<script>
import {bus} from './main.js'

export default {
  data() {
    return {
      newTask: "",
    };
  },
  props: ['tasks','updateTaskCounter'],
  methods: {
    addTask: function () {
      var text = this.newTask.trim();
      if (text) {
        this.tasks.push({
          text: text,
          finished: false,
        });
        //this.updateTaskCounter();
        bus.updateTaskCounter(this.tasks.length);
      }
      this.newTask = "";
    },
  },
  created() {
    bus.updateTaskCounter(this.tasks.length);
  }
};
</script>
