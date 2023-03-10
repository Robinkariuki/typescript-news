import { createContext} from 'react'


export interface newsData {
    id:number;
    urlToImage:string;
    url:string;
    publishedAt:string;
    author:string;
    title:string;
    description:string;
   

   
}




export interface NewsContextData {
    news: newsData[];
    isLoading: boolean;
    fetchPosts: () => void;
    length:number;
    page:number;
    isLastPage:boolean;
  }


export const newsContextDefaultValue: NewsContextData = {
    news: [],
    isLoading: false,
    fetchPosts: () => null,
    length:0,
    page:1,
    isLastPage:true
  }



export const NewsContext = createContext<NewsContextData>(newsContextDefaultValue)