import React from "react"
import Home from "../Components/Home";
import Footer from "../Components/common/Footer";
import Header from "../Components/common/Header";
import {userService} from "../Services/userService";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {welcomeDataAction} from '../Redux/actions/welcomeDataAction';
import { history } from '../utilities/history';
import { bindActionCreators } from 'redux'


export  class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:null
        }
    }
    componentDidMount(){
        
        this.props.dispatch(welcomeDataAction.getWelcomeData())
        this.updatedata();
    }

    componentDidUpdate(prevProps){
        if(prevProps.welcomedata !==this.props.welcomedata){
            this.updatedata()
        }
    }

   updatedata=()=>{
   
        this.setState({
            data:this.props.welcomedata
        })
   }

    logout(){
        localStorage.clear()
        history.push("/");
        window.location.reload();
    }

    render(){

        return(
            (localStorage.getItem('user')
                ?
                <div>
                    <Header logout={this.logout}/>
                        <Home  data={this.state.data}/>
                    <Footer/>
                </div>
                :
                null
            )
        )   
    }
}

function mapStatetoProps(state){
    const {welcomedata}=state.welcomeData;
   return{
     welcomedata
   }
}

export default connect(mapStatetoProps, null)(HomePage);


