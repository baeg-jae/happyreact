import React from 'react';
import styled from '@emotion/styled';
import flex from '../flex';

const Pra1 = () => {
    return (
        <Div>
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="pink"></div>
            <div className="gray"></div>
            <div className="green"></div>
        </Div>
    );
};

export default Pra1;

const Div = styled.div`
    ${flex({})}

    position: relative;
    width: 100vw;
    height: 100vh;

    .red {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 40%;
        background-color: red;
    }
    .yellow {
        top: 0;
        right: 0;
        position: absolute;
        width: 50%;
        height: 60%;
        background-color: yellow;
    }
    .pink {
        bottom: 0;
        left: 0;
        position: absolute;
        width: 50%;
        height: 60%;
        background-color: pink;
    }
    .gray {
        bottom: 0;
        right: 0;
        position: absolute;
        width: 50%;
        height: 40%;
        background-color: gray;
    }
    .green {
        display: relative;
        width: 30%;
        height: 35%;
        background-color: green;
        z-index: 2;
    }
`;
