import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "..";
import MainLayout from "../../layout/main-layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
