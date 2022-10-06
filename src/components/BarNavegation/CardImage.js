import React from 'react';

const CardImage = ({ title, img, categories, price }) => {
    return (
        <div className="flex bg-white w-full rounded-md overflow-hidden shadow-md">
            <div className='justify-around items-center py-3 px-4 w-full'>
                <div className='text-3xl px-4 py-3 font-bold'>
                    {title}
                </div>
                <div className='text-lg px-4 py-3 font-bold'>
                    {categories}
                </div>
                <div className='text-xl px-4 py-3 font-bold text-lime-500'>
                    {price}
                </div>
                <button className="bg-main text-white py-2 px-3 rounded my-4 mx-4">
                    Comprar
                </button>
            </div>
            <div className="w-full">
                <img className='w-full h-72' src={img} alt="PopularSearch" />
            </div>
        </div >
    );
}

export default CardImage;
