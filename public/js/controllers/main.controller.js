(function() {
    angular.module('blogSpot')
    .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'PostService'];

    function MainController($scope, PostService){
      $scope.post = PostService.getAll();
      $scope.create = create;
      $scope.delete = deleteOne;
      $scope.update = updatePost;
      $scope.getOne = getOne;
      $scope.getSelectedPost = getSelectedPost;

      function getOne(id){
        PostService.getOne(id);
      }

      function getSelectedPost(){
        $scope.selectedPost = PostService.getSelectedPost();
      }

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

      function updatePost(updateId, updatedPost){
        PostService.update(updateId, updatedPost);
        $scope.updateId = '';
        $scope.updatedPost = {};
      }

  }
}());
