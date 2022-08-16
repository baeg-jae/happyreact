import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { __deleteNumber, __getNumber } from 'redux/modules/number';

const GetNumber = () => {
    const dispatch = useDispatch();
    const { useNumber } = useSelector((state) => state.numberReducer);
    // console.log(useInfo);
    useEffect(() => {
        dispatch(__getNumber());
    }, [dispatch]);

    const onDeleteHandler = (payload) => {
        dispatch(__deleteNumber(payload));
    };
    return (
        <StWrap>
            {useNumber?.map((v, i) => {
                return (
                    <StBox key={i}>
                        <div>성별 : {v.gender}</div>
                        <div>이름 : {v.name}</div>
                        <div>번호 : {v.number}</div>
                        <div>별명 : {v.nickname}</div>
                        <StButton onClick={() => onDeleteHandler()}>삭제</StButton>
                        <StButton onClick={() => onDeleteHandler()}>수정</StButton>
                    </StBox>
                );
            })}
        </StWrap>
    );
};

export default GetNumber;

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
