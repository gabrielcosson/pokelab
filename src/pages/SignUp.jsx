import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUpContainer from '../components/signUpContainer/SignUpContainer'

class SignUp extends Component{
    render(){
        return(
            <SignUpContainer />
        )
    }
}

export default SignUp;