(function() {
  angular.module('blogSpot')
    .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var posts = [];
    var baseUrl = '/posts/';
    var selectedPost;
    init();
    return{
      getAll: getAll,
      getOne: getOne,
      create: create,
      update: update,
      delete: deletePost,
      getSelectedPost:getSelectedPost
    };


function getSelectedPost(){
  return selectedPost;
}

function init(){
  $http.get(baseUrl)
  .then(function(response){
    posts = response.data.posts;
  })
  .catch(function(err){
    console.log(err);
  });
}

function getAll(){
  return posts;
}

function getOne(id){
  $http.get(baseUrl + id)
  .then(function(response){
    selectedPost= response.data.post[0]; //forewarn if the get returns in an empty array it will cause an error
  })
  .catch(function(err){
    console.log(err);
  });
}

function create (newPost){
  $http.post(baseUrl, newPost)
  .then(function(response){
    init();
  })
  .catch(function(err){
    console.log(err);
  });
}

function update(id, newPostData){
  $http.put(baseUrl + id, newPostData)
  .then(function(response){
    init();
  })
  .catch(function(err){
    console.log(err);
  });
}

function deletePost (id){
  $http.delete(baseUrl + id)
  .then(function(){
    init();
  })
  .catch(function(err){
    console.log(err);
  });
}

  }


}());
