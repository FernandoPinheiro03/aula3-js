const Usuario = require('./Usuario.js');


class Admin extends Usuario {
    constructor(nome, email, tipo) {
        super(nome, email, tipo);
    }

    criarCurso(curso) {
        console.log(`Curso criado: ${curso}`);
    }
}

const admin = new Admin("Ana", "ana@admin.com", "admin");
console.log("---------------------------------")
console.log("-----Daqui pra baixo será a execução da classe admin-----")
admin.visualizar();
admin.criarCurso("JavaScript para iniciantes");


