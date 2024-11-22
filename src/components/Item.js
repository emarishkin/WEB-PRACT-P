import React, { Component } from "react"

export class Item extends Component{
    render(){
    return(
       <div className="item">
           <img src={'../public/img'+this.props.item.img}/>
           <h2>{this.props.item.title}</h2>
           <h2>{this.props.item.category}</h2>
           <h2>{this.props.item.price}</h2>
           <div className="add-two-card">+</div>
       </div>
    )
}
} 
export default Item