import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './App.css';
import { HomePage } from './pages/Home';
import { EditPage } from './pages/Edit';

function App() {
  return (
    <div className="App">
      <h1 className='text-center'>Meme Generator</h1>
      <Routes>
        <Route path='/ReactJs-Memes_generator' element={<HomePage/>}/>
        <Route path='/edit' element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
