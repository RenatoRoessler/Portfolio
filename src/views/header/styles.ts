import styled, { keyframes } from "styled-components";



const showIn = keyframes`
    to { 
        opacity: 1;
        transform: translateY(0);
    }
`;


type ContainerDivProps = {
    showHeader: boolean;
}
export const ContainerDiv = styled.div<ContainerDivProps>`
    width: 100%;
    background-color: rgba(10, 25, 47, 0.85);
    box-shadow: 0 10px 30px -10px rgba(2,12,27,0.7);
    position: fixed;
    transform: ${({ showHeader }) => showHeader ? 'translateY(0px)' : 'translateY(calc(70px * -1))'};   
`;

export const ConteudoHeader = styled.div`
    width: 100%;
    padding: 20px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledNav = styled.div`
    display: flex;
    align-items: center;

    > ol {
        padding: 10px;
        list-style-type: decimal;       
    }
    > ol > li {
        float: left;
        margin: 0 20px;
        opacity: 0;
        transform: translateY(-170px);       
        animation: ${showIn} 2s forwards;    
    }
`;
