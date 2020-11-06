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

    const sortList = (event) =>{
        event.preventDefault();
        let sortField = sort.field;
        let sortDirection = sort.direction;
        let sortFieldElement = document.querySelector(`#${sortField.replace(".","\\.")}`);

        if(!event.target.id)
            return

        if(sortFieldElement) {
            sortFieldElement.classList.remove("bg-light")
        }

        if(sortField === event.target.id){
            sortDirection = sortDirection === ASC ? DESC : ASC;
        }

        event.target.classList.toggle("bg-light")
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
                       <div className='col-1' ></div>
                       <div className='col-1' >Title</div>
                       <div className='col-2' id='name.first'>First name</div>
                       <div className='col-2' id='name.last'>Last name</div>
                       <div className='col-1' id='dob.age'>Age</div>
                       <div className='col-4' >Email</div>
                       <div className="col-1"></div>
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