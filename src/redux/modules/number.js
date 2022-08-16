import apis from 'shared/main';

const GET_NUMBER = 'user/GET_NUMBER';
const ADD_NUMBER = 'user/ADD_NUMBER';
const UPDATE_NUMBER = 'user/UPDATE_NUMBER';
const DELETE_NUMBER = 'user/DELETE_NUMBER';

const getNumber = (payload) => ({ type: GET_NUMBER, payload });
const addNumber = (payload) => ({ type: ADD_NUMBER, payload });
const updateNumber = (payload) => ({ type: UPDATE_NUMBER, payload });
const deleteNumber = (payload) => ({ type: DELETE_NUMBER, payload });
const initialState = {
    useNumber: [],
};

export const __getNumber = () => async (dispatch) => {
    const data = await apis.getNumber();
    dispatch(getNumber(data.data));
};

export const __addNumber = (payload) => async (dispatch) => {
    const data = await apis.addNumber({
        gender: payload.gender,
        name: payload.name,
        number: payload.age,
        nickname: payload.nickname,
    });
    dispatch(addNumber(data.data));
};

export const __updateNumber = (payload) => async (dispatch) => {
    const data = await apis.updateNumber({
        gender: payload.gender,
        name: payload.name,
        number: payload.age,
        nickname: payload.nickname,
    });
    dispatch(updateNumber(data.data));
};

export const __deleteNumber = (payload) => async (dispatch) => {
    const data = await apis.deleteNumber({
        gender: payload.gender,
        name: payload.name,
        number: payload.age,
        nickname: payload.nickname,
    });
    dispatch(deleteNumber(data.data));
};

export default function numberReducer(state = initialState, { payload, type }) {
    console.log(type, payload);
    switch (type) {
        case GET_NUMBER:
            return { ...state, useNumber: [...payload] };
        case ADD_NUMBER:
            return { ...state, useNumber: [...payload] };
        case UPDATE_NUMBER:
            const updateNumberlist = state.useNumber?.map((v, i) => {
                return v.id === Number(payload.id) ? payload : v;
            });
            return { ...state, useNumber: updateNumberlist };
        case DELETE_NUMBER:
            const myDataNumberlist = state.useNumber?.filter((v) => {
                return v.id !== Number(payload);
            });
            return { ...state, useNumber: myDataNumberlist };
        default:
            return state;
    }
}
