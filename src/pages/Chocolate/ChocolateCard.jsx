import React from 'react';
import swal from 'sweetalert';

const ChocolateCard = ({chocolate}) => {
    const { id, chocolate_name, brand_name, rating, price, image } = chocolate || {};


    const handleAddToFavorites = () =>{
      //console.log(chocolate);
    const addedFavoritesArray = [];


      const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

      if (!favoriteItems) {
        addedFavoritesArray.push(chocolate);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
        swal("Great!", "Products added successfully!", "success");
      } 
      else {
        const isExits = favoriteItems.find((chocolate) => chocolate.id === id);

    
    if (!isExits) {

      addedFavoritesArray.push(...favoriteItems, chocolate);
      localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
      swal("Good job!", "Products added successfully!", "success");
     
    } else {
      swal("Error!", "No duplicate !", "error");
    }

  }
}
    






    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="card card-side bg-base-100 shadow-xl">
                 <figure><img src={image} alt="Movie"/></figure>
                     <div className="card-body">
                          <h2 className="card-title">{brand_name}</h2>
                            <p>{chocolate_name}</p>
                          <p>${price}</p>
                  <div className="card-actions justify-end">
                  <button onClick={handleAddToFavorites} className="btn btn-primary">Add to Favorite</button>
                  </div>
               </div>
            </div>
        </div>
    );
};

export default ChocolateCard;