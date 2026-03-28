import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import Main from './assets/components/Main';
import Footer from './assets/components/Footer';
import About from './assets/components/About';
import Places from './assets/components/Places';
import Services from './assets/components/Services';
import Questions from './assets/components/Questions';
import Reservation from './assets/components/Reservation';

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/places" element={<Places />} />
                <Route path="/services" element={<Services />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/reservation" element={<Reservation />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default App;