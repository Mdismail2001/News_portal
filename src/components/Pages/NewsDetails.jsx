import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RightAside from '../homelayout/RightAside';
import NewsDetailsCard from '../NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Navbar';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});

  useEffect(()=>{
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  },[data, id])
    // console.log( news)

    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 py-3 gap-5 mt-5'>
                <section className='col-span-9 '>
                    <h2 className='font-bold text-center  '>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;