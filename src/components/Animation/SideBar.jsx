import styled from '@emotion/styled';
import React from 'react';
import flex from 'components/flex';

const SideBar = () => {
    return (
        <StSideBarWrap>
            <StMain></StMain>
            <StSubject></StSubject>
        </StSideBarWrap>
    );
};

export default SideBar;

const StSideBarWrap = styled.div`
    ${flex({ align: 'flex-start' })}
    height: 100vh;
    width: 30vw;
    border: 1px solid black;
    background-color: teal;
    z-index: 2;
`;

const StMain = styled.div``;
const StSubject = styled.div``;
