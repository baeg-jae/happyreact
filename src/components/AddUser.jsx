import styled from '@emotion/styled';
import React, { useState } from 'react';
import { __addUser } from 'redux/modules/user';
import { useDispatch } from 'react-redux';

function AddUser() {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [nickname, setNickname] = useState();

    const onChange = (e) => {
        dispatch(
            __addUser({
                name: name,
                age: age,
                nickname: nickname,
            })
        );
    };
    console.log(dispatch);
    return (
        <StWrap>
            <StBox>
                <div>
                    이름 : <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    나이 : <input type="age" onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    별명 : <input type="nickname" onChange={(e) => setNickname(e.target.value)} />
                </div>
                <StButton onChange={(e) => __addUser(e.target.value)} onClick={onChange}>
                    등록
                </StButton>
            </StBox>
        </StWrap>
    );
}

export default AddUser;

const StWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;
const StBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 1em;
    border: 1px dashed black;
    div {
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0.5em;
    }
`;
const StButton = styled.button`
    width: 90%;
    margin: 0.5em;
    background-color: cyan;
`;
