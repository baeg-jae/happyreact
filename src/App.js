import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import Header from 'components/Header';

const Home = loadable(() => import('pages/Home'));
const PhoneNumber = loadable(() => import('pages/PhoneNumber'));
const MediaQuery = loadable(() => import('pages/MediaQuery'));
const CssPra1 = loadable(() => import('pages/CssPra1'));
const CssPra2 = loadable(() => import('pages/CssPra2'));
const AddUser = loadable(() => import('pages/AddUser'));
const Animation = loadable(() => import('pages/Animation'));

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/phoneNumber" element={<PhoneNumber />} />
                <Route path="/mediaQuery" element={<MediaQuery />} />
                <Route path="/csspra1" element={<CssPra1 />} />
                <Route path="/csspra2" element={<CssPra2 />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/animation" element={<Animation />} />
            </Routes>
        </>
    );
}

export default App;
