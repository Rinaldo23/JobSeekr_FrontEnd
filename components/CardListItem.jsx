import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footers from './Footers';
import Card from './Card';

const CardListItem = ({ cardData }) => {

    return (
        <div id='CardListItem' className='w-full md:h-screen md:mt-6 flex flex-col items-center py-2' style={{ height: 'fit-content' }}>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 '>
                <div className='col-span-2'>

                    <div className="container mx-auto">
                        <h1 className='text-lg md:text-2xl text-center mb-4'>More Jobs</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-8 gap-3 md:px-6 px-2">


                            {cardData.slice(1).map((data, idx) => (
                                <Card key={data._id} data={data} />
                            ))}

                        </div>
                    </div>

                </div>


            </div>

            <button type="button" className="md:mt-6 mt-2 md:w-56 w-auto text-white bg-pink-600 hover:bg-pink-700 font-medium rounded-full text-sm px-5 py-2.5 md:mb-2">Load More</button>
        </div>
    );
};

export default CardListItem;