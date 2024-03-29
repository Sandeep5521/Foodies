import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function Example({ parent }) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:text-red-400"
      >
        <NavLink to={'/'} className={({ isActive }) =>
          isActive ? "flex items-center text-red-500" : "flex items-center"
        } onClick={() => {
          if (openNav) setOpenNav(!openNav)
          parent({
            type: 'Home',
            title: 'Foodies'
          })
        }}>Home</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:text-red-400"
      >
        <NavLink to={'/category'} className={({ isActive }) =>
          isActive ? "flex items-center text-red-500" : "flex items-center"
        } onClick={() => {
          if (openNav) setOpenNav(!openNav)
          parent({
            type: 'Categories',
            title: 'Categories'
          })
        }}>Categories</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:text-red-400"
      >
        <NavLink to={'/search'} className={({ isActive }) =>
          isActive ? "flex items-center text-red-500" : "flex items-center"
        } onClick={() => {
          if (openNav) setOpenNav(!openNav)
          parent({
            type: 'Search',
            title: 'Search'
          })
        }}>Search</NavLink>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography> */}
    </ul>
  );

  return (
    <>
      <Navbar className={`fixed backdrop-blur-2xl bg-white dark:bg-opacity-30 dark:border-none dark:bg-black bg-opacity-70 dark:text-white text-black inset-0 z-10 ${(openNav) ? 'h-[16rem]' : 'h-max'} max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4`}>
        <div className="flex items-center mt-[0.6rem] md:mt-0 justify-between text-blue-gray-900">
          <Typography
            className="mr-4 cursor-pointer py-1.5 font-semibold text-2xl md:text-3xl text-red-500" onClick={() => parent({
              type: 'Home',
              title: "Foodies"
            })}
          >
            <NavLink to={'/'}><div className="flex place-content-center space-x-1"><img src="icons8-cookie-96.png" alt="" className="h-6 my-1 md:h-8" /><span>Foodies</span></div></NavLink>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden bg-red-400 lg:inline-block"
              onClick={() => {
                if (openNav) setOpenNav(!openNav)
                parent({
                  type: 'Login',
                  title: 'Login'
                })
              }}
            >
              <span><NavLink to={'/login'}>Sign in</NavLink></span>
            </Button>
            <IconButton
              variant="text"
              className="h-6 w-6 text-inherit static hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden [&>*]:static"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className={`${(openNav) ? 'block' : 'hidden'}`}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2 bg-red-400" onClick={() => {
            if (openNav) setOpenNav(!openNav)
            parent({
              type: 'Login',
              title: 'Login'
            });
          }}>
            <span><NavLink to={'/login'}>Sign in</NavLink></span>
          </Button>
        </MobileNav>
      </Navbar>
      <div className="h-16 bg-white dark:bg-black"></div>
    </>
  );
}