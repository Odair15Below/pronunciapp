import * as React from 'react';

const StatsContext = React.createContext();
const initialState = {
    stats: []
};

function statsReducer(state = initialState, action) {
    switch (action.type) {
        case 'addStat': {
            console.log(action);
            const stat = {
                stat: action.payload.stat,
                word: action.payload.word,
                phoneticSymbol: action.payload.phoneticSymbol,
                category: action.payload.category,
                elapsedTime: action.payload.elapsedTime,
                date: new Date()
            };

            const result = {
                ...state,
                stats: [...state.stats, stat]
            };
            console.table(result.stats);
            return result;
        };
        default:
            break;
    }
}

function StatsProvider({ children }) {
    const [state, dispatch] = React.useReducer(statsReducer);

    const getPhoneticSymbolReps = (phoneticSymbol) => !(state || state?.stats) ? 0 : state.stats?.filter(c => c.phoneticSymbol === phoneticSymbol).length;

    const value = { state, getPhoneticSymbolReps, dispatch }
    return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
}

function useStats() {
    const context = React.useContext(StatsContext)
    if (context === undefined) {
        throw new Error('useStats must be used within a StatsContext')
    }
    return context
}

export { StatsProvider, useStats }
