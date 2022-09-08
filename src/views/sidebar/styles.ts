import styled from "styled-components";


export const ContainerSidebar = styled.div`
    width: 400px;
    height: 100vh;
    background-color: #111;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;   
    display: block;
    z-index: 100;
    color: red;
    transition: all .3s ease;

    @media (max-width: 768px) {
        display: none;
    }

    @media (max-width: 1024px) {
        width: 300px;
    }
    
`