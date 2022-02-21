import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import UrlVegetales from '../components/UrlVegetales'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<UrlVegetales />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router