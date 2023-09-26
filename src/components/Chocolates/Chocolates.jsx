import React from 'react';
import ChocolatesCard from './ChocolatesCard';


const Chocolates = ({chocolates}) => {
    console.log(chocolates);



    return (
        <div className='py-10'>
        <h1 className='text-2xl text-center'>All Chocolates</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
            { 
                
                chocolates?.map(chocolate=><ChocolatesCard
                    key={chocolate.id}
                    chocolate={chocolate}
                ></ChocolatesCard> )
            }
        </div>
    </div>
    );
};

export default Chocolates;



