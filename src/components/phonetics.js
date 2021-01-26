import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppDataContext } from '../appContext';

function Phonetics() {

    const appContext = useContext(AppDataContext);
    const { categories, phoneticSymbols } = appContext;

    return (
        <div className="container mx-auto min-h-screen lg:max-w-screen-md bg-gray-50 px-2 py-4">
            {
                categories.map((c, i) => <PhoneticGroup
                    key={i}
                    name={c.category}
                    symbols={phoneticSymbols.filter(p => p.category === c.category)}
                    color={c.color}
                    textcolor={c.textcolor}
                    columnCount={c.columnCount} />)
            }
        </div>)
}


function PhoneticGroup(group) {

    const { name, symbols, columnCount, color } = group;
    return (
        <div className={"cursor-pointer"}>
            <div className="capitalize w-full text-center py-4 text-2xl">
                <span className="font-bold tracking-wider text-gray-900">{name}</span>
            </div>
            {
                <div className={`grid-${columnCount}`}>
                    {
                        symbols !== undefined ?
                            symbols.filter(p => p.category === name).map((p, i) => {
                                return (<PhoneticSymbol key={i} item={p} color={color} />)
                            }) : <span>oi</span>
                    }
                </div>
            }
        </div>);
}

function PhoneticSymbol(params) {
    const { item, color } = params;
    const appContext = useContext(AppDataContext);
    return (
        <Link to={"/" + item.phoneticSymbol}>

            <div className="border-gray-200 border rounded-sm">
                <div className={"p-2 w-full text-center font-bold " + color}>
                    <span className="text-2xl text-gray-600">{item.phoneticSymbol}</span>
                </div>
                <div className="bg-white">
                    <div className="w-full sm:text-xs text-center py-2 font-sans font-medium text-gray-500 ">
                        {
                            item.samples ?
                                item.samples.map((s, i) => {
                                    return (<div key={i} className="text-xs lg:inline "> {i < item.samples.length-1 ? s + ", " : s} </div>);
                                })
                                : <span></span>
                        }
                    </div>

                    <div className="w-full text-right p-1 py-2 lg:py-4 lg:px-2 text-gray-500 text-xs font-medium">
                        <Stats icon="📚" value={appContext.wordsList.filter(x => x.category === item.phoneticSymbol).length} />
                        <Stats icon="💪" value={appContext.phonetics[item.phoneticSymbol] ?
                                appContext.phonetics[item.phoneticSymbol].reps : 0} />

                    </div>

                </div>
            </div>


        </Link>);

}

const Stats = (params) => {
    const { icon, value } = params;
    return (<div className="inline pl-1 lg:pl-2">
        <span className="text-xs opacity-90">{icon}</span>
        <span className="">{value}</span>
    </div>);
};

export default Phonetics;