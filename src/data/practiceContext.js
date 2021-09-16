import * as React from 'react';
import { getWordsForPhonetic } from './appData';


const PracticeContext = React.createContext();

const initialState = {
    practices: {},
    currentWord: undefined,
    hasNextWord: undefined,
    hasPreviousWord: undefined
}

function practiceReducer(state = initialState, action) {
    switch (action.type) {
        case NEXT_WORD:
            {
                const { category, phoneticSymbol } = action.payload;
                const key = category + '-' + phoneticSymbol;
                let practices = Object.assign({}, state.practices);

                if (state.practices[key]) {
                    let currentPractice = Object.assign({}, state.practices[key]);
                    if (currentPractice.hasNextWord) {
                        currentPractice.currentWordIndex++;
                        const newWord = currentPractice.words[currentPractice.currentWordIndex];
                        currentPractice.currentWord = newWord;
                        currentPractice.hasNextWord = (currentPractice.currentWordIndex + 1) < currentPractice.words.length;
                        currentPractice.hasPreviousWord = currentPractice.currentWordIndex > 0;
                        practices[key] = currentPractice;
                    }

                    const { hasNextWord, currentWord, hasPreviousWord } = currentPractice;

                    const result = {
                        ...state,
                        practices: practices,
                        hasNextWord,
                        currentWord,
                        hasPreviousWord
                    };
                    return result;
                }

                const words = getWordsForPhonetic(phoneticSymbol);
                let currentWord = words[0];
                let practice = {
                    words: words,
                    currentWord: currentWord,
                    currentWordIndex: 0,
                    hasNextWord: words.length > 1,
                };
                practices[key] = practice;

                const result = { ...state, practices: practices, currentWord: currentWord, hasNextWord: words.length > 1 };
                return result;
            }
        case PREVIOUS_WORD:
            {
                const { category, phoneticSymbol } = action.payload;
                const key = category + '-' + phoneticSymbol;

                if (state.practices[key]) {
                    let practices = Object.assign({}, state.practices);
                    let currentPractice = Object.assign({}, state.practices[key]);
                    if (currentPractice.currentWordIndex > 0) {
                        currentPractice.currentWordIndex--;
                        const newWord = currentPractice.words[currentPractice.currentWordIndex];
                        currentPractice.currentWord = newWord;
                        currentPractice.hasNextWord = (currentPractice.currentWordIndex + 1) < currentPractice.words.length;
                        currentPractice.hasPreviousWord = currentPractice.currentWordIndex > 0;
                        practices[key] = currentPractice;
                    }

                    const result = {
                        ...state,
                        practices: practices,
                        hasNextWord: currentPractice.hasNextWord,
                        currentWord: currentPractice.currentWord,
                        hasPreviousWord: currentPractice.hasPreviousWord
                    };
                    return result;
                }
                break;
            }
        case INIT_PRACTICE: {
            const { category, phoneticSymbol } = action.payload;
            const key = category + '-' + phoneticSymbol;

            if (state.practices[key]) {
                const currentPractice = Object.assign({}, state.practices[key]);
                const result = {
                    ...state,
                    hasNextWord: currentPractice.hasNextWord,
                    currentWord: currentPractice.currentWord,
                    hasPreviousWord: currentPractice.hasPreviousWord
                };
                return result;
            }

            const words = getWordsForPhonetic(phoneticSymbol);
            let currentWord = words[0];
            let practice = {
                words: words,
                currentWord: currentWord,
                hasNextWord: words.length > 1,
                hasPreviousWord: false,
                currentWordIndex: 0
            };

            let practices = Object.assign({}, state.practices);
            practices[key] = practice;
            const result = {
                ...state,
                practices: practices,
                hasNextWord: practice.hasNextWord,
                currentWord: practice.currentWord,
                hasPreviousWord: practice.hasPreviousWord
            };
            return result;
        }
        case RESTART_PRACTICE: {
            const { category, phoneticSymbol } = action.payload;
            const key = category + '-' + phoneticSymbol;

            let practices = Object.assign({}, state.practices);
            let currentPractice = practices[key];

            currentPractice.currentWord = currentPractice.words[0];
            currentPractice.currentWordIndex = 0;
            currentPractice.hasNextWord = currentPractice.words.length > 1;
            currentPractice.hasPreviousWord = false;
            practices[key] = currentPractice;

            const result = {
                ...state,
                practices: practices,
                hasNextWord: currentPractice.hasNextWord,
                currentWord: currentPractice.currentWord,
                hasPreviousWord: currentPractice.hasPreviousWord
            };
            return result;
        }
        default:
            break;
    }
}

// action types
const NEXT_WORD = "app/nextWord";
const PREVIOUS_WORD = "app/previousWord";
const INIT_PRACTICE = "app/initPractice";
const RESTART_PRACTICE = "app/restartPractice";

function PracticeProvider({ children }) {
    const [state, dispatch] = React.useReducer(practiceReducer, initialState);
    const { currentWord, hasNextWord, hasPreviousWord } = state || initialState;
    const value = { currentWord, hasNextWord, hasPreviousWord, dispatch }
    return <PracticeContext.Provider value={value}>{children}</PracticeContext.Provider>
}

function usePractice() {
    const context = React.useContext(PracticeContext)
    if (context === undefined) {
        throw new Error('usePractice must be used within a PracticeContext')
    }
    return context
}

export { PracticeProvider, usePractice, NEXT_WORD, PREVIOUS_WORD, INIT_PRACTICE, RESTART_PRACTICE }