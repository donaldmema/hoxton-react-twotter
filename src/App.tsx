import { useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { LeftNavbarSection } from "./components/LeftNavbarSection";
import { RightNavbarSection } from "./components/RightNavbarSection";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <LeftNavbarSection />

        <main className="main">
          <Routes>
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/:username" element={<ProfilePage />} />
            <Route path="/:username/status/:tweetId" element={<TweetPage />} />
            <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </main>
        <RightNavbarSection />
      </div>
    </div>
  );
}

export default App;
