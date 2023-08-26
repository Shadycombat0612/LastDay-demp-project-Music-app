// It's created to provide a server that enables the frontend to fetch song data based on search terms and display it to the user.

import logo from './logo.svg';
import './App.css';
import './services/SearchPage.css';
import {SearchPage} from './pages/SearchPage';

function App() {
  return (
   <SearchPage/>
  );
}

export default App;
