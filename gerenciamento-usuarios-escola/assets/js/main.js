const app = angular.module('schoolApp', []);

app.factory('UsuarioService', function () {
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
      salvarLocalStorage();
    },
    remover(index) {
      usuarios.splice(index, 1);
      salvarLocalStorage();
    }
  };
});


app.controller('AppController', function (UsuarioService) {
  const vm = this;

  vm.mensagem = "Bem-vindo ao sistema de cadastro escolar";
  vm.usuarioUnico = { nome: "João", tipo: "Aluno" };

  vm.filtro = "";
  vm.filtroTipo = "";

  vm.usuarios = UsuarioService.listar();

  vm.novoUsuario = {
    nome: "",
    tipo: "Aluno"
  };

  vm.adicionarUsuario = function () {
    if (vm.novoUsuario.nome && vm.novoUsuario.tipo) {
      UsuarioService.adicionar(angular.copy(vm.novoUsuario));
      vm.novoUsuario.nome = "";
      vm.novoUsuario.tipo = "Aluno";
    }
  };

  vm.removerUsuario = function (index) {
    UsuarioService.remover(index);
  };
});
