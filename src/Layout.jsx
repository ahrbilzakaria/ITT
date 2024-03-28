import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Notfound } from "./pages/Notfound";
import { About } from "./pages/About";
import { Topbar } from "./components/Topbar";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import styles from "./Layout.module.css";
import { Services } from "./pages/Services";
export const Layout = () => {
  return (
    <div>
      <div className={styles.bar}>
        <Topbar />
        <Navigation />
      </div>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};
