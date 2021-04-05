import styled from 'styled-components';

export const Find = styled.section`
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    h3{
        font-size: 30px;
        width: 300px;
        font-weight: 300;
    }
    .form-input-find-destiny {
        width: 530px;
        input{
            width: 350px;
            height: 40px;
            border: none;
            border-radius: 10px 0 0 10px;
            box-shadow: 0 0 15px #29292950;
            padding: 0 15px;
            outline: none;
        }
        button{
            width: 150px;
            height: 40px;
            border: none;
            background: #292929;
            color: #fff;
            &:hover{
                filter: brightness(0.8);
            }
        }
    }
    @media (max-width: 576px){
        margin: 25px 0;
        .form-input-find-destiny{
            width: 280px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            input{
                width: 100%;
                border-radius: 10px;
            }
            button{
                margin: 15px 0;
            }
            h3{
                text-align: center;
            }
        }
    }

`;
