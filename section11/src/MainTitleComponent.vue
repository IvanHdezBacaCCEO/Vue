<template>
    <div>
      <h2>{{title}}</h2>
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
