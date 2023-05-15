import React from 'react'

const Restaurnet = (props) => {
  console.log(props.list);
  return (
    <>
      <div className="text-red-500 text-xl">{props.list[1]}</div>
      <div className="text-sky-400 text-xl">{props.number}</div>
    </>
  )
}

export default Restaurnet