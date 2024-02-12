import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from '../components/List';
import UpdateUser from '../components/UpdateUser';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<List/>}/>
                <Route exact path="/update/:pUserId/:pName/:pUserStatus/:pUserType" element={<UpdateUser/>}/>
            </Routes>
        </Router>
    )
};

export default AppRoutes;