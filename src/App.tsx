import { useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { BiHomeCircle } from "react-icons/bi";
import { Header } from "./components/Header";
import { LeftNavbarSection } from "./components/LeftNavbarSection";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <LeftNavbarSection />

        <main className="main">
          {/* <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/:username/status/:tweetId" element={<TweetPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes> */}
          <section className="home-page"></section>
        </main>
        <aside>
          <div></div>
          <div></div>
          <footer></footer>
        </aside>
      </div>
    </div>
  );
}

export default App;
