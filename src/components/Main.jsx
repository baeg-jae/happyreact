import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import flex from 'components/flex';

const Main = () => {
    return (
        <StWrapFlex>
            <NavLink to={'/phoneNumber'}>
                <h3>연락처 등록</h3>
            </NavLink>
            <NavLink to={'/mediaQuery'}>
                <h3>css반응형</h3>
            </NavLink>
            <NavLink to={'/csspra1'}>
                <h3>css display의 속성</h3>
            </NavLink>
        </StWrapFlex>
    );
};

export default Main;

const StWrapFlex = styled.div`
    ${flex({ direction: 'column' })}
    width: 100vw;
    height: 100%;
`;
