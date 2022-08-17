import api from './api';
//post
export const apis = {
    //get 유저
    getUser: () => api.get('/info'),
    getUserSelected: (payload) => api.get(`/info/${payload.Id}`),
    //crud
    addUser: (payload) => api.post('/info', payload),
    updateUser: (payload) => api.patch(`/info/${payload.Id}`, payload),
    deleteUser: (payload) => api.delete(`/info/${payload.Id}`, payload.id),
    //get 번호
    getNumber: () => api.get('/number'),

    //crud
    addNumber: (payload) => api.post('/number', payload),
    updateNumber: (payload) => api.patch(`/number/${payload.Id}`, payload),
    deleteNumber: (payload) => api.delete(`/number/${payload.Id}`, payload.id),
};

export default apis;
