import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChocolateCard from './ChocolateCard';



const Chocolate = () => {
    const [chocolate, setChocolate] = useState({});
    const { id } = useParams();
    const chocolates = useLoaderData();


  useEffect(() => {

          const findChocolate = chocolates?.find((chocolate) => chocolate.id === id);

          setChocolate(findChocolate);
  }, [id, chocolates]);

  console.log(chocolate);





    return (
        <div>
            <ChocolateCard chocolate={chocolate}></ChocolateCard>
        </div>
    );
};

export default Chocolate;