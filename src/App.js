import React from 'react';
import {
    Switch,
    Route,
    HashRouter
} from "react-router-dom";
import { PracticeProvider } from './data/practiceContext';
import { StatsProvider } from './data/statsContext';
import ConsonantsNavigation from './pages/ConsonantsNavigation';
import DiphtongsNavigation from './pages/DiphtongsNavigation';
import MainMenu from './pages/MainMenu';
import VoewlsNavigation from './pages/VoewlsNavigation';
import WordPractice from './pages/WordPractice';


// const appData = {
//   wordsList: words,
//   phoneticSymbols: phoneticSymbols,
//   categories: categories,
//   phonetics: {
//     availableWords : [],
//     word: {}
//   }
// };

export default function App() {
    return (
        <React.StrictMode>
            <HashRouter basename='/'>
                <PracticeProvider>
                    <StatsProvider>
                        <Switch>
                            <Route path="/:category/:phoneticSymbol">
                                <WordPractice />
                            </Route>
                            <Route path="/consonants">
                                <ConsonantsNavigation />
                            </Route>
                            <Route path="/voewls">
                                <VoewlsNavigation />
                            </Route>
                            <Route path="/diphtongs">
                                <DiphtongsNavigation />
                            </Route>
                            <Route path="/">
                                <MainMenu />
                            </Route>
                        </Switch>
                    </StatsProvider>
                </PracticeProvider>
            </HashRouter>
        </React.StrictMode>
    )
}