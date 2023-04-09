import React from 'react';
class PokeCardSingular extends React.Component{
    constructor(props) {
        super(props);
        this.state = {imgSrc : ""}
        this.state = {number : ""}
        this.state = {name : ""}
        this.state = {type : ""}
    }
    render(){
        return(
            <React.Fragment>
                <td>
                    <p>Request status class: <span id="message"></span></p>
                    <div>
                        <img src = {this.props.imgSrc} width="96" height="96"/>
                        <p>Number: {this.props.number}</p>
                        <p>Name: {this.props.name}</p>
                        <p>Type: {this.props.type}</p>
                    </div>
                </td>
            </React.Fragment>
        )
    }
}

export default PokeCardSingular;