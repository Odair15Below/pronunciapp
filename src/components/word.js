import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppDataContext } from '../appContext';
import { categories, phoneticSymbols } from '../appData';
import { useSpeechSynthesis } from 'react-speech-kit';


function NextWord() {

    const appContext = useContext(AppDataContext);
    const { wordsList } = appContext;
    const { phonetic } = useParams();
    const { speak } = useSpeechSynthesis();

    if (!appContext.phonetics[phonetic]) {
        appContext.phonetics[phonetic] = {};
        appContext.phonetics[phonetic].availableWords = wordsList.filter(x => x.category === phonetic);
        appContext.phonetics[phonetic].word = appContext.phonetics[phonetic].availableWords.shift();
        appContext.phonetics[phonetic].reps = 0;
    }

    const cat = wordsList.filter(x => x.category === phonetic)[0].category;
    const phoneticSymbol = phoneticSymbols.filter(c => c.phoneticSymbol === cat)[0];
    var category = categories.filter(c => c.category === phoneticSymbol.category)[0];


    const [word, setWord] = useState(appContext.phonetics[phonetic].word);

    const nextWordClick = () => {
        setNextWord();
    };

    const reset = () => {
        appContext.phonetics[phonetic].availableWords = wordsList.filter(x => x.category === phonetic);
        appContext.phonetics[phonetic].reps++;
        setNextWord();
    };

    const setNextWord = () => {
        appContext.phonetics[phonetic].word = appContext.phonetics[phonetic].availableWords.shift();
        setWord(appContext.phonetics[phonetic].word);
    }

    const playWord = (word, event) => {
        event.stopPropagation();
        speak({ text: word });
    }

    return (
        <div className={"container overflow-hidden mx-auto lg:max-w-screen-md h-screen " + category.color}>
            <Link to="/" >
                <div className="w-full ">

                    <div className="grid grid-cols-3">
                        <div className="pl-4">
                            <svg className="h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </div>
                        <div className="pt-4 text-center text-lg font-black text-gray-700">
                            <span>▶️</span>
                            <span>{appContext.phonetics[phonetic].availableWords.length}</span>
                            <span> / </span>
                            <span>{wordsList.filter(x => x.category === phonetic).length}</span>
                        </div>
                        <div className="p-4 text-lg text-right font-black text-gray-700 lg:text-left">
                            <span>💪 </span>
                            <span>{appContext.phonetics[phonetic].reps}</span>
                        </div>
                    </div>
                </div>
            </Link>
            <div onClick={() => nextWordClick()} className={`min-h-screen flex flex-col text-center pt-20`}>
                {
                    word !== undefined ?
                        <div>
                            <div className="text-2xl font-black text-gray-600 mt-2">{phonetic}</div>
                            <div className="text-5xl font-black">{word.word} </div>
                            <div className="mt-3"><button onClick={(event) => playWord(word.word, event)}>▶️</button></div>
                            </div> : <div className="w-full text-center" onClick={() => reset()}>
                            <span className="text-2xl font-black text-gray-700">End of game reset</span>
                            <br></br>
                            <br></br>
                            <span className="text-6xl">🔁 </span>
                        </div>
                }

            </div>
        </div>)
}

export default NextWord;
