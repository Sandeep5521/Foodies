import React, { useContext } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { Parent } from './main';

const Label = ({ type, title, thumb }) => {
    const view = useContext(Parent);
    return (
        <Card className="mt-6 w-[90%] p-4 hover:scale-105 cursor-pointer dark:bg-opacity-20" onClick={() => view({
            type: type,
            title: title
        })}>
            <CardHeader color="blue-gray" className="relative h-fit -my-10 flex justify-center">
                <img className={`rounded-xl ${(type !== 'Sub') ? 'shadow-xl' : ''}`} src={thumb} alt="img-blur-shadow" layout="fill" />
            </CardHeader>
            <CardBody className="mt-[20%] text-center">
                <Typography variant="h5" color="blue-gray" className="mb-2 dark:text-white">
                    {title}
                </Typography>
            </CardBody>
        </Card >
    )
}

export default Label
