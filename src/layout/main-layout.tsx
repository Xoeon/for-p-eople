import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-[400px] mx-auto flex flex-col justify-between h-screen">
      <div className="p-[50px]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
