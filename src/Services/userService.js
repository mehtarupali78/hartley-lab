import axios from 'axios';

export const userService={
    login,
    registration
}

let server = process.env.REACT_APP_SERVER_URL;

function login(data){
   return new Promise((resolve,reject)=>{
       axios.post(server+"/api/login",data)
       .then(data=>{
           resolve(data.data)
       },err=>{
          reject(err)
       })
   })
}


function registration(data){
    return new Promise((resolve,reject)=>{
        axios.post(server+"/api/register",data)
        .then(data=>{
            resolve(data.data)
        },err=>{
           reject(err)
        })
    })
 }