import styled from 'styled-components';
import Buzios from '../../assets/buzios-small.jpg';

export const Search = styled.section`
    height: 80vh;
    display: flex;
    width: 100%;
    .more-search-image{
        background-image: url(${Buzios});
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding: 50px 0;
        h1{
            color: #f0f0f5;
            font-size: 36px;
        }
        p{
            color: #f0f0f5;
            font-size: 20px;
        }
    }
    .more-search-content{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 0 0 45px;
        background: #fff;
        h1{
            color: #292929;
            font-size: 36px;
            width: 250px;
            font-weight: 500;
        }
        p{
            font-size: 26px;
            width: 450px;
            font-weight: 300;
            color: #292929;
        }
        button{
            width: 250px;
            height: 40px;
            background: #292929;
            color: #f0f0f5;
            border: none;
            cursor: pointer;
            outline: none;
            &:hover{
                filter: brightness(0.8);
            }
        }
    }
    @media (max-width: 992px){
        .more-search-content{
            margin: 0;
            padding: 0;
            align-items: center;
            h1{
                font-size: 26px;
                width: 250px;

            }
            
            p{
                font-size: 24px;
                margin: 40px 0;
                width: 320px;
                text-align: center;

            }
        }
        .more-search-image{
            display: none !important;
        }
    }
    @media (max-width: 576px){
        .more-search-content p{
            font-size: 16px;
            margin: 40px 0;
            width: 250px;
            text-align: center;
        }
    }
`;


