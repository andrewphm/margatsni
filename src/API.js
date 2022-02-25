import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/'

const apiSettings = {
  userLogin: async (body) => {
    const res = await axios.post(`${BASE_URL}auth/`, body)
    return res
  },
}

export default apiSettings
