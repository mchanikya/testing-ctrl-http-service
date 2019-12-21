(function () {
	'use strict';

	angular.module('ControllerTestingDemoApp',[])
	.controller('testController',testController)
	.service('categoriesService',categoriesService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


	testController.$inject=['categoriesService'];
	function testController(categoriesService) {
		var $ctrl=this;
		$ctrl.list=[];
		$ctrl.getCategories= function(){
			var promise =categoriesService.getCats();
			promise.then(function(details){
				console.log(details.data);
				$ctrl.list=details.data;
			})
			.catch(function(error){
				console.log("Failed to get categories details");
			});
		};
	}

	categoriesService.$inject=['$http','ApiBasePath'];
	function categoriesService($http,ApiBasePath) {
		var service=this;
		service.getCats=function(num){
			console.log("In service getCats");
			var response = $http({
				method: 'GET',
				url:(ApiBasePath+ "/categories.json")
			});
			return response;
		};
	}

})();
