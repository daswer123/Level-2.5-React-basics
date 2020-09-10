import React,{Component} from 'react';
import {Link} from "react-router-dom";
import withRestoServices from "../hoc"
import {connect} from "react-redux"
import {addToCart} from "../../actions";
import '../menu-list-item/menu-list-item.scss';
import "./menuPage.css";
import Spinner from '../spinner';

class MenuItem extends Component{

    state = {
        menuItem : false
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
    
        if (!this.state.menuItem){
            return <Spinner/>
        }
        const {title,url,category,price,desc,id} = this.state.menuItem
        const {addToCart} = this.props
        return (
            <>
            <section className={`menu__item menu__item--more`}>
                <h3 className="menu__title">{title}</h3>
                <Link className="back" to="/">Back to menu</Link>
                <img className={`menu__img`} src={url} alt={title}/>
                <p className="menu__desk">{desc}</p>
                <p className="menu__category">Category: <span>{category}</span></p>
                <p className="menu__price">Price: <span>{price}$</span></p>
                <button onClick={() => addToCart(id)} className="menu__btn">Add to cart</button>
            </section>
            <div className="menu_block"></div>
            </>
            )
}
    }

const mapDispatchToProps = {
    addToCart,
}

const mapStateToProps = (state) => {
    return {}
}

export default withRestoServices()(connect(mapStateToProps,mapDispatchToProps)(MenuItem));