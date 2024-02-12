export const getAllUsers = async () => {

  const URL = 'http://localhost:10000/mba/api/v1/users/';

  try {

    const response = await fetch(URL, { mode: 'cors' });
    return response;

  } catch (error) {
    console.log(error);
    throw error;
  }

}

export const updateUser = async (userId, name, userStatus, userType) => {
  const URL = `http://localhost:10000/mba/api/v1/users/${userId}`;

  try {

    const response = await fetch(URL, 
      { 
        mode: 'cors', 
        method: 'PUT', 
        body: JSON.stringify(
          { 
            name, 
            userStatus, 
            userType 
          }), 
        headers: { 'Content-Type': 'application/json' } 
      });
    return response;

  } catch (error) {
    console.log(error);
    throw error;
  }
}