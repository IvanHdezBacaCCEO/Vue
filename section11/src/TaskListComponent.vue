<template>
    <ul class="list-group">
            <li v-for="(task, index) in tasks" :class="{finished: task.finished}" class="list-group-item">
                {{task.text}}
                <span class="float-end">
                    <button @click="state(index)" class="btn btn-success" type="button"><i class="bi bi-check-lg"></i></button>
                    <button @click="deleteTask(index)" class="btn btn-danger" type="button"><i class="bi bi-x-lg"></i></button>
                </span>
            </li>
        </ul>
</template>
<script>
export default {
    props: ['tasks'],
    methods: {
        deleteTask : function (index) {
            let id = this.tasks[index].id;
            this.tasks.splice(index, 1);

            this.$http.delete('tasks/'+id+'.json',)
                .then(response => { console.log(response) })
        },
        state( index ) {
            let finished = this.tasks[index].finished = !this.tasks[index].finished;
            let id = this.tasks[index].id;
            this.$http.patch('tasks/'+id+'.json',{
                finished: finished
            }).then(response => { console.log(response) })
        }
    }
}
</script>
<style>
.finished {
    color: gray;
    text-decoration: line-through;
}
</style>