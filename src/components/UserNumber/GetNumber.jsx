import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import DeleteNumber from './DeleteNumber';

const GetNumber = () => {
    const { useNumber } = useSelector((state) => state.numberReducer);
    // console.log(useInfo);

    return (
        <StWrap>
            {useNumber?.map((v) => {
                return (
                    <StBox key={v.id}>
                        <div>성별 : {v.gender}</div>
                        <div>이름 : {v.name}</div>
                        <div>번호 : {v.number}</div>
                        <div>별명 : {v.nickname}</div>
                        <DeleteNumber id={v.id} />
                    </StBox>
                );
            })}
        </StWrap>
    );
};

export default GetNumber;

const StWrap = styled.div`
    width: 55vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
`;
const StBox = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1em;
    border: 1px dashed black;
    div {
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0.5em;
    }
`;
