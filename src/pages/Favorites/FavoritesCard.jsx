import React from 'react';

const FavoritesCard = ({chocolate}) => {
    const { id, chocolate_name, brand_name, rating, price, image } = chocolate || {};


    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="card card-side bg-base-100 shadow-xl">
                 <figure><img src={image} alt="Movie"/></figure>
                     <div className="card-body">
                          <h2 className="card-title">{brand_name}</h2>
                            <p>{chocolate_name}</p>
                          <p>${price}</p>
                  <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to Favorite</button>
                  </div>
               </div>
            </div>
        </div>
    );
};

export default FavoritesCard;