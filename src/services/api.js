import axios from 'axios';

const api = {
  getUsers: () => axios.get('/api/users'),
  postUser: (body) => axios.post('/api/users', body),
  deleteUser: (id) => axios.delete(`/api/user/${id}`),
  putUser: ({ id, data }) => axios.put(`/api/user/${id}`, data),
};

export default api;
