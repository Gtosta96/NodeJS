angular.module('contatooh')

.controller('ContatosController', function($scope) {

    var attributes = {
        total: 0,
        incrementa: incrementa,
        filtro: '',
        contatos: contatos()
    };
    angular.extend($scope, attributes);

    // FUNÇÕES
    function incrementa() {
        this.total++;
    };

    function contatos() {
        var contatos = [{
            "_id": 1,
            "nome": "Contato Angular 1",
            "email": "cont1@empresa.com.br"
        }, {
            "_id": 2,
            "nome": "Contato Angular 2",
            "email": "cont2@empresa.com.br"
        }, {
            "_id": 3,
            "nome": "Contato Angular 3",
            "email": "cont3@empresa.com.br"
        }];
        return contatos;
    };
});
