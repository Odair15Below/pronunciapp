import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSpeechSynthesis } from 'react-speech-kit';
import { usePractice, NEXT_WORD, PREVIOUS_WORD, INIT_PRACTICE, RESTART_PRACTICE } from '../data/practiceContext';
import { useStats } from '../data/statsContext';

export default function WordPractice() {

    let { category, phoneticSymbol } = useParams();
    const [start, setStart] = useState();
    const { currentWord, hasNextWord, hasPreviousWord, dispatch: dispatchPractice } = usePractice();
    const { dispatch: dispatchStats, getPhoneticSymbolReps } = useStats();
    const { speak } = useSpeechSynthesis();
    const [firstLoad, setFirstLoad] = useState(true);

    const getElapsedtime = () => new Date() - start;

    useEffect(() => {
        dispatchPractice({ type: INIT_PRACTICE, payload: { phoneticSymbol, category } });
        setFirstLoad(false);
        setStart(new Date());
        return () => {
            setFirstLoad(true);
        };
    }, [category, phoneticSymbol, dispatchPractice, currentWord]);

    const handleNextWordClick = () => {
        dispatchStats({ type: 'addStat', payload: { stat: 'wordCompleted', phoneticSymbol, category, word: currentWord, elapsedTime: getElapsedtime() } });
        dispatchPractice({ type: NEXT_WORD, payload: { phoneticSymbol, category } });
        setStart(new Date());
    };

    const handlePreviousWordClick = () => {
        dispatchPractice({ type: PREVIOUS_WORD, payload: { phoneticSymbol, category } });

    };

    const handleRestart = () => {
        dispatchPractice({ type: RESTART_PRACTICE, payload: { phoneticSymbol, category } });
    };

    const handleCompletion = () => {
        dispatchStats({ type: 'addStat', payload: { stat: 'phoneticCompleted', phoneticSymbol, category } });
        dispatchStats({ type: 'addStat', payload: { stat: 'wordCompleted', phoneticSymbol, category, word: currentWord, elapsedTime: getElapsedtime() } });
        dispatchPractice({ type: 'restart', payload: { phoneticSymbol, category } });
        setStart(new Date());
    }

    const playWord = (word, rate, event) => {
        event.stopPropagation();
        speak({ text: word, rate: rate });
    }

    return (
        <div className='flex flex-col min-h-screen gap-2 p-4 md:w-1/2 lg:w-1/3 md:mx-auto lg:mx-auto'>

            <div className='h-10'>
                <div>
                    <Link to={`/${category}`}>back</Link>
                </div>
            </div>

            <div className='pt-2'>

                <div className='flex flex-col border border-gray-300 rounded-xl shadow-sm bg-white'>

                    <div className='border-b border-gray-300 text-center'>
                        <div className='pt-4 pb-2 font-bold text-3xl text-gray-800 capitalize'>{firstLoad || currentWord}</div>
                        <button className='mb-2' onClick={(event) => playWord(currentWord, 0.1, event)}>slow</button>
                        <button className='mb-2' onClick={(event) => playWord(currentWord, 1, event)}>▶️</button>
                    </div>
                    

                    <div className='p-2 text-xs font-light text-gray-700'>word stats</div>

                </div>

            </div>

            <div className='flex flex-row justify-center gap-2'>

                {hasPreviousWord ?
                    <button className='bg-gray-500 text-gray-50 p-2 rounded-xl text-xs font-light' onClick={handlePreviousWordClick}>previous word</button> :
                    <button className='bg-gray-500 opacity-50 text-gray-50 p-2 rounded-xl text-xs font-light' onClick={handlePreviousWordClick} disabled={!hasPreviousWord}>previous word</button>}
                {!hasNextWord || <button className='bg-gray-500 text-gray-50 p-2 rounded-xl text-xs font-light' onClick={handleNextWordClick}>next word</button>}
                {hasNextWord || <button className='bg-gray-500 text-gray-50 p-2 rounded-xl text-xs font-light' onClick={handleCompletion} >complete</button>}
                {<button className='bg-gray-500 text-gray-50 p-2 rounded-xl text-xs font-light' onClick={handleRestart}>restart</button>}
            </div>

            {/* <div>{category}</div>

            <div>{phoneticSymbol} - reps: {getPhoneticSymbolReps(phoneticSymbol)}</div>

            <div>
                {!hasPreviousWord || <button onClick={handlePreviousWordClick}>previous word</button>}
            </div>
            <div>
                {!hasNextWord || <button onClick={handleNextWordClick}>next word</button>}
            </div>
            <div>
                <button onClick={handleRestart}>restart</button>
            </div>
            <div>
                {hasNextWord || <button onClick={handleCompletion}>complete</button>}
            </div> */}
        </div>
    )
}