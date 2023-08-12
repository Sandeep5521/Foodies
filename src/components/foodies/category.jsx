import { useQuery } from '@tanstack/react-query';
import { Spinner } from "@material-tailwind/react";
import Label from './card.jsx';

const Category = ({ parent }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            let temp = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            temp = await temp.json();
            return temp;
        }
    })

    if (isLoading) return (<div className='h-96 flex items-center justify-center'><Spinner color='red' className="h-20 w-20" /></div>);

    if (error) return 'An error has occurred: ' + error.message
    console.log(data);
    const Comp = () => {
        if (!data.categories) return <></>
        return data.categories.map((cur) => {
            return <Label type={'Sub'} title={cur.strCategory} thumb={cur.strCategoryThumb} />
            // return <div key={cur.idCategory} className="w-fit bg-white hover:scale-110 h-fit flex justify-center">
            //     <div className="space-y-2 cursor-pointer" onClick={() => parent({
            //         type: 'Sub',
            //         title: cur.strCategory
            //     })}>
            //         <div className="w-60"><img src={cur.strCategoryThumb} alt="" className='rounded-full' /></div>
            //         <div className="w-60 text-2xl text-center py-4">{cur.strCategory}</div>
            //     </div>
            // </div>
        })
    }

    return (
        <div className="h-fit bg-gray-200 md:bg-gray-100 dark:bg-black grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0  place-items-center py-10 md:gap-y-10">
            <Comp />
        </div>
    )
}

export default Category