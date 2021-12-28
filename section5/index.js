var data = {
    newTask: "",
    tasks: [
        {
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
        }
    ]
};

Vue.component('main-title', {
    template: '<h2>{{title}}</h2>',
    data: function () {
        return { 
            title: "Lista de Tareas" 
        }
    }
});

Vue.component('new-task',{
    template:`
    <div class="input-group">
        <input v-model="newTask" @keyup.enter="addTask" class="form-control" placeholder="Escriba una nueva tarea" type="text">
        <span class="input-group-btn">
            <button @click="addTask" class="btn btn-primary" type="button">Agregar</button>
        </span>
    </div>
    `,
    data: function () {
        return data;
    },
    methods: {
        addTask : function () {
            var text = this.newTask.trim();
            if(text){
                this.tasks.push({
                    text: text,
                    finished: false
                })
            }
            this.newTask = '';
        }
    }
});

Vue.component('task-list', {
    template: `
        <ul class="list-group">
            <li v-for="(task, index) in tasks" v-bind:class="{finished: task.finished}" class="list-group-item">
                {{task.text}}
                <span class="float-end">
                    <button @click="task.finished=!task.finished" class="btn btn-success" type="button"><i class="bi bi-check-lg"></i></button>
                    <button @click="deleteTask(index)" class="btn btn-danger" type="button"><i class="bi bi-x-lg"></i></button>
                </span>
            </li>
        </ul>
    `,
    data: function () {
        return data;
    },
    methods: {
        deleteTask : function (index) {
            this.tasks.splice(index, 1);
        }
    }
})

var app = new Vue({
    el:"#app",
    data: data
})