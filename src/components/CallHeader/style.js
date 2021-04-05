import styled from 'styled-components';
import Fdn from '../../assets/fdn.jpg';
import Ocean from '../../assets/ocean-tree.jpg';

export const ContainerCall = styled.section`
    background-image: url(${props => props.bg || Fdn});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 160px;
    width: 100%;
    p{
        font-size: 24px;
        width: 600px;
        color: #f0f0f5;
        font-weight: 300;
        font-family: 'Raleway', sans-serif;
    }

    @media (max-width: 768px){
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        h1{
            font-size: 36px;
            width: 280px;
            text-align: center;
        }
        p{
            font-size: 14px;
            width: 280px;
            text-align: center;
        }
    }
`

export const Title = styled.h1`
    font-size: 56px;
    width: ${props => props.textSize || '460px'};
    color: #f0f0f5;
    font-weight: 200;
    font-family: 'Raleway', sans-serif;

`