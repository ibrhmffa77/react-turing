import React from 'react'
import './renderList.scss'
import Delete from '../Delete'

export default function RenderList({ data, removeList }) {
    return (
        <ul>
            {data.map((item, index) => (
                <li key={index}> {item} <Delete index={index} removeList={removeList} /> </li>

            ))}
        </ul>
    )
}
