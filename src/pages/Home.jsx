import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee';

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
   

    return (
        <div className='m-20 my-4'>
            <h1 className='text-center text-4xl text-purple-700 font-bold'>Our Popular Products</h1>
            <div className='flex mt-3 justify-center items-center my-5 mb-8'>
            <button className='btn btn-primary'>Add Coffee</button>
            </div>
            <div className='grid md:grid-cols-2 gap-4 mt-5'>
                {
                    coffees.map(coffee => <Coffee
                     key={coffee._id}
                    coffees={coffees}
                    coffee={coffee}
                    setCoffees={setCoffees}
                     >
                    </Coffee>)
                }
            </div>
        </div>
    );
};

export default Home;