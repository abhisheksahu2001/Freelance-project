import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
    background-color: #dcf4f7;
    color:var(--heading);
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration-line:underline ;
    font-size:20px;
    font-weight:700;
    @media only screen and (max-width: 600px){
        font-size: 13px;
    }
    @media (min-width:601px) and (max-width:1023px){
        font-size: 1.5rem;
        width: 110%;

    }
`



const Notice = () => {


    return (
        <Container>
            NEW YEAR SELL
        </Container>
    )

}

export default Notice