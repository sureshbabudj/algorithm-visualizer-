import React, { useEffect, useState } from "react";
import Bar from "./bar";
import { bubbleSort, mergeSort, selectionSort, quickSort, insertionSort } from "./utils/alg";

export default function Visualizer({array, method, doSort}) {
    let [arr, setArr] = useState([]);
    const methodName = method.toLowerCase().split(' ')[0];

    const sort = () => {
        // eslint-disable-next-line default-case
        switch (methodName) {
            case 'bubble':
                bubbleSort(arr, setArr);
                break;
            case 'merge':
                mergeSort(arr, setArr);
                break;
            case 'quick':
                quickSort(arr, setArr);
                break;
            case 'selection':
                selectionSort(arr, setArr);
                break;
            case 'insertion':
                insertionSort(arr, setArr);
                break;
        }
    }

    useEffect(() => {
        setArr([...array]);
    }, [array]);

    useEffect(() => {
        if (doSort) {
            sort();
        }
    }, [doSort])

    return (<div className={`visualizer ${methodName} ${doSort ? 'sorted' : ''}`}>
        {arr.map((value, index) => <Bar value={value} length={arr.length} key={index} />)}
    </div>)
}
