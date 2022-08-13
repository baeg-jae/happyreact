import styled from '@emotion/styled';
import flex from 'components/flex';

const Media = () => {
    return <StTomato></StTomato>;
};

export default Media;

const StTomato = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: tomato;

    @media screen and (max-width: 1299px) {
        background-color: cyan;
    }
    @media screen and (max-width: 799px) {
        background-color: purple;
    }
`;
