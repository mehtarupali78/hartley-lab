import React,{Component,Fragment} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import {userService} from "../Services/userService";
import swal from 'sweetalert';
import { history } from '../utilities/history';
import {welcomeDataAction} from '../Redux/actions/welcomeDataAction';
import { connect } from "react-redux";

export  class LoginForm extends React.Component{
     constructor(props){
         super(props)
         this.state={
            
         }
        
     }

     validate=(values) => {
        let errors = {};
       
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }else if (!values.password) {
            errors.password = 'Required';
          }

        return errors;
      }

     handlesubmit= (values, { setSubmitting }) => {
       
        let data={
          email:values.email,
          password:values.password
         }
          userService.login(data)
          .then(data=>{
             swal("sucess!", "login sucess.", "success");
             history.push("/home");
             this.props.dispatch(welcomeDataAction.getWelcomeData())
              window.location.reload();
            
          },error=>{
             swal("wrong!", "mail id and password is wrong", "error");
          })

      }
       

     render(){
        
       
         return(
            <div class="wrapper fadeInDown">
            <div id="formContent">
            
              <div class="fadeIn first">
               <h2> Login </h2>
              </div>
              <Formik
               initialValues={{ email: '', password: '' }}
                 validate={(values)=>this.validate(values)}
                 onSubmit={(values,{setSubmitting})=>this.handlesubmit(values,{setSubmitting})}
                 >
                 {({ isSubmitting }) => (
                     <Form  className="container-fluid" >
                     
                     <Field className="fadeIn second" type="email" name="email" placeholder="email"/>
                     <ErrorMessage name="email" component="div" />
                    
                     <Field className="fadeIn third" type="password" name="password" placeholder="password"/>
                     <ErrorMessage name="password" component="div" />
                         
                     <input type="submit" class="fadeIn fourth" value="Log In" disabled={isSubmitting}/>

                    </Form>
                )}
             </Formik>
              <div id="formFooter">
               <Link to="/registration">
                <a class="underlineHover" href="#">Sign Up?</a>
                </Link>
              </div>
          
            </div>
          </div>
       
         )
     }
}

function mapStatetoProps(state){
  const {welcomedata}=state.welcomeData;
  console.log("redux",state)
 return{
   welcomedata
 }
}




export default connect(mapStatetoProps, null)(LoginForm);
