import React from "react";
import {connect} from "react-redux";
import {FILTER_USER_LIST, SORT_USER_LIST} from "../constatns/actionsList";
import {ASC, DESC} from "../constatns/sortTypes";

const FilterSort = ({ onFilter, onSort, filter, sort }) => {
    let filterInput = filter;

    const filterList = (event) => {
        event.preventDefault()
        onFilter(filterInput.value)
    }

    const getClassNamesForSort = (name) => {
        if (!sort) {
            return;
        }
        return sort.field === name ? sort.direction : '';
    };

    const sortList = (event) =>{
        event.preventDefault();
        let sortField = sort.field;
        let sortDirection = sort.direction;

        if(!event.target.id)
            return

        if(sortField === event.target.id){
            sortDirection = sortDirection === ASC ? DESC : ASC;
        }

        sortField = event.target.id
        onSort(sortField, sortDirection)
    }

    return (
        <div>
            <form onSubmit={filterList} className='mb-2'>
                <input type="text" ref={input=>{filterInput = input}}/>
                <button type="submit">Find</button>
            </form>

            <div className='container'>
                   <div className="row bg-info " onClick={sortList}>
                       <div className='col-1' >&nbsp;</div>
                       <div className='col-1' >Title</div>
                       <div className={'col-2 ' + getClassNamesForSort('name.first') } id='name.first'>First name</div>
                       <div className={'col-2 ' + getClassNamesForSort('name.last') } id='name.last'>Last name</div>
                       <div className={'col-1 ' + getClassNamesForSort('dob.age') } id='dob.age'>Age</div>
                       <div className='col-4' >Email</div>
                       <div className="col-1">&nbsp;</div>
                  </div>
             </div>
        </div>
    )
}

export default connect(
    state => ({
        filter: state.usersList.filter,
        sort: state.usersList.sort,
    }),
    dispatch => ({
        onSort: (field, direction) => {
            dispatch({type: SORT_USER_LIST,
                      payload:{field ,direction}})
        },
        onFilter: (filter) => {
            dispatch({type: FILTER_USER_LIST, payload:filter})
        },
    })
)(FilterSort);