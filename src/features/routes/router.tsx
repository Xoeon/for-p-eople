import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../layout/main-layout";
import Calendar from "../calendar";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
