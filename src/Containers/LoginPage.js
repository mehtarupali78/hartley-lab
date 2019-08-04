import React,{Component} from "react";
import LoginForm from "../Components/LoginForm";

export default class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <LoginForm/>
        )
    }
}