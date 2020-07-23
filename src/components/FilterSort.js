import React from "react";
import {connect} from "react-redux";
import {FILTER_USER_LIST, SORT_USER_LIST} from "../constatns/actionsList";
import {ASC, DESC} from "../constatns/sortTypes";

const FilterSort = ({ onFilter, onSort, filter }) => {
    let filterInput = filter;
    let sortFieldInput;
    let sortDirectionInput;

    const filterList = (event) => {
        event.preventDefault()
        onFilter(filterInput.value)
    }

    const sortList = (event) =>{
        event.preventDefault();
        onSort(sortFieldInput.value, sortDirectionInput.value)
    }

    return (
        <div>
            <form onSubmit={filterList}>
                <input type="text" ref={input=>{filterInput = input}}/>
                <button type="submit">Find</button>
            </form>

            <div>
                <label htmlFor="sort">Choose sort:</label>

                <select id="sort" ref={input=>{sortFieldInput = input}} onChange={sortList} defaultValue="name.first">
                    <option value="name.first" >First name</option>
                    <option value="dob.age">Age</option>
                </select>
                <label htmlFor="sortDir">Choose sort:</label>

                <select id="sortDir" ref={input=>{sortDirectionInput = input}} onChange={sortList} defaultValue={ASC}>
                    <option value={ASC}>0->10 / A->Z</option>
                    <option value={DESC}>10->0 / Z->A</option>
                </select>
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