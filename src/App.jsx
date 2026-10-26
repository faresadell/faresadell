import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/Background";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Portofolio = lazy(() => import("./Pages/Portofolio"));
const ContactPage = lazy(() => import("./Pages/Contact"));
const Experience = lazy(() => import("./Pages/Experience"));
const ProjectDetails = lazy(() => import("./components/ProjectDetail"));
const WelcomeScreen = lazy(() => import("./Pages/WelcomeScreen"));
const NotFoundPage = lazy(() => import("./Pages/404"));

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <Suspense fallback={null}>
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          </Suspense>
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
      
          <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
            <Home />
            <About />
            <Portofolio />
            <Experience />
            <ContactPage />
          </Suspense>
          <Footer />
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <Suspense fallback={<div className="min-h-screen" />}>
      <ProjectDetails />
    </Suspense>
    <Footer />
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    
    <ThemeProvider>
    <HelmetProvider>
      <div className="pointer-events-none">
  <AnimatedBackground />
</div>
      <BrowserRouter>
        <Routes>
          {/* PUBLIC */}
          <Route
            path="/"
            element={
              <LandingPage
                showWelcome={showWelcome}
                setShowWelcome={setShowWelcome}
              />
            }
          />

          <Route path="/project/:slug" element={<ProjectPageLayout />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />

          {/* ADMIN (PROTECTED) */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <Suspense fallback={null}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;