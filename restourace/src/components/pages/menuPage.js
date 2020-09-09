import React from 'react';
import '../menu-list-item/menu-list-item.scss';

const MenuListItem = ({menuItem}) => {
    const {title,price,url,category,id} = menuItem;
    return (
            <li className={`menu__item`}>
                <h3 className="menu__title">{title}</h3>
                <img className={`menu__img`} src={url} alt={title}/>
                <div className="menu__category">Category: <span>{category}</span><span className={`menu__icon menu__icon_${category}`}></span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
    )
}

export default MenuListItem;