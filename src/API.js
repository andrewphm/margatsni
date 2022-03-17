import axios from 'axios'

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/'
    : 'https://margatsni.andrewpham.ca/api/'

const apiSettings = {
  userLogin: async (body) => {
    const res = await axios.post(`${BASE_URL}auth`, body)
    return res
  },
  userSignup: async (body) => {
    const res = await axios.put(`${BASE_URL}auth`, body)
    return res
  },
  userSignOut: async () => {
    const res = await axios.get(`${BASE_URL}auth/signout`)
    return res
  },
  createNewUserPost: async (body, userToken) => {
    const res = await axios.post(`${BASE_URL}post/`, body, {
      headers: {
        token: `Bearer ${userToken}`,
      },
    })
    return res
  },
  postCommentOnPost: async (user, body) => {
    const res = await axios.post(`${BASE_URL}post/`)
  },
}

export default apiSettings
