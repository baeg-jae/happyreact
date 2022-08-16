import apis from 'shared/main';

const GET_USER = 'user/GET_USER';
const ADD_USER = 'user/ADD_USER';
const UPDATE_USER = 'user/UPDATE_USER';
const DELETE_USER = 'user/DELETE_USER';

const getUser = (payload) => ({ type: GET_USER, payload });
const addUser = (payload) => ({ type: ADD_USER, payload });
const updateUser = (payload) => ({ type: UPDATE_USER, payload });
const deleteUser = (payload) => ({ type: DELETE_USER, payload });
const initialState = {
    useInfo: [],
};

export const __getUser = () => async (dispatch) => {
    const data = await apis.getUser();
    dispatch(getUser(data.data));
};

export const __addUser = (payload) => async (dispatch) => {
    const data = await apis.addUser({
        gender: payload.gender,
        name: payload.name,
        number: payload.age,
        nickname: payload.nickname,
    });
    dispatch(addUser(data.data));
};

export const __updateUser = (payload) => async (dispatch) => {
    const data = await apis.updateUser({
        gender: payload.gender,
        name: payload.name,
        number: payload.age,
        nickname: payload.nickname,
    });
    dispatch(updateUser(data.data));
};

export const __deleteUser = (payload) => async (dispatch) => {
    const data = await apis.deleteUser({
        gender: payload.gender,
        name: payload.name,
        number: payload.age,
        nickname: payload.nickname,
    });
    dispatch(deleteUser(data.data));
};

export default function userReducer(state = initialState, { payload, type }) {
    console.log(type, payload);
    switch (type) {
        case GET_USER:
            return { ...state, useInfo: [...payload] };
        case ADD_USER:
            return { ...state, useInfo: [...payload] };
        case UPDATE_USER:
            return {};
        default:
            return state;
    }
}
