import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import Header from 'components/Header';

const Home = loadable(() => import('pages/Home'));
const PhoneNumber = loadable(() => import('pages/PhoneNumber'));
const MediaQuery = loadable(() => import('pages/MediaQuery'));
const CssPra1 = loadable(() => import('pages/CssPra1'));

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/phoneNumber" element={<PhoneNumber />} />
                <Route path="/mediaQuery" element={<MediaQuery />} />
                <Route path="/csspra1" element={<CssPra1 />} />
            </Routes>
        </>
    );
}

export default App;
