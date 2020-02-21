import React from 'react'
import ItemCard from '../ItemCard'
import useStyles from './useStyles'

const List = ({ items, isGridViewOn }: any) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {items.map((item: any) => {
                return <ItemCard key={item.id} item={item} isGridViewOn={isGridViewOn} />
            })}
        </div>
    )
}

export default List