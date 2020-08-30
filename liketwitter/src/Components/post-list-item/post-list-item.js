import React, {Component} from "react";
import {Star, Bin,Like} from "../svg-icons/icons";
import "./post-list-item.css";


// class Post extends Component {
//     constructor(props) {
//         super(props);
        
//     }
// }

class Postt extends Component{
    constructor(props){
        super(props);
        this.state = {
            important : (this.props.important ? true : false),
            liked : (this.props.liked ? true : false)
        }
        this.setFavorit = this.setFavorit.bind(this);
        this.setLiked = this.setLiked.bind(this);
}


    setFavorit() {
        this.setState(({important}) => ({
            important : !important
        }))
    }

    setLiked() {
        this.setState(({liked}) => ({
            liked : !liked
        }))
    }

    render() {
       const {label,deletePost} = this.props;
       const {important} = this.state;
       const {liked} = this.state;

    let favorit = "star";
    if (important){
        favorit += " active-star"
     }

     let likeShow = "like";
     if (liked){
        likeShow += " show";
     }
        

    return(<li className="app-list-item d-flex justify-content-between">
            <p className= "app-list-item-label" onClick = {this.setLiked}>{label}</p>
            <p className= "d-flex justify-content-center align-items-center">
                <button className="btn btn-sm" type= "button" onClick={deletePost} ><Bin/></button>
                <button className="btn btn-sm" type= "button" onClick={this.setFavorit}><Star className= {favorit}/></button>
                <Like className={likeShow}/>
            </p>
        </li>
        )
    }
}



// const Post = ({label,important = false}) => {
//     let favorit = "star";
//     const id = makeId();

//     if (important){
//         favorit += " active-star"
//     }

//     return (
//         <li className="app-list-item d-flex justify-content-between" id={id}>
//             <p className= "app-list-item-label">{label}</p>
//             <p className= "d-flex justify-content-center align-items-center">
//                 <button className="btn btn-sm" type= "button"><Bin/></button>
//                 <button className="btn btn-sm" type= "button"><Star className= {favorit}/></button>
//                 <Like/>
//             </p>
//         </li>
//     )
// }



export default Postt;