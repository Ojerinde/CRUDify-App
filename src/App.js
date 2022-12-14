import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreatePage from "./Components/CreatePage/CreatePage";
import DeletePage from "./Components/DeletePage/DeletePage";
import UpdatePage from "./Components/Update/UpdatePage";
import AppContextProvider from "./Store/AppContextProvider";
import Form from "./Components/SignIn/Form";
import Header from "./Components/UI/Header/Header";

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  const signingData = (data) => {
    setSignedIn(data);
  };
  return (
    <>
      {signedIn ? (
        <AppContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<CreatePage />}></Route>
            <Route path="/update" element={<UpdatePage />}></Route>
            <Route path="/delete" element={<DeletePage />}></Route>
          </Routes>
        </AppContextProvider>
      ) : (
        <Form onSign={signingData} />
      )}
    </>
  );
};
export default App;
