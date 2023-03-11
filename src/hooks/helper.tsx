import {NewsContext, NewsContextData,newsData} from '../context/newsDatacontext'
import {useCallback, useState,useContext,useEffect} from 'react'




export function useNewsContextValue(): NewsContextData{
        
    const [news,setNews] = useState<newsData[]>([])
    const [isLoading, setIsLoading] = useState(false);
    const [length, setLength] = useState(0)
    const [page, setPage] = useState(1)
    const [isLastPage,setLastPage] = useState(true)
    

    const fetchPosts = useCallback(()=>{
    
        setIsLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}top-headlines?country=us&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response =>  response.json())
        .then((fetchedNews)=>{
            setNews([...news,...fetchedNews.articles])
            setLength(fetchedNews.totalResults)
            setPage(page + 1)
            
            console.log(fetchedNews.totalResults)
        
        }).finally(()=>{
            setIsLoading(false)
            if(length === news.length){
                setLastPage(false)

            }
           
        })
    },[setNews,page,news,length]);

    return{
        news,
        isLoading,
        fetchPosts,
        length,
        page,
        isLastPage
   


    }


}




export function useNewsLoading() {
    const { fetchPosts } = useContext(NewsContext);
   
    useEffect(() => {
      fetchPosts();
    }, [fetchPosts])
  }