import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppDataContext } from '../appContext';



function NextWord() {

    const appContext = useContext(AppDataContext);
    const { wordsList } = appContext;

    const { phonetic } = useParams();

    if (!appContext.phonetics[phonetic]) {
        appContext.phonetics[phonetic] = {};
        appContext.phonetics[phonetic].availableWords = wordsList.filter(x => x.category === phonetic);
        appContext.phonetics[phonetic].word = appContext.phonetics[phonetic].availableWords.shift();
    }

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
        <div  className="container mx-auto lg:max-w-screen-md h-screen">
            <Link to="/" >
                <div className="w-full h-1/6 flex flex-col justify-center text-center bg-gray-200">Back</div>
            </Link>
            <div onClick={() => nextWordClick()} className="h-5/6 flex flex-col justify-center text-center bg-gray-400">
                <div className="text-6xl text-gray-600">{phonetic}</div>
                {
                    word !== undefined ? <div className="text-6xl">{word.word}</div> : <div onClick={() => reset()}>end of game reset</div>
                }
            </div>
        </div>)
}

export default NextWord;
