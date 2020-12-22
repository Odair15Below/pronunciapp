import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppDataContext } from '../appContext';

function Phonetics() {

    const appContext = useContext(AppDataContext);
    const { categories, phoneticSymbols } = appContext;

    return (
        <div className="container mx-auto min-h-screen lg:max-w-screen-md bg-gray-100 px-2 py-4">
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

            <div className="border-gray-300 border rounded-md">
                <div className={"p-2 w-full text-center font-bold " + color}>
                    <span className="text-2xl text-gray-700">{item.phoneticSymbol}</span>
                </div>
                <div>
                    <div className="w-full text-center py-2 font-semibold text-gray-500 ">
                        {
                            item.samples ?
                                item.samples.map((s, i) => {
                                    return (<span key={i}>{s}{i < item.samples.length && ", "}</span>);
                                })
                                : <span></span>
                        }
                    </div>

                    <div className="w-full text-right p-2">
                        <div className="lg:inline pr-2 text-xs font-black text-gray-500">
                            <span>📚 {appContext.wordsList.filter(x => x.category === item.phoneticSymbol).length}  words</span>
                        </div>
                        {
                            appContext.phonetics[item.phoneticSymbol] ?
                                <div className="inline  text-gray-700">
                                    <span className="text-xs">💪 </span>
                                    {appContext.phonetics[item.phoneticSymbol] ?
                                        <span className="text-sm font-black">{appContext.phonetics[item.phoneticSymbol].reps} </span> :
                                        <span className="text-sm font-black">0</span>}
                                </div> : <div className="inline  text-gray-500">
                                    <span className="text-xs opacity-50">💪 </span>
                                    <span className="text-sm font-black">0</span>
                                </div>
                        }
                    </div>
                </div>
            </div>

            
        </Link>);

}

export default Phonetics;