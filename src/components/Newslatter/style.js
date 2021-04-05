import styled from 'styled-components';
import Cancun from '../../assets/cancun.png';

export const NewslatterWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background: url(${Cancun});
    display: flex;
    align-items: center;
    justify-content: center;
    background-attachment: fixed;
    background-size: cover;
    margin: 0;
    .form-container{
        display: flex;
        align-items: center;
        width: 80%;
        background: #f0f0f580;
        height: 70vh;
        border-radius: 15px;
        backdrop-filter: blur(25px);
        form{
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            input{
                width: 80%;
                height: 40px;
                border: none;
                border-radius: 10px;
                padding: 0 15px;
                margin: 15px 0;
            }
            .form-row{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 80%;
                input{
                    width: 50%;
                    margin: 15px 5px 0 0;
                }
                button{
                    background: #292929;
                    width: 50%;
                    height: 40px;
                    margin: 15px 5px 0 0;
                    border: none;
                    color: #f0f0f5;
                    &:hover{
                        filter: brightness(0.8);
                    }
                }
            }   
        }
        .about-newslatter{
            background: #f0f0f590;
            width: 50%;
            height: 80%;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            h1{
                color: #292929;
                font-weight: 300;
                font-size: 24px;
                width: 250px;
                text-align: center;
            }
            p{
                color: #292929;
                font-weight: 300;
                font-size: 18px;
                width: 250px;
                text-align: center;
            }
        }
    }
    @media (max-width: 992px){
        .form-container form{
            width: 100% !important;
        }

        .form-container form .form-row{
            flex-direction: column;
        }

        .form-container form .form-row input{
            width: 100% !important;
        }

        .about-newslatter{
            display: none !important;
        }
    }

@media (max-width: 768px){
    .about-newslatter{
        display: none;
    }
}

@media (max-width: 576px){
    .form-container form input{
        font-size: 14px;
    }

    .about-newslatter{
        display: none;
    }
}
`;


