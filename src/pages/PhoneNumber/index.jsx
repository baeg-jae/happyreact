import styled from '@emotion/styled';
import flex from 'components/flex';
import AddNumber from 'components/AddNumber';

const PhoneNumber = () => {
    return (
        <StWrap>
            <AddNumber />
        </StWrap>
    );
};

export default PhoneNumber;

const StWrap = styled.div`
    ${flex({})}
`;
