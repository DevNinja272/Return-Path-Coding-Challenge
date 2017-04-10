/***********/
/* Modules */
/***********/
var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination',]);

/***************/
/* Controllers */
/***************/
myApp.controller('MockDataCtrl', function($scope, EmailFactory)
{
	$scope.currentPage = 1;
	$scope.pageSize = 10;	/* This contols how many per rows per page is displayed */
	$scope.selection = {};
	$scope.filterOption = "Show All";
	$scope.categories = ['Business', 'Home', 'Finance', 'Education', 'Real Estate', 'Travel', 'Entertainment', 'Social Networking', 'News', 'Jobs', 'Groups', 'Shopping'];

	EmailFactory.fetch().success(function(data)
	{
		$scope.mockData = data;
	});

	$scope.setFilterDropdown = function(category)
	{
		$scope.filterOption = category;
	};

	$scope.setEmailFolder = function(email, category)
	{
		email.folder = category;
	};

	$scope.pageChangeHandler = function(num) {
		console.log('Email page changed to ' + num);
	};
});

myApp.controller('PaginationController', function ($scope) 
{
	$scope.pageChangeHandler = function(num) {
		console.log('going to page ' + num);
	};
});

