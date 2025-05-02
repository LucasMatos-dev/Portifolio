window.app = angular.module('schoolApp', []); 

window.app.factory('UsuarioService', function () {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
        { nome: "João", tipo: "Aluno", dataCadastro: new Date("2024-07-01") },
        { nome: "Marina", tipo: "Professor", dataCadastro: new Date("2024-06-15") },
        { nome: "Carlos", tipo: "Aluno", dataCadastro: new Date("2024-05-10") },
        { nome: "Beatriz", tipo: "Professor", dataCadastro: new Date("2024-04-21") },
        { nome: "Sofia", tipo: "Aluno", dataCadastro: new Date("2024-03-03") },
        { nome: "Eduardo", tipo: "Aluno", dataCadastro: new Date("2024-02-12") },
        { nome: "Larissa", tipo: "Professor", dataCadastro: new Date("2024-01-25") },
        { nome: "Gustavo", tipo: "Aluno", dataCadastro: new Date("2023-12-05") },
        { nome: "Fernanda", tipo: "Professor", dataCadastro: new Date("2023-11-18") },
        { nome: "Lucas", tipo: "Aluno", dataCadastro: new Date("2023-10-09") }
    ];

    function salvarLocalStorage() {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    return {
        listar() {
            return usuarios;
        },
        adicionar(usuario) {
            usuario.dataCadastro = new Date();
            usuarios.push(usuario);
            salvarLocalStorage()
        },
        remover(index) {
            usuarios.splice(index, 1);
            salvarLocalStorage()
        },
        salvar(usuario) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        usuario.dataCadastro = new Date();
                        usuarios.push(usuario);
                        salvarLocalStorage()
                        resolve("Usuário cadastrado com sucesso!");
                    } catch (e) {
                        reject("Erro ao salvar o usuário.");
                    }
                }, 2000);
            });
        }
    };
});
