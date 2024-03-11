import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.jsx';
import ChoresList from './components/ChoresList.jsx';
import BookList from './components/BookList.jsx';

class App extends Component  {

render() {
  return (
    <div className="App">
      <MovieList />
      <ChoresList />
      <BookList />
    </div>
  );
}
}

export default App;
