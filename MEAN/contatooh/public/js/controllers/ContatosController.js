angular.module('contatooh')

.controller('ContatosController', function($scope, $resource) {
    var Contato = $resource('/contatos/:id');

    $scope.mensagem = {};
    $scope.filtro = '';
    $scope.contatos = contatos();
    $scope.remove = remove;

    function contatos() {
        return Contato
            .query(
                function(contatos) {
                    setScopeProperty('mensagem', '');
                    return contatos;
                },
                function(erro) {
                    setScopeProperty('mensagem', {texto: 'Não foi possível obter a lista de contatos'});
                }
            );
    };

    function remove(contato) {
        var promise = Contato.delete({id: contato.id}).$promise;
        promise
        .then(contatos)
        .catch(function(erro) {
            setScopeProperty('mensagem', {texto: 'Não foi possível deletar o contato'});
        })
    }

    //Função auxiliar para isolar a atribuição do $scope na aplicação.
    function setScopeProperty(property, def) {
        if($scope.hasOwnProperty(property)) {
            if(!def) console.warn('Definição da propriedade [%s] vazia', property);
            $scope[property] = def;
        } else {
            console.error('Atributo não definido');
        }
    }
});
