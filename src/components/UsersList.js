import React from 'react';
import UserLine from "./UserLine";
import '../index.css';
import {connect} from "react-redux";
import {ASC} from "../constatns/sortTypes";

const UsersList = ({usersListData, usersListError, usersListFilter, usersListSort}) => {

    if(usersListError) {
        return (<div>oops, something went wrong</div>);
    }

    const usersListFiltered = usersListData.filter(
        user=>(user.name.first
                .toUpperCase()
                .includes(usersListFilter.toUpperCase()))
            || (user.name.last
                .toUpperCase()
                .includes(usersListFilter.toUpperCase()))
        )
        .sort((a,b)=>{
                let valueA;
                let valueB;
                const [field1,field2] = usersListSort.field.split(".")
                if (field2){
                    valueA = a[field1][field2];
                    valueB = b[field1][field2];
                }else{
                    valueA = a[field1];
                    valueB = b[field1];
                }
                const sortLeft = usersListSort.direction === ASC ? 1 : -1;
                const sortRight = usersListSort.direction === ASC ? -1 : 1;

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
        )

    // const dataIsEmpty = usersListFiltered.length === 0;
    return(
        <div>
            {usersListFiltered.length === 0
                ? <div className="table">
                    <UserLine />
                  </div>
                : <div className="table">
                    {usersListFiltered.map( user => (<UserLine key={user.email} user={user} />) ) }
                  </div>
            }
        </div>
    )

}

export default connect(
    state=>({
        usersListError: state.usersList.error,
        usersListData: state.usersList.data,
        usersListFilter: state.usersList.filter,
        usersListSort: state.usersList.sort,
    })
)(UsersList);