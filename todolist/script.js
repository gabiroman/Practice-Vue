var app = new Vue({
    el: '#app',
    data: {
        message: 'Lista de comidas',
        dato: 'Esto es un párrafo',
        comidas: [
            { nombre: 'hamburguesa', cantidad: 0 },
            { nombre: 'pizza', cantidad: 4 },
            { nombre: 'empanada', cantidad: 5 }
        ],
        paraAgregar: '',
        total: 0
    },
    methods: {
        agregar() {
            if (this.paraAgregar != '') {
                this.comidas.push({
                    nombre: this.paraAgregar, cantidad: 0
                });
                this.paraAgregar = '';
            }

        }
    },
    computed: {
        sumarComidas() {
            this.total = 0;
            for (comida of this.comidas) {
                this.total += comida.cantidad;
            }
            return this.total;
        }
    }
})