class Usuario {
    constructor(nome, email, tipo) {
        this.nome = nome;
        this.email = email;
        this.tipo = tipo;
    }

    visualizar() {
        console.log(`Nome: ${this.nome}\nEmail: ${this.email}\nTipo: ${this.tipo}`);
    }
}

const usuario = new Usuario("João", "joao@gmail.com", "comum");
//usuario.visualizar();

module.exports = Usuario;