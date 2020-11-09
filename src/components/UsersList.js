import React from 'react';
import UserLine from "./UserLine";
import '../index.css';
import {connect} from "react-redux";
import {ASC} from "../constatns/sortTypes";

const UsersList = ({usersListData, userListError}) => {

    if(userListError) {
        return (<div>oops, something went wrong</div>);
    }

    const dataIsEmpty = usersListData.length === 0;
    return(
        <div>
            {dataIsEmpty
                ? <div className="table">
                    <UserLine />
                  </div>
                : <div className="table">
                    {usersListData.map( user => (<UserLine key={user.email} user={user} />) ) }
                  </div>
            }
        </div>
    )

}

export default connect(
    state=>({
        userListError: state.usersList.error,
        usersListData: state.usersList.data
            .filter(
                user=>(user.name.first
                    .toUpperCase()
                    .includes(state.usersList.filter.toUpperCase()))
                || (user.name.last
                        .toUpperCase()
                        .includes(state.usersList.filter.toUpperCase()))
                )
            .sort((a,b)=>{
                let valueA;
                let valueB;
                const [field1,field2] = state.usersList.sort.field.split(".")
                if (field2){
                    valueA = a[field1][field2];
                    valueB = b[field1][field2];
                }else{
                    valueA = a[field1];
                    valueB = b[field1];
                }
                const sortLeft = state.usersList.sort.direction === ASC ? 1 : -1;
                const sortRight = state.usersList.sort.direction === ASC ? -1 : 1;

                if(!isNaN(valueA)&&!isNaN(valueB)){
                    return (Number(valueA) > Number(valueB)
                        ? sortLeft
                        : sortRight)
                }else{
                    return (valueA > valueB
                        ? sortLeft
                        : sortRight)
                }
            }
            ),
    })
)(UsersList);