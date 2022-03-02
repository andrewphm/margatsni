import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/'

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
}

export default apiSettings
