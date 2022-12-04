import React from 'react';
import { RecoilRoot } from 'recoil';
import { HashRouter, Routes, Route } from "react-router-dom";

import './app.v1.css';

import BlogList from '../view/blog';

export default function App() {
    return (
        <RecoilRoot>
            <React.Suspense fallback="loading...">
                <HashRouter>
                    <Routes>
                        <Route path="/" element="Home" />
                        <Route path="/blog" element={<BlogList />} />
                        <Route path="*" element="404" />
                    </Routes>
                </HashRouter>
            </React.Suspense>
        </RecoilRoot>
    );
}