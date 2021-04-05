import styled from 'styled-components';
import Santorini from '../../assets/santorini.jpg';

export const DestinyWeek = styled.section`
    height: 100vh;
    background-image: url(${Santorini});
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 45px;
    max-width: 100%;
    margin: 0;
    h1{
        color: #f0f0f5;
        font-size: 64px;
        width: 450px;
        font-weight: 200;
        margin: 0 0 0 20px;
    }
    h3{
        color: #f0f0f5;
        font-size: 26px;
        font-weight: 300;
        padding: 15px 0;
        margin: 0 0 0 20px;
    }
    p{
        color: #f0f0f5;
        font-size: 18px;
        width: 400px;
        font-weight: 200;
        padding: 15px 0;
        margin: 0 0 0 20px;
    }
    button{
        width: 250px;
        height: 50px;
        border: none;
        margin: 0 0 0 20px;
        &:hover{
            filter: brightness(0.8);
        }
    }
    
    @media (max-width: 768px){
        h1{
            width: 320px;
            font-size: 36px;
        }
        h3{
            width: 150px;
            font-size: 16px;

        }
        p{
            width: 250px;
            font-size: 14px;
        }
    }

    @media (max-width: 576px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        h1{
            width: 250px;
            font-size: 24px;
            text-align: center;
        }
        h3{
            text-align: center;
        }
        p{
            width: 250px;
            font-size: 14px;
        }
    }

    @media (max-width: 330px){
        h1{
            width: 200px;
            text-align: center;
        }
        h3{
            font-size: 26px;
            width: 200px;
            text-align: center;
        }
        
        p{
            font-size: 18px;
            width: 200px;
            text-align: center;
        }
        
        button{
            width: 200px;
            height: 40px;
        }
    }
`;
