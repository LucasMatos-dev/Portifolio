const app = angular.module('schoolApp', []);

app.controller('AppController', function () {
  const vm = this;

  // Desafio 4
  vm.mensagem = "Bem-vindo ao sistema de cadastro escolar";
  vm.usuarioUnico = { nome: "João", tipo: "Aluno" };

  // Deasfio 5
  vm.usuarios = [
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

  vm.filtro = "";
  vm.filtroTipo = "";
});

app.controller('ListaUsuariosController', function ($scope) {
  const vm = this;
  vm.usuarios = $scope.app.usuarios;
});
