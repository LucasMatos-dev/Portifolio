angular.module('schoolApp').controller('AppController', function ($scope, UsuarioService) {

   $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
   $scope.usuarioUnico = { nome: "João", tipo: "Aluno" };

   $scope.salvando = false;
   $scope.filtro = "";
   $scope.filtroTipo = "";

   $scope.novoUsuario = {
        nome: "",
        email: "",
        tipo: ""
    };

   $scope.atualizarUsuarios = function () {
       $scope.usuarios = UsuarioService.listar();
    };

   $scope.adicionarUsuario = function (form) {
        if (form.$invalid) return;

       $scope.salvando = true;
       $scope.mensagemSucesso = "";
       $scope.mensagemErro = "";

       UsuarioService.salvar(angular.copy($scope.novoUsuario))
            .then((mensagem) => {
               $scope.mensagemSucesso = mensagem;
               $scope.novoUsuario = { nome: "", email: "", tipo: "" };
                form.$setPristine();
                form.$setUntouched();
               $scope.atualizarUsuarios();
            })
            .catch((erro) => {
               $scope.mensagemErro = erro;
            })
            .finally(() => {
               $scope.salvando = false;
                $scope.$applyAsync();
            });
    };

   $scope.removerUsuario = function (index) {
        UsuarioService.remover(index);
       $scope.atualizarUsuarios();
    };

   $scope.atualizarUsuarios();
});
