import React from 'react'

const Banner = ({ Comp }) => {
    // const Bg = () => {
    //     console.log('hi');
    //     return <Comp />;
    // }
    return (
        <div className={"bg-[url('https://images.unsplash.com/photo-1564495584622-0bb3af6f668e?ixlib=rb-4.0.3;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8;auto=format;fit=crop;w=1471;q=80')] bg-cover bg-fixed h-96 sm:h-[30rem]"}>
            <Comp />
        </div>
    )
}

export default Banner