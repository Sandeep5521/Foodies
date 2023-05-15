import { useEffect, useState } from 'react'

const Category = ({ parent }) => {
    const [link, setLink] = useState({
        key: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        title: 'Categories',
    })
    const [list, setList] = useState([])
    async function tmp() {
        let temp = await fetch(link.key);
        temp = await temp.json();
        setList(temp.categories)
        console.log(list);
    }

    useEffect(() => {
        tmp();
    }, [link])

    const Comp = () => {
        return list.map((cur) => {
            return <div key={cur.idCategory} className="w-fit hover:scale-110 h-fit flex justify-center">
                <div className="space-y-2 cursor-pointer" onClick={() => parent({
                    type: 'Sub',
                    title: cur.strCategory
                })}>
                    <div className="w-60"><img src={cur.strCategoryThumb} alt="" className='rounded-full' /></div>
                    <div className="w-60 text-2xl text-center py-4">{cur.strCategory}</div>
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

export default Category