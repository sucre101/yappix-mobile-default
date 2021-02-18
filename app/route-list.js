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
  }

}

module.exports = {
  newsFeed,
  auth,
  ECModule
}
