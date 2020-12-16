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
                <div className={`grid grid-cols-${columnCount} gap-2`}>
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
    return (
        <Link to={"/" + item.phoneticSymbol}>
            <div className={"h-full text-center shadow-md  " + color}>
                <div className="text-4xl">{item.phoneticSymbol}</div>
                <div className="text-md lowercase text-gray-500">{item.samples ?
                    item.samples.map((s, i) => {
                        return (<span key={i}>{s}{i < item.samples.length && ", "}</span>);
                    })
                    : <span></span>}
                </div>
            </div>
        </Link>);

}

export default Phonetics;