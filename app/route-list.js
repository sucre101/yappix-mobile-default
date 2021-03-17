const newsFeed = {
  getPosts: {
    url: 'sample',
  },
  getPost: (param) => {
    return `profile/${param}`
  }
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
  ECModule
}
