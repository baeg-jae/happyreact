import styled from '@emotion/styled';
import flex from 'components/flex';
import AddNumber from 'components/UserNumber/AddNumber';
import GetNumber from 'components/UserNumber/GetNumber';

const PhoneNumber = () => {
    return (
        <StWrap>
            <AddNumber />
            <GetNumber />
        </StWrap>
    );
};

export default PhoneNumber;

const StWrap = styled.div`
    ${flex({})}
`;
