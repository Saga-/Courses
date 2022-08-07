import { createRoot } from 'react-dom/client';
import { StrictMode, useState, lazy, Suspense } from 'react';
import ThemeContext from './ThemeContext';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams.js'));

const App = () => {
  const theme = useState('green');
  return (
    <StrictMode>
      <Suspense fallback={<h2>loading ...</h2>}>
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <header>
              <Link to='/'>Adopt Me!</Link>
            </header>
            <Routes>
              <Route path='/details/:id' element={<Details />} />
              <Route path='/' element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
