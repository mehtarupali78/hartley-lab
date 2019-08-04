import React,{Component,Fragment} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import {userService} from "../Services/userService";
import swal from 'sweetalert';

export default class RegistrationForm extends React.Component{
     constructor(props){
         super(props)
         this.state={

         }
         console.log("registration form");
     }

     validate=(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.firstName) {
          errors.firstName = 'Required';
        }
        
        if (!values.lastName) {
          errors.lastName = 'Required';
        }

       if (!values.password) {
          errors.password = 'Required';
        }
        else if (!values.conf_password) {
            errors.conf_password = 'Required';
        }
        else if(values.password!==values.conf_password){
          errors.password = 'not match';
          errors.conf_password = 'not match';
        }

        return errors;
      }

     handlesubmit= (values, { setSubmitting }) => {
      
       let data={
        name:values.firstName+' '+values.lastName,
        email:values.email,
        password:values.password
       }
        userService.registration(data)
        .then(data=>{
           swal("sucess!", "User id or Password is wrong.", "success");
        },error=>{
           swal("wrong!", "User id or Password is wrong.", "error");
        })
       
      }



     render(){
         return(
            <div class="wrapper fadeInDown">
            <div id="formContent">
            
              <div class="fadeIn first">
               <h2> Sign Up </h2>
              </div>
              <Formik
               initialValues={{ email: '', password: '',firstName:"",lastName:"",conf_password:""}}
                 validate={(values)=>this.validate(values)}
                 onSubmit={(values,{setSubmitting})=>this.handlesubmit(values,{setSubmitting})}
                 >
                 {({ isSubmitting }) => (
                     <Form  className="container-fluid" >
                        
                     <Field className="fadeIn second" type="text" name="firstName" placeholder="First Name"/>
                     <ErrorMessage name="firstName" component="div" />

                     <Field className="fadeIn second" type="text" name="lastName" placeholder="Last Name"/>
                     <ErrorMessage name="lastName" component="div" />
                     
                     <Field className="fadeIn second" type="email" name="email" placeholder="Email"/>
                     <ErrorMessage name="email" component="div" />
                    
                     <Field className="fadeIn third" type="password" name="password" placeholder="Password"/>
                     <ErrorMessage name="password" component="div" />

                     <Field className="fadeIn third" type="password" name="conf_password" placeholder="Confirm Password"/>
                     <ErrorMessage name="conf_password" component="div" />
                         
                     <input type="submit" class="fadeIn fourth" value="Sign Up" disabled={isSubmitting}/>

                    </Form>
                )}
             </Formik>
              <div id="formFooter">
              <Link to="/">
                <a class="underlineHover" href="#">Log In?</a>
              </Link>
              </div>
          
            </div>
          </div>
       
         )
     }
}

