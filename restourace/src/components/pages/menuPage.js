import React,{Component} from 'react';
import {Link} from "react-router-dom";
import withRestoServices from "../hoc"
import '../menu-list-item/menu-list-item.scss';
import "./menuPage.css";

class MenuItem extends Component{

    state = {
        menuItem : {}
    }

    componentDidMount(){
        const {RestoService,itemId} = this.props
        RestoService.getOneItem(itemId).then(menuItem=>{
            this.setState({
                menuItem
            })
        })
    }


    render () {
    
    
        const {title,url,category,price,desc} = this.state.menuItem
        return (
            <>
            <section className={`menu__item menu__item--more`}>
                <h3 className="menu__title">{title}</h3>
                <Link className="back" to="/">Back to menu</Link>
                <img className={`menu__img`} src={url} alt={title}/>
                <p className="menu__desk">{desc}</p>
                <p className="menu__category">Category: <span>{category}</span></p>
                <p className="menu__price">Price: <span>{price}$</span></p>
                <button className="menu__btn">Add to cart</button>
            </section>
            <div className="menu_block"></div>
            </>
            )
}
    }

export default withRestoServices()(MenuItem);