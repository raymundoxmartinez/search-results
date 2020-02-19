import React from 'react'
import useStyles from './useStyles'
import { LayoutProps } from './types'
import Navbar from '../Navbar'

const Layout = ({ children }: LayoutProps) => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Navbar />
            <main className={classes.childrenContainer}>
                {children}
            </main>
        </div>
    )
}

export default Layout
