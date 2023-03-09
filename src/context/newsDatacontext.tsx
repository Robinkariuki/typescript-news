import { createContext} from 'react'


export interface newsData {
    id:number;
    urlToImage:string;
    url:string;
    publishedAt:string;
    author:string;
    title:string;
    description:string

   
}




export interface NewsContextData {
    news: newsData[];
    isLoading: boolean;
    fetchPosts: () => void;
  }


export const newsContextDefaultValue: NewsContextData = {
    news: [],
    isLoading: false,
    fetchPosts: () => null,
  }



export const NewsContext = createContext<NewsContextData>(newsContextDefaultValue)