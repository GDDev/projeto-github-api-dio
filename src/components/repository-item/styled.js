import styled from 'styled-components';

export const Wrapper = styled.div`
    h2{
        font-weight: 700;
        font-size: 18px;
    }
    h2:hover{
        transform: scale(105%);
        text-shadow: 1px 1px #000;
    }

    h4{
        font-size: 16px;
        padding-top: 10px;
        padding-bottom: 5px;
        color: rgb(0, 0, 225);
    }

    span{
        text-align: justify;
        font-size: 14px;
        color: rgb(0, 0, 125);
    }

    border-right: 1px solid rgba(0, 0, 0, .1);
    border-radius: 20px;
    margin-bottom: 20px;
    width: fit-content;
    max-width: 400px;
    height: fit-content;
    align-content: center;
    padding: 10px;
    margin-right: 10px;
`;