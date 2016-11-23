(function() {
    angular.module('blogSpot')
    .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'PostService'];

    function MainController($scope, PostService){
      $scope.post = PostService.getAll();
      $scope.create = create;
      $scope.delete = deleteOne;

      $scope.$watch(function(){
        return PostService.getAll();
      }, function(){
        $scope.posts = PostService.getAll();
      });

      function create(newPost){
          PostService.create(newPost);
          $scope.newPost = {};
      }

      function deleteOne(id){
        PostService.delete(id);
        $scope.deleteId = '';
    }
  }
}());
