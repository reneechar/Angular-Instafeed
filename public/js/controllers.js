angular.module('myApp')
  .controller( 'myController', ['$scope','$sce','PhotoService',
    ($scope, $sce, PhotoService) => {

      $scope.photoArr = [];
      $scope.display = 'grid';

      PhotoService.getPhotos().success((photo) => {
        for (var i = 0; i < photo.data.length; i++) {
          if(photo.data[i].type === 'video') {
            photo.data[i].videos.standard_resolution.url = $sce.trustAsResourceUrl(photo.data[i].videos.standard_resolution.url)
          }
          var date = new Date(photo.data[i].created_time*1000);
          var month = date.getUTCMonth();
          var day = date.getDay();
          var year = date.getFullYear();
          var formattedTime = month + '-' + day + '-' + year
          photo.data[i].created_time = formattedTime
        }
        $scope.photoArr = photo.data;
      })

      $scope.listView = () => {
          $scope.display = 'list';
      }

      $scope.gridView = () => {
        $scope.display = 'grid';
      }


    }]);