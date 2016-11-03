angular.module('myApp')
  .controller( 'myController', ['$scope','$sce','PhotoService',
    ($scope, $sce, PhotoService) => {

      $scope.photoArr = [];
      $scope.display = 'grid';

      PhotoService.getPhotos().success((photo) => {
        console.log(photo)
        for (var i = 0; i < photo.data.length; i++) {
          if(photo.data[i].type === 'video') {
            photo.data[i].videos.standard_resolution.url = $sce.trustAsResourceUrl(photo.data[i].videos.standard_resolution.url)
          }
        }
        $scope.photoArr = photo.data;
      })

      $scope.listView = () => {
          $scope.display = PhotoService.listView();
      }

      $scope.gridView = () => {
        $scope.display = PhotoService.gridView();
      }

    }]);