import styled from '@emotion/styled';
import React, { useState } from 'react';
import { ADDUSERNICKNAME_MAX_LENGTH, ADDUSERNAME_MAX_LENGTH, ADDUSERAGE_LENGTH } from 'shared/data';
import { __addNumber } from 'redux/modules/number';
import { useDispatch } from 'react-redux';

function AddNumber() {
    const dispatch = useDispatch();
    const [gender, setGender] = useState();
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [nickname, setNickname] = useState();

    const onChange = (e) => {
        dispatch(
            __addNumber({
                gender: gender,
                name: name,
                number: number,
                nickname: nickname,
            })
        );
    };
    return (
        <StWrap>
            <StBox>
                <div>
                    성별 :
                    <input type="radio" name="gender" value="남자" onChange={(e) => setGender(e.target.value)} />
                    남자
                    <input type="radio" name="gender" value="여자" onChange={(e) => setGender(e.target.value)} />
                    여자
                </div>

                <div>
                    이름 :{' '}
                    <input
                        type="text"
                        name="name"
                        placeholder="이름"
                        maxLength={ADDUSERNAME_MAX_LENGTH}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    전화번호 :{' '}
                    <input
                        type="number"
                        name="number"
                        placeholder="전화번호"
                        minLength={ADDUSERAGE_LENGTH}
                        maxLength={ADDUSERAGE_LENGTH}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>

                <div>
                    별명 :{' '}
                    <input
                        type="text"
                        name="nickname"
                        placeholder="별명"
                        maxLength={ADDUSERNICKNAME_MAX_LENGTH}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </div>
                <StButton onChange={(e) => __addNumber(e.target.value)} onClick={onChange}>
                    등록
                </StButton>
            </StBox>
        </StWrap>
    );
}

export default AddNumber;

const StWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;
const StBox = styled.div`
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
