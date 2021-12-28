var app = new Vue({
    el: '#vue',
    data: {
        message: "Aprende Vue.js Facilmente",
        src: "https://vuejs.org/images/logo.png",
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0,
        sum: 0,
        name: "Carlos"
    },
    computed: {
        total: function() {
            return this.first + this.second
            + this.third + this.fourth;
        }
    },
    methods: {
        showMessage: function () {
            return "Aprende Vue.js Facilmente - MM"
        },
        showMessage2: function () {
            return this.message;
        },
        destroy: function () {
            this.$destroy();
        }
    },
    beforeCreate : function () {
        console.log("Llamando beforeCreate");
    },
    created : function () {
        console.log("Llamando created");
    },
    beforeMount : function () {
        console.log("Llamando beforeMount");
    },
    mounted : function () {
        console.log("Llamando mounted");
    },
    beforeUpdate : function () {
        console.log("Llamando beforeUpdate");
    },
    updated : function () {
        console.log("Llamando updated");
    },
    beforeDestroy : function () {
        console.log("Llamando beforeDestroy");
    },
    destroyed : function () {
        console.log("Llamando destroyed");
    }
})