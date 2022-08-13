import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import flex from './flex';

const Header = () => {
    return (
        <StWrapFlex>
            <NavLink to={'/'}>
                <h2>Home</h2>
            </NavLink>
        </StWrapFlex>
    );
};

export default Header;

const StWrapFlex = styled.div`
    ${flex({})}
`;
