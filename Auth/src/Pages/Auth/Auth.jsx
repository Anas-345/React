import { Outlet } from "react-router";

export default function Auth() {
  return (
    <>
      <div className="flex items-center justify-center px-4 flex-1 my-10">
        <div className="bg-[#1E293B] flex flex-col gap-3 p-8 rounded-lg">
          <Outlet />
        </div>
      </div>
    </>
  );
}
