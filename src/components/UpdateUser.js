import React from 'react';
import { useParams } from 'react-router-dom';
import {updateUser} from '../api/user/index';
import { useNavigate } from "react-router-dom";

const UpdateUser = (props) => {
    const { pUserId, pName, pUserStatus, pUserType } = useParams();
    const [name, setName] = React.useState(pName);
    const [userStatus, setUserStatus] = React.useState(pUserStatus);
    const [userType, setUserType] = React.useState(pUserType);

    const navigate = useNavigate();

    function onNameChange(event){
        setName(event.target.value);
    }

    function onUserStatusChange(event){
        setUserStatus(event.target.value);
    }

    function onUserTypeChange(event){
        setUserType(event.target.value);
    }

    async function submitForm(event){
        event.preventDefault();
        console.log(`${name}:${userStatus}:${userType}`);
        const result = await updateUser(pUserId, name, userStatus, userType);
        const data = await result.json();
        window.alert(data.message);
        navigate("/");
    }

    return (
        <div class="container">
            <h1>UpdateUser</h1>
            <form>
                <div class="mb-3">
                    <label for="nameinput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="nameinput" value={name} onChange={onNameChange}/>
                </div>
                <div class="mb-3">
                    <label for="nameinput" class="form-label">UserStatus</label>
                    <input type="text" class="form-control" id="nameinput" value={userStatus} onChange={onUserStatusChange}/>
                </div>
                <div class="mb-3">
                    <label for="nameinput" class="form-label">UserType</label>
                    <input type="text" class="form-control" id="nameinput" value={userType} onChange={onUserTypeChange}/>
                </div>
                <input type="submit" class="btn btn-primary" value="Update User" onClick={submitForm}/>
            </form>
        </div>
    )
}

export default UpdateUser;