import styled from 'styled-components';

export const Container = styled.header`
    padding: 3.438rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const Image = styled.img`
    height: 53px;
    width: 53px;
`;

export const Menu = styled.ul`
    list-style:none;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ItemMenu = styled.li`
    margin: 0 5.188rem;

    
    a {
    color: ${({ theme }) => theme.colors.color_text_menu};
    font-size: 1.3rem;
    text-decoration: none;
    margin-top: 1em;
    display: inline-block;
    font-weight: bold;
    padding: .5em;
    margin-left: -.5em;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    &:before, &:after {
        position: absolute;
        content: '';
        border-bottom: 3px solid ${({ theme }) => theme.colors.color_text_menu};
        border-radius: 1em;
        bottom: .3em;
        transition: transform .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:before {
        width: 1em;
        transform-origin: left;
    }

    &:after {
        width: 82%;
        left: 1em;
        transform: translateX(110%);
    }

    &:hover:before {
        transform: scaleX(0.3);
    }

    &:hover:after {
        transform: translateX(0);
    }

}

`;