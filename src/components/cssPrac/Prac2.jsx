import styled from '@emotion/styled';
import flex from '../flex';

const Prac2 = () => {
    return (
        <Div>
            <StTopBox1>
                <div className="topBox1-1"></div>
                <div className="topBox1-2"></div>
                <div className="topBox1-3"></div>
                <div className="topBox1-4"></div>
            </StTopBox1>
            <StTopBox2>
                <div className="topBox2-1"></div>
                <div className="topBox2-2"></div>
                <div className="topBox2-3"></div>
            </StTopBox2>
            <StTopBox3>
                <div className="topBox3-1"></div>
                <div className="topBox3-2"></div>
                <div className="topBox3-3"></div>
            </StTopBox3>
            <StBottomBox1>
                <div className="bottomBox1-1"></div>
                <div className="bottomBox1-2"></div>
                <div className="bottomBox1-3"></div>
                <div className="bottomBox1-4"></div>
                <div className="bottomBox1-5"></div>
            </StBottomBox1>
            <StBottomBox2>
                <div className="bottomBox2-1"></div>
                <div className="bottomBox2-2"></div>
            </StBottomBox2>
        </Div>
    );
};

export default Prac2;
const Div = styled.div`
    ${flex({})}
    background-color: tomato;
    position: relative;
    width: 100vw;
    height: 100vh;
`;
const StTopBox1 = styled.div`
    ${flex({})}
    background-color: red;
    position: absolute;
    height: 50vh;
    width: 33.33vw;
    top: 0;
    left: 0;
    * {
        box-sizing: border-box;
    }
    div {
        background-color: white;
        border: 1px solid red;
        position: absolute;
        height: 25vh;
        width: 16.66vw;
    }
    .topBox1-1 {
        top: 0;
        left: 0;
    }
    .topBox1-2 {
        top: 25vh;
        left: 0;
    }
    .topBox1-3 {
        top: 0;
        left: 16.66vw;
    }
    .topBox1-4 {
        top: 25vh;
        left: 16.66vw;
    }
`;
const StTopBox2 = styled.div`
    ${flex({})}
    background-color: blue;
    position: absolute;
    height: 50vh;
    width: 33.33vw;
    top: 0;
    left: 33.33vw;
    * {
        box-sizing: border-box;
    }
    div {
        background-color: white;
        border: 1px solid red;
        position: absolute;
        height: 50vh;
        width: 11.11vw;
    }
    .topBox2-1 {
        top: 0;
        left: 0;
    }
    .topBox2-2 {
        top: 0;
        left: 11.11vw;
    }
    .topBox2-3 {
        top: 0;
        left: 22.22vw;
    }
`;
const StTopBox3 = styled.div`
    ${flex({})}
    background-color: yellow;
    position: absolute;
    height: 50vh;
    width: 33.33vw;
    top: 0;
    right: 0;
    * {
        box-sizing: border-box;
    }
    div {
        background-color: white;
        border: 1px solid red;
        position: absolute;
        height: 16.66vh;
        width: 33.33vw;
    }
    .topBox3-1 {
        top: 0;
        left: 0;
    }
    .topBox3-2 {
        top: 16.66vh;
        left: 0;
    }
    .topBox3-3 {
        top: 33.33vh;
        left: 0;
    }
`;
const StBottomBox1 = styled.div`
    ${flex({})}
    background-color: yellow;
    height: 50vh;
    width: 50vw;
    position: absolute;
    bottom: 0;
    left: 0;
    * {
        box-sizing: border-box;
    }
    .bottomBox1-1 {
        bottom: 0;
        left: 0;
        height: 16.66vh;
        width: 10vw;
        background-color: white;
        border: 1px solid red;
        position: absolute;
    }
    .bottomBox1-2 {
        bottom: 0;
        left: 10vw;
        height: 33.33vh;
        width: 10vw;
        background-color: white;
        border: 1px solid red;
        position: absolute;
    }

    .bottomBox1-3 {
        bottom: 0;
        left: 20vw;
        height: 50vh;
        width: 10vw;
        background-color: white;
        border: 1px solid red;
        position: absolute;
    }

    .bottomBox1-4 {
        bottom: 0;
        left: 30vw;
        height: 33.33vh;
        width: 10vw;
        background-color: white;
        border: 1px solid red;
        position: absolute;
    }

    .bottomBox1-5 {
        bottom: 0;
        left: 40vw;
        height: 16.66vh;
        width: 10vw;
        background-color: white;
        border: 1px solid red;
        position: absolute;
    }
`;
const StBottomBox2 = styled.div`
    ${flex({})}
    background-color: red;
    position: absolute;
    height: 50vh;
    width: 50vw;
    top: 50vh;
    left: 50vw;
    * {
        box-sizing: border-box;
    }
    .bottomBox2-1 {
        top: 0;
        left: 0;
        height: 25vh;
        width: 25vw;
        background-color: white;
        border: 1px solid red;
        position: absolute;
    }
    .bottomBox2-2 {
        bottom: 0;
        left: 25vw;
        height: 25vh;
        width: 25vw;
        background-color: white;
        border: 1px solid red;
        position: absolute;
    }
`;
