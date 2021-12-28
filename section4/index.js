var app = new Vue({
    el:"#app",
    data: {
        title: "Lista de Tareas",
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
        },
        deleteTask : function (index) {
            this.tasks.splice(index, 1);
        }
    }
})