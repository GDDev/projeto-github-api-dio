import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
    }

    button{
        background-color: rgb(0, 150, 225);
        border-radius: 12px;
        padding: 8px 16px;
        margin: 0 16px;
        text-transform: capitalize;
        color: #fff;
        
        &:hover{
            transform: scale(106%);
            box-shadow: 0 0 5px #000;
            font-weight: 700;
        }

        &:active{
            transform: scale(90%);
            background-color: rgba(0, 130, 225, 1);
        }
    }
`;