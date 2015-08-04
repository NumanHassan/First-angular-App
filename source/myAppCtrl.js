  (function() {

  'use strict';

  var myApp = angular.module('myApp', [])
    .controller('myAppCtrl', ['$scope', '$http', function($scope, $http) {
      $scope.url = 'https://www.reddit.com/r/worldnews/new.json';
      $scope.filter= 'test';
      $scope.orderBy= 'sortExpression';
      $scope.order= 'orderBy';
    }])
    .directive('myData', ['$http', function($http) {
      return {
        restrict: 'A',
        scope: {
          remoteurl: '=',
          filter: '=',
          orderBy: '=',
          order: '='
         // orderBy:'sortExpression':'order' ;
        },
        templateUrl: 'DataTable.html',
        link: function(scope, element, attr) {

          $http.get(scope.remoteurl)
            .success(function(response) {
              scope.names = response.data.children;
            });
        }
      };
    }]);
})();