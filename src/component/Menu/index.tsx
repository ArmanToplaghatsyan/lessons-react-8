import React from "react";
import './style.scss'
import { NavLink, useLocation, useParams } from "react-router-dom";

export const Menu:React.FC = React.memo(({}): JSX.Element => {
    const {id} = useParams();
    const location = useLocation();
    console.log(location, id);
    
    
    return(<div className="menu border border-3">
        {
            id? 
            <nav>
                <ul>
                    <li><NavLink to={'profile/'+id}>Profile</NavLink></li>
                    <li><NavLink to={'mypost/'+id}>My Post</NavLink></li>
                    <li><NavLink to={'/'}>Log Out</NavLink></li>
                </ul>
            </nav>
        :
        <ul>
            <li><NavLink to={'/'}>LogIn</NavLink></li>
            <li><NavLink to={'/register'}>Register</NavLink></li>
        </ul>
        }
    </div>)
})