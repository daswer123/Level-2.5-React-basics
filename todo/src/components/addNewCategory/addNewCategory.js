import React, { Component } from "react";
import {connect} from "react-redux";
import withTaskContext from "../hoc";
import cyrllicToTranslit from "cyrillic-to-translit-js";
import {createUnicId} from "../../services/service"
import {CategoryCreated} from "../../actions/action"
import ColorList from "../colorList";


class AddNewCategory extends Component{


    state = {
        text : "",
        activeColor : ""
    }


    onActiveColor(color){
        console.log(color)
        this.setState({
            activeColor : color
        })
    }

    onSubmitForm(e){
        e.preventDefault();

        let {TodoInfo,onCreateNewCategory,categories,CategoryCreated} = this.props;
        TodoInfo = new TodoInfo();

        const {text,activeColor} = this.state
        if (text === "" || activeColor === ""){
            alert("Пожалуйста введите текст или выберите цвет категории");
            return
        }

        // let color = `#${Math.floor(Math.random()*999999+100000)}`

        const data = {
            name : text,
            color : activeColor,
            id : createUnicId(categories)
        }

        data.label = `${cyrllicToTranslit().transform(text,"-")}-${data.id}`


        CategoryCreated(data);
        TodoInfo.addNewCategory(JSON.stringify(data));
        onCreateNewCategory();

        
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
                <div className="color-type">
                    <ColorList onActiveColor={(color) => this.onActiveColor(color)} activeColor={this.state.activeColor}/>
                </div>
                <button type="submit">Добавить</button>
            </form>
        </>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        categories : state.categories
    }
}

const mapDispatchToProps = {
    CategoryCreated,
}

export default withTaskContext()(connect(mapStateToProps,mapDispatchToProps)(AddNewCategory));