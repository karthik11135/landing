import { NavButtons, NavWrapper } from "@/components/nav/navtools";
import { NavContextProvider } from "@/components/nav/navtools";
import MenuNavigations from "./MenuNavigations";

const Navbar = () => {
  return (
    <NavContextProvider>
      <NavWrapper>
        <MenuNavigations />
        <div className="ms-auto col-span-4 md:col-span-2  w-full font-bold flex items-center">
          <NavButtons />
        </div>
      </NavWrapper>
    </NavContextProvider>
  );
};

export default Navbar;
