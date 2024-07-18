import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './PrivacyPolicy';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
