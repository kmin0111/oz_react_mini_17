import './App.css'
import movieData from "../movieListData.json";
import { Card } from './components/MovieCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Detail } from './pages/MovieDetail'
import LayOut from './components/LayOut';

function App() {
  return (
    <BrowserRouter>
      <LayOut/>
      <Routes>
        <Route path={'/'} element={
          <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: `black`, gap: `40px` }}>
            {movieData.results.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        } />
        <Route path={'/detail/:id'} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
