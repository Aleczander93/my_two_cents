(function() {
    angular.module('blogSpot')
    .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'PostService'];

    function MainController($scope, PostService){
      $scope.post = PostService.getAll();

      $scope.$watch(function(){
        return PostService.getAll();
      }, function(){
        $scope.posts = PostService.getAll();
      });
    }
}());
