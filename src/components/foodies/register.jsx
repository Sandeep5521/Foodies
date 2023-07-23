import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function Register({ parent }) {
    return (
        <div className="flex justify-center items-center h-fit dark:bg-black bg-gray-200 py-10 pt-28 px-5">
            <Card className="w-96 px-7">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center bg-red-400 shadow-red-500 relative bottom-7"
                >
                    <Typography variant="h3" color="white">
                        Sign Up
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4 -mt-7">
                    <div className="relative">
                        <input type="text" id="name" className="bg-gray-50 focus:bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5 focus:outline-none focus:border-red-500 peer" placeholder="" required />

                        <label htmlFor="name" className="cursor-text absolute peer-focus:bg-white text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>

                    </div>
                    <div className="relative">
                        <input type="text" id="email" className="bg-gray-50 focus:bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5 focus:outline-none focus:border-red-500 peer" placeholder="" required />

                        <label htmlFor="email" className="cursor-text absolute peer-focus:bg-white text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>

                    </div>
                    <div className="relative">
                        <input type="password" id="first_name" className="bg-gray-50 focus:bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5 focus:outline-none focus:border-red-500 peer" placeholder="" required />

                        <label htmlFor="first_name" className="cursor-text absolute peer-focus:bg-white text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>

                    </div>
                    <div className="relative">
                        <input type="password" id="second_name" className="bg-gray-50 focus:bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5 focus:outline-none focus:border-red-500 peer" placeholder="" required />

                        <label htmlFor="second_name" className="cursor-text absolute peer-focus:bg-white text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Confirm Password</label>

                    </div>
                    {/* <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 accent-red-500" required />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember Me</label>
                    </div> */}
                </CardBody>
                <CardFooter className="pt-0 mt-5">
                    <Button variant="gradient" className="bg-red-400 hover:shadow hover:bg-red-500" fullWidth>
                        Register
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center pb-5">
                        Already have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue"
                            className="ml-1 font-bold text-red-400 hover:text-red-500"
                            onClick={() => parent('Login')}
                        >
                            <NavLink to={'/login'}>Sign in</NavLink>
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
}