(function(){
	"use strict";

	angular
		.module("Main.cart", [])
		.controller("cartController", cartController);

		function cartController ($scope, $rootScope, cartService){

			$rootScope.addToCart = function(product){
				var quantity = this.quantity;
				cartService.addProductToCart(product, quantity);
			}
			

		}



})();