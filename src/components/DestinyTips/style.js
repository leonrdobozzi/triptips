import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    height: 90vh;
    @media (max-width: 578px){
        height: 50vh;
    }
`

export const Container = styled.section`
    width: 100%;
    margin: 25px 0;

    .destiny-tips{
        padding: 0;
    }

    .destiny-description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 15px;
    }
`