import { NavButtons, NavWrapper } from "@/components/nav/navtools";
import { NavContextProvider } from "@/components/nav/navtools";

const Navbar = () => {
  return (
    // <div className="text-slate-100 fixed">
      <NavContextProvider>
        <NavWrapper>
          <div className="items-center text-start font-bold flex">Startup</div>
          <div className="  text-slate-300  text-center ">
            <div className="flex w-fit mx-auto">
              <p className="mx-2 px-2 transition hover:-translate-y-0.5 cursor-pointer rounded-full py-1.5 font-medium ">
                Features
              </p>
              <p className="mx-2 px-2 transition hover:-translate-y-0.5 cursor-pointer rounded-full py-1.5 font-medium ">
                Pricing
              </p>
              <p className="mx-2 px-2 transition hover:-translate-y-0.5 cursor-pointer rounded-full py-1.5 font-medium ">
                Contact
              </p>
            </div>
          </div>
          <div className="  w-full font-bold flex items-center">
            <NavButtons />
          </div>
        </NavWrapper>
      </NavContextProvider>
    // </div>
  );
};

export default Navbar;
