import api from './api';
//post
export const apis = {
    //get
    getUser: () => api.get('/info'),
    //post
    addUser: (payload) => api.post('/info', payload),
};

export default apis;
