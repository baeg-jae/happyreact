import styled from '@emotion/styled';
import React, { useState } from 'react';

function AddNumber() {
    const [gender, setGender] = useState();
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [nickName, setNickName] = useState();
    const [add, setAdd] = useState('');
    console.log(add);
    const onChange = (e) => {
        setAdd({
            gender,
            name,
            number,
            nickName,
        });
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
                    이름 : <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    전화번호 : <input type="number" onChange={(e) => setNumber(e.target.value)} />
                </div>

                <div>
                    별명 : <input onChange={(e) => setNickName(e.target.value)} />
                </div>
                <StButton onChange={(e) => setAdd(e.target.value)} onClick={onChange}>
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
