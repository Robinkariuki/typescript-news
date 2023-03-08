import { createContext} from 'react'


export interface newsData {
    id:number;
    Imageurl:string;
    url:string;
    date:Date;
    author:string;
   
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