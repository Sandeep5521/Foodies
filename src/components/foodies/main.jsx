import { useState } from "react";
import Example from "./nav.js";
import Category from "./category.jsx";
import Footer from "./footer.jsx";
import Search from "./search.jsx";
import Banner from "./banner.jsx";
import Sub from "./sub.jsx";
import Recipe from "./recipe.jsx";
import Home from "./home.jsx";
import Login from "./login.jsx";

const Main = ({ Type }) => {
    const [page, setPage] = useState({
        type: Type,
        title: Type
    })

    const view = (str) => {
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
            <div className="text-white bg-opacity-20 w-screen bg-black h-60 sm:h-[30rem] flex items-center justify-center">
                <div className="sm:space-y-10">
                    <div className="hidden sm:block text-7xl sm:text-8xl text-center">Foodies</div>
                    <div className="text-3xl text-center">Good food is the foundation of genuine happiness</div>
                </div>
            </div>
        )
        return <div className="text-white bg-opacity-20 w-screen bg-black h-60 sm:h-[30rem] flex items-center justify-center">
            <div className='sm:text-7xl text-4xl text-white text-center'>{page.title}</div>
        </div>
    }

    const Set = () => {
        if (page.type === 'Categories')
            return <Category parent={func} />
        if (page.type === 'Search')
            return <Search parent={func} />
        if (page.type === 'Sub') return <Sub parent={func} title={page.title} />
        if (page.type === 'Product') return <Recipe meal={page.title} />
        if (page.title === 'Login') return <Login />
        return <Home parent={func} />
    }

    const Body = () => {
        if (page.type !== 'Search' && page.type !== 'Login') return <Banner Comp={Bg} />
        return <></>
    }
    document.title = page.title;
    return (
        <>
            <Example parent={view} />
            <Body />
            <Set />
            <Footer parent={view} />
        </>
    )
};

export default Main;
