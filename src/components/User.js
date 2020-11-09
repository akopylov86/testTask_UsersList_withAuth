import React from "react";
import { connect } from 'react-redux';
import Menu from "./Menu";

const User = ({ currentUser }) => {

    return (
        <div>
            <Menu/>
            <div className="container text-center">
                <div>User Info</div>
                <div><img src={currentUser.picture.large} alt="logo" className="rounded"/></div>
                <div className="table-responsive">
                    <table className="table table-sm table-bordered">
                        <tbody>
                        <tr>
                            <td>Title</td>
                            <td>{currentUser.name.title}</td>
                        </tr>
                        <tr>
                            <td>First name</td>
                            <td>{currentUser.name.first}</td>
                        </tr>
                        <tr>
                            <td>Last name</td>
                            <td>{currentUser.name.last}</td>
                        </tr>
                        <tr>
                            <td>Nationality</td>
                            <td>{currentUser.nat} <img src={`https://www.countryflags.io/${currentUser.nat}/shiny/32.png`} alt="flag_logo"/></td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{currentUser.location.country}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{currentUser.location.state}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{currentUser.location.city}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{currentUser.email}</td>
                        </tr>
                        <tr>
                            <td>Cell phone</td>
                            <td>{currentUser.cell}</td>
                        </tr>
                        <tr>
                            <td>Coordinates</td>
                            <td><a href={`https://www.latlong.net/c/?lat=${currentUser.location.coordinates.latitude}&long=${currentUser.location.coordinates.longitude}`} >Open coordinates</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default connect(
    (state, ownProps) => ({
        currentUser: state.usersList.data.find(user => user.login.uuid === ownProps.match.params.id),
    }),

)(User)