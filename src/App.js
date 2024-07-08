import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage, ContactPage, NotFound } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <>
      <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      <Footer />
    </>
  );
}

export default App;
