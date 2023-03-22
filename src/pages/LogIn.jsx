import { Component } from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import LogInContainer from '../components/logInContainer/LogInContainer'
import Home from './Home';
import SignUp from './SignUp.jsx';

class LogIn extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/logIn" element = {<LogInContainer />}/>
                    <Route path="/signUp/*" element = {<SignUp />} />
                    <Route path="/home/*" element = {<Home />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default LogIn;