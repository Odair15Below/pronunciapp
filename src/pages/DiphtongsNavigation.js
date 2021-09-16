import React from 'react';
import { Link } from 'react-router-dom';
import { diphtongs } from '../data/appData';

export default function DiphtongsNavigation() {
    return (
        <>
            <Link to="/">back</Link>
            <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
                {
                    diphtongs.map((item, index) => {
                        return (
                            <Link to={`/voewls/${item.phoneticSymbol}`} key={index}>
                                <div  className='border-gray-300 border p-2'>
                                    <div>{item.phoneticSymbol}</div>
                                    <div className='text-xs'>{item.samples}</div>
                                </div>
                            </Link>)
                    })
                }
            </div>
        </>
    )
}