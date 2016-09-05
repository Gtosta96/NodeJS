angular.module('contatooh')

.controller('ContatosController', function($scope, $resource) {
    var Contato = $resource('/contatos/:id');

    var attributes = {
        filtro: '',
        contatos: contatos(),
        remove: remove
    };
    angular.extend($scope, attributes);

    function contatos() {
        Contato
            .query(
                function(contatos) {
                    $scope.contatos = contatos;
                },
                function(erro) {
                    console.log("Não foi possível obter a lista de contatos, %o", erro);
                }
            );
    };

    function remove(contato) {
        var promise = Contato.delete({id: contato.id}).$promise;
        promise
        .then(contatos)
        .catch(function(erro) {
            console.log("Não foi possível deletar o contato, %o", erro);
        })
    }
});
