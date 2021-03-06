import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/'
    : 'https://margatsni.andrewpham.ca/api/';

const apiCalls = {
  userLogin: async (body) => {
    const res = await axios.post(`${BASE_URL}auth`, body);
    return res;
  },
  userSignup: async (body) => {
    const res = await axios.put(`${BASE_URL}auth`, body);
    return res;
  },
  userSignOut: async () => {
    const res = await axios.get(`${BASE_URL}auth/signout`);
    return res;
  },
  createNewUserPost: async (body) => {
    const res = await axios.post(`${BASE_URL}post/`, body);
    return res;
  },
  commentOnPost: async (id, body) => {
    const res = await axios.post(`${BASE_URL}post/comment/${id}`, body);
    return res;
  },
  likePost: async (id, body) => {
    const res = await axios.post(`${BASE_URL}post/like/${id}`, body);
    return res;
  },
  unlikePost: async (id, body) => {
    const res = await axios.post(`${BASE_URL}post/unlike/${id}`, body);
    return res;
  },
  savePost: async (username, body) => {
    const res = await axios.post(`${BASE_URL}user/save/${username}`, body);
    return res;
  },
  unsavePost: async (username, body) => {
    const res = await axios.post(`${BASE_URL}user/unsave/${username}`, body);
    return res;
  },
  followUser: async (username, body) => {
    const res = await axios.post(`${BASE_URL}user/follow/${username}`, body);
    return res;
  },
  unfollowUser: async (username, body) => {
    const res = await axios.post(`${BASE_URL}user/unfollow/${username}`, body);
    return res;
  },
  fetchTimeline: async (username) => {
    const res = await axios.post(`${BASE_URL}user/timeline/${username}`);
    return res;
  },
  fetchUser: async (username) => {
    const res = await axios.get(`${BASE_URL}user/${username}`);
    return res;
  },
  updateUser: async (body) => {
    const res = await axios.post(`${BASE_URL}user/${body.username}`, body);
    return res;
  },
  changePassword: async (username, body) => {
    const res = await axios.post(`${BASE_URL}auth/password/${username}`, body);
    return res;
  },
};

export default apiCalls;
