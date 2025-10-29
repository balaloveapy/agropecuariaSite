import styled from "styled-components";




export const Main = styled.main`
    background: linear-gradient(to bottom, #a2d9ff, var(--Bege-Neutro));
    font-size: 1.2rem;
    color: var(--Texto-escuro);
    background-color: var(--Bege-Neutro);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    

`
export const SectionPrincipal = styled.section`
    position: relative;
    font-family: var(--font-lato), sans-serif  ;
    padding: 20px;
    display: flex;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    width: 75%;
    max-width: 500px;
    background-color: var(--Fundo-Das-Divs);
    box-shadow: 0 4px 6px var(--Borda-Sombra);
    gap: 5px;
    .fotoAgro {
        @media (max-width: 900px) {
            width: 60px;
            height: 60px;

        }
        width: 100px;
        height: 100px;
        background-image:url('/agroLogo.jpg');
        background-size: cover;
        background-position: center;
        position: absolute;
        border-radius: 60%;
        bottom: 100%;  
        left: 100%;
        transform: translate(-40%, 40%);
        overflow: hidden;
     }

    span {
        font-weight: 700;
    }
`
export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

`
export const Article = styled.article`
    font-family: var(--font-lato), sans-serif  ;
    display: flex;
    height: 40px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    width: 60%;
    max-width: 400px;
    background-color: var(--Fundo-Das-Divs);
    box-shadow: 0 4px 6px var(--Borda-Sombra);
    gap: 5px;
    transition: all 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
`