import { React, useState, useEffect } from "react";
// import { Item } from './Item';
export function ContainerSearch({ query }) {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch("ejson.json").then(res => res.json())
            .then(data => setList(data))
    }, [])
    const arr = list.filter((data) => data.gender === query);
    const ar = arr.length === 0 ? list : arr;
    console.log(arr)
    console.log(query)
    return (
        <ul>data
            {ar.map((listItem) => (
                <li key={listItem.code}>{listItem.code}</li>
            ))
            }
        </ul>
    )
}
