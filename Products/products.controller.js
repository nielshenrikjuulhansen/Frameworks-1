(function(){
	"use strict";

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);


		function productsController($scope, productsService){

		$scope.categoriesSelected = new Array();

		//Skubber categorier i array og fjerner dem hvis de eksistere
		$scope.categoryChange = function(category){
			//console.log("Change Category attempt");
			var i = $scope.categoriesSelected.indexOf(category);
			if (i > -1){
				$scope.categoriesSelected.splice(i, 1)
			}
			else {
				$scope.categoriesSelected.push(category);
			}
		}

		//Filterer
		$scope.categoryFilter = function(product){
			//console.log("Filter Attempt");
			if($scope.categoriesSelected.length > 0){
				if($scope.categoriesSelected.indexOf(product.category) < 0){
					return;
					}
				}
				return product;
			}


			var makeProducts = function(data){
				$scope.products = data;
			}

			var makeService = function(data){
				$scope.categories = data;
			}

			productsService.getProducts().then(makeProducts);
			productsService.getCategories().then(makeService);

		}





})();