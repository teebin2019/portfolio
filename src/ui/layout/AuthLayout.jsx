import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 ">
        <Outlet />
      </div>
    </div>
  );
}
