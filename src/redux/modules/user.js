import apis from 'shared/main';

const GET_USER = 'user/GET_USER';
const ADD_USER = 'user/ADD_USER';

const getUser = (payload) => ({ type: GET_USER, payload });
const addUser = (payload) => ({ type: ADD_USER, payload });
const initialState = {
    useInfo: [],
};

export const __getUser = () => async (dispatch) => {
    const data = await apis.getUser();
    dispatch(getUser(data.data));
};

export const __addUser = (payload) => async (dispatch) => {
    const data = await apis.addUser({
        name: payload.name,
        age: payload.age,
        nickname: payload.nickname,
    });
    dispatch(addUser(data.data));
};

export default function userReducer(state = initialState, { payload, type }) {
    console.log(type, payload);
    switch (type) {
        case GET_USER:
            return { ...state, useInfo: [...payload] };
        case ADD_USER:
            return { ...state, useInfo: [...payload] };
        default:
            return state;
    }
}
