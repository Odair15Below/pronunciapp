import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppDataContext } from '../appContext';
import { categories, phoneticSymbols } from '../appData';


function NextWord() {

    const appContext = useContext(AppDataContext);
    const { wordsList } = appContext;
    const { phonetic } = useParams();

    if (!appContext.phonetics[phonetic]) {
        appContext.phonetics[phonetic] = {};
        appContext.phonetics[phonetic].availableWords = wordsList.filter(x => x.category === phonetic);
        appContext.phonetics[phonetic].word = appContext.phonetics[phonetic].availableWords.shift();
    }

    const cat = wordsList.filter(x => x.category === phonetic)[0].category;
    const phoneticSymbol = phoneticSymbols.filter(c => c.phoneticSymbol === cat)[0];
    var category = categories.filter(c => c.category === phoneticSymbol.category)[0];

    console.log(category);

    const [word, setWord] = useState(appContext.phonetics[phonetic].word);
    
    

    const nextWordClick = () => {
        setNextWord();
    };

    const reset = () => {
        appContext.phonetics[phonetic].availableWords = wordsList.filter(x => x.category === phonetic);
        setNextWord();
    };

    const setNextWord = () => {
        appContext.phonetics[phonetic].word = appContext.phonetics[phonetic].availableWords.shift();
        setWord(appContext.phonetics[phonetic].word);
    }

    return (
        <div className="container mx-auto lg:max-w-screen-md h-screen">
            <Link to="/" >
                <div className="w-20 absolute top-0 left-auto p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                </div>
            </Link>
            <div onClick={() => nextWordClick()} className={`min-h-screen flex flex-col justify-center text-center ` + category.color}>
                <div className="text-6xl text-gray-600">{phonetic}</div>
                {
                    word !== undefined ? <div className="text-6xl">{word.word}</div> : <div onClick={() => reset()}>end of game reset</div>
                }
            </div>
        </div>)
}

export default NextWord;
