import React, { useEffect, useState } from "react";
import { generateRandomArray } from './utils/utils';
import Visualizer from "./visualizer";

export default function App () {
    let [array, setArray] = useState([]);
    let [length, setLength] = useState(10);
    let [isSorted, setIsSorted] = useState(false);
    let [doSort, setDoSort] = useState(false);
    const sortMethods = ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Quick Sort', 'Merge Sort'];

    const generateArray = () => {
        setArray(generateRandomArray(length));
    }

    const changeLength = (e) => {
        setLength(parseInt(e.target.value));
        reset();
    }

    const reset = () => {
        generateArray();
        setIsSorted(false);
        setDoSort(false);
    }

    const startSorting = () => {
        setDoSort(true);
        setIsSorted(true);
    }

    useEffect(() => {
        generateArray();
    }, []);

    return (<div className="container">
        <header>
            <h3>Algorithm Visualizer</h3>
        </header>
        <main>
            
            <div className="row">
                <div className="col">
                    <h6>Current Array length: {length}</h6>
                    <input type="range" min="0" max="100" defaultValue={length} onChange={changeLength} /><br />
                    <button className="button" onClick={reset}>generate new Array</button><br />
                </div>
                <div className="col">
                    <pre>{JSON.stringify(array)}</pre><br />
                    <button disabled={isSorted} className="button" onClick={startSorting}>Sort</button>
                </div>
            </div>
            <div className="sort-methods">
                {sortMethods.map((method, index) => (
                    <div key={index} className="sort-method">
                        <h4>{method}</h4>
                        <Visualizer array={array} method={method} doSort={doSort} />
                    </div>
                ))}
            </div>
        </main>
        <footer></footer>
    </div>)
}