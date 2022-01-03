import React, { useEffect, useState } from "react";

export default function Bar({value, length}) {
    let [cssClass, setCssClass] = useState('bar');

    const highlight = (a) => {
        setCssClass(a ? 'bar highlight' : 'bar');
    }

    useEffect(() => {
        highlight(true);
        let interval = setInterval(() => {
            highlight(false)
        }, 1)
        return () => clearInterval(interval);
    }, [value])
    return <div className={cssClass} style={{ height: `${(value / length) * 10}rem` }}></div>
}