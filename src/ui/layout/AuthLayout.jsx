import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <Outlet />
    </div>
  );
}
