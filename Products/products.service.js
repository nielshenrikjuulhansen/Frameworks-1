(function(){


		var productsService = function($http){
			//console.log("Beer");
			var getProducts = function(){

				return $http.get("data/products.json")
							.then(function(response){
									return response.data;
					})
			}

			var getCategories = function(){

				return $http.get("data/categories.json")
							.then(function(response){
								return response.data;
							})
			}

			return {
					getCategories: getCategories,
					getProducts: getProducts
				}
		} 

	angular
		.module("Main")
		.factory("productsService", productsService);	

})();