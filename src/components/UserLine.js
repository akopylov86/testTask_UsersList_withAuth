import React from 'react';
import {Link} from "react-router-dom";

const UsersLine = ({user}) => {
    return(

        <div className='container'>
            <div className="row border">
                <div className='col-1' ><img src={user.picture.thumbnail} className="rounded" alt=""/></div>
                <div className='col-1' >{user.name.title}</div>
                <div className='col-2' >{user.name.first}</div>
                <div className='col-2' >{user.name.last}</div>
                <div className='col-1' >{user.dob.age}</div>
                <div className='col-4' >{user.email}</div>
                <div className="col-1"><Link to={`/user/${user.login.uuid}`}>Details</Link></div>
            </div>
        </div>
    )

}

export default UsersLine;