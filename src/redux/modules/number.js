import apis from 'shared/main';

const GET_NUMBER = 'number/GET_NUMBER';
const ADD_NUMBER = 'number/ADD_NUMBER';
const DELETE_NUMBER = 'number/DELETE_NUMBER';

const getNumber = (payload) => ({ type: GET_NUMBER, payload });
const addNumber = (payload) => ({ type: ADD_NUMBER, payload });
const deleteNumber = (payload) => ({ type: DELETE_NUMBER, payload });

export const __getNumber = () => async (dispatch) => {
    const data = await apis.getNumber();
    dispatch(getNumber(data.data));
};

export const __addNumber = (payload) => async (dispatch) => {
    const data = await apis.addNumber();
    dispatch(addNumber(data.data));
    console.log(data, payload);
};

export const __deleteNumber = (payload) => async (dispatch, getState) => {
    const userId = getState().useNumber.findIndex((v) => {
        return (v.id = payload.id);
    });
    await apis.deleteNumber();
    dispatch(deleteNumber({ userId, data: payload }));
};

const initialState = {
    useNumber: [],
};

export default function numberReducer(state = initialState, { payload, type }) {
    console.log(type, payload);
    switch (type) {
        case GET_NUMBER:
            return { ...state, useNumber: [...payload] };
        case ADD_NUMBER:
            return { ...state, useNumber: [...state.useNumber, payload] };
        case DELETE_NUMBER:
            const newDeleteState = state.useNumber?.filter((_, i) => {
                return i === payload ? false : true;
            });
            return { ...state, useNumber: newDeleteState };
        default:
            return state;
    }
}
