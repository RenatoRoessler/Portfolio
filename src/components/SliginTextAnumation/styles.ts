import styled, { keyframes } from "styled-components";


const openClose = keyframes`
    0% {
    top: 0.2rem;
    width: 0;
  }
  5% {
    width: 0;
  }
  15% {
    width: 230px;
  }
  30% {
    top: 0.2rem;
    width: 230px;
  }
  33% {
    top: 0.2rem;
    width: 0;
  }
  35% {
    top: 0.2rem;
    width: 0;
  }
  38% {
    top: -4.5rem;
    
  }
  48% {
    top: -4.5rem;
    width: 190px;
  }
  62% {
    top: -4.5rem;
    width: 190px;
  }
  66% {
    top: -4.5rem;
    width: 0;
    text-indent: 0;
  }
  71% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }
  86% {
    top: -9rem;
    width: 285px;
  }
  95% {
    top: -9rem;
    width: 285px;
  }
  98% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }
  100% {
    top: 0;
    width: 0;
    text-indent: 0;
  }
`

export const StyledH1 = styled.h1`
    color: ${(props) => props.theme['white']};
    font-family: tahoma;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.5;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    width: 550px;

    > span {
        font-size: 40px;
        margin-left: 40px;
    }
`

export const StyledMessage = styled.div`
    /* background-color: yellow; */
    color: ${(props) => props.theme['white']};;
    display: block;
    font-weight: 900;
    overflow: hidden;
    position: absolute;
    padding-left: 0.5rem;
    left: 380px;
    animation: ${openClose} 5s ease-in-out infinite;
`;
