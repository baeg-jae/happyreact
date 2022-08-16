import api from './api';
//post
export const apis = {
    //get 유저
    getUser: () => api.get('/info'),
    //crud
    addUser: (payload) => api.post('/info', payload),
    updateUser: (payload) => api.patch(`/info/${payload.Id}`, payload),
    deleteUser: (payload) => api.delete(`/info/${payload.Id}`),
    //get 번호
    getNumber: () => api.get('/detail'),
    //crud
    addNumber: (payload) => api.post('/detail', payload),
    updateNumber: (payload) => api.patch(`/detail/${payload.Id}`, payload),
    deleteNumber: (payload) => api.delete(`/detail/${payload.Id}`),
};

export default apis;
