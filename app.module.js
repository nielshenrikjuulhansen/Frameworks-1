(function(){

	angular
		.module("Main", ["Main.products", "Main.cart"])
		.run(function($rootScope){
			$rootScope.cartProducts = {};
		});

})();