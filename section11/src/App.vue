<template>
  <div id="app" style="padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #e9ecef;
    border-radius: .3rem;">
    <main-title :title="title"></main-title>
    <new-task :tasks="tasks" 
    :updateTaskCounter="updateTaskCounter"></new-task>
    <task-list :tasks="tasks"></task-list>
  </div>
</template>

<script>
import MainTitle from './MainTitleComponent.vue'
import NewTask from './NewTaskComponent.vue'
import TaskList from './TaskListComponent.vue'
export default {
  components: {
    MainTitle,
    NewTask,
    TaskList
  },
  data(){
    return {
      title: "Lista de Tareas",
      tasks: [
            /*{
                text: "Learn Vue.js",
                finished: false
            },
            {
                text: "Learn Angular 2",
                finished: false
            },
            {
                text: "Learn Ionic 2",
                finished: false
            }*/
        ]
    }
  },
  methods: {
    updateTaskCounter(){
      this.tasksNum++;
    }
  },
  created(){
    this.$http.get('tasks.json')
      .then(response => {
        console.log(response.data)
        for (let id in response.data) {
          let task = {
            id: id,
            text: response.data[id].text,
            finished: response.data[id].finished
          };
          this.tasks.push(task);
      }
    })
  }
}
</script>

<style>

</style>
