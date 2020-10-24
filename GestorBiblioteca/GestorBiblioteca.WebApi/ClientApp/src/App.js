import React, { useState, useEffect } from "react";
import Sidebar from './components/layout/Sidebar';
import Login from './components/layout/Login';
import UserService from './services/UserService';


const App = () => {

    let loginRequest = {
        user: "", password: ""
    };


    const _userService = new UserService();
    const [isLogin, setIsLogin] = useState([false]);
    const [currentUser, setCurrentUser] = useState([loginRequest]);

    //useEffect(() => {
    //    Login();
    //}, []);

    const LoginApp = () => {
        debugger;
        _userService.Login(currentUser).then(res => {
            console.log(res.data);
            debugger;
            setIsLogin(res.data);
        }
        ).catch(res => {
            console.log("Error")
        });
    }

    return (   
       <>
            {
                isLogin == true ?
                    <Sidebar /> : <Login handleLogin={LoginApp} isLogin={isLogin} user={currentUser} setUser={(user) => setCurrentUser(user)}/> 
                  
            }
         </>
    );
}
export default App;
