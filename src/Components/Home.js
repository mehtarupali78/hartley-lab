import React from "react"

export default class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        
        return(
            <div>
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}