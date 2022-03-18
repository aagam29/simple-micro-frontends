import React from "react";
import ReactDOM from "react-dom";
import DoctorProfile from './components/DoctorProfile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.scss";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/doctor/:id" element={<DoctorProfile />}>
      </Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
