import React, { useEffect } from 'react'
import Banner from './banner'
import slogo from '../../ingrediant/icons8-search.bf042472.bf042472.svg'
import logo from '../../ingrediant/Cooking-Recipe-PNG-Download-Image.00d37d13.png'
import { useState } from 'react'
import {
    Typography,
    IconButton
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Label from './card'

const Search = ({ parent }) => {
    const [ing, setIng] = useState('bread');
    const [active, setActive] = useState(1);
    const [list, setList] = useState([]);
    const tmp = async () => {
        let temp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`);
        temp = await temp.json();
        setList(temp.meals)
        console.log(list);
    }
    useEffect(() => {
        tmp();
    }, [ing])

    const next = () => {
        console.log('next');
        if (active === Math.ceil(list.length / 12)) return;
        setActive(active + 1);
    };

    const prev = () => {
        console.log('prev');
        if (active === 1) return;
        setActive(active - 1);
    };

    const Comp = () => {
        return <div className="space-y-3 sm:space-y-6 sm:py-10 px-7 h-[35rem] sm:text-white sm:bg-transparent">
            <div className='text-white'>
                <div className="sm:flex sm:justify-center">
                    <div className={"bg-cover sm:w-80 lg:h-64 h-48 mt-24 sm:mt-0"} style={{ backgroundImage: `url('${logo}')` }}></div>
                </div>
                <div className="text-center text-4xl md:text-6xl font-['Brush_Script_MT']">Search by ingrediant</div>
            </div>
            <div className="flex justify-center xl:space-x-2 space-x-1">
                <input type="text" className="rounded-full focus:outline-none text-black dark:text-white dark:bg-opacity-90 dark:bg-black text-lg px-5 w-60 h-12 my-1 pr-5 shadow-md sm:w-72"
                    placeholder="Enter an ingrediant" id="recipe" onKeyDown={(event) => {
                        if (event.key === 'Enter') setIng(event.target.value);
                    }} />
                <button
                    className="bg-orange-500 h-14 text-white w-14 flex justify-center py-3 rounded-full text-xl hover:bg-orange-600 hover:scale-110"
                    onClick={() => setIng(document.getElementById('recipe').value)}>
                    <img src={slogo} alt='Sorry' className="h-8" />
                </button>
            </div>
        </div>
    }

    const Body = () => {
        if (!list) return <div className='h-96 bg-center my-5' style={{ backgroundImage: `url('https://cdn.dribbble.com/users/1135689/screenshots/3957784/media/2957ab45daa7143409a927df0cb2e87a.png')` }}></div>
        let li = list;
        if (active * 12 > list.length) li = list.slice((active - 1) * 12, list.length)
        else li = list.slice((active - 1) * 12, active * 12)
        return (
            <>
                <div className='text-3xl bg-gray-200 dark:bg-black dark:text-white md:bg-gray-100 text-center pt-10'>Search Results for "{ing}"</div>
                <div className="h-fit bg-gray-200 dark:bg-black md:bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0  place-items-center py-10 md:gap-y-10">
                    {li.map((cur) => <Label title={cur.strMeal} type={'Product'} thumb={cur.strMealThumb} />)}
                </div>
                <div className="pb-[2%] flex bg-gray-200 dark:bg-black md:bg-gray-100 text-lg items-center place-content-center gap-8">
                    <IconButton
                        size="sm"
                        variant="outlined"
                        color="blue-gray"
                        className='border border-red-500 hover:outline-none hover:bg-red-500 hover:text-white [&>*]:static px-2'
                        onClick={prev}
                        disabled={active === 1}
                    >
                        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 dark:text-white" />
                    </IconButton>
                    <Typography color="gray" className="font-normal dark:text-white">
                        Page <strong className="text-blue-gray-900">{active}</strong> of{" "}
                        <strong className="text-blue-gray-900">{(list) ? Math.ceil(list.length / 12) : ''}</strong>
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="outlined"
                        color="blue-gray"
                        className='border border-red-500 hover:outline-none hover:bg-red-500 hover:text-white [&>*]:static px-2'
                        onClick={next}
                        disabled={active === 10}
                    >
                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4 dark:text-white" />
                    </IconButton>
                </div>
            </>
        )
    }

    return (
        <>
            <Banner Comp={Comp} />
            <Body />
        </>
    )
}

export default Search