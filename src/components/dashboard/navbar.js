import React, { useState } from "react";
import "./home.css"
const Navbar = () => {
  const [displayHowWorks, setDisplayHowWorks] = useState(false);
  const [displayServices, setDisplayServices] = useState(false);
  const [displayNeedHelp, setDisplayNeedHelp] = useState(false);
  const [displayUseCase, setDisplayUseCase] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const dropDownStyle =
    "absolute w-48 mt-4 shadow-md p-4 space-y-3 z-10 bg-white";

  return (
    <div className=" flex justify-center w-full text-neutral-600 relative">
      <nav className="w-11/12 py-4 flex justify-evenly md:h-16 fixed align-center relative z-1  text-black rounded ">
        <div className={openMenu ? "hidden " : "md:hidden block flex"}>
          <button onClick={() => setOpenMenu(true)}>
            <img
              src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
              alt="logo"
              className="w-32 pb-2 overflow-x-hidden pr-4 fill-blue-800 "
              title="logo"
            />
            <img
              src="menu.png"
              alt="https://icons8.com/icon/16247/menu"
              className="w-8 h-8"
            />
          </button>
        </div>

        <div
          className={
            openMenu
              ? "menuOpen md:flex flex-col w-44 "
              : "md:flex space-x-4 md:block hidden "
          }
        >
          {openMenu ? (
            <div onClick={() => setOpenMenu(false)} className="aboslute ">
              <button>
                <p>X</p>
              </button>
            </div>
          ) : null}
          <div className="md:w-44 hidden md:block">
            <img
              src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
              alt="logo"
              className="w-32"
              title="logo"
            />
          </div>
          <div className="pt-2 ">Catalog</div>

          <div className="relative pt-2">
            <div
              onMouseEnter={() => setDisplayHowWorks(true)}
              onMouseLeave={() => setDisplayHowWorks(false)}
              onClick={() => setDisplayHowWorks(!displayHowWorks)}
              className="flex"
            >
              How it Works
              <img
                src="downarrow.png"
                alt="https://icons8.com"
                className="w-4 h-4 pt-1 pl-1"
              />
            </div>
            {displayHowWorks ? (
              <div className={dropDownStyle}>
                <p>How Printify works</p>
                <p>Print On Demand</p>
                <p>Printify Quality Promise</p>
                <p>What To Sell?</p>
              </div>
            ) : null}
          </div>

          <div className="pt-2">Pricing</div>

          <div className="pt-2">Blog</div>

          <div className="relative pt-2">
            <div
              onMouseEnter={() => setDisplayServices(true)}
              onMouseLeave={() => setDisplayServices(false)}
              onClick={() => setDisplayHowWorks(!displayServices)}
              className="flex"
            >
              Services
              <img
                src="downarrow.png"
                alt="https://icons8.com"
                className="w-4 h-4 pt-1 pl-1"
              />
            </div>
            {displayServices ? (
              <div className={dropDownStyle}>
                <p>Printify Studio</p>
                <p>Printify Express Delivery</p>
                <p>Transfer Products</p>
                <p>Order In Bulk</p>
                <p>Experts Program</p>
              </div>
            ) : null}
          </div>

          <div className="relative pt-2">
            <div
              onMouseEnter={() => setDisplayUseCase(true)}
              onMouseLeave={() => setDisplayUseCase(false)}
              onClick={() => setDisplayHowWorks(!displayUseCase)}
              className="flex"
            >
              Use Cases
              <img
                src="downarrow.png"
                alt="https://icons8.com"
                className="w-4 h-4 pt-1 pl-1"
              />
            </div>
            {displayUseCase ? (
              <div className={dropDownStyle}>
                <p>Merch for Fans</p>
                <p>Merch for eCommerce</p>
                <p>Merch for Enterprise</p>
                <p>Grow Your Store</p>
              </div>
            ) : null}
          </div>

          <div className="relative pt-2">
            <div
              onMouseEnter={() => setDisplayNeedHelp(true)}
              onMouseLeave={() => setDisplayNeedHelp(false)}
              onClick={() => setDisplayHowWorks(!displayNeedHelp)}
              className="flex"
            >
              Need Help?
              <img
                src="downarrow.png"
                alt="https://icons8.com"
                className="w-4 h-4 pt-1 pl-1"
              />
            </div>
            {displayNeedHelp ? (
              <div className={dropDownStyle}>
                <p>Help Center</p>
                <p>Contacts</p>
                <p>My Requests</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex space-x-4 md:mt-0 mt-6">
          <div>
            <button
              className="border border-black p-1 rounded w-24 h-10 hover:bg-blue-600"
              title="login to proceed"
            >
              Log In
            </button>
          </div>
          <div>
            <button
              className="border p-1 rounded bg-blue-600 text-white w-24 h-10 hover:bg-white hover:text-black"
              title="signup to login"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
