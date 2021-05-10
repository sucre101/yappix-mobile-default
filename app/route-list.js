const newsFeed = {
  getProfile: (id) => {
    return `profile/${id}`
  },
  getPosts: (moduleId) => {
    return `social-feed/${moduleId}/posts`
  },
  getBlocks: (moduleId, postId) => {
    return `social-feed/${moduleId}/post/${postId}/blocks`
  },
  getTags: (moduleId, postId) => {
    return `social-feed/${moduleId}/post/${postId}/tags`
  },
  getComments: (moduleId, postId) => {
    return `social-feed/${moduleId}/post/${postId}/comments`
  },
  setComment: (moduleId, postId) => {
    return `social-feed/${moduleId}/post/${postId}/comment`
  },
  getLikes: (moduleId, postId) => {
    return `social-feed/${moduleId}/post/${postId}/likes`
  },
  setLike: (moduleId, postId) => {
    return `social-feed/${moduleId}/post/${postId}/like`
  }
}

const socialFeed = {
  getProfile: (id) => {
    return `profile/${id}`
  },
  getUsers: () => {
    return `social-feed/users`
  },
  getFollowers: (moduleId,userId) => {
    return `social-feed/${moduleId}/followers/${userId}`
  },
  getRequests: (moduleId,userId) => {
    return `social-feed/${moduleId}/sent_requests/${userId}`
  },
  getFollowings: (moduleId,userId) => {
    return `social-feed/${moduleId}/followings/${userId}`
  },
  setFollow: () => {
    return `social-feed/follow`
  },
  getPosts: (moduleId,userId) => {
    return `social-feed/${moduleId}/posts/${userId}`
  },
  getPost: (postId) => {
    return `social-feed/${postId}/post`
  },
  setRelation: (moduleId) => {
    return `social-feed/${moduleId}/relation`
  },
  setPost: () => {
    return `social-feed/post`
  },
  getComments: (moduleId, postId) => {
    return `social-feed/${moduleId}/post/${postId}/comments`
  },
  setComment: () => {
    return `social-feed/post/comment`
  },
  getLikes: (moduleId, postId) => {
    return `social-feed/${moduleId}/post/${postId}/likes`
  },
  setLike: () => {
    return `social-feed/post/like`
  },
  getNews: (moduleId) => {
    return `social-feed/${moduleId}/news`
  },
}

const pageBuilder = {
  getBlocks: (moduleId) => {
    return `page-builder/${moduleId}/blocks`
  },
}

const auth = {

  registration: 'auth/registration',
  login: 'auth/login'

}

const ECModule = {

  getCategories: (moduleId) => {
    return `ecommerce/${moduleId}/category`
  },

  getProductData: (moduleId, productId) => {
    return `ecommerce/${moduleId}/product/${productId}`
  },

  checkout: `ecommerce/checkout`,

  getNotifications: (moduleId, user_id) => {
    return `ecommerce/${moduleId}/notifications/${user_id}`
  },

  notifyRead: (moduleId, notifyId) => {
    return `ecommerce/${moduleId}/notifications/${notifyId}/read`
  }

}

module.exports = {
  newsFeed,
  auth,
  ECModule,
  pageBuilder,
  socialFeed
}
