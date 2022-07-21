import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 8px;
    h1{
        font-size: 32px;
        font-weight: 700;
    }

    h3{
        font-size: 18px;
        font-weight: 700;
    }
    h4{
        font-size: 16px;
        font-weight: 700;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;  
    div{
        margin: 8px;
        text-align: center;
    }
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    h3{
        margin-right: 8px;
    }

    a{
        font-size: 18px;
        color: rgba(0, 0, 255, .75);
        font-weight: 700;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;