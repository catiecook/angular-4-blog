var knex = require('./knex');

function Photo() {
    return knex('photo');
}

function User() {
    return knex('user');
}

function Post(){
  return knex('post')
}

module.exports = {
  getAllPosts: Posts,
  getAllPhotos: Photos,
  getPostsByUser: function(userID) {
      return
      Users().where('id', name);
  },

  addPost: function(user_id, post, photos, links, date, title, post_id) {
      return Posts().insert({
        'author': user_id,
        'post_id': post_id,
        'title': title,
        'link': link,
        'date': date,
        'photos': photos,
        'post': post
      })
  },

  postsByUser: function(id) {
    return Post().where('author_id', id)
  },

  photosByPostId: function(id){
    return Photos().where('id', id)
  },

  getUser: function(id) {
    return User().where('id', id);
  },

  deletePost: function(id) {
    return Post().where('id', id).del();
  },

  updatePost: function(user_id, post, photos, links, date, title, post_id){
    return Post().where('id', id).update({
      'author': user_id,
      'post_id': post_id,
      'title': title,
      'link': link,
      'date': date,
      'photos': photos,
      'post': post
    });
  }
}
