import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoursesForm from './components/CoursesForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hola</h1>} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CoursesForm />} />
        <Route path="/edit/:id" element={<CoursesForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
