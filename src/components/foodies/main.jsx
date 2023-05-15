import { useState } from "react";
import Drawer from './drawer.jsx'
import Category from "./category.jsx";
import Footer from "./footer.jsx";
import Search from "./search.jsx";
import Banner from "./banner.jsx";
import Sub from "./sub.jsx";
import Recipe from "./recipe.jsx";
import Home from "./home.jsx";
import { NavLink } from "react-router-dom";

const Main = ({ Type }) => {
    const [page, setPage] = useState({
        type: Type,
        title: Type
    })
    // const clear = () => {
    //     const li = document.getElementById('links').childNodes;
    //     for (let i = 0; i < li.length; i++) {
    //         li[i].classList.remove('bg-red-500');
    //         li[i].classList.remove('font-semibold');
    //     }
    // }
    const view = (str) => {
        // clear();
        // event.target.classList.add('bg-red-500');
        // event.target.classList.add('font-semibold');
        setPage((val) => {
            return {
                ...val,
                type: str,
                title: str
            }
        })
    }

    const func = (obj) => {
        setPage(obj);
    }

    const Bg = () => {
        if (page.type === 'Home') return (
            <div className="text-white bg-opacity-20 bg-black h-96 sm:h-[30rem] flex items-center justify-center">
                <div className="sm:space-y-10">
                    <div className="hidden sm:block text-7xl sm:text-8xl text-center">Foodies</div>
                    <div className="text-3xl text-center">Good food is the foundation of genuine happiness</div>
                </div>
            </div>
        )
        return <div className="text-white bg-opacity-20 bg-black h-96 sm:h-[30rem] flex items-center justify-center">
            <div className='sm:text-7xl text-4xl text-center'>{page.title}</div>
        </div>
    }

    const Set = () => {
        if (page.type === 'Categories')
            return <Category parent={func} />
        if (page.type === 'Search')
            return <Search parent={func} />
        if (page.type === 'Sub') return <Sub parent={func} title={page.title} />
        if (page.type === 'Product') return <Recipe meal={page.title} />
        return <Home parent={func} />
    }

    const Body = () => {
        if (page.type !== 'Search') return <Banner Comp={Bg} />
        return <></>
    }
    document.title = page.title;
    return (
        <>
            <div className="z-10 h-12 md:h-fit bg-black text-white fixed backdrop-blur w-screen bg-opacity-50">
                <Drawer />
                <nav className="flex justify-center">
                    <div className="flex justify-between items-center">
                        <div className="text-4xl flex items-center px-5">
                            <div className="font-semibold" onClick={(event) => view('Home')}><NavLink to={'/'}>Foodies</NavLink></div>
                        </div>
                        <div id="links" className="hidden h-20 md:flex space-x-5 items-center">
                            <div className="flex items-center text-lg cursor-pointer" onClick={(event) => view('Home')}><NavLink to={'/'} className={({ isActive }) =>
                                isActive ? "font-semibold bg-red-500 px-2 py-1" : ""
                            }>Home</NavLink></div>
                            <div className="flex items-center text-lg rounded-md cursor-pointer" onClick={(event) => view('Categories')}><NavLink to={'/category'} className={({ isActive }) =>
                                isActive ? "font-semibold bg-red-500 px-2 py-1" : ""
                            }>Categories</NavLink></div>
                            <div className="flex items-center rounded-md text-lg cursor-pointer" onClick={(event) => view('Search')}><NavLink to={'/search'} className={({ isActive }) =>
                                isActive ? "font-semibold bg-red-500 px-2 py-1" : ""
                            }>Search</NavLink></div>
                            {/* <div className="bg-red-500 text-lg rounded-full px-3 flex items-center hover:bg-red-600 font-semibold h-fit"><a href="/" className="py-1">Sign in</a></div> */}
                        </div>
                    </div>
                </nav>
            </div>
            <Body />
            <Set />
            <Footer />
        </>
    )
};

export default Main;
