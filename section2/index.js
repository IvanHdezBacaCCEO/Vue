new Vue({
    el: "#vm",
    data: {
        image: "http://loremflickr.com/300/200/animal",
        text: "Bienvenido al curso de Vue.js 2",
        text2: "<strong>Bienvenido al curso de Vue.js 2!</strong>",
        show: true,
        show2: 0,
        countries: ['Mexico',
        'Brasil', 'Colombia'],
        countries2: [{name:'Mexico'},
        {name:'Brasil'}, {name:'Colombia'}],
        employee: {
            nombre: 'Carlos Castro',
            edad: '30 años',
            nacionalidad: 'Mexicano',
            profesion: 'Programador',
            empresa: 'IBM',
            telefono: '2532905'
        }
    }
})