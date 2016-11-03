angular.module('myApp')
  .controller( 'myController', ['$scope','PhotoService',
    ($scope, PhotoService) => {

      $scope.photoArr = [];
      PhotoService.getPhotos().success((photo) => {
        $scope.photoArr = photo.data;
      })
    }]);