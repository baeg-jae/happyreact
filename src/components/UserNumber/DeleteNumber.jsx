import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { __deleteNumber } from 'redux/modules/number';

const DeleteNumber = ({ id }) => {
    const dispatch = useDispatch();
    const onDeleteHandler = () => {
        dispatch(__deleteNumber({ id }));
    };
    return (
        <>
            <StButton onClick={onDeleteHandler}>삭제</StButton>
        </>
    );
};

export default DeleteNumber;

const StButton = styled.button`
    width: 90%;
    margin: 0.5em;
    background-color: cyan;
`;
