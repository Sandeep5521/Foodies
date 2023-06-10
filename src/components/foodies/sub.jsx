import { useQuery } from '@tanstack/react-query';
import { Spinner } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";

const Sub = ({ parent, title }) => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            let temp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`);
            temp = await temp.json();
            return temp
        }
    })

    if (isLoading) return <div className='h-96 flex items-center justify-center'><Spinner color='red' className="h-20 w-20" /></div>

    if (error) return 'An error has occurred: ' + error.message

    const Comp = () => {
        if (!data.meals) return <></>
        return data.meals.map((cur) => {
            return <Card key={cur.idMeal} className="mt-6 h-80 w-[90%] p-4 hover:scale-105 cursor-pointer" onClick={() => parent({
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
        <div className="h-fit bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0  place-items-center py-10 md:gap-y-10">
            <Comp />
        </div>
    )
}

export default Sub