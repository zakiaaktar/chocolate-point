import React, { useEffect, useState } from 'react';
import FavoritesCard from './FavoritesCard';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [isShow,setIsShow] = useState(false);



    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
       
        if (favoriteItems) {
            setFavorites(favoriteItems);
            } else {
                setNofound("No Data Found");
              }
    
    
    }, []);
    console.log(favorites);



    return (
        <div>
        {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> 
        : 
        <div>
            <div className='grid grid-cols-2 gap-5'>
                {favorites.map(chocolate => <FavoritesCard key={chocolate.id} chocolate={chocolate}></FavoritesCard>)}
            </div>
        </div>}
    </div>
    );
};

export default Favorites;