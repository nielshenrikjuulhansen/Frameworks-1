(function(){

var productCtrl = function($scope){
	$scope.message = "This is my product page";
}


var app =	angular
		.module("Main", ["Main.products", "Main.cart"]);

/* Denne code block får resten af app'en til at ikke at virke
app.config(function ($routeProvider) {
	$routeProvider.when('/product',
	{
		templateUrl:"product.html",
		controller:"productCtrl"
	})
})
*/		

app.controller("productCtrl", productCtrl)

app.run(function($rootScope){
			$rootScope.cartProducts = {};
		})

})();