import React, { useEffect } from 'react'
import Banner from './banner'
import slogo from '../../ingrediant/icons8-search.bf042472.bf042472.svg'
import logo from '../../ingrediant/Cooking-Recipe-PNG-Download-Image.00d37d13.png'
import { useState } from 'react'

const Search = ({ parent }) => {
    const [ing, setIng] = useState('bread');
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
    const Comp = () => {
        return <div className="space-y-3 sm:space-y-6 sm:py-10 px-7 h-[35rem] sm:text-white sm:bg-transparent">
            <div className='text-white'>
                <div className="sm:flex sm:justify-center">
                    <div className={"bg-cover sm:w-80 lg:h-64 h-48 mt-24 sm:mt-0"} style={{ backgroundImage: `url('${logo}')` }}></div>
                </div>
                <div className="text-center text-4xl md:text-6xl font-['Brush_Script_MT']">Search by ingrediant</div>
            </div>
            <div className="flex justify-center xl:space-x-2 space-x-1">
                <input type="text" className="rounded-full focus:outline-none text-black text-lg px-5 w-60 h-12 my-1 pr-5 shadow-md sm:w-72"
                    placeholder="Enter an ingrediant" id="recipe" onKeyDown={(event) => {
                        if (event.key == 'Enter') setIng(event.target.value);
                    }} />
                <button
                    className="bg-orange-500 h-14 text-white w-14 flex justify-center py-3 rounded-full text-xl hover:bg-orange-600 hover:scale-110"
                    onClick={() => setIng(document.getElementById('recipe').value)}>
                    <img src={slogo} className="h-8" />
                </button>
            </div>
        </div>
    }

    const Body = () => {
        if (!list) return <div className='text-3xl bg-gray-100 text-center py-10'>No search Results for "{ing}"</div>
        return (
            <>
                <div className='text-3xl bg-gray-100 text-center pt-10'>Search Results for "{ing}"</div>
                <div className="h-fit bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0  place-items-center py-10 md:gap-y-10">
                    {list.map((cur) => {
                        return <div key={cur.idMeal} className="w-fit bg-white rounded shadow-xl hover:scale-110 h-fit flex justify-center">
                            <div className="space-y-2 cursor-pointer" onClick={() => parent({
                                type: 'Product',
                                title: cur.strMeal
                            })}>
                                <div className="w-60"><img src={cur.strMealThumb} alt="" /></div>
                                <div className="w-60 text-2xl text-center py-4">{cur.strMeal}</div>
                            </div>
                        </div>
                    })}
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