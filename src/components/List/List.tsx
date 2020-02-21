import React from 'react'
import ItemCard from '../ItemCard'

const List = ({ items }: any) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {items.map((item: any) => {
                return <ItemCard key={item.id} item={item} />
            })}
        </div>
    )
}

export default List