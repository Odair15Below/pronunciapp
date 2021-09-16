import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu() {
    return (
        <>
            <div>
                <Link to="/voewls">voewls</Link>
            </div>
            <div>
                <Link to="/diphtongs">diphtongs</Link>
            </div>
            <div>
                <Link to="/consonants">consonants</Link>
            </div>
        </>
    )
}