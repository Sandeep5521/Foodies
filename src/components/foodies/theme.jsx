import { useState } from 'react'
import dlogo from '../../ingrediant/dark-mode-icon.svg'
import llogo from '../../ingrediant/sun-color-icon.svg'

const Mode = ({ parent }) => {
    const [theme, setTheme] = useState("light");
    let logo = (theme == 'light') ? dlogo : llogo;
    return (
        <div className="h-10 w-10 sm:h-12 sm:w-12 bg-cover fixed top-[92%] hover:scale-105 cursor-pointer bg-black dark:bg-white flex place-content-center rounded-full left-[87%] sm:left-[91%] sm:top-[93%] xl:top-[90%] xl:left-[95%] p-1" onClick={() => {
            if (theme == 'light') setTheme('dark');
            else setTheme('light');
            parent();
        }}>
            <img src={logo} className='rounded-full bg-white object-cover shadow-2xl' alt="" />
        </div>
    )
}

export default Mode
