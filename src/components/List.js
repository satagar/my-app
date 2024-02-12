import React, { useEffect } from 'react';
import {getAllUsers} from '../api/user/index';
import { Link } from 'react-router-dom';

const List = () => {
    const [users, setUsers] = React.useState([]);

    const init = async () => {
        const response = await getAllUsers();
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        init();
    }, []);

  return (
    <div class="container-sm">
      <h1>My List Component</h1>
        <ul class="list-group list-group-numbered">
            {users.map((user) => (
                <li key={user._id} class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{user.name}</div>
                  </div>
                  <Link to={`/update/${user.userId}/${user.name}/${user.userStatus}/${user.userType}`}>
                    <button type="button" class="btn btn-primary">Update</button>
                  </Link>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default List;