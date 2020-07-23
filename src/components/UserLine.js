import React from 'react';
import {Link} from "react-router-dom";

const UsersLine = ({user}) => {
    return(
        <div className='table_row'  >
            <Link to={`/user/${user.id.value}`}>
                <div className='tableCell' >{user.name.title}</div>
                <div className='tableCell' >{user.name.first}</div>
                <div className='tableCell' >{user.name.last}</div>
                <div className='tableCell' >{user.dob.age}</div>
                <div className='tableCell' >{user.email}</div>
            </Link>
        </div>
    )

}

export default UsersLine;