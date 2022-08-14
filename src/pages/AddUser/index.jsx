import styled from '@emotion/styled';
import AddUser from 'components/AddUser';
import flex from 'components/flex';
import AddGetUser from 'components/AddGetUser';

const Home = () => {
    return (
        <StWrapFlex>
            <AddUser />
            <AddGetUser />
        </StWrapFlex>
    );
};

export default Home;

const StWrapFlex = styled.div`
    ${flex({})}
    width: 100vw;
    height: 100vh;
`;
