import styled from '@emotion/styled';
import flex from 'components/flex';
import Media from 'components/Media';

const MediaQuery = () => {
    return (
        <StWrap>
            <Media />
        </StWrap>
    );
};

export default MediaQuery;

const StWrap = styled.div`
    ${flex({})}
`;
