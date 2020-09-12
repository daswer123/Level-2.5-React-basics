import React, { Component } from "react";
import {connect} from "react-redux";
import withTaskContext from "../hoc";
import cyrllicToTranslit from "cyrillic-to-translit-js";



class AddNewCategory extends Component{


    state = {
        text : ""
    }

    onSubmitForm(e){
        let {TodoInfo} = this.props;
        TodoInfo = new TodoInfo();

        e.preventDefault();
    }

    onInput(e){
        console.log(e.target.value)
        this.setState({
            text : e.target.value
        })
    }
    
    render(){

    const {onCreateNewCategory} = this.props
    return (
        <>
            <form action="#" onSubmit={(e) => this.onSubmitForm(e)}>
                <button onClick={onCreateNewCategory} className="close-add-category">Закрыть</button>
                <input onInput={(e) => this.onInput(e)} type="text" name="category-name"/>
                <div className="color-type"></div>
                <button type="submit">Добавить</button>
            </form>
        </>
    )
    }
}

export default withTaskContext()(connect()(AddNewCategory));