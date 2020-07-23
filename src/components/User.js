import React from "react";
import { connect } from 'react-redux';
import Menu from "./Menu";

const User = ({ currentUser }) => {
    return (
        <div>
            <Menu/>
            <div>User Info</div>
            <div>{currentUser.name.title}</div>
            <div>{currentUser.name.first}</div>
            <div>{currentUser.name.last}</div>
        </div>
    )
}

export default connect(
    (state, ownProps) => ({
        currentUser: state.usersList.data.find(user => user.id.value === ownProps.match.params.id),
    }),

)(User)