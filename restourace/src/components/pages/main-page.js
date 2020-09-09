import React from 'react';
import MenuList from '../menu-list';

const MainPage = ({history}) => {
    return (
        <MenuList ItemSelected={(itemId) => {history.push("/menu/"+(itemId))}}/>
    )
}

export default MainPage;
