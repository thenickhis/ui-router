angular.module("routerApp").config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "views/home.html",
			controller: "mainCtrl"
		})
		.state("about",{
			url:"/about",
			templateUrl:"views/about.html"
		})
		.state("blog",{
			url:"/blog",
			templateUrl:"views/blog.html"
		})
		.state("portfolio",{
			url:"/portfolio",
			templateUrl:"views/portfolio.html"
		})
})