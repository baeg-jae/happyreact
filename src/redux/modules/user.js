import apis from 'shared/main';

//액션타입 - 리듀서가 뭐할지 정하는애
const GET_USER = 'user/GET_USER';

const ADD_USER = 'user/ADD_USER';

//액션함수 - 리듀서에 뭐할지 알려주는애
const getUser = (payload) => ({ type: GET_USER, payload });
const addUser = (payload) => ({ type: ADD_USER, payload });

//기본값 - 통 - store
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
            return { ...state, useInfo: [...state.useInfo, payload] };

        default:
            return state;
    }
}
