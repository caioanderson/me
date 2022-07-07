import styled, { keyframes } from 'styled-components';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { BiSun } from 'react-icons/bi';
import { BsFillMoonFill } from 'react-icons/bs';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    width: 100vw;
    height: 100vh;
    padding: 0 16rem;
    `;

export const Wrapper = styled.div`
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    
    width: 100%;
    height: 100%;
    padding: 0 16rem;
    
    overflow: hidden;
    
    `;

export const Main = styled.main`
    margin-top: 6.25rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
`;

export const WrapperMe = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const ContainerSocial = styled.div`
    margin-top: 4rem;

    display: flex;
    align-items: center;
    gap: 2rem;
    
`;

export const Instagram = styled(FaInstagram)`
    font-size: 2.125rem;
    color: ${({ theme }) => theme.colors.color_primary};
    transition: color .3s, filter .2s;

    &:hover{
        filter: brightness(.8)
    }

`;

export const LinkedIn = styled(FaLinkedinIn)`
    font-size: 2.125rem;
    color: ${({ theme }) => theme.colors.color_primary};
    transition: color .3s, filter .2s;

    &:hover{
        filter: brightness(.8)
    }

`;


export const Title = styled.h1`
    position: relative;
    color: ${({ theme }) => theme.colors.color_primary};
    font-size: 2.25rem;
`;

export const ContainerRotateWords = styled.div`
    display: inline;
    margin-left: 10px;
`;

const rotateWords = keyframes`
    5%{
        opacity: 1;
    }
    10%,
    20%{
        opacity: 1;
        transform: rotate(3deg);
    }

    15%{
        transform: rotate(-1deg);
    }

    25%{
        opacity: 0;
        transform: translateY(90px) rotate(10deg);

    }
    
`;

export const TextRotateWords = styled.span`
    width: max-content;
    position: absolute;

    background: ${({ theme }) => theme.colors.rotation_words};
    padding-inline: 10px;
    opacity: 0;
    transform-origin: 10% 75%;
    animation: ${rotateWords} 8s linear infinite;
    color: ${({ theme }) => theme.colors.color_primary};

    &:nth-child(1){
        animation-delay: 0s;
        color: #FFF;
}

    &:nth-child(2){
        animation-delay: 4s;
        color: #FFF;
}

`;

export const ContainerArt = styled.div`
    position: relative;
`;

export const CodeImage = styled.img`
    width: 600px;
    height: 452px;
`;


export const BackgroundImage = styled.div`
    position: relative;
`;

export const Perfil = styled.img`
    position: absolute;
    bottom: -70px;
    right: 0;
`;

export const ButtonChangeTheme = styled.button`
    position: absolute;
    z-index: 100000;
    bottom: 50px;
    right: 100px;

    padding: 1rem;
    border-radius: 100%;
    border: 0;

    width: 80px;
    height: 80px;


    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.color_secondy};

    -webkit-box-shadow: -6px 26px 21px 4px rgba(0,0,0,0.46); 
    box-shadow: -6px 26px 21px 4px rgba(0,0,0,0.46);

    cursor: pointer;
`;

export const Sun = styled(BiSun)`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.color_primary};
`;

export const Moon = styled(BsFillMoonFill)`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.color_primary};
`;
