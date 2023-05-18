import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Drawer = ({ parent }) => {
    const [display, setDisplay] = useState("hidden")
    const Display = () => {
        if (display === 'hidden') setDisplay('block')
        else setDisplay('hidden')
    }

    let Visible = () => {
        if (display === 'hidden') {
            return <MenuIcon onClick={() => {
                Display();
            }} />
        }
        else {
            return <CloseIcon onClick={() => {
                Display();
            }} />
        }
    }
    return (
        <>
            <div className="md:hidden absolute h-12 flex items-center px-3 cursor-pointer">
                <Visible />
            </div>
            <div className={`${display} fixed top-12 bg-black backdrop-blur bg-opacity-50 w-screen`} id="menu">
                <div className="w-fit h-fit flex items-center justify-center">
                    <div className="space-y-1.5 py-2 px-3 text-lg w-screen">
                        <div className="rounded hover:bg-red-500 px-2 py-1 cursor-pointer" onClick={() => {
                            setDisplay('hidden')
                            parent('Home')
                        }}>Home</div>
                        <div className="rounded hover:bg-red-500 px-2 py-1 cursor-pointer" onClick={() => {
                            setDisplay('hidden')
                            parent('Categories')
                        }}>Categories</div>
                        <div className="rounded hover:bg-red-500 px-2 py-1 cursor-pointer" onClick={() => {
                            setDisplay('hidden')
                            parent('Search')
                        }}>Search</div>
                        {/* <div className="rounded hover:bg-red-500 px-2 py-1"><a href="#">Sign in</a></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drawer