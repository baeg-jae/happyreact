import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import flex from 'components/flex';

const Main = () => {
    return (
        <StWrapFlex>
            <NavLink to={'/phonenumber'}>
                <h3>연락처 등록</h3>
            </NavLink>
            <NavLink to={'/mediaquery'}>
                <h3>css반응형</h3>
            </NavLink>
            <NavLink to={'/csspra1'}>
                <h3>css display의 속성</h3>
            </NavLink>
            <NavLink to={'/csspra2'}>
                <h3>css display의 속성2</h3>
            </NavLink>
            <NavLink to={'/addUser'}>
                <h3>유저 등록</h3>
            </NavLink>
            <NavLink to={'/animation'}>
                <h3>애니메이션</h3>
            </NavLink>
        </StWrapFlex>
    );
};

export default Main;

const StWrapFlex = styled.div`
    ${flex({ direction: 'column', align: 'flex-start' })}
    width: 100vw;
    height: 100%;
    margin-left: 10%;
`;
