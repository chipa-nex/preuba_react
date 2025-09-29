import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

// Aca obtenemos las APIs

export const fetchPosts = () => axios.get(`${API_URL}/posts`);
export const fetchPost = (id) => axios.get(`${API_URL}/posts/${id}`);
export const fetchComments = (postId) =>
  axios.get(`${API_URL}/comments?postId=${postId}`);
export const fetchUsers = () => axios.get(`${API_URL}/users`);
