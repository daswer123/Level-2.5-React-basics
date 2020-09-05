import React,{Component} from "react";
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';

import GetInfo from "../../services/servisec";
export default class CharPage extends Component {

    GetInfo = new GetInfo();
    state = {
        selectedItem : null,
        error : false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem : id
        })
    }

    componentDidCatch(){
        this.setState({error : true})
    }



    render(){ 

        
        if (this.state.error){
            return (<ErrorMessage/>);
        }

        return (
            <ItemList
                        getData = {this.GetInfo.getAllHouses} 
                        page = {3} 
                        pageSize = {5} 
                        ItemSelected={(itemId) => {
                            this.props.history.push(""+(itemId+11))
                        }}
                        renderLabel = {(item) => `${item.name}`}/>
        )
    }
}
