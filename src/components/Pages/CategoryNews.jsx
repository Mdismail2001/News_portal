import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
   const {id}= useParams();
   const news = useLoaderData();
   const [categoryNews, setCategoryNews ] = useState([]);

//    console.log(id, news);
// filter for found id based news using useEffect
    useEffect(()=>{
        // conditional news showing
        if(id == '0'){
            setCategoryNews(news);
            return;
        }else if(id == '1'){
            const filteringNews = news.filter(news => news.others.is_today_pick == true);
                setCategoryNews(filteringNews);
                console.log(filteringNews)
        }else{
            const filteringNews = news.filter(news => news.category_id == id);
            // console.log(filteringNews)
            setCategoryNews(filteringNews)

        }

    },[news, id])


    return (
        <div>
            <h1>category news:{categoryNews.length}</h1>
        </div>
    );
};

export default CategoryNews;