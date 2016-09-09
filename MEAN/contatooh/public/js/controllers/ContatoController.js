angular.module('contatooh')

.controller('ContatoController', function($scope, $routeParams, $resource) {
	var Contato = $resource('/contatos/:id');

	$scope.mensagem = {};
	$scope.contato = getContato();

	setInterval(function() {
		console.log($scope.contato.then(function(response){console.log(response)}))
	}, 100);

	function getContato() {
		var promise = Contato.get({id: $routeParams.contatoId}).$promise;

		return promise.then(function(contato) {
			setScopeProperty('mensagem', '');
		    return contato;
		}).catch(function(error) {
		    setScopeProperty('mensagem', {
		        texto: 'Não foi possível obter o contato.'
		    });
		});
	};

	//Função auxiliar para isolar a atribuição do $scope na aplicação.
	function setScopeProperty(property, def) {
		if($scope.hasOwnProperty(property)) {
			if(!def) console.warn('Definição da propriedade [%s] vazia', property);
			$scope[property] = def;
		} else {
			console.error('Atributo não definido');
		}
	};
});
