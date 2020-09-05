import React,{Component} from "react";
import ItemDetails,{Field} from '../itemDetails';
import GetInfo from "../../services/servisec";

export default class HouseInfo extends Component{

    GetInfo = new GetInfo();


    render(){
        return (
            <ItemDetails 
            itemId = {this.props.itemId}
            getData = {this.GetInfo.getOneHouse}>
                <Field name = "Name" label = "name"/>
                <Field name = "Region" label = "region"/>
                <Field name = "Words" label = "words"/>
                <Field name = "Title" label = "title"/>
                <Field name = "Overlorlds" label = "overlorlds"/>
            </ItemDetails>
    )
}
}