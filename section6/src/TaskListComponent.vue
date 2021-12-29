<template>
    <ul class="list-group">
            <li v-for="(task, index) in tasks" :class="{finished: task.finished}" class="list-group-item">
                {{task.text}}
                <span class="float-end">
                    <button @click="task.finished=!task.finished" class="btn btn-success" type="button"><i class="bi bi-check-lg"></i></button>
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
            this.tasks.splice(index, 1);
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