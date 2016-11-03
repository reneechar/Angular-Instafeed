angular.module('myApp')
  .controller( 'myController', ['$scope','$sce','PhotoService',
    ($scope, $sce, PhotoService) => {

      $scope.photoArr = [];
      $scope.display = 'grid';

      $scope.trustedUrls = [];

      PhotoService.getPhotos().success((photo) => {
        $scope.photoArr = photo.data;
        photo.data.forEach(img => {
          if(img.type === 'video') {
            $scope.trustedUrls.push($sce.trustAsResourceUrl(img.videos.standard_resolution.url));
            console.log('length',$scope.trustedUrls.length);
          }
        })
      })

      $scope.getVidUrl = () => {
        console.log('getting')
        return $scope.trustedUrls.shift()
      }

      $scope.listView = () => {
          $scope.display = PhotoService.listView();
      }

      $scope.gridView = () => {
        $scope.display = PhotoService.gridView();
      }

    }]);