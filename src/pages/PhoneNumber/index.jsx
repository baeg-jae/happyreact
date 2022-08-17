import styled from '@emotion/styled';
import AddNumber from 'components/UserNumber/AddNumber';
import GetNumber from 'components/UserNumber/GetNumber';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { __getNumber } from 'redux/modules/number';

const PhoneNumber = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(__getNumber());
    }, [dispatch]);
    return (
        <StWrap>
            <AddNumber />
            <StLine />
            <GetNumber />
        </StWrap>
    );
};

export default PhoneNumber;

const StWrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eee;
`;

const StLine = styled.div`
    width: 35%;
    height: 1px;
    margin-top: 2rem;
    border: 1px solid #d5d5d5;
`;
