import styled from '@emotion/styled';
import Main from 'components/Main';
import flex from 'components/flex';

const Home = () => {
    return (
        <StWrapFlex>
            <Main />
        </StWrapFlex>
    );
};

export default Home;

const StWrapFlex = styled.div`
    ${flex({})}
    width: 100vw;
    height: 100vh;
`;
