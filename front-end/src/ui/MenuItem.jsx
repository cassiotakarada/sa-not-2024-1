import React from "react";
import { Link } from 'react-router-dom';
import AuthUserContext from "../contexts/AuthUserContext";

export default function MenuItem({ userLevel = 0, dest, children}) {
    /*
    userlevel:
    0 ~> qualquer usuário autenticado (autenticado ou não)
    1 ~> somente usuários autenticados
    2 ~> somente administrador
    */
   const { authUser } = React.userContext(AuthUserContext)
   
   if((userLevel === 0) || 
    (userLevel == 1 && authUser) ||
    (userLevel ==2 && authUser.is_admin)) {
        return (
            <li key={dest} style={{ marginRight: '12px'}}>
                <Link to={dest}>{children}</Link>
            </li>
        )
    }
    else return <></>
}