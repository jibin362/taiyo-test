import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="lg:pl-[19.5rem]">
        <div className="px-8 min-h-screen ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
