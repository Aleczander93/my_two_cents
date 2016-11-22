(function() {
  angular.module('blogSpot')
    .factory('PostService', PostService);

  PostService.$inject = [];

  function PostService(){
    var post = [];
    init();
    return{
      getAll: getAll,
      getOne: getOne,
      create: create,
      update: update,
      delete: deleteOne
    };

function init(){}

function getAll(){}

function getOne(id){}

function create (newPost){}

function update (id, newPostData){}

function delteOne (id){}

  }


}());
