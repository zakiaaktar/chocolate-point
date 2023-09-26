import React from 'react';
import { Link } from 'react-router-dom';

const ChocolatesCard = ({chocolate}) => {
    const { id, chocolate_name, brand_name, rating, price, image } = chocolate || {};
    console.log(chocolate)



    return (
        <div>
            <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={image}
    />
  </div>
  <div class="p-6">
  <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {brand_name}
          </p>
    <div class="mb-2 flex items-center justify-between">
      <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {chocolate_name}
      </p>
      <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        ${price}
      </p>
    </div>
    <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
      With plenty of talk and listen time, voice-activated Siri access, and an
      available wireless charging case.
    </p>
  </div>
  <div class="p-6 pt-0">
   <Link to={`/chocolates/${id}`}>
   <button
      class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      for details
    </button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default ChocolatesCard;