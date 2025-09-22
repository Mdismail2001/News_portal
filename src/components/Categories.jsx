import { da } from 'date-fns/locale';
import React, { use } from 'react';
import { ca } from '../../node_modules/date-fns/locale/ca';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/public/demo-data/categories.json')
                        .then(res => res.json())
    

const Categories = () => {
    const categories = use(categoryPromise);
    // console.log(categories)
    return (
        <div>
            <h2 className='font-bold'>All categories ({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-5' >
                {
                    categories.map(category => (
                    <NavLink to={`category/${category.id}`} key={category.id} className={'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'}>{category.name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default Categories;