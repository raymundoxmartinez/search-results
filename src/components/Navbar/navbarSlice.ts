import { createSlice } from '@reduxjs/toolkit'

export interface NavbarState {
    filters: Record<string, any>
}

const navbarState: NavbarState = {
    filters: {
        'G': false,
        'PG': false,
        'PG-13': false,
        'R': false
    },
}

const addFilters = (state: NavbarState, action: any) => {
    debugger
    state.filters = { ...state.filters, ...action.payload }
}
const removeFilters = (state: NavbarState) => {
    state.filters = navbarState.filters
}

const navbar = createSlice({
    name: 'navbar',
    initialState: navbarState,
    reducers: {
        handleAddFilters: addFilters,
        handleRemoveFilters: removeFilters
    }
})

export const {
    handleAddFilters,
    handleRemoveFilters,
} = navbar.actions

export default navbar.reducer
