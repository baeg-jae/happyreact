import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { __getUser } from 'redux/modules/user';

const GetUser = () => {
    const dispatch = useDispatch();
    const { useInfo } = useSelector((state) => state.userReducer);
    // console.log(useInfo);
    useEffect(() => {
        dispatch(__getUser());
    }, [dispatch]);
    return (
        <StWrap>
            {useInfo?.map((v, i) => {
                return (
                    <StBox key={i}>
                        <div>이름 : {v.name}</div>
                        <div>나이 : {v.age}</div>
                        <div>별명 : {v.nickname}</div>
                        <StButton>삭제</StButton>
                        <StButton>수정</StButton>
                    </StBox>
                );
            })}
        </StWrap>
    );
};

export default GetUser;

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
