import { useQuery } from '@tanstack/react-query';
import { Spinner } from "@material-tailwind/react";

const Recipe = ({ meal }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            let temp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
            temp = await temp.json();
            temp = temp.meals[0]
            const url = temp.strYoutube; console.log(url, typeof url);
            const id = (url) ? url.split("?v=")[1] : ''; console.log(id);
            const v = "https://www.youtube.com/embed/" + id;
            return {
                ...temp,
                strYoutube: v
            }
        }
    })

    if (isLoading) return <div className='h-96 flex items-center justify-center'><Spinner color='red' className="h-20 w-20" /></div>

    if (error) return 'An error has occurred: ' + error.message
    console.log(data);
    const Ing = () => {
        let li = [];
        let c = Object.entries(data);
        let ch = 1, f = 0;
        for (let i = 9; i < c.length - 24; i++) {
            if (!c[i][1] || c[i][1] == "") {
                f = i;
                break;
            }
            if (ch) {
                li.push(c[i][1]);
                ch--;
            }
            else {
                li.push(c[i][1]);
                ch++;
            }
            f++;
        }
        f = 0;
        return li.map((cur) => {
            if (f === 0) {
                ch = 'bg-gray-200';
                f++;
            }
            else {
                ch = 'bg-gray-100'
                f--;
            }
            return <div className={`h-10 ${ch} text-lg py-1 font-medium text-center text-gray-800`}>{cur}</div>
        })
    }
    return (
        <section className="flex justify-center bg-gray-100 py-1">
            <div className="h-fit space-y-6 -my-10 sm:space-y-8 px-5 sm:px-12 bg-white w-[22rem] sm:w-[50rem] rounded-lg shadow-xl py-6 sm:py-8">
                {/* <div id="rname" className="text-center text-3xl h-fit font-semibold sm:text-5xl">{data.strMeal}</div> */}
                {/* <div className="font-['Freestyle_Script'] text-2xl text-center sm:text-3xl">" Good food is the foundation of genuine happiness"</div> */}
                <div className="flex justify-center">
                    <img src={data.strMealThumb} alt="" id="bg" className="rounded" />
                </div>
                <div className="space-y-3">
                    <div className="text-2xl font-semibold sm:text-3xl text-center">Instructions</div>
                    <div>{data.strInstructions}</div>
                </div>
                <div className="space-y-6">
                    <div className="text-xl font-semibold sm:text-3xl text-center">Ingrediants </div>
                    <div id="m" className="sm:px-20">
                        <Ing />
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="text-2xl font-semibold sm:text-3xl text-center">Tutorial</div>
                    <div className="flex justify-center">
                        <iframe width="560" height="315" src={data.strYoutube} allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recipe