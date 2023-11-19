import { useEffect,useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Pages/Signup';
import './App.css';
import Login from './Pages/Login';
import { AuthContext, FirebaseContext} from './store/FirebaseContext'
import Home from './Pages/Home';
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import Post from './store/PostContext';
function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
     firebase.auth().onAuthStateChanged((user)=>{
      setUser(user);
     })
  })
  return (
   
    <div>
      <Post>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/create" component={Create} />
          <Route path="/viewpost" component={ViewPost} />
        </Switch>
      </Router>
      </Post>
    </div>
  );
}

export default App;
