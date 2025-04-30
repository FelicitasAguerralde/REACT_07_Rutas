import React from 'react';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { Index } from '../components/Index';
import { Contact } from '../components/Contact';
import { Articles } from '../components/Articles';

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Index" element={<Index />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Article" element={<Articles />} />

        </Routes>
    </BrowserRouter>
  )
}
