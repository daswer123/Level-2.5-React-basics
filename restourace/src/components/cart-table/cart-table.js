import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {removeFromCart,addOneItem,removeOneItem,makeOrder} from "../../actions";
import WithRestoService from "../hoc";
import './cart-table.scss';

const CartTable = ({items,removeFromCart,addOneItem,removeOneItem,makeOrder,RestoService,order}) => {

    if(items.length === 0){
        return (
        <div className="without-order">
            <h2>Please Make your order</h2>
            <img className="without-order-img" alt="panda" src="https://media.giphy.com/media/bRJRe4SUFyp2w/giphy.gif"/>
        </div> )
    }
    
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <ul className="cart__list">
                {
                    items.map(item => {
                        const {title,url,price,id,count} = item;
                        return (
                        <li className="cart__item" key={id}>
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">
                                <strong>{title}</strong>
                             
                             <div className="cart__item-counter">
                             <button onClick={() => addOneItem(id)}className="plus" type="button"></button>
                                 {count+1}
                            <button onClick={() => removeOneItem(id)}className="minus" type="button">Минус</button>
                            </div>
                             </div>
                            <p className="cart__item-price">{price}$</p>
                            <button onClick={() => removeFromCart(id)} type="button" className="cart__close">&times;</button>
                        </li> 
                        )
                    })
                }
                {/* <li className="cart__item">
                    <img src="https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg" className="cart__item-img" alt="Cesar salad"></img>
                    <strong className="cart__item-title">Cesar salad</strong>
                    <p className="cart__item-price">12$</p>
                    <button type="button" className="cart__close">&times;</button>
                </li> */}
            </ul>
            <Link className="cart__order" to="/" onClick={() =>{ 
                   makeOrder();
                   alert("Your order soon be ready");
                }} >Make your order</Link>
        </>
    );
};

const mapStateToProps = ({items,order}) => {
    return {
        items,
        order
    }
}

const mapDispatchToProps = {
    removeFromCart,
    addOneItem,
    removeOneItem,
    makeOrder
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(CartTable));