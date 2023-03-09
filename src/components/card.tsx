import React,{useContext} from 'react'
import { NewsContext} from '../context/newsDatacontext'
import { useNewsLoading } from '../hooks/helper'

const Card:React.FC = () => {
  const {news} = useContext(NewsContext)

  useNewsLoading()
console.log(news)
  return (

    
        <div className='lg:grid grid-cols-3 gap-3'>
        {
       news.map(article=>(
        <div key={article.id} className="m-auto mt-10 mb-10 lg:m-10  w-80 rounded-lg shadow-md lg:max-w-sm  bg-slate-100 relative">
            <h4 className='text-center font-bold'>Headline</h4>
        <h5 className="text-xl font-medium tracking-tight  text-black  text-center p-3 break-words" >
                       
                          {article.title}
                        </h5>
                        <h6 className='text-start pl-10  font-semibold'>
                          Date:{article.publishedAt.substring(0, 10)}
                        </h6>
                    <img
                        className="object-cover  h-45  rounded-lg  m-auto w-60"
                        src={article.urlToImage}
                        alt=""
                    />
                    <div className="p-4">
                       
                        <p className="mb-2 leading-normal break-words pb-9">
                       {article.description}
                        </p>
                        <a href={article.url} target="_blank"
                                   className="px-4 py-2 text-sm text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200  shadow absolute bottom-0 left-0">Read more</a>
                        {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow absolute bottom-0 left-0">
                            Read more
                        </button> */}
                    </div>
                </div>
                 ))  
                }
            </div>

         
   


  )
}

export default Card