import React from 'react'

const Card:React.FC = () => {
  return (
    <div className='lg:grid grid-cols-4 gap-4'>
<div className="m-auto mt-10 mb-10 lg:m-5  w-80 rounded-lg shadow-md lg:max-w-sm  bg-slate-100">
<h4 className="text-xl font-medium tracking-tight  text-black  text-center p-3 break-words" >
                  Title jasdjakshdjkasgdjasgjhdgasjhgdjhasgjhdgasjhgdh
                </h4>
                <h6 className='text-start pl-10  font-semibold'>
                    Date:ja
                </h6>
            <img
                className="object-cover  h-48  rounded-lg  m-auto"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt=""
            />
            <div className="p-4">
               
                <p className="mb-2 leading-normal break-words">
                    react tailwind css card with image It is a long established
                    fact that a reader will be distracted by the readable
                    content.
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Read more
                </button>
            </div>
        </div>
    </div>

  )
}

export default Card