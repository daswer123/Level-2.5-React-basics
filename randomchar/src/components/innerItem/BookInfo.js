import React,{Component} from "react";
import ItemDetails,{Field} from '../itemDetails';
import GetInfo from "../../services/servisec";

export default class BookInfo extends Component{

    GetInfo = new GetInfo();


    render(){
        return (
    <ItemDetails 

        itemId = {this.props.itemId}
        getData = {this.GetInfo.getOneBook}>
            
        <Field name = "Name" label = "name"/>
        <Field name = "Pages" label = "numberOfPages"/>
        <Field name = "Publisher" label = "publisher"/>
        <Field name = "Released" label = "released"/>
    </ItemDetails>
    )
}
}