import React, {Component} from 'react';
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import MenuListItem from '../menu-list-item';
import {menuLoaded,menuCreated,menuWrong} from "../../actions";
import Spinner from "../spinner";

import './menu-list.scss';
import Error from '../error';

class MenuList extends Component {

    componentDidMount(){
        this.props.menuCreated();
        const {RestoService} = this.props;
        RestoService.getAllMenu()
        .then(result => this.props.menuLoaded(result))
        .catch( error => {
            console.log(error)
            this.props.menuWrong()
        })
    }

    render() {

        const {menuItems,loading,error} = this.props;

        if (loading){
            return <Spinner/>
        }
        if (error){
            return <Error/>
        }

        const ViewItems = menuItems.map(menuItem => {
            return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
        })
        
        return (
            <ul className="menu__list">
                {ViewItems}
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems : state.menu,
        loading : state.loading,
        error : state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuCreated,
    menuWrong
}

// const mapDispatchToProps = (dispatch) =>{
//         return {
//             menuLoaded : (newMenu) =>{
//                 return dispatch({
//                     type: "MENU_LOADED",
//                     payloaded : newMenu
//                 })
//             }
//         }
//  }
    

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuList))