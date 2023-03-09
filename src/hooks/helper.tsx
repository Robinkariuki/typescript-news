import {NewsContext, NewsContextData,newsData} from '../context/newsDatacontext'
import {useCallback, useState,useContext,useEffect} from 'react'




export function useNewsContextValue(): NewsContextData{
        
    const [news,setNews] = useState<newsData[]>([])
    const [isLoading, setIsLoading] = useState(false);

    const fetchPosts = useCallback(()=>{
        setIsLoading(true)
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e1009a570111462d9295724c7b573134`)
        .then(response =>  response.json())
        .then((fetchedNews)=>{
            setNews(fetchedNews.articles)
        }).finally(()=>{
            setIsLoading(false)
        })
    },[setNews]);

    return{
        news,
        isLoading,
        fetchPosts

    }


}




export function useNewsLoading() {
    const { fetchPosts } = useContext(NewsContext);
   
    useEffect(() => {
      fetchPosts();
    }, [fetchPosts])
  }