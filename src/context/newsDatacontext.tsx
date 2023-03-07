import { createContext} from 'react'


interface newsData {
    id:number;
    Imageurl:string;
    url:string;
    date:Date;
    author:string;
   
}




export interface NewsContextData {
    news: newsData[];
  }


export const newsContextDefaultValue: NewsContextData = {
    news: []
  }



export const NewsContext = createContext<NewsContextData>(newsContextDefaultValue)