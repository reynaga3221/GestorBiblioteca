import React, { useState, useEffect } from "react";
import Sidebar from './components/layout/Sidebar';
import Login from './components/layout/Login';
import UserService from './services/UserService';


const App = () => {

    let loginRequest = {
        user: "", password: ""
    };


    const _userService = new UserService();
    const [isLogin, setIsLogin] = useState(["false"]);
    const [currentUser, setCurrentUser] = useState([loginRequest]);

    useEffect(() => {
       // const loggedInUser = localStorage.getItem("user");        
        setIsLogin(sessionStorage['user']);
    }, []);

    const LoginApp = () => {

        _userService.Login(currentUser).then(res => {

            sessionStorage.setItem('user', res.data)
          //  console.log(res.data);
          //  debugger;
            if (res.data == true )
                window.location.reload();
            else
                alert("Credenciales Incorrectas")
        }
        ).catch(res => {
            console.log("Error")
        });
    }

    return (   
       <>
            {
                isLogin == "true" ?
                    <Sidebar /> : <Login handleLogin={LoginApp} isLogin={isLogin} user={currentUser} setUser={(user) => setCurrentUser(user)}/> 
                  
            }
         </>
    );
}
export default App;
