(function() {
    angular.module('blogSpot')
    .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'PostService'];

    function MainController($scope, PostService){
      $scope.message = "I work!";
      $scope.stuff = stuff;

      function stuff(){
        alert('I work also');
      }
    }
}());
