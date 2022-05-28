import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';

import HomeScreen from "./Pages/HomeScreen";
import LoginScreen from "./Pages/LoginScreen";
import EmissorFiscal from './Pages/EmissorFiscal';


const AppRoutes = () => {
    return(
        <Router>
          <Routes>
             <Route exact path="/login" element={<LoginScreen/>} />

             <Route exact path="/" element={<HomeScreen/>} />

             <Route exact path="/EmissorFiscal" element={<EmissorFiscal/>} />

          </Routes>
        </Router>
    )

}

export default AppRoutes;