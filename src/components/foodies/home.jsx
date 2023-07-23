import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
const Home = ({ parent }) => {
    useEffect(() => {
        let add = document.getElementById('add')
        let img = document.getElementById('img')
        let rand = document.getElementById('rand')
        let f = fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        f.then((res) => {
            if (!res.ok) return Promise.reject('bug');
            return res.json();
        }).then((res) => {
            let li = res.meals;
            add.innerText = li[0].strMeal;
            img.src = li[0].strMealThumb;
            rand.addEventListener('click', () => parent({
                type: 'Product',
                title: li[0].strMeal
            }))
            console.log(res);
        }, (err) => {
            console.log(err);
        })
    }, [])
    const li = ['https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80', 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1371&q=80', 'https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80']
    setInterval(() => {
        let b = Math.floor(Math.random() * li.length);
        if (document.getElementById('bg')) document.getElementById('bg').style.backgroundImage = `url('${li[b]}')`
    }, 4000);

    return (
        <div className='bg-gray-200 md:bg-gray-100 dark:bg-black'>
            <section className="w-full flex justify-center">
                <span className="hover:scale-105 cursor-pointer" id="link">
                    <div
                        className="w-80 md:w-[30rem] h-fit bg-white shadow-xl -my-10 sm:-my-14 space-y-3 rounded-xl md:flex md:px-5 md:space-x-3" id='rand'>
                        <div className="px-5 py-5 sm:px-0 sm:py-0 flex items-center"><img src="" alt="" id="img"
                            className="rounded-full border-4 border-black" /></div>
                        <div className="space-y-2 py-2">
                            <div id="add" className="text-2xl md:text-xl font-semibold text-center"></div>
                            <div className="px-3 text-center md:text-justify pb-4">Try this rich and creamy whole-wheat food dish filled
                                layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and
                                topped with imported, premium quality mozzarella.</div>
                        </div>
                    </div>
                </span>
            </section>
            <section className="h-fit w-full mt-28 space-y-10">
                <div id='bg' className={"h-60 sm:h-96 bg-cover"}></div >
                <div className="space-y-[30rem] sm:-space-y-4" id="hid">
                    <div className="space-y-10 sm:-space-y-3">
                        <div className="text-4xl sm:text-5xl text-center dark:text-white">Everyday Specials</div>
                        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-5 h-96 sm:justify-center items-center">
                            <div className=" bg-white w-72 rounded-xl shadow-xl h-fit hover:scale-105" onClick={() => parent({
                                type: 'Product',
                                title: 'Matar Paneer'
                            })}>
                                <a href="#">
                                    <div className="h-fit"><img src="https://img.freepik.com/premium-photo/aloo-matar-paneer-recipe-from-india-made-using-potato-green-peas-with-cottage-cheese-cooked-spicy-curry-selective-focys_466689-773.jpg?w=2000" alt="" className="rounded-xl h-fit" /></div>
                                    <div className="text-xl font-semibold text-center py-3">Matar Paneer</div>
                                </a>
                            </div>
                            <div className=" bg-white w-72 rounded-xl shadow-xl h-fit hover:scale-105" onClick={() => parent({
                                type: 'Product',
                                title: 'Big Mac'
                            })}>
                                <a href="#" className="">
                                    <div className="h-fit"><img src="https://as2.ftcdn.net/v2/jpg/00/53/07/91/1000_F_53079185_SWbow4otiZ52T3g2WYa375RbCEKsJO2b.jpg" alt="" className="rounded-xl h-fit" /></div>
                                    <div className="text-xl font-semibold text-center py-3">Big Mac</div>
                                </a>
                            </div>
                            <div className=" bg-white w-72 rounded-xl shadow-xl h-fit hover:scale-105" onClick={() => parent({
                                type: 'Product',
                                title: 'Vegetarian Chilli'
                            })}>
                                <a href="#" className="">
                                    <div className="h-fit"><img src="https://media.istockphoto.com/id/486539406/photo/homemade-organic-vegetarian-chili.jpg?s=612x612&w=0&k=20&c=SjhEpH2cRCRl3ITHsvBdrxXHA0gngZBvMrfVPGuT2fQ=" alt="" className="rounded-xl h-fit" /></div>
                                    <div className="text-xl font-semibold text-center py-3">Vegetarian Chilli</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-10 sm:-space-y-4 h-fit">
                        <div className="text-4xl sm:text-5xl text-center dark:text-white">Explore Categories</div>
                        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-5 h-96 sm:justify-center items-center">
                            <div className=" bg-white w-72 rounded-xl shadow-xl h-fit hover:scale-105" onClick={() => parent({
                                type: 'Sub',
                                title: 'Vegetarian'
                            })} >
                                <a href="#" className="">
                                    <div className="h-fit"><img src="https://www.themealdb.com/images/category/vegetarian.png" alt="" className="rounded-xl h-fit" /></div>
                                    <div className="text-xl font-semibold text-center py-3">Vegetarian</div>
                                </a>
                            </div>
                            <div className=" bg-white w-72 rounded-xl shadow-xl h-fit hover:scale-105" onClick={() => parent({
                                type: 'Sub',
                                title: 'Pasta'
                            })}>
                                <a href="#" className="">
                                    <div className="h-fit"><img src="https://www.themealdb.com/images/category/pasta.png" alt="" className="rounded-xl h-fit" /></div>
                                    <div className="text-xl font-semibold text-center py-3">Pasta</div>
                                </a>
                            </div>
                            <div className=" bg-white w-72 rounded-xl shadow-xl h-fit hover:scale-105" onClick={() => parent({
                                type: 'Sub',
                                title: 'Breakfast'
                            })}>
                                <a href="#" className="">
                                    <div className="h-fit"><img src="https://www.themealdb.com/images/category/breakfast.png" alt="" className="rounded-xl h-fit" /></div>
                                    <div className="text-xl font-semibold text-center py-3">Breakfast</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-[28rem] h-12 md:mt-0 flex justify-center text-2xl"><div href="#" className="bg-red-600 rounded-full text-white px-5 py-2 hover:scale-105" onClick={() => parent({
                type: 'Categories',
                title: 'Categories'
            })}><NavLink to={'/category'}>view more</NavLink></div></div>
        </div>
    )
}

export default Home