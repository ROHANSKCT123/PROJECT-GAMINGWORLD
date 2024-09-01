import logo from './logo.svg';
import './App.css';
import Singin from './Component/singin';
import Signup from './Component/signup';
import ViewUser from './Component/users/ViewUser';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import EditUser from './Component/users/EditUser';
import Home from './page/Home';
import AddUser from './Component/users/AddUser';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/button';
import CardContainer from './Component/mainpage';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <NavBar/> */}
      <Routes>
        <Route exact path ="/" element={<Singin/>}/> 
        <Route exact path ="/button" element={<Header/>}/> 
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/card" element={<CardContainer/>}/>
        
        <Route exact path = "/get/:gameno" element={<ViewUser/>}/> 
        <Route exact path="/updateteams/" element={<EditUser/>}/>
        <Route exact path="/fetchteams" element={<Home/>} />
        <Route exact path="/postteams" element= {<AddUser/>}/>
        </Routes> 
      </Router>
    </div>
     
  );


}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import Mainpage from './Component/mainpage'
// import Header from './Component/button'
// //import Signin from './components/signin'
// //import Signup from './components/signup'

// function App() {
//   return (
//     <div>
//       <Header/>
//     </div>
  
//   );
// }

// export default App;
