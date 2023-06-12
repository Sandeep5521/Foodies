import { useQuery } from '@tanstack/react-query';
import { Spinner } from "@material-tailwind/react";
import { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    IconButton
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


const Sub = ({ parent, title }) => {
    const [active, setActive] = useState(1);
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            let temp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`);
            temp = await temp.json();
            return temp
        }
    })

    if (isLoading) return <div className='h-96 flex items-center justify-center'><Spinner color='red' className="h-20 w-20" /></div>
    if (error) return <></>

    const next = () => {
        console.log('next');
        if (active === Math.ceil(data.meals.length / 12)) return;
        setActive(active + 1);
    };

    const prev = () => {
        console.log('prev');
        if (active === 1) return;
        setActive(active - 1);
    };

    const Comp = () => {
        if (!data.meals) return <></>
        let list = data.meals;
        console.log(data);
        if (active * 12 > data.length) list = list.slice((active - 1) * 12, data.length)
        else list = list.slice((active - 1) * 12, active * 12)
        return list.map((cur) => {
            return <Card key={cur.idMeal} className="mt-6 h-fit w-[90%] p-4 hover:scale-105 cursor-pointer" onClick={() => parent({
                type: 'Product',
                title: cur.strMeal
            })}>
                <CardHeader color="blue-gray" className="relative h-52 -my-10">
                    <img className="rounded-xl shadow-xl" src={cur.strMealThumb} alt="img-blur-shadow" layout="fill" />
                </CardHeader>
                <CardBody className="pt-[8.5rem] sm:pt-20 lg:pt-[7.5rem] text-center">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {cur.strMeal}
                    </Typography>
                </CardBody>
            </Card >
            // return <div key={cur.idMeal} className="w-fit bg-white rounded shadow-xl hover:scale-110 h-fit flex justify-center">
            //     <div className="space-y-2 cursor-pointer" onClick={() => parent({
            //         type: 'Product',
            //         title: cur.strMeal
            //     })}>
            //         <div className="w-60"><img src={cur.strMealThumb} alt="" /></div>
            //         <div className="w-60 text-2xl text-center py-4">{cur.strMeal}</div>
            //     </div>
            // </div>
        })
    }

    return (
        <>
            <div className="h-fit bg-gray-200 md:bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0  place-items-center py-10 md:gap-y-10">
                <Comp />
            </div>
            <div className="flex bg-gray-200 md:bg-gray-100 text-lg items-center place-content-center gap-8">
                <IconButton
                    size="sm"
                    variant="outlined"
                    color="blue-gray"
                    className='border border-red-500 hover:outline-none hover:bg-red-500 hover:text-white [&>*]:static px-2'
                    onClick={prev}
                    disabled={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
                <Typography color="gray" className="font-normal">
                    Page <strong className="text-blue-gray-900">{active}</strong> of{" "}
                    <strong className="text-blue-gray-900">{(data.meals) ? Math.ceil(data.meals.length / 12) : ''}</strong>
                </Typography>
                <IconButton
                    size="sm"
                    variant="outlined"
                    color="blue-gray"
                    className='border border-red-500 hover:outline-none hover:bg-red-500 hover:text-white [&>*]:static px-2'
                    onClick={next}
                    disabled={active === 10}
                >
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
            </div>
        </>
    )
}

export default Sub