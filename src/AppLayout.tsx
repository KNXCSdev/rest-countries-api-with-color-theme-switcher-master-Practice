import { Outlet } from "react-router";
import Navigation from "./ui/Navigation";

export default function AppLayout() {
  return (
    <div className="flex flex-col gap-20">
      <Navigation />

      <main className="overflow-auto bg-gray-50 pb-[6.4rem]">
        <div className="mx-auto flex w-full max-w-[120rem] flex-col">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
