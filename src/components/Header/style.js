import styled from 'styled-components';

export const Menu = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 0 0 0 15px;
    height: 10vh;
    position: fixed;
    background: #f0f0f580;
    width: 100%;
    z-index: 99;
    backdrop-filter: blur(5px);
    top: 0;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 80px;
            margin-left: 50px;
        }
    }
    ul{
        display: flex;
        align-items: center;
        height: 100%;
        a {
            text-decoration: none;
            color: #292929;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            li{
                display: inline;
                margin: 0 15px;
            }
            &:last-child{
                background: #292929;
                font-size: 10px;
            }
        }
        .btn-menu{
            color: #f0f0f5;
        }

        .btn-menu:hover{
            filter: brightness(0.8);
        }
    }
    @media (max-width: 992px){
        ul a{
            display: none;
            &:last-child{
                display: flex;
            }
        }
    }      

    @media (max-width: 360px){
        ul{
            width: 100px;
            padding: 0;
            display: none;
            &:last-child{
                display: none;
            }
        }
    }
`;