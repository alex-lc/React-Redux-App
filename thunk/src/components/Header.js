import React from 'react';
import styled from 'styled-components';

// assets
import Totoro from '../assets/totoro.svg';

const HeaderContainer = styled.header`
    width: 100%;
    background: #B9C297;
    height: 5rem;

    div.logo img {
        height: 3rem;
    }

    div.logo h2 {
        font-size: 2rem;
        font-weight: 300;
        margin-left: 1.5rem;
    }

    .logo {
        height: 5rem;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 15%;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <div className="logo">
                <img src={Totoro} alt="Studio Ghibli Logo" />
                <h2>Studio Ghibli Movie Finder</h2>
            </div>
        </HeaderContainer>
    )
}

export default Header;