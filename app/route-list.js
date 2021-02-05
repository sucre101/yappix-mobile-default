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

module.exports = {
  newsFeed,
  auth
}
