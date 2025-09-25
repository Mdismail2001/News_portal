import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router';
import Header from '../Header';
import LatesNews from '../LatesNews';
import Navbar from '../Navbar';
import LeftAside from '../homelayout/LeftAside';
import RightAside from '../homelayout/RightAside';
import Loading from '../Pages/Loading';

const Home = () => {
  const news = useLoaderData();
  const { state } = useNavigation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {   // when scroll past 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto mt-5">
          <LatesNews news={news} />
        </section>
      </header>

      {/* Navbar with conditional bg */}
      <nav
        className={`w-11/12 mx-auto mt-5 sticky top-0 z-50 transition-colors duration-0 shadow-md ${
          scrolled ? 'bg-base-300 shadow-md' : 'bg-transparent'
        }`}
      >
        <Navbar />
      </nav>

      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          {state === 'loading' ? <Loading /> : <Outlet />}
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default Home;
