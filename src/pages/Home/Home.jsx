import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chocolates from '../../components/Chocolates/Chocolates';
import Banner from '../../components/Header/Banner/Banner';



const Home = () => {
    const chocolates = useLoaderData()
    //console.log(chocolates);


    return (
        <div>
            <Banner></Banner>
            <Chocolates chocolates ={chocolates}></Chocolates>
        </div>
    );
};

export default Home;


