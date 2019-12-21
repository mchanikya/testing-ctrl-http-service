describe("Prime",function(){

	var $httpBackend;
	var catsService;
	var urlPath;

	beforeEach(function(){
		module('ControllerTestingDemoApp');

		inject(function($injector){
			$httpBackend = $injector.get('$httpBackend');
			urlPath=$injector.get('ApiBasePath');
			catsService=$injector.get('categoriesService')
		});

	});

	it('categories should be from $httpBackend',function () {
		$httpBackend.whenGET(urlPath+'/categories.json')
			.respond(['lunch','Dessert']);
		catsService.getCats().then(function(response){
			expect(response.data).toEqual(['lunch','Dessert']);
		});
		$httpBackend.flush();
	});

});
