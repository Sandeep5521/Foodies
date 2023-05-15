import { useEffect, useState } from 'react'

const Sub = ({ parent, title }) => {
    const [link, setLink] = useState({
        key: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`,
        title: 'Categories',
    })
    const [list, setList] = useState([])
    async function tmp() {
        let temp = await fetch(link.key);
        temp = await temp.json();
        setList(temp.meals)
        console.log(list);
    }

    useEffect(() => {
        tmp();
    }, [link])

    const Comp = () => {
        return list.map((cur) => {
            return <div key={cur.idMeal} className="w-fit bg-white rounded shadow-xl hover:scale-110 h-fit flex justify-center">
                <div className="space-y-2 cursor-pointer" onClick={() => parent({
                    type: 'Product',
                    title: cur.strMeal
                })}>
                    <div className="w-60"><img src={cur.strMealThumb} alt="" /></div>
                    <div className="w-60 text-2xl text-center py-4">{cur.strMeal}</div>
                </div>
            </div>
        })
    }

    return (
        <div className="h-fit bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0  place-items-center py-10 md:gap-y-10">
            <Comp />
        </div>
    )
}

export default Sub