import { Outlet } from "react-router";

export default function Auth() {
  return (
    <div className="relative z-10 flex-1 flex items-center justify-center min-h-[calc(100vh-140px)] px-4 py-12">
      <Outlet />
    </div>
  );
}