import React, { useReducer } from 'react'

//TODO add types

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext({})
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue)

        const boundActions: Record<string, Function> = {}
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }
        return (
            <Context.Provider value={{}}>
                {children}
            </Context.Provider>
        )
    }
    return { Context, Provider }
}