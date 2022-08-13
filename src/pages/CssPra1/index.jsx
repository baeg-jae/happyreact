import React from 'react';
import styled from '@emotion/styled';
import Prac1 from 'components/cssPrac/Prac1';

const CssPra1 = () => {
    return (
        <Div>
            <Prac1 />
        </Div>
    );
};

export default CssPra1;

const Div = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;
