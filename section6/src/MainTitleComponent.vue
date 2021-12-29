<template>
    <div>
      <h2>{{capsTitle()}}</h2>
      <h5>Tareas a realizar: {{tasksNum}}</h5>
    </div>
</template>
<script>
import {bus} from './main.js'

export default {
  props: {
    title: {
      type: String,
      default: "Tareas"
    }
  },
  data() {
    return {
      tasksNum: 0
    }
  },
  methods: {
    capsTitle() {
      return this.title.toUpperCase();
    }
  },
  created(){
    bus.$on('updateTaskCounter', (tasksNum) => {
      this.tasksNum=tasksNum;
    });
  }
}
</script>
