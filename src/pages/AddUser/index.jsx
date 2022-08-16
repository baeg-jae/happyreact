import styled from '@emotion/styled';
import AddUser from 'components/UserAge/AddUser';
import flex from 'components/flex';
import GetUser from 'components/UserAge/GetUser';

const Home = () => {
    return (
        <StWrapFlex>
            <AddUser />
            <GetUser />
        </StWrapFlex>
    );
};

export default Home;

const StWrapFlex = styled.div`
    ${flex({})}
    width: 100vw;
    height: 100vh;
`;
