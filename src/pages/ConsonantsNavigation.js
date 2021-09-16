import React from 'react';
import { Link } from 'react-router-dom';
import { consonants } from '../data/appData';

export default function ConsonantsNavigation() {
    return (
        <>
            <Link to="/">back</Link>
            <div className="grid grid-flow-col grid-cols-2 grid-rows-6 gap-2">
                {
                    consonants.map((item, index) => {
                        return (
                            <Link to={`/consonants/${item.phoneticSymbol}`} key={index}>
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