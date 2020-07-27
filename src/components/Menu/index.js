import React from 'react';
import Logo from '../../assets/logo.png';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo" />
            </a>
            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;