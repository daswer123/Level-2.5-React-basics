import React,{Component} from "react";
import ItemDetails,{Field} from '../itemDetails';
import GetInfo from "../../services/servisec";

export default class CharInfo extends Component{

    GetInfo = new GetInfo();


    render(){
        return (
            <ItemDetails 
            itemId = {this.props.itemId}
            getData = {this.GetInfo.getOneCharacter}>
                <Field name = "Name" label = "name"/>
                <Field name = "Gender" label = "gender"/>
                <Field name = "Died" label = "died"/>
                <Field name = "Culture" label = "culture"/>
            </ItemDetails>
        )
}
}