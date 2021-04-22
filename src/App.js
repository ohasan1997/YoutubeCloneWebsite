import "./styles.css";
import Header from "./components/Header/Header"
import Sidebar from './components/Sidebar/Sidebar'
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchPage from './components/SearchPage/SearchPage'

export default function App() {
  return (
     
    <div className="App">
      <Router>
       <Header />
        <switch>
          <Route path="/">
          <div className="app__page">
            <Sidebar />
            <RecommendedVideos />
          </div>
          </Route>
          <Route path="/search/:searchTerm">
            <SearchPage />
            <RecommendedVideos />
          </Route>
          
        </switch>
      </Router>
    
    </div>
  );
}
