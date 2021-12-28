new Vue({
    el:"#events",
    data: {
        counter: 0,
        counter2: 0,
        x:0,
        y:0
    },
    methods: {
        addOne : function () {
            this.counter += 1;
        },
        substractOne : function () {
            this.counter -= 1;
        },
        callAlert : function (message) {
            alert(message);
        },
        showLocation : function(e){
            this.x = e.clientX;
            this.y = e.clientY;
        },
        add : function (amount) {
            this.counter2+=amount;
        }
    }
})