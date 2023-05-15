import { useState } from 'react'

const Calc = () => {
    const [item, setItem] = useState("")
    const func = (val) => {
        setItem(item + val);
    }
    const sign = () => {
        if (Number(item) > 0) setItem('-' + item)
        else setItem(item.substring(1, item.length))
    }
    const del = () => {
        let b = "";
        for (let i = 0; i < item.length - 1; i++) b += item[i];
        setItem(b)
    }
    return (
        <div className='shadow-xl selection:bg-transparent'>
            <div className='bg-red-600 rounded-t-xl h-20 flex items-center justify-center'>
                <input type="text" placeholder='0' value={item} className='focus:outline-none h-10 w-40 bg-transparent font-semibold text-4xl placeholder:opacity-80 text-white text-right placeholder:text-white' id="" />
            </div>
            <div className='bg-white'>
                <div className='p-2 font-bold text-gray-600'>
                    <div className='flex space-x-1 justify-center py-2'>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => del()}>DEL</div>
                        <div className='text-3xl bg-gray-200 px-3 py-1.5 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => sign()}>+/-</div>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => setItem('')}>C</div>
                    </div>
                    <div className='flex space-x-1 justify-center py-2'>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('7')}>7</div>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('8')}>8</div>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('9')}>9</div>
                        <div className='text-4xl bg-gray-200 px-3 py-1 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('+')}>+</div>
                    </div>
                    <div className='flex space-x-1.5 justify-center py-2'>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('4')}>4</div>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('5')}>5</div>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('6')}>6</div>
                        <div className='text-4xl bg-gray-200 px-4 py-1 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('-')}>-</div>
                    </div>
                    <div className='flex space-x-1.5 justify-center py-2'>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('1')}>1</div>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('2')}>2</div>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('3')}>3</div>
                        <div className='text-4xl bg-gray-200 px-4 py-1 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('*')}>*</div>
                    </div>
                    <div className='flex space-x-1.5 justify-center py-2'>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('0')}>0</div>
                        <div className='text-3xl bg-gray-200 px-5 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('.')}>.</div>
                        <div className='text-3xl bg-gray-200 px-4 py-2 rounded-full hover:text-blue-500 cursor-pointer' onClick={() => func('/')}>/</div>
                        <div className='text-4xl bg-red-500 text-white px-3 py-1 rounded-full hover:bg-green-500 cursor-pointer' onClick={() => setItem(String(eval(item)))}>=</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calc