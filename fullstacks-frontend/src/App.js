import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Layout/Nabar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './Uesrs/AddUser';
import EditUser from './Uesrs/EditUser';
import ViewUser from './Uesrs/ViewUser';
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/AddUser" element={<AddUser/>}/>
      <Route exact path="/editUser/:id" element={<EditUser/>}/>
      <Route exact path="/viewUser/:id" element={<ViewUser/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
