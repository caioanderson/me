import styled, { keyframes } from 'styled-components';

export const Lines = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    -webkit-transform: skew(16deg) translateX(-70px);
      -ms-transform: skew(16deg) translateX(-70px);
          transform: skew(16deg) translateX(-70px);
    left: -100px;
    z-index: 0;
`;

const LineAnimation = keyframes`
     0%{
         top: -50%;
     }

    100%{
      top: 110%;
    }

`;

export const Line = styled.div`
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;

    &:after{
        content: '';
        display: block;
        position: absolute;
        height: 15vh;
        width: 100%;
        top: -50%;
        left: 0;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%,
         ${({ theme }) => theme.colors.color_primary} 75%,
         ${({ theme }) => theme.colors.color_primary}  100%);
        animation: ${LineAnimation} 7s 0s infinite;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);

}

    &:nth-child(1){
        margin-left: -25%;

        &:after{
            animation-delay: 2s;
        }
    }

    &:nth-child(2){
        margin-left: 1%;

        &:after{
            animation-delay: 2.5s;
        }

}

`