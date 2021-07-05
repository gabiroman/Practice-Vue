var app = new Vue({
    el: '#app',
    data: {
        titulo: "CRUD con Vue",
        tarea: '',
        tareas: []
    },
    methods: {
        agregar: function () {
            if (this.tarea != '') {
                this.tareas.push({ nombre: this.tarea, estado: false });
                this.tarea = '';
                localStorage.setItem('crud', JSON.stringify(this.tareas));
            }
        },
        editar: function (index) {
            this.tareas[index].estado = true;
            localStorage.setItem('crud', JSON.stringify(this.tareas));
        },
        eliminar: function (index) {
            this.tareas.splice(index, 1);
            localStorage.setItem('crud', JSON.stringify(this.tareas));
        }
    },
    created: function () {
        var db = JSON.parse(localStorage.getItem('crud'));
        if (db === null) {
            this.tareas = [];
        } else {
            this.tareas = db;
        }
    }
})