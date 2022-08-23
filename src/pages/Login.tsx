import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { loginRequest } from '../store/auth/actions';
import { getAuthSelector } from '../store/auth/selector';

const Login: React.FC<{}>= (props:any)=> {

const emailRef:any=useRef();
const passwordRef:any=useRef();
const callback=(data:any)=>{
    console.log("inside",data)
}

const login=()=>{
  let data:any={
    values:{
      email:emailRef.current.value,
      password: passwordRef.current.value
    },
    callback
  }
  let u=props.login(data);

 
}
useEffect(() => {
 
}, [])

  return (
    <div>
      <input ref={emailRef} type="email" value={"eve.holt@reqres.in"}></input>
      <input ref={passwordRef} type="password" value={"cityslicka"}></input>
      <button onClick={()=>login()}>
        send
      </button>
    </div>
  )
}

const mapDispatchToPropos=(dispatch:any)=>({
  login: (params:any)=>dispatch(loginRequest(params))
})


export default connect(null,mapDispatchToPropos)(Login)