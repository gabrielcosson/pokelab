import { Component } from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import LogInStructure from '../components/logInStructure/LogInStructure';
import Details from './Details';
import Home from './Home';
import SignUp from './SignUp.jsx';

class LogIn extends Component{
    render(){
        return (
          <BrowserRouter>
            <Routes>
              <Route path="/logIn" element={<LogInStructure />} />
              <Route path="/signUp/*" element={<SignUp />} />
              <Route path="/home/:language" element={<Home />} />
              <Route path="/details/:language/:pokemon" element={<Details/>} />
            </Routes>
          </BrowserRouter>
        );
    }
}

export default LogIn;