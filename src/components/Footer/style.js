import styled from 'styled-components';

export const FooterPage = styled.footer`
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    .logo-social{
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            width: 60%;
        }
        .social-media{
            width: 100%;
            display: flex;
            justify-content: center;
            a{
                width: 20%;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 50px;
                img{
                    width: 90%;
                    padding: 5px;
                }
            }
        }
    }
    .footer-menus {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 60%;
        a{
            text-decoration: none;
            color: #292929;
            font-size: 14px;
            font-weight: 300;
        }
    }
    @media (max-width: 992px){
        margin: 20px 0;
    }
`;
