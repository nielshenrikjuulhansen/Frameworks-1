(function(){

		var cartService = function($http, $rootScope){

			var addProductToCart = function(product, quantity){
				if($rootScope.cartProducts[product.name]){

				//	var prevQuantity = $rootScope.cartProducts[product.Quantity];
				//	var newQuantity = prevQuantity + quantity;
					$rootScope.cartProducts[product.name].quantity += quantity;

					console.log("Exists - Quantity Changed")

				} else {

					$rootScope.cartProducts[product.name] = {
					product: product,
					quantity: quantity
					}
					console.log("Didnt exist - was added")
				}
			}
			
			return {
				addProductToCart: addProductToCart
			}

		}

	angular
		.module("Main")
		.factory("cartService", cartService)

})();