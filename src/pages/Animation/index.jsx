import { SideBarAnimation } from 'components/Animation/KeyFrames';
import styled from '@emotion/styled';
import flex from 'components/flex';
import { useState } from 'react';

const Animation = () => {
    const [sideBar, setSideBar] = useState(false);
    const sideBarTrueHandler = () => {
        setSideBar(true);
        console.log(sideBar);
    };
    const sideBarFalseHandler = () => {
        setSideBar(false);
        console.log(sideBar);
    };
    return (
        <StWrap>
            <StBt onClick={sideBarTrueHandler}>X</StBt>
            {sideBar === false ? (
                <></>
            ) : (
                <StSideBarWrap>
                    <StBt onClick={sideBarFalseHandler}>X</StBt>
                    <StMain></StMain>
                    <StSubject></StSubject>
                </StSideBarWrap>
            )}
        </StWrap>
    );
};

export default Animation;

const StWrap = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: white;
`;

const StBt = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 3vh;
    left: 3vw;
    border: 1px solid black;
    height: 2vh;
    width: 2vw;
    background-color: tomato;
    z-index: 1;
`;

const StSideBarWrap = styled.div`
    ${flex({ align: 'flex-start' })}
    animation: ${SideBarAnimation} 5s;
    height: 100vh;
    width: 30vw;
    border: 1px solid black;
    background-color: teal;
    z-index: 10;
`;

const StMain = styled.div``;
const StSubject = styled.div``;
